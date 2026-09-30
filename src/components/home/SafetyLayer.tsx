import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import SafetyLayerItem from './SafetyLayerItem';
import { safetyLayer } from '../../data/howItWorks';
import { fadeUp } from '../../lib/motion';

export default function SafetyLayer() {
  return (
    <motion.div
      {...fadeUp(0)}
      className="rounded-[26px] bg-strip-mint px-5 py-9 sm:px-8 xl:flex xl:items-center xl:py-[16px] xl:pr-[1.5%] xl:pl-[43px]"
    >
      <div className="flex items-center gap-6 xl:w-[520px] xl:shrink-0">
        <span className="grid size-[72px] shrink-0 place-items-center rounded-full bg-white shadow-[0_8px_24px_-12px_rgb(19_37_74/0.2)] sm:size-[88px]" aria-hidden>
          <ShieldCheck className="size-[36px] fill-green text-green sm:size-[44px] [&>path:last-child]:stroke-white" strokeWidth={2} />
        </span>
        <div>
          <p className="text-[12px] font-semibold tracking-[0.18em] text-text-secondary uppercase sm:text-[13px]">{safetyLayer.eyebrow}</p>
          <h3 className="mt-[10px] text-[22px] leading-[1.15] font-bold tracking-[-0.02em] text-navy sm:text-[28px]">
            {safetyLayer.heading[0]}
            <br />
            {safetyLayer.heading[1]}
          </h3>
        </div>
      </div>
      <ul className="mt-9 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-4 xl:mt-0 xl:flex xl:flex-1 xl:gap-0 [&>li]:xl:flex-1 [&>li:not(:first-child)]:xl:border-l [&>li:not(:first-child)]:xl:border-border">
        {safetyLayer.items.map((item) => (
          <SafetyLayerItem key={item.title} {...item} />
        ))}
      </ul>
    </motion.div>
  );
}