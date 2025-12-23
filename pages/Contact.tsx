
import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckSquare, Square, Zap, CheckCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const industries = [
    "Real Estate",
    "Healthcare",
    "Legal",
    "SaaS / Tech",
    "E-commerce",
    "Agency / Consulting",
    "Education",
    "Corporate / Enterprise",
    "Local Service Business",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert("Please acknowledge the terms and policies before continuing.");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Generate pre-filled email mailto link
    const subject = encodeURIComponent(`INQUIRY: ${data.businessName} - AI Solution Strategy`);
    const body = encodeURIComponent(
`NEW BUSINESS INQUIRY

Contact Name: ${data.fullName}
Email: ${data.email}
Business Name: ${data.businessName}
Industry: ${data.industry}

AI Goals & Objectives:
${data.goals}

---
Submitted via Faceless Frames AI Solutions Inquiry Hub`
    );

    const mailtoLink = `mailto:facelessframesstudios@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email app
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
  };

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="lg:sticky lg:top-32">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 luxury-text leading-tight">Start the <br /> <span className="text-violet-500">Conversation</span></h1>
          <p className="text-gray-400 text-xl mb-12 font-light leading-relaxed">
            Reach out directly for partnership inquiries, custom quotes, or technical questions about our autonomous systems.
          </p>
          
          <div className="space-y-10">
            <div className="flex items-center space-x-6 group">
              <div className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Inquiry Hub</p>
                <p className="text-xl font-bold">facelessframesstudios@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 group">
              <div className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Headquarters</p>
                <p className="text-xl font-bold">Atlanta, GA (Remote Global)</p>
              </div>
            </div>
            <div className="p-8 glass rounded-[2.5rem] border border-violet-500/10">
              <h4 className="text-white font-bold mb-4 flex items-center">
                <Zap className="w-4 h-4 text-violet-400 mr-2" /> Next Steps
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Once you submit your inquiry, our team will review your business profile and goals. Expect a personalized response within 12-24 hours to coordinate an implementation strategy.
              </p>
            </div>
          </div>
        </div>

        <div className="glass p-10 md:p-14 rounded-[3rem] border border-white/5 relative min-h-[600px] flex flex-col justify-center">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-600/10 blur-3xl rounded-full"></div>
          
          {isSubmitted ? (
            <div className="text-center animate-fade-in py-12 relative z-10">
              <div className="w-20 h-20 bg-violet-600/20 rounded-full flex items-center justify-center mx-auto mb-8 text-violet-400">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold luxury-text text-white mb-4">Email Client Triggered</h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-sm mx-auto">
                Your business inquiry was successfully formatted. Please hit 'Send' in your mail application to deliver it to our strategy team.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-10 text-violet-400 font-bold hover:text-violet-300 transition-colors"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                  <input name="fullName" required className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="Jordan Sterling" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                  <input name="email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="jordan@company.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Business Name</label>
                  <input name="businessName" required className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="Acme Corp" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Industry</label>
                  <div className="relative">
                    <select 
                      name="industry" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-violet-500 transition-colors appearance-none"
                    >
                      <option value="" disabled selected className="bg-[#0b041a]">Select Industry</option>
                      {industries.map(ind => (
                        <option key={ind} value={ind} className="bg-[#0b041a]">{ind}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Primary Goals for AI</label>
                <textarea name="goals" required rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="What are your high-level objectives for implementing AI in your workflow?"></textarea>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <button 
                  type="button"
                  onClick={() => setAgreedToTerms(!agreedToTerms)}
                  className="mt-1 flex-shrink-0"
                >
                  {agreedToTerms ? <CheckSquare className="w-5 h-5 text-violet-500" /> : <Square className="w-5 h-5 text-gray-500" />}
                </button>
                <label className="text-[11px] text-gray-400 leading-tight cursor-pointer" onClick={() => setAgreedToTerms(!agreedToTerms)}>
                  I acknowledge that paid strategy sessions are non-refundable, and I agree to the <Link to="/terms" className="text-violet-400 hover:underline">Faceless Frames AI Solutions Terms & Policies</Link>.
                </label>
              </div>

              <button 
                type="submit" 
                disabled={!agreedToTerms}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-xl flex items-center justify-center ${agreedToTerms ? 'bg-violet-600 text-white hover:bg-violet-500' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}
              >
                Submit Inquiry <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
