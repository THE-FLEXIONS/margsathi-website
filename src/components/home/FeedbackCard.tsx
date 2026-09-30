import QuoteMark from './QuoteMark';
import ReviewerBadge from './ReviewerBadge';
import type { Feedback } from '../../data/earlyFeedback';
import type { Tone } from '../../data/home';
import { toneClasses } from '../../data/home';

const cardTint: Record<Tone, string> = {
  blue: 'bg-tint-blue',
  green: 'bg-tint-green',
  orange: 'bg-tint-orange',
  purple: 'bg-tint-purple',
  red: 'bg-tint-red',
};

export default function FeedbackCard({ quote, reviewer, role, avatar, badge, theme }: Feedback) {
  return (
    <figure
      className={`flex h-full flex-col rounded-[24px] border border-border/60 px-[24px] pt-[24px] pb-[21px] shadow-[0_10px_30px_-20px_rgb(19_37_74/0.2)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-20px_rgb(19_37_74/0.3)] xl:px-[30px] ${cardTint[theme]}`}
    >
      <QuoteMark className={`h-[27px] text-[64px] ${toneClasses[theme].icon}`} />
      <blockquote className="mt-[14px] flex-1 text-[17px] leading-[1.33] text-navy/90 xl:text-[clamp(15.5px,1.17vw,18px)]">
        {quote}
      </blockquote>
      <hr className="mt-[18px] border-border/80" />
      <figcaption className="mt-[15px] flex items-center gap-[20px]">
        <img
          src={avatar}
          alt={`Portrait of ${reviewer}`}
          width={65}
          height={65}
          loading="lazy"
          className="size-[56px] shrink-0 rounded-full object-cover xl:size-[64px]"
        />
        <span className="leading-[1.35]">
          <span className="block text-[16px] font-semibold text-navy">{reviewer}</span>
          <span className="mt-[3px] block text-[14.5px] text-text-secondary">
            {role[0]}
            <br />
            {role[1]}
          </span>
        </span>
      </figcaption>
      <div className="mt-[22px]">
        <ReviewerBadge label={badge} tone={theme} />
      </div>
    </figure>
  );
}