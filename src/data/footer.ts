import { Bell, ShieldCheck, Users, type LucideIcon } from 'lucide-react';
import type { Tone } from './home';

export const newsletterCopy = {
  eyebrow: 'Stay connected',
  description: ['Receive product updates, safety tips, feature launches', 'and more \u2014 directly in your inbox.'],
  placeholder: 'Enter your email address',
  cta: 'Subscribe',
  privacy: 'We respect your privacy. No spam, ever.',
};

export interface NewsletterBenefit {
  icon: LucideIcon;
  label: [string, string];
  tone: Tone;
}

export const newsletterBenefits: NewsletterBenefit[] = [
  { icon: Bell, label: ['Product', 'updates'], tone: 'green' },
  { icon: ShieldCheck, label: ['Safety', 'insights'], tone: 'orange' },
  { icon: Users, label: ['Early', 'access'], tone: 'blue' },
];

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumnData {
  title: string;
  links: FooterLink[];
}

/** Links without a page yet point to '#'; swap in routes as pages are built. */
export const footerColumns: FooterColumnData[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Safety Solutions', href: '#why-it-matters' },
      { label: 'Live Tracking', href: '#features' },
      { label: 'Emergency Support', href: '#features' },
      { label: 'Pricing', href: '#' },
    ],
  },
  {
    title: 'Use Cases',
    links: [
      { label: 'Students', href: '#who-we-serve' },
      { label: 'Women Safety', href: '#who-we-serve' },
      { label: 'Child Safety', href: '#who-we-serve' },
      { label: 'Daily Commuters', href: '#who-we-serve' },
      { label: 'Schools & Institutions', href: '#' },
      { label: 'Transport Operators', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Our Mission', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press & Media', href: '#' },
      { label: 'Contact Us', href: 'mailto:support@margsathi.com' },
    ],
  },
];

export const contact = {
  email: 'support@margsathi.com',
  phoneDisplay: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  location: 'Jalandhar, Punjab, India',
  mapHref: 'https://www.google.com/maps/search/?api=1&query=Jalandhar%2C%20Punjab%2C%20India',
};

export type SocialPlatform = 'linkedin' | 'instagram' | 'youtube' | 'x';

/** Replace '#' with the official profile URLs once they exist. */
export const socialLinks: { platform: SocialPlatform; label: string; href: string }[] = [
  { platform: 'linkedin', label: 'MARGSATHI on LinkedIn', href: '#' },
  { platform: 'instagram', label: 'MARGSATHI on Instagram', href: '#' },
  { platform: 'youtube', label: 'MARGSATHI on YouTube', href: '#' },
  { platform: 'x', label: 'MARGSATHI on X', href: '#' },
];

/** Replace '#' with the store listing URLs at launch. */
export const appStores = [
  { label: 'Download on the App Store', src: '/assets/footer/badge-app-store.webp', width: 146, href: '#' },
  { label: 'Get it on Google Play', src: '/assets/footer/badge-google-play.webp', width: 147, href: '#' },
];

export const legalLinks: FooterLink[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
  { label: 'FAQs', href: '#' },
];