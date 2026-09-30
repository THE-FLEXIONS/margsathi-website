import { useRef, useState } from 'react';
import FeedbackHeader from './FeedbackHeader';
import FeedbackCarousel from './FeedbackCarousel';
import FeedbackImpactPanel from './FeedbackImpactPanel';
import { feedback } from '../../data/earlyFeedback';

export default function EarlyFeedbackSection() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [offset, setOffset] = useState(0);

  // Scroll the track when it overflows (small screens); otherwise rotate the visible order.
  const step = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (track && track.scrollWidth > track.clientWidth + 2) {
      const card = track.firstElementChild as HTMLElement | null;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      track.scrollBy({ left: dir * ((card?.offsetWidth ?? track.clientWidth) + gap), behavior: 'smooth' });
      return;
    }
    setOffset((o) => (o + dir + feedback.length) % feedback.length);
  };

  return (
    <section id="early-feedback" aria-labelledby="feedback-heading" className="relative overflow-hidden">
      <div className="relative mx-auto max-w-[1536px]">
        {/* decorative plate + route line, top-right (reference: 476 x 228 at x 1060) */}
        <img
          src="/assets/feedback/student-bus-plate.webp"
          alt=""
          width={476}
          height={228}
          loading="lazy"
          className="pointer-events-none absolute top-0 right-0 hidden w-[31%] xl:block"
          aria-hidden
        />
        <svg
          viewBox="0 0 200 100"
          className="pointer-events-none absolute top-0 left-[56.9%] hidden w-[13%] xl:block"
          fill="none"
          aria-hidden
        >
          <path
            d="M0 97 C25 75 60 52 82 55 C95 57 88 80 80 83 C72 86 76 70 90 62 C120 44 160 20 196 0"
            stroke="var(--color-green)"
            strokeOpacity="0.55"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative px-4 pt-16 pb-12 sm:px-8 xl:pt-[min(46px,3vw)] xl:pr-[3.95%] xl:pb-[36px] xl:pl-[4.35%]">
          <FeedbackHeader onPrev={() => step(-1)} onNext={() => step(1)} />
          <div className="mt-8 xl:mt-[20px]">
            <FeedbackCarousel ref={trackRef} items={feedback} offset={offset} />
          </div>
          <div className="mt-8 xl:mt-[26px] xl:-ml-[0.3%]">
            <FeedbackImpactPanel />
          </div>
        </div>
      </div>
    </section>
  );
}