import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionEyebrow from '../ui/SectionEyebrow';
import ProblemStatistics from './ProblemStatistics';
import { problemStats, whyCopy } from '../../data/whyItMatters';
import { fadeUp } from '../../lib/motion';

export default function WhyItMattersContent() {
  return (
    <div className="relative z-10 xl:max-w-[46%]">
      <motion.div {...fadeUp(0)}>
        <SectionEyebrow label={whyCopy.eyebrow} />
      </motion.div>

      <motion.h2
        {...fadeUp(0.08)}
        id="why-heading"
        className="mt-6 text-[clamp(34px,3.46vw,53px)] leading-[1.05] font-bold tracking-[-0.03em] text-navy xl:mt-[25px] xl:whitespace-nowrap"
      >
        Every traveler deserves
        <br />a <span className="text-orange">safer</span>{' '}
        <span className="bg-gradient-to-r from-green to-green-light bg-clip-text text-transparent">journey</span>.
      </motion.h2>

      <motion.p
        {...fadeUp(0.16)}
        className="mt-5 max-w-[600px] text-[17px] leading-[1.33] text-text-secondary sm:text-[clamp(17px,1.3vw,20px)] xl:mt-[19px]"
      >
        {whyCopy.description}
      </motion.p>

      <motion.div {...fadeUp(0.24)} className="mt-10 xl:mt-[50px]">
        <ProblemStatistics stats={problemStats} />
      </motion.div>

      <motion.div {...fadeUp(0.32)} className="mt-9 xl:mt-[22px]">
        <a
          href="#solution"
          className="group inline-flex h-[45px] items-center gap-[22px] rounded-full border border-border bg-soft-blue/60 pr-[26px] pl-[22px] text-[15px] font-medium text-navy transition-colors duration-300 hover:border-border-strong hover:bg-soft-blue"
        >
          {whyCopy.cta}
          <ArrowRight className="size-[19px] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} aria-hidden />
        </a>
      </motion.div>
    </div>
  );
}