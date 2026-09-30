import { motion } from 'framer-motion';
import type { FeatureCardData } from '../../data/home';
import { toneClasses } from '../../data/home';

interface FloatingFeatureCardProps extends FeatureCardData {
  delay: number;
}

/** Frosted feature card layered over the hero scene, to the right of the phone. */
export default function FloatingFeatureCard({ icon: Icon, title, description, tone, delay }: FloatingFeatureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full items-center gap-4 rounded-[18px] border border-white/70 bg-white/90 px-5 py-4 shadow-card backdrop-blur-md lg:gap-[clamp(10px,1.4cqw,16px)] lg:rounded-[clamp(12px,1.6cqw,16px)] lg:pr-[clamp(6px,0.9cqw,10px)] lg:pl-[clamp(10px,1.5cqw,15px)] lg:py-0"
    >
      <span
        className={`grid size-11 shrink-0 place-items-center rounded-full lg:size-[clamp(30px,4.4cqw,44px)] ${toneClasses[tone].chip}`}
        aria-hidden
      >
        <Icon className={`size-[22px] lg:size-[clamp(16px,2.2cqw,22px)] ${toneClasses[tone].icon}`} strokeWidth={2.3} />
      </span>
      <div className="min-w-0">
        <h3 className="text-[15px] leading-tight font-semibold tracking-[-0.01em] whitespace-nowrap text-navy lg:text-[clamp(11px,1.45cqw,14.5px)]">{title}</h3>
        <p className="mt-1.5 text-[13px] leading-[1.4] text-text-secondary lg:mt-[clamp(3px,0.6cqw,6px)] lg:text-[clamp(9.5px,1.22cqw,12.5px)]">
          {description[0]}
          <br className="hidden lg:inline" /> {description[1]}
        </p>
      </div>
    </motion.article>
  );
}