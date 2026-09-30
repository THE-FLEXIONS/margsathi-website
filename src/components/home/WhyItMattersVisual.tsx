import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import EmergencySOSCard from './EmergencySOSCard';
import LiveTrackingCard from './LiveTrackingCard';
import ChildSafetyCard from './ChildSafetyCard';
import WomenSafetyCard from './WomenSafetyCard';

const mainPhoto = {
  src: '/assets/why/traveller-bus-stop.webp',
  alt: 'Young woman with a backpack checking her phone at a city bus stop at sunset',
};

function Reveal({ children, delay, className }: { children: ReactNode; delay: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Layered collage. From xl up every layer is positioned as a percentage of one
 * aspect-locked box (reference: 768 x 590) and card type scales with cqw; below xl
 * it becomes a stacked, readable layout.
 */
export default function WhyItMattersVisual() {
  return (
    <>
      {/* Desktop collage */}
      <div className="@container absolute top-[min(27px,1.76vw)] left-[48.3%] hidden aspect-[768/590] w-1/2 max-w-[768px] xl:block">
        <div className="relative size-full text-[1.76cqw]">
          <span className="absolute top-[4.6%] left-[64.2%] h-[59%] w-[35.8%] rounded-[5cqw] bg-soft-blue" aria-hidden />
          <span className="absolute top-[39%] left-[2.3%] h-[25%] w-[9%] rounded-[4cqw] bg-soft-blue/70" aria-hidden />

          <Reveal delay={0} className="absolute top-[0.85%] left-[8.85%] h-[87.3%] w-[59.4%] [perspective:1400px]">
            <img
              src={mainPhoto.src}
              alt={mainPhoto.alt}
              width={456}
              height={515}
              loading="lazy"
              className="size-full origin-right rounded-[2.8cqw] object-cover shadow-card [transform:rotateY(-9deg)]"
            />
          </Reveal>

          <Reveal delay={0.2} className="absolute top-[10.5%] left-0 h-[14.2%] w-[31%]">
            <EmergencySOSCard />
          </Reveal>
          <Reveal delay={0.3} className="absolute top-[9.8%] left-[62%] h-[51.7%] w-[35.2%]">
            <LiveTrackingCard className="size-full" />
          </Reveal>
          <Reveal delay={0.4} className="absolute top-[65.3%] left-[5.9%] w-[29.6%]">
            <ChildSafetyCard />
          </Reveal>
          <Reveal delay={0.5} className="absolute top-[65.3%] left-[54.2%] w-[37%]">
            <WomenSafetyCard />
          </Reveal>
        </div>
      </div>

      {/* Tablet / mobile stack */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:hidden">
        <Reveal delay={0} className="relative">
          <img
            src={mainPhoto.src}
            alt={mainPhoto.alt}
            width={456}
            height={515}
            loading="lazy"
            className="aspect-[406/375] w-full rounded-[22px] object-cover object-left-top shadow-card sm:aspect-[406/420]"
          />
          <div className="absolute top-4 left-4 w-[min(250px,calc(100%-32px))] text-[13px]">
            <EmergencySOSCard />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="text-[14px]">
          <LiveTrackingCard className="aspect-[270/305] w-full sm:h-full sm:aspect-auto" />
        </Reveal>
        <Reveal delay={0.15} className="pb-[16%] sm:pb-[18%]">
          <ChildSafetyCard className="mx-auto w-full max-w-[300px]" />
        </Reveal>
        <Reveal delay={0.2} className="pb-[16%] sm:pb-[18%]">
          <WomenSafetyCard className="w-[82%] max-w-[300px]" />
        </Reveal>
      </div>
    </>
  );
}