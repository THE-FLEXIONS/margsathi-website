import { ChevronRight, Headphones, Phone, TriangleAlert } from 'lucide-react';

const actions = [
  { icon: Phone, label: 'Call Guardian' },
  { icon: Headphones, label: 'Call Support' },
];

/** SOS panel. Container-scaled: 1em = 12.5px at the 217px reference width. */
export default function EmergencySupportCard() {
  return (
    <div className="@container w-full">
      <div className="aspect-[217/283] rounded-[1.5em] bg-surface-card p-[0.42em] text-[5.76cqw] shadow-[0_0_0_1px_var(--color-border)]">
        <div className="flex h-full flex-col items-center rounded-[1.2em] bg-white px-[0.9em] pt-[1.3em] pb-[1em] shadow-[0_2px_10px_rgb(19_37_74/0.05)]">
          <button
            type="button"
            aria-label="Send SOS alert"
            className="grid size-[8.4em] shrink-0 place-items-center rounded-full bg-sos-halo transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="flex size-[6.1em] flex-col items-center justify-center rounded-full bg-sos text-white shadow-[0_8px_18px_-6px_rgb(239_59_59/0.6)]">
              <TriangleAlert className="size-[1.35em] fill-white/25" strokeWidth={2.2} aria-hidden />
              <span className="mt-[0.1em] text-[1.3em] leading-none font-semibold">SOS</span>
            </span>
          </button>
          <p className="mt-[0.45em] text-center text-[0.86em] leading-[1.45] text-text-secondary">
            Alert sent to guardians
            <br />
            and support team
          </p>
          <ul className="mt-auto flex w-full flex-col gap-[0.75em]">
            {actions.map(({ icon: Icon, label }) => (
              <li key={label}>
                <button
                  type="button"
                  className="flex h-[3.2em] w-full items-center gap-[0.9em] rounded-[0.8em] bg-white px-[0.9em] text-left text-[0.9em] font-medium text-navy shadow-[0_1px_8px_rgb(19_37_74/0.08)] transition-shadow hover:shadow-card"
                >
                  <Icon className="size-[1.3em] fill-navy/10" strokeWidth={2.2} aria-hidden />
                  <span className="flex-1">{label}</span>
                  <ChevronRight className="size-[1.1em]" strokeWidth={2.2} aria-hidden />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}