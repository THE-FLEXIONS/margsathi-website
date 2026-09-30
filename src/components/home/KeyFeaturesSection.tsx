import { motion } from 'framer-motion';
import FeatureGrid from './FeatureGrid';
import FeaturesLink from './FeaturesLink';
import KeyFeaturesVisual from './KeyFeaturesVisual';
import ImpactStrip from './ImpactStrip';
import { keyFeaturesCopy } from '../../data/keyFeatures';
import { fadeUp } from '../../lib/motion';

export default function KeyFeaturesSection() {
  return (
    <section id="features" aria-labelledby="features-heading" className="relative">
      <div className="mx-auto max-w-[1536px] px-4 pt-16 pb-12 sm:px-8 xl:pt-[min(54px,3.5vw)] xl:pr-0 xl:pb-[31px] xl:pl-[5.5%]">
        <div className="relative xl:min-h-[min(716px,46.6vw)]">
          <div className="relative z-10 xl:w-[48.3%]">
            <motion.p
              {...fadeUp(0)}
              className="flex h-[27px] w-fit items-center rounded-full bg-mint-strong/70 px-[14px] text-[13px] font-bold tracking-[0.12em] text-green uppercase sm:text-[14px]"
            >
              {keyFeaturesCopy.eyebrow}
            </motion.p>
            <motion.h2
              {...fadeUp(0.08)}
              id="features-heading"
              className="mt-6 text-[clamp(34px,3.5vw,54px)] leading-[1.03] font-bold tracking-[-0.03em] text-navy xl:mt-[20px] xl:whitespace-nowrap"
            >
              Safety and convenience,
              <br />
              built for <span className="text-orange">real life.</span>
            </motion.h2>
            <motion.p
              {...fadeUp(0.16)}
              className="mt-5 max-w-[565px] text-[17px] leading-[1.33] text-text-secondary sm:text-[clamp(17px,1.27vw,19.5px)] xl:mt-[14px]"
            >
              {keyFeaturesCopy.description}
            </motion.p>
            <div className="mt-8 xl:mt-[22px]">
              <FeatureGrid />
            </div>
            <div className="mt-7 xl:mt-[15px] xl:pl-[3px]">
              <FeaturesLink label={keyFeaturesCopy.link} />
            </div>
          </div>
          <KeyFeaturesVisual />
        </div>

        <div className="mt-10 xl:mt-[22px] xl:mr-[3.3%] xl:-ml-[2.15%]">
          <ImpactStrip />
        </div>
      </div>
    </section>
  );
}