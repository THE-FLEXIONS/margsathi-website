import { motion } from 'framer-motion';
import SectionEyebrow from '../ui/SectionEyebrow';
import AudienceItem from './AudienceItem';
import { builtForEveryone } from '../../data/whyItMatters';
import { fadeUp } from '../../lib/motion';

export default function BuiltForEveryone() {
  const { eyebrow, heading, audiences } = builtForEveryone;
  return (
    <motion.div
      {...fadeUp(0)}
      className="relative z-10 rounded-[24px] bg-strip/85 px-5 py-9 backdrop-blur-sm sm:px-8 xl:flex xl:items-center xl:rounded-[26px] xl:py-[47px] xl:pr-[1.6%] xl:pl-[48px]"
    >
      <div className="xl:w-[362px] xl:shrink-0">
        <SectionEyebrow label={eyebrow} className="!h-[25px] !px-[13px] !text-[11.5px]" />
        <h3 className="mt-5 text-[26px] leading-[1.13] font-bold tracking-[-0.02em] text-navy sm:text-[30px] xl:mt-[27px]">
          {heading[0]}
          <br />
          {heading[1]}
        </h3>
      </div>
      <ul className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 max-sm:[&>li:last-child]:col-span-2 xl:mt-0 xl:flex xl:flex-1 xl:gap-0 xl:divide-x xl:divide-border [&>li]:xl:flex-1 [&>li]:xl:px-2">
        {audiences.map((audience) => (
          <AudienceItem key={audience.title} {...audience} />
        ))}
      </ul>
    </motion.div>
  );
}