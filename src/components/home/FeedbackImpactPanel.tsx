import { motion } from 'framer-motion';
import QuoteMark from './QuoteMark';
import ImpactInsight from './ImpactInsight';
import { feedbackImpact } from '../../data/earlyFeedback';
import { fadeUp } from '../../lib/motion';

export default function FeedbackImpactPanel() {
  return (
    <motion.div
      {...fadeUp(0)}
      className="grid items-center gap-8 overflow-hidden rounded-[28px] bg-white/70 pb-6 shadow-[0_10px_40px_-28px_rgb(19_37_74/0.25)] md:grid-cols-2 md:pb-0 xl:grid-cols-[496fr_586fr_318fr] xl:gap-0 xl:pr-[16px]"
    >
      <div className="group h-[240px] overflow-hidden rounded-[24px] md:h-full md:min-h-[260px] xl:h-[260px]">
        <img
          src="/assets/feedback/student-bus-stop.webp"
          alt="Schoolgirl with a backpack looking ahead at a busy bus stop"
          width={480}
          height={252}
          loading="lazy"
          className="size-full object-cover object-[35%_center] transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex gap-4 px-6 sm:gap-[31px] md:py-8 xl:py-0 xl:pr-6 xl:pl-[47px]">
        <QuoteMark className="h-[34px] shrink-0 text-[76px] text-green/55" />
        <div className="pt-[18px]">
          <p className="text-[22px] leading-[1.13] font-bold tracking-[-0.02em] text-navy sm:text-[26px] xl:text-[clamp(22px,1.78vw,27.5px)]">
            The feedback motivates us
            <br className="hidden sm:inline" /> to build a <span className="text-green">safer</span>,{' '}
            <span className="text-green">more connected</span>
            <br className="hidden sm:inline" /> future for every journey.
          </p>
          <span className="mt-[22px] block h-[2px] w-[32px] rounded-full bg-green/60" aria-hidden />
          <p className="mt-[22px] text-[15px] leading-[1.4] text-text-secondary xl:text-[15.5px]">
            {feedbackImpact.description[0]}
            <br className="hidden 2xl:inline" /> {feedbackImpact.description[1]}
          </p>
        </div>
      </div>

      <ul className="mx-6 flex flex-col gap-[14px] rounded-[24px] bg-tint-green px-[37px] py-[20px] md:col-span-2 md:mb-6 xl:col-span-1 xl:mx-0 xl:mb-0">
        {feedbackImpact.insights.map((insight) => (
          <ImpactInsight key={insight.text[0]} {...insight} />
        ))}
      </ul>
    </motion.div>
  );
}