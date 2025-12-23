import React, { useState } from 'react';
import { PACKAGES } from '../constants';
import { Check, X, Zap, CheckSquare, Square } from 'lucide-react';
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
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 luxury-text">Investment <span className="text-violet-500">Packages</span></h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Bespoke implementation tiers designed to scale as your autonomous infrastructure matures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {PACKAGES.map((pkg) => (
          <div key={pkg.name} className={`relative flex flex-col p-10 rounded-[3rem] border transition-all duration-500 group hover:-translate-y-4 ${pkg.highlighted ? 'glass border-violet-500 bg-violet-900/10 shadow-2xl lavender-glow' : 'bg-transparent border-white/5 hover:border-white/20'}`}>
            {pkg.highlighted && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-violet-600 text-[10px] font-bold uppercase tracking-widest text-white shadow-xl flex items-center">
                <Zap className="w-3 h-3 mr-2" /> Most Popular
              </div>
            )}
            <div className="mb-10">
              <h3 className="text-3xl font-bold mb-3 luxury-text">{pkg.name}</h3>
              <div className="flex items-baseline space-x-1">
                <span className="text-4xl font-bold text-white tracking-tighter">{pkg.price}</span>
              </div>
              <p className="text-gray-500 mt-6 text-sm leading-relaxed font-light">{pkg.description}</p>
            </div>
            <ul className="space-y-5 mb-12 flex-grow">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-gray-300 text-sm">
                  <div className="mt-1 mr-4 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-violet-600/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-violet-400" />
                    </div>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleOpenForm(pkg.name)}
              className={`w-full py-5 rounded-[1.5rem] font-bold transition-all transform active:scale-95 ${pkg.highlighted ? 'bg-violet-600 text-white hover:bg-violet-500 shadow-xl' : 'glass border border-white/10 hover:bg-white/10 text-white'}`}
            >
              {pkg.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="glass p-12 rounded-[3rem] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/5 blur-[80px] rounded-full"></div>
        <div className="relative z-10 text-center md:text-left">
          <h3 className="text-3xl font-bold mb-3 luxury-text">Custom Enterprise Architecture</h3>
          <p className="text-gray-400 max-w-xl">For organizations requiring fully bespoke AI integration, white-labeled solutions, and on-site engineering support.</p>
        </div>
        <button 
          onClick={() => handleOpenForm("Enterprise")}
          className="relative z-10 px-10 py-5 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all shadow-xl whitespace-nowrap"
        >
          Inquire About Enterprise
        </button>
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