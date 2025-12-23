
import React from 'react';
import { CASE_STUDIES } from '../constants';
import { TrendingUp, Users, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 luxury-text">Proven <span className="text-violet-500">Outcomes</span></h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">
          Real results achieved through custom-built autonomous systems.
        </p>
        <div className="mt-6 inline-block px-4 py-2 rounded-full glass border border-white/5 text-gray-500 text-xs font-bold uppercase tracking-widest">
          * Note: Samples based on common implementation results
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {CASE_STUDIES.map((study, idx) => (
          <div key={idx} className="glass rounded-[3rem] border border-white/5 overflow-hidden flex flex-col lg:flex-row group">
            <div className="lg:w-1/3 p-12 bg-violet-900/10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
              <span className="text-violet-400 font-bold uppercase tracking-widest text-xs mb-4">{study.industry}</span>
              <h3 className="text-3xl font-bold mb-6 luxury-text group-hover:text-violet-400 transition-colors">{study.title}</h3>
              <div className="space-y-6">
                <div className="flex items-center text-white font-bold">
                  <TrendingUp className="w-6 h-6 mr-4 text-emerald-400" />
                  <span className="text-xl">{study.outcome.split(';')[0]}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Clock className="w-6 h-6 mr-4 text-violet-500" />
                  <span>{study.outcome.split(';')[1]}</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3 p-12 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">The Problem (Before)</h4>
                <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10 text-gray-400 leading-relaxed italic">
                  "{study.before}"
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400">The Transformation (After)</h4>
                <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-gray-100 leading-relaxed font-medium">
                  {study.after}
                </div>
              </div>
              <div className="md:col-span-2 pt-6 border-t border-white/5 flex items-center justify-between">
                <p className="text-gray-500 text-sm">Target implementation time: 3 weeks</p>
                <Link to="/book" className="flex items-center text-violet-400 font-bold hover:text-violet-300 transition-colors">
                  Explore similar solution <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
