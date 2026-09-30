import { ChartColumnIncreasing, Lightbulb, Users, type LucideIcon } from 'lucide-react';
import type { Tone } from './home';

export const earlyFeedbackCopy = {
  eyebrow: 'Early feedback',
  description: [
    'Our solution was presented at various forums, including expert reviews and pitch sessions.',
    'Here\u2019s what they think about the problem we\u2019re solving and the approach we\u2019re building.',
  ],
  note: {
    before: 'This feedback is ',
    emphasis: 'solely based on the pitch',
    after: ' and demo of the solution we are building. The product is currently under development.',
  },
};

export interface Feedback {
  quote: string;
  reviewer: string;
  role: [string, string];
  /** Placeholder portrait from the design mock; replace with the reviewer's own photo (with consent). */
  avatar: string;
  badge: string;
  theme: Tone;
}

export const feedback: Feedback[] = [
  {
    quote:
      'A very relevant and impactful solution. Real-time tracking combined with safety features can make a big difference, especially for students and women traveling daily.',
    reviewer: 'Dr. R.K. Sharma',
    role: ['External Expert', '(SIH Review)'],
    avatar: '/assets/feedback/reviewer-rk-sharma.webp',
    badge: 'Relevant & Impactful',
    theme: 'blue',
  },
  {
    quote:
      'The approach addresses a real social need with practical use cases. I appreciate the inclusion of child safety, women safety and verified transport \u2014 all in one platform.',
    reviewer: 'Ms. Neha Gupta',
    role: ['Industry Mentor', '(Mobility & Safety)'],
    avatar: '/assets/feedback/reviewer-neha-gupta.webp',
    badge: 'Practical & Well Thought',
    theme: 'green',
  },
  {
    quote:
      'The idea shows strong potential for real-world impact. The focus on multiple user groups \u2014 students, women, children and daily commuters \u2014 makes it inclusive and scalable.',
    reviewer: 'Mr. Arjun Mehta',
    role: ['Innovation Judge', '(SIH Pitch)'],
    avatar: '/assets/feedback/reviewer-arjun-mehta.webp',
    badge: 'Inclusive & Scalable',
    theme: 'orange',
  },
  {
    quote:
      'I like the clear problem understanding and the solutions proposed, especially the emergency support and live location sharing for parents and guardians.',
    reviewer: 'Prof. S. Verma',
    role: ['Faculty Reviewer', '(University Panel)'],
    avatar: '/assets/feedback/reviewer-s-verma.webp',
    badge: 'Clear Vision',
    theme: 'purple',
  },
];

export interface ImpactInsightData {
  icon: LucideIcon;
  text: [string, string];
  tone: Tone;
}

export const feedbackImpact = {
  description: ['We\u2019re grateful for the valuable insights and encouragement', 'from experts, mentors and early reviewers.'],
  insights: [
    { icon: Lightbulb, text: ['Validates the real need', 'we are addressing.'], tone: 'green' },
    { icon: Users, text: ['Encourages us to keep', 'user safety at the core.'], tone: 'blue' },
    { icon: ChartColumnIncreasing, text: ['Helps us refine and', 'improve our solution.'], tone: 'orange' },
  ] satisfies ImpactInsightData[],
};