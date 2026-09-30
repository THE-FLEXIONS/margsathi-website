import {
  Bus,
  MapPin,
  ShieldCheck,
  ShieldPlus,
  Star,
  Users,
  type LucideIcon,
} from 'lucide-react';

export type Tone = 'blue' | 'orange' | 'green' | 'purple' | 'red';

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Solution', href: '#solution' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
] as const;

export const heroCopy = {
  badge: 'Safer journeys. Stronger communities.',
  description:
    'MARGSATHI connects passengers, drivers, guardians, operators and emergency support on a single intelligent platform, making everyday travel safer, simpler and more connected.',
  primaryCta: 'Explore the Solution',
  videoCta: 'Watch Video',
};

export interface HeroStat {
  icon: LucideIcon;
  value: string;
  label: string;
  tone: Tone;
  filled?: boolean;
}

export const heroStats: HeroStat[] = [
  { icon: Users, value: '10K+', label: 'People travel safer', tone: 'blue' },
  { icon: Bus, value: '500+', label: 'Vehicles connected', tone: 'orange' },
  { icon: ShieldCheck, value: '99.9%', label: 'Uptime & reliability', tone: 'green' },
  { icon: Star, value: '4.8/5', label: 'User satisfaction', tone: 'orange', filled: true },
];

export interface FeatureCardData {
  icon: LucideIcon;
  title: string;
  description: [string, string];
  tone: Tone;
}

export const featureCards: FeatureCardData[] = [
  { icon: MapPin, title: 'Live Tracking', description: ['Real-time location', 'for peace of mind.'], tone: 'green' },
  { icon: ShieldPlus, title: 'Emergency Support', description: ['Quick SOS and', 'faster response.'], tone: 'orange' },
  { icon: Users, title: 'Stay Connected', description: ['Passengers, guardians', 'and operators together.'], tone: 'purple' },
];

/** Shared tone -> token classes for soft icon chips. */
export const toneClasses: Record<Tone, { chip: string; icon: string; fill: string }> = {
  blue: { chip: 'bg-icon-blue-bg', icon: 'text-icon-blue', fill: 'fill-icon-blue/25' },
  orange: { chip: 'bg-icon-orange-bg', icon: 'text-orange', fill: 'fill-orange/25' },
  green: { chip: 'bg-icon-green-bg', icon: 'text-green', fill: 'fill-green/25' },
  purple: { chip: 'bg-icon-purple-bg', icon: 'text-icon-purple', fill: 'fill-icon-purple/25' },
  red: { chip: 'bg-icon-red-bg', icon: 'text-icon-red', fill: 'fill-icon-red/25' },
};
