import { Play } from 'lucide-react';
import ArrowPillButton from '../ui/ArrowPillButton';

interface HeroActionsProps {
  primaryLabel: string;
  videoLabel: string;
  onWatchVideo?: () => void;
}

export default function HeroActions({ primaryLabel, videoLabel, onWatchVideo }: HeroActionsProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-[34px] gap-y-5">
      <ArrowPillButton
        label={primaryLabel}
        href="#solution"
        variant="orange"
        className="hover:-translate-y-0.5 transition-[transform,background-color] duration-300"
      />
      <button
        type="button"
        onClick={onWatchVideo}
        className="group inline-flex items-center gap-4 rounded-full text-[17px] font-semibold text-navy"
      >
        <span className="grid size-[56px] place-items-center rounded-full border border-border-strong bg-white transition-[transform,border-color,background-color] duration-300 group-hover:scale-105 group-hover:border-navy/30 group-hover:bg-surface-card">
          <Play className="ml-[3px] size-[18px] fill-navy-deep text-navy-deep" aria-hidden />
        </span>
        {videoLabel}
      </button>
    </div>
  );
}
