import React, { useState } from 'react';
import { PACKAGES } from '../constants';
import { Check, X, Zap, CheckSquare, Square, FileText, Target, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const Packages = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleOpenForm = (pkgName: string) => {
    setSelectedPackage(pkgName);
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!agreedToTerms) { 
      alert("Please acknowledge the policies before submitting."); 
      return; 
    }
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const subject = encodeURIComponent(`REQUEST A QUOTE – Faceless Frames Studios`);
    const body = encodeURIComponent(
`Name: ${data.fullName}
Business / Brand: ${data.businessName}
Business Domain (optional): ${data.businessDomain || 'N/A'}
Email: ${data.email}
Project Type: ${selectedPackage}
Project Description / Message: ${data.message}
Estimated Timeline: ${data.timeline}
Estimated Budget (optional): ${data.budget || 'N/A'}

Submitted via: Request a Quote`
    );

    const mailtoLink = `mailto:facelessframesstudios@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email app
    window.location.href = mailtoLink;
    
    setShowForm(false);
    alert("Inquiry generated. Please send the pre-filled email in your mail application.");
  };

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 luxury-text">Investment <span className="text-violet-500">Packages</span></h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Flexible AI solutions designed to grow with your business. Start small and scale intelligently.
        </p>
      </div>

      {/* AI Consulting Fee Section */}
      <div className="mb-20">
        <div className="glass p-8 md:p-12 rounded-[3rem] border border-violet-500/30 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-violet-600/20 text-violet-400 text-[10px] font-bold uppercase tracking-widest mb-6 border border-violet-500/20">
                Required for Custom Builds
              </div>
              <h2 className="text-3xl md:text-4xl font-bold luxury-text mb-4 text-white">AI Consulting & Strategy Fee</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-900/30 flex items-center justify-center shrink-0 border border-violet-500/10">
                    <Target className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Needs Assessment</p>
                    <p className="text-gray-500 text-xs mt-1">Audit of current workflows and tech stack.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-900/30 flex items-center justify-center shrink-0 border border-violet-500/10">
                    <Map className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Custom Roadmap</p>
                    <p className="text-gray-500 text-xs mt-1">Personalized strategy for implementation.</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-8 italic">
                * This fee is required for all custom packages and may be applied toward your build if you move forward.
              </p>
            </div>
            <div className="lg:col-span-4 text-center lg:text-right border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
              <div className="text-5xl font-bold text-white mb-2">$97</div>
              <div className="text-violet-400 font-bold uppercase tracking-widest text-xs mb-8">One-Time Fee</div>
              <Link to="/book" className="inline-block w-full px-8 py-4 rounded-2xl bg-white text-black font-bold hover:bg-gray-200 transition-all transform hover:scale-105 shadow-xl">
                Book Strategy Session
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
        {PACKAGES.map((pkg) => (
          <div key={pkg.name} className={`relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500 group hover:-translate-y-2 ${pkg.highlighted ? 'glass border-violet-500/50 bg-violet-900/10 shadow-2xl lavender-glow' : 'bg-transparent border-white/5 hover:border-white/20'}`}>
            {pkg.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-violet-600 text-[9px] font-bold uppercase tracking-widest text-white shadow-xl flex items-center">
                <Zap className="w-3 h-3 mr-1.5" /> Most Popular
              </div>
            )}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 luxury-text">{pkg.name}</h3>
              <div className="flex items-baseline space-x-1 mb-4">
                <span className="text-3xl font-bold text-white tracking-tighter">{pkg.price}</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed font-light line-clamp-2">{pkg.description}</p>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-gray-300 text-xs">
                  <div className="mt-0.5 mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 text-violet-400" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleOpenForm(pkg.name)}
              className={`w-full py-4 rounded-2xl font-bold text-sm transition-all transform active:scale-95 ${pkg.highlighted ? 'bg-violet-600 text-white hover:bg-violet-500 shadow-xl' : 'glass border border-white/10 hover:bg-white/10 text-white'}`}
            >
              {pkg.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="text-center text-gray-500 text-sm max-w-2xl mx-auto italic font-light">
        Final pricing depends on scope and customization. Timelines are provided before work begins. All paid calls and setup fees are non-refundable.
      </div>

      {/* Intake Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowForm(false)}></div>
          <div className="relative glass p-10 md:p-14 rounded-[3.5rem] border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up shadow-2xl">
            <button onClick={() => setShowForm(false)} className="absolute top-8 right-8 p-3 rounded-full hover:bg-white/10 transition-colors">
              <X className="w-6 h-6 text-gray-400" />
            </button>
            <h2 className="text-4xl font-bold mb-3 luxury-text">Request Quote</h2>
            <p className="text-gray-400 mb-10 text-lg">Initiating configuration for the <span className="text-white font-bold">{selectedPackage}</span> package.</p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                  <input name="fullName" required className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-violet-500 outline-none transition-all" placeholder="Sterling Cooper" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                  <input name="email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-violet-500 outline-none transition-all" placeholder="sterling@cooper.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Business / Brand Name</label>
                  <input name="businessName" required className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-violet-500 outline-none transition-all" placeholder="Agency One" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Business Domain (Optional)</label>
                  <input name="businessDomain" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-violet-500 outline-none transition-all" placeholder="https://yourbrand.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Estimated Timeline</label>
                  <input name="timeline" required className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-violet-500 outline-none transition-all" placeholder="E.g. 2-4 Weeks" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Estimated Budget (Optional)</label>
                  <input name="budget" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-violet-500 outline-none transition-all" placeholder="E.g. $5,000+" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Project Description / Message</label>
                <textarea name="message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-violet-500 outline-none transition-all" placeholder="Describe the core workflow or creative vision you wish to automate..."></textarea>
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
                  I acknowledge that paid calls are non-refundable and I agree to the <Link to="/policies" className="text-violet-400 underline">Faceless Frames AI Solutions Policies & Terms</Link>.
                </label>
              </div>

              <button 
                type="submit" 
                disabled={!agreedToTerms}
                className={`w-full py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all ${agreedToTerms ? 'bg-violet-600 text-white hover:bg-violet-500' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}
              >
                Send Configuration Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Packages;