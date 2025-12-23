
import React from 'react';
import { BookOpen, FileText, Download, PlayCircle, ExternalLink } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      title: "The AI Implementation Playbook",
      category: "Guide",
      description: "A comprehensive roadmap for auditing your internal workflows before automation.",
      type: "PDF Guide",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      title: "Voice Agent Prompt Engineering",
      category: "Technical",
      description: "Sample system instructions for building high-conversion outbound voice agents.",
      type: "Template",
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: "ROI Calculator for AI Bots",
      category: "Tools",
      description: "Excel template to calculate exactly how many human hours you'll save monthly.",
      type: "Sheet",
      icon: <Download className="w-8 h-8" />
    },
    {
      title: "Understanding LLM Parameters",
      category: "Training",
      description: "A video walkthrough of temperature, top-p, and system instruction logic.",
      type: "Video",
      icon: <PlayCircle className="w-8 h-8" />
    }
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 luxury-text">Knowledge <span className="text-violet-500">Center</span></h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">
          Free tools and insights to help you navigate the landscape of autonomous business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resources.map((res, idx) => (
          <div key={idx} className="glass p-10 rounded-[2.5rem] border border-white/5 group hover:border-violet-500/30 transition-all flex items-start space-x-8">
            <div className="p-5 rounded-2xl bg-violet-600/10 text-violet-400 border border-violet-500/20 flex-shrink-0 group-hover:scale-110 transition-transform">
              {res.icon}
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-violet-500">{res.category}</span>
                <span className="text-xs text-gray-500 px-2 py-1 rounded bg-white/5">{res.type}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 luxury-text group-hover:text-white transition-colors">{res.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{res.description}</p>
              <button className="flex items-center text-white font-bold hover:text-violet-400 transition-colors">
                Download Resource <ExternalLink className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
