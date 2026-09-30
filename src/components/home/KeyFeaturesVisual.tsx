import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import FeatureProfileCard from './FeatureProfileCard';
import FeatureMapCard from './FeatureMapCard';
import FeatureRoute from './FeatureRoute';
import SafetyInfoCard from './SafetyInfoCard';
import { visualCards } from '../../data/keyFeatures';

const photoAlt = 'Mother and schoolgirl smiling at each other while checking a phone at a bus stop';

function Reveal({ children, delay, className }: { children: ReactNode; delay: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const cardTops = ['top-[47%]', 'top-[61.3%]', 'top-[75.7%]'];

/**
 * Right-hand composition. From xl every layer is placed as a percentage of the photo
 * plate (reference 710 x 770) and type scales with cqw. Below xl it stacks.
 */
export default function KeyFeaturesVisual() {
  return (
    <>
      <div className="@container absolute top-[calc(-1*min(54px,3.5vw))] right-0 left-[51.07%] hidden aspect-[710/770] xl:block">
        <div className="relative size-full text-[1.9cqw]">
          <FeatureRoute className="absolute inset-0 size-full" />
          <Reveal delay={0} className="absolute inset-0">
            <img src="/assets/features/guardian-student-wide.webp" alt={photoAlt} width={710} height={770} loading="lazy" className="size-full object-cover" />
          </Reveal>
          <Reveal delay={0.2} className="absolute top-[18.2%] left-[-1.55%] w-[34.2%]">
            <FeatureProfileCard className="min-h-[5.3em]" />
          </Reveal>
          <Reveal delay={0.3} className="absolute top-[8.4%] left-[55.2%] h-[29.5%] w-[40.1%] text-[1.83cqw]">
            <FeatureMapCard className="size-full" />
          </Reveal>
          {visualCards.map((card, i) => (
            <Reveal key={card.title} delay={0.4 + i * 0.1} className={`absolute left-[63.5%] h-[12.5%] w-[30.8%] ${cardTops[i]}`}>
              <SafetyInfoCard {...card} className="h-full !rounded-[1.1em] !pl-[1.1em]" />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Below xl: photo with profile card, then map and cards */}
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:hidden">
        <Reveal delay={0} className="relative">
          <img
            src="/assets/features/guardian-student.webp"
            alt={photoAlt}
            width={386}
            height={495}
            loading="lazy"
            className="aspect-[386/470] w-full rounded-[24px] object-cover object-top shadow-card"
          />
          <div className="absolute top-4 left-4 w-[min(250px,calc(100%-32px))] text-[13px]">
            <FeatureProfileCard />
          </div>
        </Reveal>
        <div className="flex flex-col gap-4">
          <Reveal delay={0.1} className="text-[13.5px]">
            <FeatureMapCard className="aspect-[285/227] w-full" />
          </Reveal>
          <ul className="grid gap-3 text-[13.5px]">
            {visualCards.map((card, i) => (
              <li key={card.title}>
                <Reveal delay={0.15 + i * 0.05}>
                  <SafetyInfoCard {...card} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}