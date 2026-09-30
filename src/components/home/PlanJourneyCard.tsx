import { Bus, BusFront, ChevronRight, Search, TramFront } from 'lucide-react';
import { transportOptions, type TransportOption } from '../../data/howItWorks';
import { toneClasses } from '../../data/home';

const kindIcon: Record<TransportOption['kind'], typeof Bus> = {
  bus: BusFront,
  van: Bus,
  city: TramFront,
};

/** Transport picker panel. Container-scaled: 1em = 13px at the 215px reference width. */
export default function PlanJourneyCard() {
  return (
    <div className="@container w-full">
      <div className="aspect-[215/270] rounded-[1.45em] bg-surface-card p-[0.42em] text-[6.05cqw] shadow-[0_0_0_1px_var(--color-border)]">
        <div className="flex h-full flex-col rounded-[1.15em] bg-white px-[0.9em] pt-[1.05em] pb-[0.9em] shadow-[0_2px_10px_rgb(19_37_74/0.05)]">
          <p className="flex items-center gap-[0.6em] px-[0.2em] text-[0.86em] font-medium text-navy">
            <Search className="size-[1.05em]" strokeWidth={2.4} aria-hidden />
            Select Transport
          </p>
          <ul className="mt-[0.95em] flex flex-1 flex-col gap-[0.5em]">
            {transportOptions.map(({ kind, title, seats, tone }) => {
              const Icon = kindIcon[kind];
              return (
                <li key={title} className="flex-1">
                  <button
                    type="button"
                    className="flex h-full w-full items-center gap-[0.75em] rounded-[0.9em] bg-white px-[0.3em] text-left shadow-[0_1px_8px_rgb(19_37_74/0.07)] transition-shadow hover:shadow-card"
                  >
                    <span className={`grid size-[3.1em] shrink-0 place-items-center rounded-[0.85em] ${toneClasses[tone].chip}`}>
                      <Icon className={`size-[1.75em] ${toneClasses[tone].icon} ${toneClasses[tone].fill}`} strokeWidth={2.3} aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1 leading-[1.35]">
                      <span className="block text-[0.95em] font-semibold whitespace-nowrap text-navy">{title}</span>
                      <span className="block text-[0.8em] whitespace-nowrap text-text-secondary">
                        <span className="text-green">Verified</span> {'\u2022'} {seats} seats
                      </span>
                    </span>
                    <ChevronRight className="size-[1.1em] shrink-0 text-navy" strokeWidth={2.2} aria-hidden />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}