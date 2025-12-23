
import React, { useState } from 'react';
import { Camera, Film, UserCheck, Image as ImageIcon, Music, Sparkles, Send, Mail, CheckCircle } from 'lucide-react';

const Studios = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    {
      title: "AI Commercials",
      icon: <Film className="w-6 h-6" />,
      desc: "Cinematic quality advertisements generated entirely through advanced AI neural networks."
    },
    {
      title: "Talking Avatars",
      icon: <UserCheck className="w-6 h-6" />,
      desc: "Hyper-realistic digital personas capable of delivering your scripts with human-like nuance."
    },
    {
      title: "AI Photoshoots",
      icon: <ImageIcon className="w-6 h-6" />,
      desc: "Professional-grade product and model photography without the need for a physical studio or travel."
    },
    {
      title: "Digital Spokespersons",
      icon: <Sparkles className="w-6 h-6" />,
      desc: "24/7 brand ambassadors for your website and social media channels."
    },
    {
      title: "Music Visuals",
      icon: <Music className="w-6 h-6" />,
      desc: "Audio-reactive and concept-driven visuals for artists and record labels."
    },
    {
      title: "Branded Content",
      icon: <Camera className="w-6 h-6" />,
      desc: "High-engagement short-form video tailored for TikTok, Reels, and YouTube Shorts."
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Generate pre-filled email mailto link
    const subject = encodeURIComponent(`CREATIVE BRIEF: ${data.businessName} - ${data.inquiryType}`);
    const body = encodeURIComponent(
`NEW CREATIVE BRIEF SUBMISSION

Full Name: ${data.fullName}
Business / Brand: ${data.businessName}
Inquiry Type: ${data.inquiryType}

CREATIVE BRIEF:
${data.message}

---
Submitted via Faceless Frames Studio`
    );

    const mailtoLink = `mailto:facelessframesstudios@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email app
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-24 pb-32">
        <div className="absolute top-0 right-0 w-full max-w-4xl aspect-video bg-violet-600/5 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full glass border border-violet-500/30 text-violet-300 text-xs font-bold uppercase tracking-widest mb-8">
            The Creative Frontier
          </div>
          <h1 className="text-5xl md:text-7xl font-bold luxury-text mb-8">
            Faceless Frames <span className="text-violet-500">Studio</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Where artificial intelligence meets cinematic artistry. We produce high-impact visual assets that traditional production houses can't match in speed or imagination.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold luxury-text mb-6">About the Studio</h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Faceless Frames Studio is the dedicated creative production arm of our organization. While our Solutions division builds the brain of your business, the Studio crafts its visual soul.
              </p>
              <p>
                We specialize in leveraging generative AI to create commercials, digital spokespeople, and branded content that transcends the physical limitations of cameras, sets, and travel.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, i) => (
              <div key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all">
                <div className="text-violet-400 mb-4">{service.icon}</div>
                <h4 className="text-white font-bold mb-2">{service.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="create-magic" className="py-24 bg-gradient-to-t from-violet-900/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold luxury-text mb-8">Let's Create <span className="text-violet-500">Magic</span></h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Our studio production is tailored for brands looking to disrupt their industry. Click below to generate your brief and send it directly to our team.
            </p>
            <div className="flex items-center space-x-6 p-6 glass rounded-2xl border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center text-violet-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Production Inquiries</p>
                <p className="text-xl font-bold text-white">facelessframesstudios@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="glass p-10 rounded-[2.5rem] border border-white/5 min-h-[500px] flex flex-col justify-center shadow-2xl">
            {isSubmitted ? (
              <div className="text-center animate-fade-in py-12">
                <div className="w-20 h-20 bg-violet-600/20 rounded-full flex items-center justify-center mx-auto mb-8 text-violet-400">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold luxury-text text-white mb-4">Email App Opened</h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-sm mx-auto">
                  Your creative brief was generated. Please hit 'Send' in your email client to complete the submission.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-10 text-violet-400 font-bold hover:text-violet-300 transition-colors"
                >
                  Generate another brief
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                    <input name="fullName" required className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-violet-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Business Name</label>
                    <input name="businessName" required className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-violet-500 transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Inquiry Type</label>
                  <select name="inquiryType" className="w-full bg-[#0b041a] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-violet-500 transition-colors appearance-none">
                    <option>AI Commercial</option>
                    <option>Talking Avatar</option>
                    <option>AI Photoshoot</option>
                    <option>Digital Spokesperson</option>
                    <option>Music Visuals</option>
                    <option>Branded Short-form Content</option>
                    <option>Other / Custom Project</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Creative Brief / Vision</label>
                  <textarea name="message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="Describe the style, length, and goal..."></textarea>
                </div>
                <button type="submit" className="w-full py-5 rounded-xl bg-violet-600 text-white font-bold text-lg hover:bg-violet-500 transition-all shadow-xl flex items-center justify-center">
                  Submit Creative Brief <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Studios;
