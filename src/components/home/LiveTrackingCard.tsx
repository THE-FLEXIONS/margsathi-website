import { ArrowRight, Bus, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { liveTracking } from '../../data/whyItMatters';

/** Guardian-side live tracking widget. Sized in em; the parent sets font-size. */
export default function LiveTrackingCard({ className = '' }: { className?: string }) {
  return (
    <a
      href={liveTracking.href}
      className={`group flex flex-col rounded-[1.4em] bg-white p-[0.32em] shadow-card transition-shadow duration-300 hover:shadow-[0_16px_36px_-14px_rgb(19_37_74/0.28)] ${className}`}
    >
      <span className="flex items-center gap-[0.95em] px-[0.95em] pt-[0.95em] pb-[1em]">
        <span className="grid size-[3.4em] shrink-0 place-items-center rounded-full bg-icon-green-bg" aria-hidden>
          <MapPin className="size-[1.7em] fill-green text-green [&>circle]:fill-white" strokeWidth={2.2} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[1em] leading-tight font-semibold text-navy">{liveTracking.title}</span>
          <span className="mt-[0.35em] block text-[0.8em] leading-[1.45] text-text-secondary">
            {liveTracking.description[0]}
            <br />
            {liveTracking.description[1]}
          </span>
        </span>
        <ArrowRight className="size-[1.15em] shrink-0 text-navy transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
      </span>

      <span className="relative block min-h-0 flex-1 overflow-hidden rounded-[1.1em] bg-map-base" aria-hidden>
        <TrackingMap />
        {/* bus marker */}
        <span className="absolute top-[36%] left-[32%] grid size-[2.5em] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-card">
          <Bus className="size-[1.25em] text-orange" strokeWidth={2.4} />
        </span>
        {/* status chip */}
        <span className="absolute top-[23%] left-[43%] rounded-[0.6em] bg-green px-[0.6em] py-[0.3em] text-[0.62em] font-semibold text-white shadow-card">
          Enroute
        </span>
        {/* guardian avatar */}
        <img
          src="/assets/why/avatar-guardian.webp"
          alt=""
          className="absolute top-[25.5%] left-[87.5%] size-[3.4em] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover ring-[0.2em] ring-white"
        />
        {/* destination */}
        <span className="absolute top-[74%] left-[70.5%] -translate-x-1/2 -translate-y-1/2">
          <span className="absolute inset-0 animate-ping rounded-full bg-icon-blue/30 [animation-duration:2.4s]" />
          <span className="relative grid size-[1.3em] place-items-center rounded-full bg-icon-blue ring-[0.25em] ring-white">
            <span className="size-[0.4em] rounded-full bg-white" />
          </span>
        </span>
      </span>
    </a>
  );
}

function TrackingMap() {
  return (
    <svg viewBox="0 0 260 219" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
      <g fill="var(--color-map-block)">
        <rect x="60" y="8" width="54" height="34" rx="5" />
        <rect x="150" y="100" width="46" height="36" rx="5" />
        <rect x="102" y="170" width="52" height="40" rx="5" />
        <rect x="200" y="160" width="50" height="46" rx="5" />
      </g>
      <g stroke="#ffffff" strokeLinecap="round" fill="none">
        <path d="M-10 66 C70 58 150 72 270 60" strokeWidth="6" />
        <path d="M-10 150 C80 142 170 158 270 146" strokeWidth="6" />
        <path d="M130 -10 C124 70 140 150 132 230" strokeWidth="5" />
        <path d="M210 -10 C204 80 222 150 214 230" strokeWidth="4" />
      </g>
      {/* river */}
      <path
        d="M40 -10 C28 30 44 60 30 96 S20 150 34 230"
        fill="none"
        stroke="var(--color-map-water)"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <g fill="var(--color-map-water)">
        <circle cx="36" cy="46" r="4" />
        <circle cx="26" cy="82" r="3.5" />
        <circle cx="192" cy="113" r="4" />
      </g>
      <motion.path
        d="M83 80 C84 104 96 118 116 124 S150 132 160 148 S176 160 183 162"
        fill="none"
        stroke="var(--color-green)"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.5, ease: 'easeInOut' }}
      />
    </svg>
  );
}