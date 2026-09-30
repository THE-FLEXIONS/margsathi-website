import { Building2, GraduationCap, ShieldCheck, ShieldPlus, Users, type LucideIcon } from 'lucide-react';
import SteeringWheel from '../components/icons/SteeringWheel';
import type { Tone } from './home';

export const whyCopy = {
  eyebrow: 'Why it matters',
  description:
    'Whether it\u2019s a student going to school, a child coming home, a woman travelling alone, or a daily commuter \u2014 safety and reliable transport should never be a concern. MARGSATHI makes every journey more secure, transparent and connected.',
  cta: 'Learn more about the problem',
};

export interface ProblemStat {
  value: string;
  label: [string, string];
}

export const problemStats: ProblemStat[] = [
  { value: '60%+', label: ['Women feel unsafe', 'during travel at night*'] },
  { value: '1 in 3', label: ['Parents worry about', 'their child\u2019s daily commute*'] },
  { value: 'Many', label: ['Incidents go unreported', 'due to lack of real-time support*'] },
];

export interface SafetyCardData {
  icon: LucideIcon;
  title: string;
  description: [string, string];
  tone: Tone;
  href: string;
}

export const safetyCards = {
  sos: {
    icon: ShieldPlus,
    title: 'Emergency SOS',
    description: ['Quick access to help', 'when needed'],
    tone: 'orange',
    href: '#features',
  },
  child: {
    icon: Users,
    title: 'Child Safety',
    description: ['Peace of mind for', 'every parent'],
    tone: 'blue',
    href: '#features',
  },
  women: {
    icon: ShieldCheck,
    title: 'Women Safety',
    description: ['Safer travel, stronger', 'confidence'],
    tone: 'red',
    href: '#features',
  },
} satisfies Record<string, SafetyCardData>;

export const liveTracking = {
  title: 'Live Tracking',
  description: ['Real-time location for', 'parents and guardians'] as [string, string],
  href: '#features',
};

export interface Audience {
  icon: LucideIcon;
  title: string;
  description: [string, string];
  tone: Tone;
}

export const builtForEveryone = {
  eyebrow: 'Built for everyone',
  heading: ['Safety for every', 'journey, at every stage.'] as [string, string],
  audiences: [
    { icon: GraduationCap, title: 'Students', description: ['Reach school and college', 'safely, every day.'], tone: 'blue' },
    { icon: Users, title: 'Parents', description: ['Stay informed about', 'your child\u2019s location.'], tone: 'green' },
    { icon: SteeringWheel, title: 'Drivers', description: ['Get support and a safer', 'working environment.'], tone: 'orange' },
    { icon: Building2, title: 'Operators', description: ['Monitor fleet and ensure', 'safe operations.'], tone: 'purple' },
    { icon: ShieldCheck, title: 'Women', description: ['Travel with confidence,', 'anytime, anywhere.'], tone: 'red' },
  ] satisfies Audience[],
};
