import { ArrowRight, Bus, House } from 'lucide-react';
import { motion } from 'framer-motion';

function BusMarker({ className }: { className: string }) {
  return (
    <span className={`absolute grid aspect-square -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white ring-[0.18em] ring-orange/80 ${className}`}>
      <span className="grid size-[76%] place-items-center rounded-full bg-orange">
        <Bus className="size-[58%] text-white" strokeWidth={2.4} />
      </span>
    </span>
  );
}

/** Live map widget with ETA row. Sized in em; parent sets font-size (1em = 13px at 285px wide). */
export default function FeatureMapCard({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.6em] bg-white p-[0.45em] shadow-card ${className}`}
      role="img"
      aria-label="Live map: school bus on Route A, 5 minutes away from home"
    >
      <div className="relative h-full overflow-hidden rounded-[1.25em] bg-map-base" aria-hidden>
        <svg viewBox="0 0 275 217" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
          <g stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round">
            <path d="M-5 60 C80 50 170 70 280 52" />
            <path d="M-5 140 C90 130 180 150 280 132" />
            <path d="M92 -5 C86 70 100 150 90 222" />
            <path d="M190 -5 C196 70 184 150 196 222" />
          </g>
          <g fill="var(--color-map-block)">
            <rect x="12" y="10" width="46" height="30" rx="5" />
            <rect x="120" y="80" width="44" height="34" rx="5" />
            <rect x="214" y="160" width="46" height="36" rx="5" />
          </g>
          <circle cx="40" cy="96" r="3.5" fill="var(--color-map-water)" />
          <circle cx="250" cy="28" r="3" fill="var(--color-map-water)" />
          <motion.path
            d="M66 86 C62 110 66 132 98 146 S150 128 170 110 S202 96 210 88 S214 70 216 40"
            fill="none"
            stroke="var(--color-green)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.4, ease: 'easeInOut' }}
          />
          <path d="M210 88 C222 94 234 108 244 122" fill="none" stroke="var(--color-green)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="98" cy="146" r="3" fill="var(--color-green)" />
          <circle cx="185" cy="89" r="3" fill="var(--color-green)" />
        </svg>
        <BusMarker className="top-[39%] left-[24%] w-[16.5%]" />
        <BusMarker className="top-[18.5%] left-[80%] w-[16.5%]" />
        <span className="absolute top-[56%] left-[89%] grid aspect-square w-[11%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-icon-blue shadow-card ring-[0.2em] ring-white">
          <House className="size-[55%] fill-white text-white" strokeWidth={2} />
        </span>
      </div>

      <div className="absolute inset-x-[1.6em] bottom-[0.55em] flex h-[4.8em] items-center gap-[0.8em] rounded-[0.9em] bg-white px-[0.9em] shadow-card">
        <span className="grid size-[2.7em] shrink-0 place-items-center rounded-[0.7em] bg-icon-orange-bg">
          <Bus className="size-[1.5em] text-orange" strokeWidth={2.3} aria-hidden />
        </span>
        <span className="min-w-0 flex-1 leading-[1.4]">
          <span className="block text-[0.93em] font-semibold text-navy">5 min away</span>
          <span className="block text-[0.78em] whitespace-nowrap text-text-secondary">School Bus {'\u2022'} Route A</span>
        </span>
        <ArrowRight className="size-[1.1em] shrink-0 text-navy" aria-hidden />
      </div>
    </div>
  );
}