
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import { SOLUTIONS } from '../constants';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-40 md:pb-52">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl aspect-square bg-violet-900/20 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 animate-fade-in">
             <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.4em] text-violet-400/80 mb-2">Faceless Frames AI Solutions</h2>
             <div className="h-px w-24 bg-violet-600/30 mx-auto"></div>
          </div>
          
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-violet-500/30 text-violet-300 text-sm font-medium mb-8 animate-fade-in">
            <Zap className="w-4 h-4 mr-2" /> The Future of Efficiency is Faceless
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 luxury-text tracking-tighter">
            Architecting <span className="text-violet-500">Intelligent</span> <br />
            Business Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Luxury AI consulting for forward-thinking enterprises. We don't just implement tools; we build autonomous systems that handle your scale seamlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link to="/quiz" className="w-full sm:w-auto px-10 py-5 rounded-full bg-violet-600 text-white font-bold text-lg hover:bg-violet-500 transition-all transform hover:scale-105 shadow-xl lavender-glow flex items-center justify-center">
              Find My AI Solution <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/book" className="w-full sm:w-auto px-10 py-5 rounded-full glass text-white font-bold text-lg hover:bg-white/10 transition-all border border-white/20">
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-[#05010a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 luxury-text">The Suite of Excellence</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Our bespoke AI products cover every facet of digital business interaction and operation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLUTIONS.map((sol) => (
              <Link key={sol.id} to="/solutions" className="group glass p-8 rounded-3xl transition-all hover:bg-white/5 border border-white/5 hover:border-violet-500/30">
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110">{sol.icon}</div>
                <h3 className="text-2xl font-bold mb-4 luxury-text group-hover:text-violet-400 transition-colors">{sol.title}</h3>
                <p className="text-gray-400 leading-relaxed">{sol.description}</p>
                <div className="mt-8 flex items-center text-violet-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 uppercase tracking-[0.2em] text-violet-400/80">Industries Served</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
            {['Real Estate', 'Healthcare', 'Legal', 'SaaS', 'E-commerce', 'Agency'].map((industry) => (
              <span key={industry} className="text-xl md:text-3xl font-bold luxury-text grayscale hover:grayscale-0 hover:opacity-100 cursor-default transition-all">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Builder */}
      <section className="py-24 bg-gradient-to-b from-transparent to-violet-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 blur-[80px] rounded-full"></div>
             <h2 className="text-4xl md:text-5xl font-bold mb-8 luxury-text">Ready to offload your <br /> inefficiency?</h2>
             <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
               Join dozens of high-growth companies using our "Faceless" infrastructure to double their capacity without hiring a single soul.
             </p>
             <Link to="/book" className="inline-flex items-center px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-105">
               Start Your Implementation
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
