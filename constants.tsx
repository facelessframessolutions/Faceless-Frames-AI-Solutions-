import { Solution, Package, CaseStudy, QuizQuestion } from './types';

export const SOLUTIONS: Solution[] = [
  {
    id: 'voice-agents',
    title: 'AI Voice Agents',
    description: 'Natural, human-like voice interaction for outbound and inbound calls.',
    icon: '🎙️',
    whatItIs: 'Highly advanced conversational AI that can handle complex phone interactions with zero latency and perfect memory.',
    howItHelps: 'Reduces wait times, handles high call volumes simultaneously, and captures 100% of lead data automatically.',
    greatFor: ['Real Estate', 'Solar Companies', 'Customer Support Departments', 'Appointment Setting'],
    useCases: [
      'Automated cold calling and lead qualification',
      'Out-of-hours customer service triage',
      'Follow-up calls for missed inquiries'
    ]
  },
  {
    id: 'customer-bot',
    title: 'AI Customer Service Bot',
    description: '24/7 intelligent chat solutions trained on your specific business data.',
    icon: '💬',
    whatItIs: 'A custom-trained Large Language Model (LLM) integrated into your website or social channels.',
    howItHelps: 'Instantly answers FAQs, processes refunds, and books appointments while maintaining your brand voice.',
    greatFor: ['E-commerce', 'SaaS', 'Agencies', 'Local Service Businesses'],
    useCases: [
      'Interactive website support assistant',
      'Multilingual customer onboarding',
      'Post-purchase feedback collection'
    ]
  },
  {
    id: 'receptionist',
    title: 'AI Receptionist',
    description: 'The ultimate digital front desk for scheduling and guest management.',
    icon: '🛎️',
    whatItIs: 'A specialized automation layer that handles calendar syncing and initial client intake.',
    howItHelps: 'Ensures no lead falls through the cracks and eliminates the back-and-forth of scheduling.',
    greatFor: ['Medical Clinics', 'Law Firms', 'Spas & Salons', 'Consultants'],
    useCases: [
      'Automated appointment rescheduling via SMS',
      'Patient/Client pre-screening forms',
      'Internal meeting coordination'
    ]
  },
  {
    id: 'automation',
    title: 'AI Automation',
    description: 'End-to-end workflow automation to eliminate repetitive digital tasks.',
    icon: '⚙️',
    whatItIs: 'Custom internal tool stacks (Make.com, Zapier, Python) that bridge your existing software with AI.',
    howItHelps: 'Saves hundreds of human hours per month by automating CRM updates, report generation, and data entry.',
    greatFor: ['Large Enterprises', 'Marketing Agencies', 'Operations Teams'],
    useCases: [
      'Automatic lead distribution from social media to CRM',
      'AI-powered content repurposing workflows',
      'Invoice processing and reconciliation'
    ]
  },
  {
    id: 'avatar',
    title: 'Talking Avatar',
    description: 'Realistic digital humans for high-engagement video content and training.',
    icon: '👤',
    whatItIs: 'AI-generated video avatars that speak your script with realistic lip-sync and body language.',
    howItHelps: 'Scales video production without expensive equipment, studios, or reshoots.',
    greatFor: ['Educational Platforms', 'Corporate Training', 'Social Media Influencers'],
    useCases: [
      'Personalized video emails for sales',
      'Standardized employee onboarding videos',
      'Automated news or update bulletins'
    ]
  }
];

