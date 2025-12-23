
export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
  whatItIs: string;
  howItHelps: string;
  greatFor: string[];
  useCases: string[];
}

export interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface CaseStudy {
  title: string;
  industry: string;
  before: string;
  after: string;
  outcome: string;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: {
    label: string;
    value: string;
    points: Record<string, number>;
  }[];
}
