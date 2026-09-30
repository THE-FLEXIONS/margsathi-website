import {
  Bell,
  Building2,
  BusFront,
  GraduationCap,
  Heart,
  MapPin,
  ShieldCheck,
  Users,
  Venus,
  type LucideIcon,
} from 'lucide-react';
import type { Tone } from './home';
import type { ImpactStatData } from './keyFeatures';

export const whoWeServeCopy = {
  eyebrow: 'Who we serve',
  description:
    'MARGSATHI is designed for students, women, children and daily commuters \u2014 making every journey safer, more transparent and better connected.',
};

export interface Testimonial {
  quote: string[];
  author: string;
  role: string;
  avatar: string;
}

/**
 * Carousel slides. Add further verified customer quotes here; the pagination
 * and arrow controls pick them up automatically.
 */
export const testimonials: Testimonial[] = [
  {
    quote: ['I feel more confident knowing', 'I can track my daughter\u2019s journey', 'in real time.'],
    author: 'Priya S.',
    role: 'Parent',
    avatar: '/assets/serve/testimonial-priya.webp',
  },
];

export interface AudienceBenefitData {
  icon: LucideIcon;
  label: string;
}

export interface AudienceData {
  title: string;
  description: string[];
  icon: LucideIcon;
  tone: Tone;
  image: { src: string; alt: string };
  benefits: AudienceBenefitData[];
  href: string;
}

export const audiences: AudienceData[] = [
  {
    title: 'Students',
    description: ['Safer school and college', 'travel with real-time tracking', 'and verified transport.'],
    icon: GraduationCap,
    tone: 'blue',
    image: { src: '/assets/serve/students.webp', alt: 'Smiling schoolgirl with a backpack beside a school bus' },
    benefits: [
      { icon: MapPin, label: 'Track school bus in real time' },
      { icon: ShieldCheck, label: 'Verified drivers and routes' },
      { icon: Bell, label: 'Instant alerts for parents' },
    ],
    href: '#features',
  },
  {
    title: 'Women',
    description: ['Travel with confidence,', 'anytime, anywhere.'],
    icon: Venus,
    tone: 'red',
    image: { src: '/assets/serve/women.webp', alt: 'Young woman with a shoulder bag at a city bus stop' },
    benefits: [
      { icon: MapPin, label: 'Live location sharing' },
      { icon: ShieldCheck, label: 'Quick SOS and emergency support' },
      { icon: Users, label: 'Trusted contacts and guardians' },
    ],
    href: '#features',
  },
  {
    title: 'Children',
    description: ['Peace of mind for parents', 'with continuous monitoring', 'and safe transport.'],
    icon: Users,
    tone: 'orange',
    image: { src: '/assets/serve/children.webp', alt: 'Young schoolboy with a backpack smiling on a tree-lined street' },
    benefits: [
      { icon: MapPin, label: 'Real-time tracking' },
      { icon: Bell, label: 'Instant alerts and notifications' },
      { icon: ShieldCheck, label: 'Safer pick-up and drop routes' },
    ],
    href: '#features',
  },
  {
    title: 'Daily Commuters',
    description: ['Reliable and verified transport', 'options for a safer everyday', 'journey.'],
    icon: Users,
    tone: 'green',
    image: { src: '/assets/serve/daily-commuters.webp', alt: 'Commuter with a backpack checking his phone as a city bus arrives' },
    benefits: [
      { icon: BusFront, label: 'Choose verified transport' },
      { icon: Building2, label: 'Live tracking and ETA updates' },
      { icon: ShieldCheck, label: 'Quick support when needed' },
    ],
    href: '#features',
  },
];

export const trustedJourneys = {
  eyebrow: 'Trusted journeys',
  heading: ['Real people.', 'Real safer journeys.'] as [string, string],
  stats: [
    { icon: Users, value: '10K+', description: ['Students and commuters', 'travel safer.'], tone: 'green' },
    { icon: BusFront, value: '500+', description: ['Verified vehicles', 'connected.'], tone: 'orange' },
    { icon: ShieldCheck, value: '99.9%', description: ['Uptime and reliability.'], tone: 'blue' },
    { icon: Heart, value: '4.8/5', description: ['User satisfaction.'], tone: 'red', filled: true },
  ] satisfies ImpactStatData[],
};