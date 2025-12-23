
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SOLUTIONS } from '../constants';
import { ChevronDown, ChevronUp, CheckCircle2, ArrowRight } from 'lucide-react';

const Solutions = () => {
  const [expandedId, setExpandedId] = useState<string | null>(SOLUTIONS[0].id);

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 luxury-text">Bespoke <span className="text-violet-500">AI</span> Systems</h1>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto font-light">
          Deep dives into our core technology offerings. Explore how we solve specific bottlenecks through modular AI implementation.
        </p>
      </div>

      <div className="space-y-6">
        {SOLUTIONS.map((sol) => (
          <div key={sol.id} className={`rounded-[2rem] overflow-hidden border border-white/5 transition-all duration-500 ${expandedId === sol.id ? 'glass bg-white/[0.02]' : 'bg-transparent'}`}>
            <button
              onClick={() => setExpandedId(expandedId === sol.id ? null : sol.id)}
              className="w-full flex items-center justify-between p-8 text-left hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center space-x-6">
                <span className="text-4xl grayscale group-hover:grayscale-0">{sol.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold luxury-text">{sol.title}</h3>
                  <p className="text-gray-500 mt-1">{sol.description}</p>
                </div>
              </div>
              <div className={`p-2 rounded-full border border-white/10 transition-transform ${expandedId === sol.id ? 'rotate-180 bg-violet-600/20' : ''}`}>
                <ChevronDown className="w-6 h-6" />
              </div>
            </button>

            {expandedId === sol.id && (
              <div className="p-8 md:p-12 pt-0 border-t border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-violet-400 font-bold text-sm uppercase tracking-widest mb-4">What it is</h4>
                    <p className="text-gray-300 text-lg leading-relaxed">{sol.whatItIs}</p>
                  </div>
                  <div>
                    <h4 className="text-violet-400 font-bold text-sm uppercase tracking-widest mb-4">How it helps</h4>
                    <p className="text-gray-300 text-lg leading-relaxed">{sol.howItHelps}</p>
                  </div>
                  <div className="pt-6">
                    <Link to="/book" className="inline-flex items-center px-8 py-4 rounded-full bg-violet-600 text-white font-bold hover:bg-violet-500 transition-all">
                      Get Started with {sol.title} <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>

                <div className="space-y-8 bg-black/20 p-8 rounded-3xl border border-white/5">
                  <div>
                    <h4 className="text-white font-bold text-lg mb-4">Great for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {sol.greatFor.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-violet-900/30 text-violet-300 text-sm border border-violet-500/20">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-4">Example use cases:</h4>
                    <ul className="space-y-3">
                      {sol.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start text-gray-400">
                          <CheckCircle2 className="w-5 h-5 text-violet-500 mr-3 mt-1 flex-shrink-0" />
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
