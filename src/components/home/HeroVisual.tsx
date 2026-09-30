import { motion } from 'framer-motion';
import PhoneMockup from './PhoneMockup';
import FloatingFeatureCard from './FloatingFeatureCard';
import { featureCards } from '../../data/home';

/** Desktop card anchors, measured from the reference (visual box = 1000 x 736). */
const cardSlots = ['lg:top-[28.7%]', 'lg:top-[45.9%]', 'lg:top-[63.1%]'];

/**
 * Right-hand hero composition: transport scene -> phone mockup -> floating feature cards.
 * On desktop every layer is placed as a percentage of one aspect-locked box so the
 * composition scales as a unit; below lg it stacks.
 */
export default function HeroVisual() {
  return (
    <div className="@container relative mt-12 lg:absolute lg:top-0 lg:right-0 lg:mt-0 lg:aspect-[1000/736] lg:w-[62.5%]">
      {/* Scene */}
      <div className="relative h-[560px] overflow-hidden rounded-[28px] bg-scene-warm sm:h-[640px] lg:absolute lg:inset-0 lg:h-auto lg:rounded-none">
        <div className="absolute inset-0 bg-[linear-gradient(100deg,var(--color-surface-page)_0%,var(--color-scene-warm)_38%,#b8966a_58%,var(--color-scene-shade)_100%)]" />
        <img
          src="/assets/hero-mobility-canopy.webp"
          alt=""
          className="absolute top-0 left-[48%] hidden h-[20.4%] w-[52%] object-cover [mask-image:linear-gradient(to_bottom,black_70%,transparent)] lg:block"
        />
        <img
          src="/assets/hero-mobility.webp"
          alt="Students boarding a MARGSATHI bus at a city bus stop in warm morning light"
          className="absolute inset-0 size-full object-cover object-[60%_center] lg:left-[17.2%] lg:w-[30.8%] lg:object-center"
          fetchPriority="high"
        />
        {/* soft hand-off from the white content column */}
        <div className="absolute inset-y-0 left-0 hidden w-[34%] bg-[linear-gradient(90deg,var(--color-surface-page)_18%,rgb(251_252_253/0.85)_45%,transparent)] lg:block" />
        <div className="absolute inset-x-0 bottom-0 hidden h-[28%] w-[42%] bg-[linear-gradient(20deg,var(--color-surface-page)_30%,transparent_70%)] lg:block" />
      </div>

      {/* Phone */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-9 left-1/2 z-10 w-[230px] -translate-x-1/2 sm:w-[262px] lg:top-[21.3%] lg:left-[47.8%] lg:w-[25.6%] lg:translate-x-0"
      >
        <PhoneMockup />
      </motion.div>

      {/* Feature cards */}
      <ul className="relative z-10 mt-5 grid gap-3 sm:grid-cols-3 lg:contents">
        {featureCards.map((card, i) => (
          <li key={card.title} className={`lg:absolute lg:left-[74.5%] lg:h-[14.4%] lg:w-[22.6%] ${cardSlots[i]}`}>
            <FloatingFeatureCard {...card} delay={0.55 + i * 0.12} />
          </li>
        ))}
      </ul>
    </div>
  );
}