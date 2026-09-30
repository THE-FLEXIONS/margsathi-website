import { motion } from 'framer-motion';
import { howCopy } from '../../data/howItWorks';
import { fadeUp } from '../../lib/motion';
import JourneyRouteBackground from './JourneyRouteBackground';
import LiveLocationCard from './LiveLocationCard';
import ArrivingCard from './ArrivingCard';

export default function HowItWorksIntro() {
  return (
    <div className="relative">
      <div className="relative z-10 xl:max-w-[46%]">
        <motion.p
          {...fadeUp(0)}
          className="flex h-[27px] w-fit items-center rounded-full bg-mint-strong/70 px-[14px] text-[13px] font-bold tracking-[0.12em] text-green uppercase sm:text-[14px]"
        >
          {howCopy.eyebrow}
        </motion.p>
        <motion.h2
          {...fadeUp(0.08)}
          id="how-heading"
          className="mt-6 text-[clamp(32px,3.06vw,47px)] leading-[1.08] font-bold tracking-[-0.03em] text-navy xl:mt-[20px] xl:whitespace-nowrap"
        >
          From planning to a
          <br />
          <span className="text-orange">safe arrival</span>, we{'\u2019'}re with you.
        </motion.h2>
        <motion.p
          {...fadeUp(0.16)}
          className="mt-5 max-w-[560px] text-[17px] leading-[1.36] text-text-secondary sm:text-[clamp(17px,1.2vw,18.5px)] xl:mt-[22px]"
        >
          {howCopy.description}
        </motion.p>
      </div>

      {/* Desktop: map + floating status cards (box = 746 x 270 at 1536w) */}
      <div className="@container absolute top-[calc(-1*min(38px,2.5vw))] right-[calc(-1*min(32px,2.1vw))] left-[49.7%] hidden aspect-[746/270] xl:block">
        <JourneyRouteBackground className="absolute top-0 left-[26.3%] aspect-[550/280] w-[73.7%]" />
        <motion.div {...fadeUp(0.3)} className="absolute top-[46.3%] left-0 w-[34.5%] text-[1.9cqw]">
          <LiveLocationCard />
        </motion.div>
        <motion.div {...fadeUp(0.45)} className="absolute top-[63.7%] left-[58.7%] w-[37%] text-[1.9cqw]">
          <ArrivingCard />
        </motion.div>
      </div>

      {/* Below xl: the two status cards in flow */}
      <div className="mt-8 flex flex-wrap gap-4 text-[13.5px] xl:hidden">
        <LiveLocationCard className="w-full max-w-[290px]" />
        <ArrivingCard className="w-full max-w-[290px]" />
      </div>
    </div>
  );
}