import { motion } from 'framer-motion';

/**
 * Thin green route curving around the photo plate. Drawn in the plate's reference
 * coordinate space (710 x 770); overflows left and below the plate.
 */
const routes = [
  'M4 445 C-56 410 -92 350 -81 288 S-38 206 -10 198',
  'M606 680 C594 728 556 774 489 792',
];

export default function FeatureRoute({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 710 770" className={`pointer-events-none overflow-visible ${className}`} aria-hidden>
      {routes.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke="var(--color-green)"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.85"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.3 + i * 0.4, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  );
}