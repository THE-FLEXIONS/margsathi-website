import { motion } from 'framer-motion';
import FeedbackNotice from './FeedbackNotice';
import CarouselArrows from './CarouselArrows';
import { earlyFeedbackCopy } from '../../data/earlyFeedback';
import { fadeUp } from '../../lib/motion';

interface FeedbackHeaderProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function FeedbackHeader({ onPrev, onNext }: FeedbackHeaderProps) {
  return (
    <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between xl:gap-6 xl:pl-[1.2%]">
      <div className="relative z-10">
        <motion.p
          {...fadeUp(0)}
          className="flex h-[27px] w-fit items-center rounded-full bg-mint-strong/70 px-[14px] text-[13px] font-bold tracking-[0.12em] text-green uppercase sm:text-[14px]"
        >
          {earlyFeedbackCopy.eyebrow}
        </motion.p>
        <motion.h2
          {...fadeUp(0.08)}
          id="feedback-heading"
          className="mt-6 text-[clamp(34px,3.3vw,50.5px)] leading-[1.1] font-bold tracking-[-0.03em] text-navy xl:mt-[20px] xl:whitespace-nowrap"
        >
          Encouraging feedback
          <br />
          from our <span className="text-orange">early</span> <span className="text-green">reviewers.</span>
        </motion.h2>
        <motion.p
          {...fadeUp(0.16)}
          className="mt-5 max-w-[700px] text-[16.5px] leading-[1.4] text-text-secondary sm:text-[clamp(16.5px,1.1vw,17px)] xl:mt-[18px]"
        >
          {earlyFeedbackCopy.description[0]}
          <br className="hidden xl:inline" /> {earlyFeedbackCopy.description[1]}
        </motion.p>
      </div>

      <motion.div
        {...fadeUp(0.22)}
        className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between xl:mt-[144px] xl:mr-[6px] xl:items-start xl:gap-[106px]"
      >
        <FeedbackNotice note={earlyFeedbackCopy.note} />
        <CarouselArrows label="feedback" onPrev={onPrev} onNext={onNext} className="shrink-0 xl:mt-[66px]" />
      </motion.div>
    </div>
  );
}