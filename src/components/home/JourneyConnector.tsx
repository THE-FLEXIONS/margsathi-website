import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Curved dashed route linking the five step badges on desktop.
 * Geometry is in reference px (1419 x 60 box starting at the first column, badge row).
 * Nodes and arrowheads are HTML so they keep their shape when the box stretches.
 */
const W = 1419;
const H = 60;

const segments = [
  'M80 44 C150 40 200 20 248 17 S276 22 288 28',
  'M372 33 C430 28 486 10 572 17 L590 23',
  'M667 27 C724 24 784 11 840 12 S872 17 880 20',
  'M965 44 C1012 47 1060 40 1100 34 S1138 30 1146 31',
];

const nodes = [
  { x: 248, y: 17, className: 'bg-green' },
  { x: 572, y: 17, className: 'bg-connector' },
];

const arrows = [
  { x: 884, y: 20 },
  { x: 1151, y: 31 },
];

const pct = (v: number, total: number) => `${(v / total) * 100}%`;

export default function JourneyConnector({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="absolute inset-0 size-full overflow-visible">
        {segments.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="var(--color-connector)"
            strokeWidth="1.3"
            strokeDasharray="5 5"
            vectorEffect="non-scaling-stroke"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.18 }}
          />
        ))}
      </svg>
      {nodes.map(({ x, y, className: color }) => (
        <span
          key={x}
          className={`absolute size-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full ${color}`}
          style={{ left: pct(x, W), top: pct(y, H) }}
        />
      ))}
      {arrows.map(({ x, y }) => (
        <ChevronRight
          key={x}
          className="absolute size-[14px] -translate-x-1/2 -translate-y-1/2 text-connector"
          strokeWidth={2.4}
          style={{ left: pct(x, W), top: pct(y, H) }}
        />
      ))}
    </div>
  );
}