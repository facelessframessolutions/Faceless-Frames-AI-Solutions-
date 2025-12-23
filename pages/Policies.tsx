import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, ScrollText, CalendarX, FileCheck, Info, HelpCircle, FileText } from 'lucide-react';

const Policies = () => {
  const [openSections, setOpenSections] = useState<string[]>(['terms']);

  const toggleSection = (id: string) => {
    setOpenSections(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const sections = [
    {
      id: 'faq',
      title: 'FAQ',
      icon: <HelpCircle className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-violet-400 mb-2">What is the first step to working with Faceless Frames AI Solutions?</h4>
            <p className="text-gray-300">Clients begin by booking a 20-Minute AI Discovery Call to determine needs, goals, and potential AI solutions.</p>
          </div>
          <div>
            <h4 className="font-bold text-violet-400 mb-2">Do I need prior AI or technical experience?</h4>
            <p className="text-gray-300">No. All services are designed to be beginner-friendly. Guidance is provided throughout the process.</p>
          </div>
          <div>
            <h4 className="font-bold text-violet-400 mb-2">What happens after the Discovery Call?</h4>
            <p className="text-gray-300">If both parties agree to move forward, clients may be directed to a paid AI Strategy & Solutions Call or a done-for-you AI implementation service.</p>
          </div>
          <div>
            <h4 className="font-bold text-violet-400 mb-2">What is included in a paid strategy call?</h4>
            <p className="text-gray-300">Paid strategy calls include a review of business needs, current systems, and recommendations for AI implementation.</p>
          </div>
          <div>
            <h4 className="font-bold text-violet-400 mb-2">Will AI solutions work with my existing tools?</h4>
            <p className="text-gray-300">Where possible, AI solutions are integrated with existing systems. Compatibility is reviewed before implementation.</p>
          </div>
          <div>
            <h4 className="font-bold text-violet-400 mb-2">Are paid calls refundable?</h4>
            <p className="text-gray-300">No. All paid calls are non-refundable.</p>
          </div>
        </div>
      )
    },
    {
      id: 'terms',
      title: 'Terms of Service',
      icon: <ScrollText className="w-5 h-5" />,
      content: (
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <div className="border-b border-white/10 pb-4 mb-4">
            <h4 className="text-white font-bold text-xl mb-1 luxury-text">Terms of Service</h4>
            <p className="text-violet-400 text-sm font-bold tracking-widest uppercase">Faceless Frames AI Solutions</p>
            <p className="text-gray-500 text-xs mt-1">Effective Upon Use</p>
          </div>

          <p className="italic">
            By accessing this app, booking a call, or using any service provided by Faceless Frames AI Solutions, you acknowledge that you have read, understood, and agree to the terms outlined below.
          </p>
          <p className="font-bold text-white">
            If you do not agree to these terms, please do not book a session or use this app.
          </p>

          <div className="space-y-8 mt-8">
            <section>
              <h5 className="text-white font-bold mb-2">1. Services Provided</h5>
              <p>Faceless Frames AI Solutions offers AI consulting, strategy sessions, automation guidance, and implementation support. Services are advisory and implementation-based and do not guarantee specific outcomes or results.</p>
            </section>

            <section>
              <h5 className="text-white font-bold mb-2">2. Discovery Calls</h5>
              <p>Discovery calls are provided at no cost for exploratory and qualification purposes only. No obligation is created by participating in a discovery call.</p>
            </section>

            <section>
              <h5 className="text-white font-bold mb-2">3. Paid Sessions</h5>
              <p>Paid sessions include professional time, preparation, and strategy. All paid calls must be paid in full at the time of booking. <span className="text-violet-400 font-bold">All paid calls are non-refundable.</span></p>
            </section>

            <section>
              <h5 className="text-white font-bold mb-2">4. Rescheduling & Missed Appointments</h5>
              <p>Paid sessions may be rescheduled only within the rescheduling window displayed at booking. Missed appointments or late cancellations are not refundable.</p>
            </section>

            <section>
              <h5 className="text-white font-bold mb-2">5. Implementation Services</h5>
              <p>Implementation timelines vary based on scope and client responsiveness. Services begin only after payment and required information are received.</p>
            </section>

            <section>
              <h5 className="text-white font-bold mb-2">6. Client Responsibilities</h5>
              <p>Clients are responsible for providing accurate information, timely responses, and access required to complete services.</p>
            </section>

            <section>
              <h5 className="text-white font-bold mb-2">7. Use of AI Technology</h5>
              <p>AI tools may generate automated outputs that require review. Faceless Frames AI Solutions is not responsible for decisions made solely based on AI-generated content.</p>
            </section>

            <section>
              <h5 className="text-white font-bold mb-2">8. Limitation of Liability</h5>
              <p>Faceless Frames AI Solutions shall not be held liable for indirect, incidental, or consequential damages arising from use of services.</p>
            </section>

            <section>
              <h5 className="text-white font-bold mb-2">9. Right to Refuse Service</h5>
              <p>Faceless Frames AI Solutions reserves the right to refuse or discontinue services at its discretion.</p>
            </section>

            <section>
              <h5 className="text-white font-bold mb-2">10. Acceptance of Terms</h5>
              <p>Use of this app, booking of any session, or purchase of services constitutes acceptance of these Terms of Service.</p>
            </section>
          </div>

          <div className="pt-8 border-t border-white/10 mt-8">
            <h5 className="text-white font-bold mb-2 flex items-center">
              <span className="mr-2">📌</span> Contact
            </h5>
            <p>For questions regarding these terms, contact:</p>
            <p className="text-violet-400 font-bold">facelessframesstudios@gmail.com</p>
            <p className="mt-6 text-sm italic text-gray-500">
              Continued use of this app confirms your agreement to the Terms of Service.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'tac',
      title: 'Terms & Conditions',
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4 text-gray-300">
          <p>By booking a call or purchasing services through Faceless Frames AI Solutions, you agree to the following conditions:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Discovery Calls are provided for informational and qualification purposes only.</li>
            <li>Paid sessions include professional time, preparation, and strategy and are not instructional guarantees.</li>
            <li>All paid calls and services must be paid in full at the time of booking unless otherwise stated in writing.</li>
            <li>Faceless Frames AI Solutions does not guarantee specific results, outcomes, or revenue.</li>
            <li>Clients are responsible for providing accurate information required for implementation.</li>
            <li>Services begin only after payment and required information are received.</li>
            <li>Faceless Frames AI Solutions reserves the right to refuse or discontinue services at its discretion.</li>
            <li>Use of this app and booking of services constitutes acceptance of these terms.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'refunds',
      title: 'Refund & Rescheduling Policy',
      icon: <CalendarX className="w-5 h-5" />,
      content: (
        <div className="space-y-4 text-gray-300">
          <ul className="list-disc pl-5 space-y-2">
            <li>The 20-Minute AI Discovery Call is free.</li>
            <li><strong className="text-violet-400">All paid calls are non-refundable.</strong></li>
            <li>Paid calls may be rescheduled according to the rescheduling window shown at the time of booking.</li>
            <li>Missed calls or late cancellations are not refundable.</li>
            <li>In rare circumstances, reschedule requests may be reviewed at the sole discretion of Faceless Frames AI Solutions.</li>
            <li>Payments made for strategy sessions may be applied toward services only if explicitly stated in writing.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4 text-gray-300">
          <p>We take data privacy seriously. Faceless Frames AI Solutions collects only necessary business information to provide consulting services.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Data Usage:</strong> Your data is used solely for the configuration of your AI solutions and communication regarding your project.</li>
            <li><strong className="text-white">Confidentiality:</strong> We do not sell or trade client data to third parties.</li>
            <li><strong className="text-white">Security:</strong> We implement industry-standard security measures to protect your information during transmission and storage.</li>
            <li><strong className="text-white">Third Parties:</strong> Our AI implementations may use third-party APIs (e.g., Google Gemini, OpenAI); your usage is subject to their respective privacy terms.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'disclaimer',
      title: 'AI Disclaimer',
      icon: <Info className="w-5 h-5" />,
      content: (
        <div className="space-y-4 text-gray-300">
          <p>Faceless Frames AI Solutions provides implementations of Large Language Models and Generative AI tools.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Accuracy:</strong> AI systems can sometimes generate incorrect information or "hallucinations." Faceless Frames AI Solutions is not responsible for the accuracy of AI-generated content.</li>
            <li><strong className="text-white">Supervision:</strong> Clients are advised to supervise and review AI outputs before public use or critical decision-making.</li>
            <li><strong className="text-white">Compliance:</strong> It is the client's responsibility to ensure their AI usage complies with local laws and regulations.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'acknowledgment',
      title: 'Booking Acknowledgment',
      icon: <FileCheck className="w-5 h-5" />,
      content: (
        <div className="bg-violet-900/20 p-6 rounded-xl border border-violet-500/20 italic font-medium text-violet-200">
          "I acknowledge that paid calls are non-refundable, pricing is displayed at booking, and I agree to the Faceless Frames AI Solutions Policies & Terms."
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b041a] py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-600/10 blur-[100px] rounded-full -z-10"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 luxury-text text-white">Policies & <span className="text-violet-500">Terms</span></h1>
          <p className="text-gray-400 max-w-xl mx-auto font-light">
            Essential documentation governing our partnership and the use of Faceless Frames AI Solutions.
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="glass rounded-3xl border border-white/5 overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2.5 rounded-xl bg-violet-600/10 text-violet-400 border border-violet-500/20">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight luxury-text">{section.title}</h3>
                </div>
                {openSections.includes(section.id) ? (
                  <ChevronUp className="w-5 h-5 text-violet-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openSections.includes(section.id) && (
                <div className="px-6 md:px-8 pb-8 text-gray-400 leading-relaxed animate-fade-in font-normal">
                  <div className="h-px bg-white/5 w-full mb-8"></div>
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-gray-600 text-sm font-medium">
          Last Updated: December 2025 • Faceless Frames AI Solutions
        </div>
      </div>
    </div>
  );
};

export default Policies;