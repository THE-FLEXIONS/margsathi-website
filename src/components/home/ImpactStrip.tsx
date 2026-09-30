import { motion } from 'framer-motion';
import ImpactStat from './ImpactStat';
import { impact } from '../../data/keyFeatures';
import { fadeUp } from '../../lib/motion';

export default function ImpactStrip() {
  return (
    <motion.div
      {...fadeUp(0)}
      className="rounded-[28px] bg-strip px-5 py-9 sm:px-8 xl:flex xl:min-h-[185px] xl:items-center xl:py-[24px] xl:pr-[1.5%] xl:pl-[43px]"
    >
      <div className="xl:w-[338px] xl:shrink-0">
        <p className="text-[12px] font-semibold tracking-[0.2em] text-text-secondary uppercase sm:text-[13px]">{impact.eyebrow}</p>
        <h3 className="mt-[14px] text-[24px] leading-[1.2] font-bold tracking-[-0.02em] text-navy sm:text-[28.5px]">
          {impact.heading[0]}
          <br />
          {impact.heading[1]}
        </h3>
      </div>
      <dl className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-4 xl:mt-0 xl:flex-1 xl:grid-cols-[245fr_247fr_275fr_256fr] xl:gap-0 [&>div]:xl:border-l [&>div]:xl:border-border [&>div]:xl:py-[4px]">
        {impact.stats.map((stat) => (
          <ImpactStat key={stat.value} {...stat} />
        ))}
      </dl>
    </motion.div>
  );
}