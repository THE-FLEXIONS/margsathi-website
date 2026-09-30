import { ArrowRight } from 'lucide-react';
import type { SafetyCardData } from '../../data/whyItMatters';
import { toneClasses } from '../../data/home';

interface SafetyInfoCardProps extends SafetyCardData {
  className?: string;
}

/**
 * Compact white card: tone icon chip, title, two-line description, arrow.
 * Every dimension is in em, so the parent sets the scale via font-size.
 */
export default function SafetyInfoCard({ icon: Icon, title, description, tone, href, className = '' }: SafetyInfoCardProps) {
  return (
    <a
      href={href}
      className={`group flex items-center gap-[0.95em] rounded-[1.1em] bg-white py-[0.95em] pr-[1em] pl-[1.05em] shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-14px_rgb(19_37_74/0.28)] ${className}`}
    >
      <span className={`grid size-[3.5em] shrink-0 place-items-center rounded-full ${toneClasses[tone].chip}`} aria-hidden>
        <Icon className={`size-[1.7em] ${toneClasses[tone].icon} ${toneClasses[tone].fill}`} strokeWidth={2.3} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[1em] leading-tight font-semibold whitespace-nowrap text-navy">{title}</span>
        <span className="mt-[0.35em] block text-[0.8em] leading-[1.45] text-text-secondary">
          {description[0]}
          <br />
          {description[1]}
        </span>
      </span>
      <ArrowRight
        className="size-[1.15em] shrink-0 text-navy transition-transform duration-300 group-hover:translate-x-0.5"
        strokeWidth={2}
        aria-hidden
      />
    </a>
  );
}