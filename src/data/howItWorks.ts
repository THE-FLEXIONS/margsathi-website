import { PersonStanding, TriangleAlert, UserRound, Users, type LucideIcon } from 'lucide-react';
import type { Tone } from './home';

export const howCopy = {
  eyebrow: 'How it works',
  description:
    'MARGSATHI connects passengers, transport, real-time tracking and safety support in one simple flow \u2014 so every journey stays transparent, secure and stress-free.',
};

export type StepVisual = 'plan' | 'start' | 'connected' | 'support' | 'arrive';

export interface JourneyStepData {
  number: string;
  title: string;
  description: string[];
  tone: Tone;
  visual: StepVisual;
  /** Desktop fine-tuning from the reference: header drop in px at 1536w. */
  headerOffset: number;
  /** Visual width as a share of its column, from the reference. */
  visualWidth: string;
}

export const journeySteps: JourneyStepData[] = [
  {
    number: '01',
    title: 'Plan Your Journey',
    description: ['Choose verified transport', 'options for school, college', 'or daily commute.'],
    tone: 'blue',
    visual: 'plan',
    headerOffset: 11,
    visualWidth: '71.9%',
  },
  {
    number: '02',
    title: 'Start Your Trip',
    description: ['Get real-time updates as', 'your journey begins.'],
    tone: 'green',
    visual: 'start',
    headerOffset: 11,
    visualWidth: '72.8%',
  },
  {
    number: '03',
    title: 'Stay Connected',
    description: ['Live tracking, ETA updates', 'and instant notifications', 'for parents and guardians.'],
    tone: 'orange',
    visual: 'connected',
    headerOffset: 0,
    visualWidth: '72.5%',
  },
  {
    number: '04',
    title: 'Get Support Anytime',
    description: ['Quick SOS, alert guardians', 'and get help in emergencies.'],
    tone: 'purple',
    visual: 'support',
    headerOffset: 11,
    visualWidth: '76.7%',
  },
  {
    number: '05',
    title: 'Reach Safely',
    description: ['Get notified on arrival', 'and complete the journey', 'with peace of mind.'],
    tone: 'blue',
    visual: 'arrive',
    headerOffset: 13,
    visualWidth: '88.3%',
  },
];

export interface TransportOption {
  kind: 'bus' | 'van' | 'city';
  title: string;
  seats: number;
  tone: Tone;
}

export const transportOptions: TransportOption[] = [
  { kind: 'bus', title: 'School Bus', seats: 12, tone: 'orange' },
  { kind: 'van', title: 'Shared Van', seats: 6, tone: 'blue' },
  { kind: 'city', title: 'City Transport', seats: 20, tone: 'green' },
];

export interface SafetyLayerItemData {
  icon: LucideIcon;
  title: string;
  description: [string, string];
  tone: Tone;
}

export const safetyLayer = {
  eyebrow: 'More than transport',
  heading: ['A complete safety layer for', 'every journey.'] as [string, string],
  items: [
    { icon: UserRound, title: 'Women Safety', description: ['Safer travel, stronger', 'confidence.'], tone: 'orange' },
    { icon: PersonStanding, title: 'Child Safety', description: ['Peace of mind for', 'every parent.'], tone: 'blue' },
    { icon: Users, title: 'Parental Controls', description: ['Real-time tracking', 'and notifications.'], tone: 'green' },
    { icon: TriangleAlert, title: 'Emergency Support', description: ['Quick SOS and', 'faster response.'], tone: 'red' },
  ] satisfies SafetyLayerItemData[],
};