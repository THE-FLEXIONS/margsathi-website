import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface JourneyStatusCardProps {
  leading: ReactNode;
  children: ReactNode;
  label: string;
  className?: string;
}

/** Floating white status card (leading media, text stack, arrow). Sized in em. */
export default function JourneyStatusCard({ leading, children, label, className = '' }: JourneyStatusCardProps) {
  return (
    <a
      href="#features"
      aria-label={label}
      className={`group flex items-center gap-[0.95em] rounded-[1.15em] bg-white py-[1em] pr-[1.4em] pl-[1.05em] shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 ${className}`}
    >
      <span className="shrink-0">{leading}</span>
      <span className="min-w-0 flex-1 leading-[1.4]">{children}</span>
      <ArrowRight
        className="size-[1.1em] shrink-0 text-navy transition-transform duration-300 group-hover:translate-x-0.5"
        aria-hidden
      />
    </a>
  );
}