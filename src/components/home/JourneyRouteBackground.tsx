import { Bus, House } from 'lucide-react';
import { motion } from 'framer-motion';

/** Low-contrast decorative map with the school route, behind the top-right status cards. */
export default function JourneyRouteBackground({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden>
      <svg viewBox="0 0 550 280" className="absolute inset-0 size-full">
        <defs>
          <radialGradient id="route-map-fade" cx="0.55" cy="0.4" r="0.65">
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#000" />
          </radialGradient>
          <mask id="route-map-mask">
            <rect width="550" height="280" fill="url(#route-map-fade)" />
          </mask>
        </defs>
        <g mask="url(#route-map-mask)" opacity="0.55">
          <g stroke="var(--color-border)" strokeWidth="1.2" fill="none">
            <path d="M0 40 L210 0 M60 280 L260 0 M180 280 L420 0 M300 280 L550 40 M0 150 L550 60 M40 260 L550 170" />
            <path d="M120 0 L200 280 M380 0 L470 280 M520 0 L540 280" />
          </g>
          <g fill="var(--color-map-block)">
            <path d="M60 80 l22 -6 6 20 -22 6z" />
            <path d="M300 30 l28 -8 8 26 -28 8z" />
            <path d="M430 190 l26 -8 8 24 -26 8z" />
          </g>
          <path d="M181 50 l7 -12 7 12 -7 12z" fill="var(--color-map-water)" />
          <circle cx="468" cy="98" r="3.5" fill="var(--color-map-water)" />
        </g>
        <motion.path
          d="M144 103 C156 122 172 150 194 148 S232 128 254 122 S312 96 341 82"
          fill="none"
          stroke="var(--color-green)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
        <motion.path
          d="M341 82 C340 112 350 142 394 158 S440 146 459 133"
          fill="none"
          stroke="var(--color-green)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 1.1, ease: 'easeInOut' }}
        />
        <circle cx="144" cy="103" r="4.5" fill="#fff" stroke="var(--color-green)" strokeWidth="2.5" />
        <circle cx="194" cy="148" r="4" fill="var(--color-green)" />
        <circle cx="254" cy="122" r="4" fill="var(--color-green)" />
        <circle cx="394" cy="158" r="4" fill="var(--color-orange)" />
      </svg>
      {/* bus marker */}
      <span className="absolute top-[29.3%] left-[62%] grid aspect-square w-[9.4%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-card ring-[0.35cqw] ring-orange/70">
        <span className="grid size-[74%] place-items-center rounded-full bg-orange">
          <Bus className="size-[58%] text-white" strokeWidth={2.4} />
        </span>
      </span>
      {/* destination */}
      <span className="absolute top-[47.5%] left-[83.5%] grid aspect-square w-[5.6%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-icon-blue shadow-card ring-[0.3cqw] ring-white">
        <House className="size-[55%] fill-white text-white" strokeWidth={2} />
      </span>
    </div>
  );
}