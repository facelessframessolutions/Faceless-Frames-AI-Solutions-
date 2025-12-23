import React, { useState } from 'react';
import { Clock, ShieldCheck, Sparkles, ExternalLink, ChevronDown, ChevronUp, Monitor, Zap, PhoneCall, Film } from 'lucide-react';
import { Link } from 'react-router-dom';

const Booking = () => {
  const [isSecondaryExpanded, setIsSecondaryExpanded] = useState(false);

  const secondaryCalls = {
    ops: [
      {
        title: "AI Voice Agent / Receptionist Consult",
        desc: "For businesses that want AI to answer calls, book appointments, and handle FAQs.",
        link: "https://calendly.com/facelessframesstudios/ai-voice-agent-receptionist-consult-30-min"
      },
      {
        title: "AI Automation & Workflow Consult",
        desc: "For owners ready to reduce manual work and automate follow-ups, leads, and systems.",
        link: "https://calendly.com/facelessframesstudios/ai-automation-workflow-consult-30-min"
      }
    ],
    creative: [
      {
        title: "Talking Avatar / AI Commercial Consult",
        desc: "Explore AI avatars and video content without filming or being on camera.",
        link: "https://calendly.com/facelessframesstudios/talking-avatar-ai-commercial-consult-30-min"
      },
      {
        title: "Faceless Frames Studios – Creative Inquiry",
        desc: "For AI visuals, commercials, digital storytelling, and branded content.",
        link: "https://calendly.com/facelessframesstudios/faceless-frames-studios-creative-inquiry-20-min"
      }
    ]
  };

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Context and Trust */}
        <div className="lg:sticky lg:top-32">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 luxury-text leading-tight">
            Book Your <br /> <span className="text-violet-500">Discovery Call</span>
          </h1>
          <p className="text-gray-400 text-xl mb-12 font-light leading-relaxed">
            A strategic deep-dive to audit your current workflows and identify high-leverage AI opportunities. No sales pitch, just architecture.
          </p>
          
          <div className="space-y-10">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-2xl bg-violet-900/30 flex items-center justify-center mr-6 border border-violet-500/20">
                <ShieldCheck className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1 text-white">Non-Disclosure Guaranteed</h4>
                <p className="text-gray-500">Your proprietary workflows and data are handled with extreme confidentiality.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-2xl bg-violet-900/30 flex items-center justify-center mr-6 border border-violet-500/20">
                <Clock className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1 text-white">Focused ROI Analysis</h4>
                <p className="text-gray-400">We respect your time. Efficient, high-signal, zero fluff session.</p>
              </div>
            </div>
            <div className="p-8 glass rounded-3xl border border-violet-500/10">
              <h4 className="text-white font-bold mb-2">Technical Strategy</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our calls are led by engineers, not salespeople. We focus on the feasibility and ROI of your AI implementation roadmap.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Scheduling Area */}
        <div className="space-y-8">
          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-violet-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
              <Sparkles className="w-20 h-20 text-violet-400" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-600 text-white text-[10px] font-bold uppercase tracking-widest mb-6 shadow-lg">
                Phase 1: Scheduling
              </div>
              
              <h3 className="text-3xl font-bold luxury-text mb-4">20-Min AI Discovery Call</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Connect with our lead architect to map out your implementation strategy.
              </p>
              
              <div className="space-y-6">
                <a 
                  href="https://calendly.com/facelessframesstudios/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-5 rounded-2xl bg-violet-600 text-white font-bold text-lg hover:bg-violet-500 transition-all shadow-xl lavender-glow flex items-center justify-center group"
                >
                  Open Scheduler 
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-[11px] text-gray-400 italic">
                  By clicking above, you acknowledge that paid calls are non-refundable and you agree to the <Link to="/policies" className="text-violet-400 underline hover:text-violet-300">Faceless Frames AI Solutions Policies & Terms</Link>.
                </div>
              </div>
              
              <p className="text-center text-xs text-gray-500 mt-6 font-medium italic">
                Free for qualifying businesses • 20 Minutes
              </p>
            </div>
          </div>

          <div className="glass p-8 rounded-[2rem] border border-white/5 shadow-xl">
            <div className="mb-6">
              <h4 className="text-lg font-bold luxury-text text-white">Advanced Call Options</h4>
            </div>

            <button 
              onClick={() => setIsSecondaryExpanded(!isSecondaryExpanded)}
              className="w-full flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              <span className="text-sm font-bold text-gray-300">View specialized consults</span>
              {isSecondaryExpanded ? <ChevronUp className="w-5 h-5 text-violet-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
            </button>

            {isSecondaryExpanded && (
              <div className="mt-8 space-y-10 animate-fade-in overflow-hidden transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 pb-2 border-b border-white/5">
                    <Monitor className="w-4 h-4 text-violet-500" />
                    <h5 className="text-xs font-bold uppercase tracking-widest text-gray-400">Operations</h5>
                  </div>
                  {secondaryCalls.ops.map((call, idx) => (
                    <div key={idx} className="space-y-2">
                      <h6 className="font-bold text-white text-sm">{call.title}</h6>
                      <p className="text-xs text-gray-500">{call.desc}</p>
                      <a href={call.link} target="_blank" rel="noopener noreferrer" className="inline-block text-violet-400 text-xs font-bold hover:underline">Book Now</a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-2 pb-2 border-b border-white/5">
                    <Film className="w-4 h-4 text-violet-500" />
                    <h5 className="text-xs font-bold uppercase tracking-widest text-gray-400">Creative</h5>
                  </div>
                  {secondaryCalls.creative.map((call, idx) => (
                    <div key={idx} className="space-y-2">
                      <h6 className="font-bold text-white text-sm">{call.title}</h6>
                      <p className="text-xs text-gray-500">{call.desc}</p>
                      <a href={call.link} target="_blank" rel="noopener noreferrer" className="inline-block text-violet-400 text-xs font-bold hover:underline">Book Now</a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;