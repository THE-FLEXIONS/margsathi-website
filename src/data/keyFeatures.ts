import { Bell, BusFront, Heart, MapPin, ShieldCheck, Users, UsersRound, type LucideIcon } from 'lucide-react';
import type { Tone } from './home';
import type { SafetyCardData } from './whyItMatters';

export const keyFeaturesCopy = {
  eyebrow: 'Key features',
  description:
    'From daily commutes to school travel, MARGSATHI brings tracking, verified transport and emergency support together in one trusted platform.',
  link: 'Explore all features',
};

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string[];
  tone: Tone;
  href: string;
}

export const featureItems: FeatureItem[] = [
  { icon: MapPin, title: 'Live Tracking', description: ['Real-time location for', 'parents, guardians and', 'trusted contacts.'], tone: 'green', href: '#features' },
  { icon: BusFront, title: 'Verified Transport', description: ['School buses, shared', 'vans and other transport', 'with verified drivers.'], tone: 'orange', href: '#features' },
  { icon: ShieldCheck, title: 'Emergency SOS', description: ['Instant alert to guardians', 'and support team when', 'needed.'], tone: 'red', href: '#features' },
  { icon: Users, title: 'Child & Women Safety', description: ['Designed for students,', 'women and vulnerable', 'travelers.'], tone: 'purple', href: '#features' },
  { icon: Bell, title: 'Smart Notifications', description: ['Trip updates, ETA alerts', 'and important', 'announcements.'], tone: 'blue', href: '#features' },
  { icon: UsersRound, title: 'Parent & Guardian Access', description: ['Stay informed and in', 'control with real-time', 'updates.'], tone: 'orange', href: '#features' },
];

export const visualCards: SafetyCardData[] = [
  { icon: ShieldCheck, title: 'Live Tracking', description: ['Real-time location', 'and route updates.'], tone: 'green', href: '#features' },
  { icon: Bell, title: 'Emergency Support', description: ['Quick SOS and', 'instant alerts.'], tone: 'orange', href: '#features' },
  { icon: Users, title: 'Trusted Journey', description: ['Safer travel for', 'women and children.'], tone: 'purple', href: '#features' },
];

export interface ImpactStatData {
  icon: LucideIcon;
  value: string;
  description: string[];
  tone: Tone;
  filled?: boolean;
}

export const impact = {
  eyebrow: 'Our impact',
  heading: ['Building safer', 'communities together.'] as [string, string],
  stats: [
    { icon: Users, value: '10K+', description: ['People travel safer', 'with MARGSATHI'], tone: 'green' },
    { icon: BusFront, value: '500+', description: ['Verified vehicles', 'connected'], tone: 'orange' },
    { icon: ShieldCheck, value: '99.9%', description: ['Uptime and reliability'], tone: 'blue' },
    { icon: Heart, value: '4.8/5', description: ['User satisfaction'], tone: 'red', filled: true },
  ] satisfies ImpactStatData[],
};