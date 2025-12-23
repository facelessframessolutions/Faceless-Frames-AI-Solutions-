import React from 'react';
import { Shield, Target, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <EyeOff className="w-6 h-6" />,
      title: "The Faceless Philosophy",
      description: "We believe the best systems are the ones you never see. Our goal is to create invisible infrastructure that operates with perfect precision."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Architecture",
      description: "We don't just plug in tools; we architect bespoke digital nervous systems tailored to the unique biology of your business."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Uncompromising Privacy",
      description: "In the age of AI, data is the new gold. We prioritize high-level security and confidentiality in every implementation."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl aspect-square bg-violet-600/5 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold luxury-text mb-8">
            Behind the <span className="text-violet-500">Frames</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Faceless Frames AI Solutions was born from a simple observation: Modern businesses are drowning in digital noise while missing the signal of true efficiency.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group/container">
            <div className="glass aspect-square rounded-[3rem] border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl relative">
               <img 
                 src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=1000" 
                 alt="Faceless Frames Executive Visionary" 
                 className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-700 hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0b041a] via-transparent to-transparent"></div>
               
               <div className="absolute bottom-0 left-0 p-10 z-10 pointer-events-none">
                 <h3 className="text-2xl font-bold luxury-text text-white italic mb-2">"Efficiency is the ultimate luxury."</h3>
                 <p className="text-violet-400 text-sm font-bold tracking-widest uppercase">The Faceless Standard</p>
               </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-violet-600/10 blur-[60px] rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-violet-500/30 rounded-tl-[3rem]"></div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold luxury-text mb-8">Why "Faceless"?</h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                The name "Faceless Frames" represents our commitment to the <span className="text-white font-medium">autonomous operation</span>. In a traditional company, every frame of progress is attached to a human face, a human schedule, and human error.
              </p>
              <p>
                We remove the faces—not to remove the humanity, but to remove the <span className="text-violet-400 font-medium">bottlenecks</span>. By creating a "Faceless" infrastructure, we allow founders to step away from the mundane and focus back on the vision that started it all.
              </p>
              <p>
                Whether it's an AI voice agent handling your leads or a talking avatar representing your brand, we provide the frames through which your business scales, silently and perfectly.
              </p>
            </div>
            <div className="mt-10 flex items-center space-x-4">
               <div className="h-px w-12 bg-violet-600"></div>
               <span className="text-sm font-bold uppercase tracking-widest text-gray-500">Established Framework</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-violet-500/20 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-violet-900/20 flex items-center justify-center text-violet-400 mb-8 border border-violet-500/10 group-hover:bg-violet-600 group-hover:text-white transition-all">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 luxury-text">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-violet-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass p-16 md:p-24 rounded-[4rem] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-violet-600/5 blur-[100px] rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 luxury-text">Mission Statement</h2>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light italic">
              "To empower 1,000 businesses to achieve complete autonomous scale by 2030 through the seamless integration of luxury AI systems."
            </p>
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/book" className="px-10 py-5 rounded-full bg-violet-600 text-white font-bold text-lg hover:bg-violet-500 transition-all shadow-xl lavender-glow">
                Join the Future
              </Link>
              <Link to="/solutions" className="px-10 py-5 rounded-full glass border border-white/10 text-white font-bold text-lg hover:bg-white/5 transition-all">
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;