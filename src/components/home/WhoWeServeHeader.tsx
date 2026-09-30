import { motion } from 'framer-motion';
import TestimonialCarousel from './TestimonialCarousel';
import { whoWeServeCopy } from '../../data/whoWeServe';
import { fadeUp } from '../../lib/motion';

export default function WhoWeServeHeader() {
  return (
    <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:justify-between xl:gap-6 xl:pl-[1.9%]">
      <div>
        <motion.p
          {...fadeUp(0)}
          className="flex h-[27px] w-fit items-center rounded-full bg-mint-strong/70 px-[14px] text-[13px] font-bold tracking-[0.12em] text-green uppercase sm:text-[14px]"
        >
          {whoWeServeCopy.eyebrow}
        </motion.p>
        <motion.h2
          {...fadeUp(0.08)}
          id="serve-heading"
          className="mt-6 text-[clamp(34px,3.55vw,54.5px)] leading-[1.03] font-bold tracking-[-0.03em] text-navy xl:mt-[21px] xl:whitespace-nowrap"
        >
          Different journeys.
          <br />A <span className="text-orange">safer</span>{' '}
          <span className="bg-gradient-to-r from-green to-green-light bg-clip-text text-transparent">tomorrow</span> for everyone.
        </motion.h2>
        <motion.p
          {...fadeUp(0.16)}
          className="mt-5 max-w-[750px] text-[17px] leading-[1.4] text-text-secondary sm:text-[clamp(17px,1.3vw,20px)] xl:mt-[17px]"
        >
          {whoWeServeCopy.description}
        </motion.p>
      </div>
      <motion.div {...fadeUp(0.2)} className="xl:mt-[50px] xl:pr-[0.2%]">
        <TestimonialCarousel />
      </motion.div>
    </div>
  );
}