import { motion } from 'framer-motion';
import HeroBadge from './HeroBadge';
import HeroActions from './HeroActions';
import HeroStats from './HeroStats';
import { heroCopy, heroStats } from '../../data/home';

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function HeroContent() {
  return (
    <div className="relative z-20 lg:max-w-[46%]">
      <motion.div {...rise(0)}>
        <HeroBadge label={heroCopy.badge} />
      </motion.div>

      <motion.h1
        id="hero-heading"
        {...rise(0.08)}
        className="mt-7 text-[clamp(40px,4.78vw,76.5px)] leading-[1.04] font-bold tracking-[-0.035em] text-navy lg:mt-[36px] lg:whitespace-nowrap"
      >
        Smarter mobility
        <br />
        for a <span className="text-orange">safer</span>{' '}
        <span className="bg-gradient-to-r from-green to-green-light bg-clip-text text-transparent">tomorrow.</span>
      </motion.h1>

      <motion.p
        {...rise(0.16)}
        className="mt-6 max-w-[552px] text-[17px] leading-[1.55] font-medium text-text-secondary sm:text-[clamp(17px,1.3vw,20.5px)] lg:mt-[16px]"
      >
        {heroCopy.description}
      </motion.p>

      <motion.div {...rise(0.24)} className="mt-9 lg:mt-[22px]">
        <HeroActions primaryLabel={heroCopy.primaryCta} videoLabel={heroCopy.videoCta} />
      </motion.div>

      <motion.div {...rise(0.32)} className="mt-12 lg:mt-[73px]">
        <HeroStats stats={heroStats} />
      </motion.div>
    </div>
  );
}