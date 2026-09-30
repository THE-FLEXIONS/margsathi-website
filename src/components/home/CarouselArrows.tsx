import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CarouselArrowsProps {
  label: string;
  onPrev: () => void;
  onNext: () => void;
  disabled?: boolean;
  className?: string;
}

const button =
  'group grid size-[40px] place-items-center rounded-full border border-border/70 bg-white text-navy shadow-[0_4px_14px_-6px_rgb(19_37_74/0.25)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-surface-card hover:shadow-card disabled:cursor-default disabled:hover:translate-y-0';

/** Round previous / next controls shared by the section carousels. */
export default function CarouselArrows({ label, onPrev, onNext, disabled = false, className = '' }: CarouselArrowsProps) {
  return (
    <div className={`flex gap-[18px] ${className}`}>
      <button type="button" aria-label={`Previous ${label}`} className={button} disabled={disabled} onClick={onPrev}>
        <ArrowLeft className="size-[18px] transition-transform duration-300 group-hover:-translate-x-0.5" strokeWidth={2.2} aria-hidden />
      </button>
      <button type="button" aria-label={`Next ${label}`} className={button} disabled={disabled} onClick={onNext}>
        <ArrowRight className="size-[18px] transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.2} aria-hidden />
      </button>
    </div>
  );
}