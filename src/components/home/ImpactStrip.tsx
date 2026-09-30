import { motion } from 'framer-motion';
import ImpactStat from './ImpactStat';
import type { ImpactStatData } from '../../data/keyFeatures';
import { fadeUp } from '../../lib/motion';

interface ImpactStripProps {
  eyebrow: string;
  heading: [string, string];
  stats: ImpactStatData[];
  /** Desktop layout, measured per reference: intro width and stat column template. */
  introClassName: string;
  columnsClassName: string;
  className?: string;
}

/** Pale statistics strip shared by the Key Features and Who We Serve sections. */
export default function ImpactStrip({ eyebrow, heading, stats, introClassName, columnsClassName, className = '' }: ImpactStripProps) {
  return (
    <motion.div
      {...fadeUp(0)}
      className={`rounded-[28px] bg-strip px-5 py-9 sm:px-8 xl:flex xl:items-center xl:pr-[1.5%] xl:pl-[43px] ${className}`}
    >
      <div className={`xl:shrink-0 ${introClassName}`}>
        <p className="text-[12px] font-semibold tracking-[0.2em] text-text-secondary uppercase sm:text-[13px]">{eyebrow}</p>
        <h3 className="mt-[14px] text-[24px] leading-[1.2] font-bold tracking-[-0.02em] text-navy sm:text-[28.5px]">
          {heading[0]}
          <br />
          {heading[1]}
        </h3>
      </div>
      <dl
        className={`mt-8 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-4 xl:mt-0 xl:flex-1 xl:gap-0 [&>div]:xl:border-l [&>div]:xl:border-border [&>div]:xl:py-[4px] ${columnsClassName}`}
      >
        {stats.map((stat) => (
          <ImpactStat key={stat.value} {...stat} />
        ))}
      </dl>
    </motion.div>
  );
}