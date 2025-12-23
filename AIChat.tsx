import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, Loader2, User } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { Link, useNavigate } from 'react-router-dom';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: "Hello! I'm the Faceless Frames AI Assistant. How can I help you navigate our AI solutions today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    const lowerMessage = userMessage.toLowerCase();
    
    // Enhanced intent detection for booking
    const isBookingIntent = (
      lowerMessage.includes('book') || 
      lowerMessage.includes('schedule') || 
      lowerMessage.includes('appointment') ||
      lowerMessage.includes('discovery call') ||
      lowerMessage.includes('talk to someone') ||
      lowerMessage.includes('get started') ||
      lowerMessage.includes('consultant') ||
      lowerMessage.includes('speak with') ||
      lowerMessage.includes('moving forward')
    );

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...messages.map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }]
          })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: `You are the Faceless Frames AI Assistant for Faceless Frames AI Solutions.
Your role is to answer general, beginner-friendly questions about the company, services, process, and policies.
You are available 24/7 and should respond in a professional, warm, and simple tone.

CRITICAL BOOKING PROTOCOL:
If the user expresses interest in booking a Discovery Call, scheduling a call, speaking with a consultant, or moving forward (including "book a call", "talk to someone", "get started", etc.):
1. Acknowledge the request positively (e.g., "Great choice.", "That’s the best next step.").
2. Immediately guide the user to the “Book a Call” area.
3. Keep it short: provide confirmation, instruction, and direction.
4. DO NOT provide detailed information or strategy once this intent is clear.
5. Example response: "Great choice. That’s the best next step. I’ll guide you there now so you can book your 20-Minute AI Discovery Call."

GENERAL GUIDELINES:
- Explain what we do, process, policies, and FAQ.
- DO NOT provide custom AI strategies, quotes, or guarantees.
- Replace consultation with a recommendation to book a Discovery Call.
- Contact: facelessframesstudios@gmail.com
- Maintain luxury brand consistency.`,
          temperature: 0.7,
        }
      });

      const assistantText = response.text || "I'm sorry, I'm having trouble connecting right now. Please try again or book a call for direct assistance.";
      setMessages(prev => [...prev, { role: 'assistant', text: assistantText }]);

      // If booking intent was detected, navigate after a short delay
      if (isBookingIntent) {
        setTimeout(() => {
          setIsOpen(false);
          navigate('/book');
        }, 2000);
      }

    } catch (error) {
      console.error("AI Assistant Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', text: "I encountered an error. Please contact facelessframesstudios@gmail.com for support or try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] glass rounded-[2rem] border border-violet-500/30 flex flex-col overflow-hidden shadow-2xl animate-fade-in-up">
          {/* Header */}
          <div className="p-6 bg-violet-600/20 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center shadow-lg">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">FF AI Assistant</h3>
                <p className="text-[10px] text-violet-300 uppercase tracking-widest font-bold">Online 24/7</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-violet-600">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-violet-600 text-white rounded-tr-none shadow-lg' 
                    : 'bg-white/5 border border-white/10 text-gray-300 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 text-violet-400 animate-spin" />
                  <span className="text-xs text-gray-500 italic">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-black/20">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className={`absolute right-1 top-1 p-2 rounded-full transition-all ${
                  input.trim() && !isLoading ? 'bg-violet-600 text-white hover:bg-violet-500' : 'text-gray-600'
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-3 flex justify-center">
               <Link to="/book" onClick={() => setIsOpen(false)} className="text-[10px] text-gray-500 hover:text-violet-400 flex items-center transition-colors">
                 <Sparkles className="w-3 h-3 mr-1" /> Need a specialist? Book a Discovery Call
               </Link>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-5 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-white text-black' : 'bg-violet-600 text-white lavender-glow'
        }`}
      >
        {isOpen ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-[#0b041a] rounded-full"></span>
        )}
      </button>
    </div>
  );
};

export default AIChat;