export const PACKAGES: Package[] = [
  {
    name: 'Single AI Agent',
    price: '$497',
    description: 'Best for first-time AI users & solo businesses.',
    features: [
      '1 AI Agent (Voice or Chatbot)',
      'Basic customization (FAQs, info)',
      'Brand-aligned responses',
      'Testing & launch',
      '7 days post-launch support'
    ],
    cta: 'Select Single Agent'
  },
  {
    name: 'Starter',
    price: '$997',
    description: 'Best for small businesses getting serious about automation.',
    features: [
      '1 AI Agent (Voice or Chat)',
      'Lead capture or booking integration',
      'Custom prompts tailored to business',
      'Light automation setup',
      '14 days support'
    ],
    cta: 'Select Starter'
  },
  {
    name: 'Growth',
    price: '$1,197',
    description: 'Best for service businesses & growing brands.',
    features: [
      'Up to 2 AI agents (Voice + Chat/Rec)',
      'Workflow automation (Leads, Follow-ups)',
      'Custom scripts & logic',
      'Optimization & testing',
      '30 days post-launch support'
    ],
    cta: 'Most Popular',
    highlighted: true
  },
  {
    name: 'Custom Tailored',
    price: 'From $1,997',
    description: 'Best for businesses needing advanced or unique setups.',
    features: [
      'Fully customized AI solution(s)',
      'Multi-agent systems (if needed)',
      'Advanced automations & integrations',
      'Custom workflows & logic',
      'Training & documentation',
      'Ongoing support options'
    ],
    cta: 'Request Quote'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Modern Realty Solutions',
    industry: 'Real Estate',
    before: 'Missing 40% of after-hours leads; manual appointment setting took 15 hours/week.',
    after: 'Deployed AI Voice Agent for triage and instant SMS booking.',
    outcome: '120% increase in qualified leads; saved 60 hours/month.'
  },
  {
    title: 'Peak Performance SaaS',
    industry: 'Technology',
    before: 'Support tickets backlog of 48 hours; high churn due to slow response.',
    after: 'Implemented an AI Customer Service Bot trained on technical docs.',
    outcome: '85% of tickets resolved instantly; response time dropped to < 1 min.'
  },
  {
    title: 'Global Law Partners',
    industry: 'Legal',
    before: 'Administrative staff spent 30% of time on document filing and scheduling.',
    after: 'Custom AI Automation for intake forms and automatic calendar sync.',
    outcome: 'Increased billable hour capacity by 25% across the associate team.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    text: "What is your primary business challenge?",
    options: [
      { label: "Missing customer inquiries/calls", value: "inquiries", points: { 'voice-agents': 3, 'receptionist': 2 } },
      { label: "Manual data entry and repetitive tasks", value: "tasks", points: { 'automation': 4 } },
      { label: "Scaling content production", value: "content", points: { 'avatar': 4 } },
      { label: "Providing 24/7 customer support", value: "support", points: { 'customer-bot': 4 } }
    ]
  },
  {
    id: 2,
    text: "What is your average monthly inquiry volume?",
    options: [
      { label: "Under 100", value: "low", points: { 'receptionist': 2, 'customer-bot': 1 } },
      { label: "100 - 500", value: "medium", points: { 'customer-bot': 3, 'voice-agents': 1 } },
      { label: "Over 500", value: "high", points: { 'voice-agents': 3, 'automation': 3 } }
    ]
  },
  {
    id: 3,
    text: "Which communication channel is most critical for you?",
    options: [
      { label: "Phone Calls", value: "phone", points: { 'voice-agents': 4, 'receptionist': 2 } },
      { label: "Website Chat / Messaging", value: "chat", points: { 'customer-bot': 4 } },
      { label: "Email / Internal Workflows", value: "email", points: { 'automation': 4 } },
      { label: "Social Media / Video", value: "video", points: { 'avatar': 4 } }
    ]
  },
  {
    id: 4,
    text: "What is your team size?",
    options: [
      { label: "Solo-preneur / Small (1-5)", value: "solo", points: { 'receptionist': 3 } },
      { label: "Mid-sized (6-25)", value: "mid", points: { 'customer-bot': 2, 'automation': 2 } },
      { label: "Enterprise (26+)", value: "large", points: { 'automation': 4 } }
    ]
  },
  {
    id: 5,
    text: "How quickly do you need to implement a solution?",
    options: [
      { label: "ASAP (1-2 weeks)", value: "fast", points: { 'customer-bot': 3, 'receptionist': 2 } },
      { label: "Within a month", value: "standard", points: { 'voice-agents': 2, 'automation': 1 } },
      { label: "We are planning for next quarter", value: "slow", points: { 'automation': 3 } }
    ]
  },
  {
    id: 6,
    text: "What is your estimated monthly budget for AI?",
    options: [
      { label: "Under $1,000", value: "budget", points: { 'receptionist': 3, 'customer-bot': 2 } },
      { label: "$1,000 - $5,000", value: "mid", points: { 'voice-agents': 3, 'automation': 2 } },
      { label: "Over $5,000", value: "high", points: { 'automation': 4, 'voice-agents': 3 } }
    ]
  }
];