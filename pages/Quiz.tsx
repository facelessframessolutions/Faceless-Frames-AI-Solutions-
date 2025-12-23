import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, RefreshCcw, Sparkles, Phone, MessageSquare, Briefcase, Zap, ChevronRight } from 'lucide-react';
import { QUIZ_QUESTIONS, SOLUTIONS, PACKAGES } from '../constants';
import { GoogleGenAI } from "@google/genai";

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState("");

  const handleOptionSelect = (value: string, points: Record<string, number>) => {
    const newScores = { ...scores };
    Object.entries(points).forEach(([key, val]) => {
      newScores[key] = (newScores[key] || 0) + val;
    });

    setScores(newScores);
    setAnswers([...answers, value]);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      finishQuiz(newScores, [...answers, value]);
    }
  };

  const finishQuiz = async (finalScores: Record<string, number>, finalAnswers: string[]) => {
    setIsFinished(true);
    setIsAnalyzing(true);
    
    const winningId = Object.keys(finalScores).reduce((a, b) => (finalScores[a] || 0) > (finalScores[b] || 0) ? a : b);
    const topSolution = SOLUTIONS.find(s => s.id === winningId);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `I am an AI consultant for Faceless Frames. A client just finished a quiz. 
        Recommended Solution: ${topSolution?.title}. 
        Client Answers: ${finalAnswers.join(", ")}.
        Write a short, professional, luxury-toned 2-3 sentence explanation of why this solution is perfect for their specific business needs. 
        Focus on efficiency and scaling. Start directly with the explanation.`,
      });
      setAiAnalysis(response.text || "This solution is architected to eliminate your specific bottlenecks while providing the scalable infrastructure needed for your next phase of growth.");
    } catch (e) {
      console.error(e);
      setAiAnalysis("Based on your profile, this autonomous system will provide the highest ROI by automating your most time-intensive communication channels.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setScores({});
    setIsFinished(false);
    setAiAnalysis("");
  };

  if (isFinished) {
    const winningId = Object.keys(scores).reduce((a, b) => (scores[a] || 0) > (scores[b] || 0) ? a : b);
    const recommendedSolution = SOLUTIONS.find(s => s.id === winningId) || SOLUTIONS[0];
    
    // Dynamic package recommendation based on budget answer (last question)
    const budgetAnswer = answers[5];
    let recommendedPackage = PACKAGES[1]; // Growth as default
    if (budgetAnswer === 'budget') recommendedPackage = PACKAGES[0];
    if (budgetAnswer === 'high') recommendedPackage = PACKAGES[2];

    return (
      <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 animate-fade-in">
        <div className="text-center mb-12">
          <div className="inline-block p-4 rounded-full bg-violet-600/20 text-violet-400 mb-6 border border-violet-500/30">
            <Sparkles className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 luxury-text">Your AI Roadmap</h2>
          <p className="text-gray-400 text-lg">Personalized strategy for Faceless Frames integration.</p>
        </div>

        <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-violet-500/20 mb-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <span className="text-9xl">{recommendedSolution.icon}</span>
          </div>
          <div className="relative z-10">
            <h3 className="text-violet-400 font-bold uppercase tracking-widest text-sm mb-4">Recommended Solution</h3>
            <h4 className="text-4xl font-bold mb-6 luxury-text">{recommendedSolution.title}</h4>
            
            <div className="bg-white/5 p-6 rounded-3xl mb-8 border border-white/5 shadow-inner">
              <p className="text-white italic leading-relaxed">
                {isAnalyzing ? (
                  <span className="flex items-center">
                    <RefreshCcw className="w-4 h-4 mr-3 animate-spin" /> 
                    Our AI Consultant is analyzing your results...
                  </span>
                ) : aiAnalysis}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-4">
                <h5 className="font-bold text-lg text-white">Suggested Tier:</h5>
                <div className="p-6 rounded-[2rem] bg-violet-900/30 border border-violet-500/30">
                  <div className="font-bold text-2xl mb-1 luxury-text">{recommendedPackage.name}</div>
                  <div className="text-gray-400 text-xs mb-3">{recommendedPackage.description}</div>
                  <div className="text-violet-400 font-bold text-lg">{recommendedPackage.price}</div>
                </div>
              </div>
              <div className="space-y-4">
                <h5 className="font-bold text-lg text-white">Impact Areas:</h5>
                <ul className="text-gray-400 space-y-3">
                  {recommendedSolution.greatFor.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book" className="flex-1 px-8 py-5 rounded-full bg-violet-600 text-white font-bold text-center hover:bg-violet-500 transition-all shadow-lg lavender-glow flex items-center justify-center">
                Book Setup Call <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/packages" className="flex-1 px-8 py-5 rounded-full glass text-white font-bold text-center hover:bg-white/10 transition-all border border-white/10">
                Request Quote
              </Link>
            </div>
          </div>
        </div>

        <button onClick={resetQuiz} className="mx-auto flex items-center text-gray-500 hover:text-white transition-colors">
          <RefreshCcw className="w-4 h-4 mr-2" /> Start Over
        </button>
      </div>
    );
  }

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="py-24 max-w-3xl mx-auto px-4 sm:px-6">
      <div className="mb-12">
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="text-violet-400 font-bold text-sm uppercase tracking-widest">Discovery Phase</span>
            <h2 className="text-3xl font-bold luxury-text mt-2">Find Your Solution</h2>
          </div>
          <span className="text-gray-500 font-medium">{currentStep + 1} of {QUIZ_QUESTIONS.length}</span>
        </div>
        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-violet-600 transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl animate-fade-in-up">
        <h3 className="text-2xl md:text-3xl font-bold mb-10 leading-tight luxury-text">
          {QUIZ_QUESTIONS[currentStep].text}
        </h3>
        <div className="space-y-4">
          {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionSelect(option.value, option.points)}
              className="w-full p-6 text-left rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-violet-600/10 hover:border-violet-500/40 transition-all group flex items-center justify-between"
            >
              <span className="text-lg text-gray-300 group-hover:text-white transition-colors">{option.label}</span>
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-violet-500 transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;