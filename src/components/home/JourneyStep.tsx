import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { JourneyStepData } from '../../data/howItWorks';
import { toneClasses } from '../../data/home';

interface JourneyStepProps {
  step: JourneyStepData;
  index: number;
  visual: ReactNode;
  isLast: boolean;
}

/**
 * One step of the journey. Desktop: a column (badge, title, copy, visual) whose header
 * and visual are nudged by the reference offsets. Below xl: a vertical timeline row
 * with the badge on a dashed rail.
 */
export default function JourneyStep({ step, index, visual, isLast }: JourneyStepProps) {
  const tone = toneClasses[step.tone];
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid grid-cols-[56px_1fr] gap-x-4 sm:grid-cols-[64px_1fr] sm:gap-x-6 xl:flex xl:flex-col"
      style={{ '--header-offset': `${step.headerOffset}px` } as React.CSSProperties}
    >
      {/* Rail (mobile / tablet) */}
      <div className="relative flex flex-col items-center xl:hidden" aria-hidden>
        {!isLast && <span className="absolute top-[56px] bottom-[-40px] border-l-[1.5px] border-dashed border-connector" />}
      </div>

      <div className="xl:mt-[var(--header-offset)]">
        <span
          className={`absolute top-0 left-0 grid size-[52px] place-items-center rounded-full text-[21px] font-semibold xl:static xl:size-[58px] xl:text-[22px] ${tone.chip} ${tone.icon}`}
        >
          {step.number}
        </span>
        <h3 className="pt-3 text-[20px] leading-tight font-bold tracking-[-0.01em] text-navy xl:mt-[19px] xl:pt-0">
          {step.title}
        </h3>
        <p className="mt-[10px] text-[15.5px] leading-[1.32] text-text-secondary">
          {step.description.map((line, i) => (
            <span key={line}>
              {line}
              {i < step.description.length - 1 && (
                <>
                  <br className="hidden xl:inline" />{' '}
                </>
              )}
            </span>
          ))}
        </p>
      </div>

      <div
        className="col-start-2 mt-6 mb-10 w-full max-w-[250px] xl:mt-auto xl:mb-0 xl:max-w-none xl:pt-0"
      >
        <div className="xl:w-[var(--visual-width)]" style={{ '--visual-width': step.visualWidth } as React.CSSProperties}>
          {visual}
        </div>
      </div>
    </motion.li>
  );
}