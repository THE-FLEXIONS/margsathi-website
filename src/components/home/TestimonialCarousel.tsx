import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CarouselArrows from './CarouselArrows';
import { testimonials } from '../../data/whoWeServe';

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const count = testimonials.length;
  const go = (step: number) => {
    setDirection(step);
    setActive((i) => (i + step + count) % count);
  };
  const slide = testimonials[active];

  return (
    <section aria-roledescription="carousel" aria-label="What parents and travellers say" className="w-full xl:w-auto">
      <div className="flex items-center gap-4 xl:gap-[31px]">
        <div className="relative min-w-0 flex-1 overflow-hidden rounded-[24px] bg-testimonial xl:w-[357px] xl:flex-none">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.figure
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              aria-roledescription="slide"
              aria-label={`${active + 1} of ${count}`}
              className="flex items-center gap-4 py-[20px] pr-4 pl-5 sm:gap-[24px] sm:pl-[20px]"
            >
              <img
                src={slide.avatar}
                alt={slide.author}
                width={76}
                height={76}
                className="size-[60px] shrink-0 rounded-full object-cover shadow-[0_6px_16px_-8px_rgb(19_37_74/0.4)] sm:size-[76px]"
              />
              <div>
                <blockquote className="text-[14px] leading-[1.45] font-medium text-navy">
                  {'\u201C'}
                  {slide.quote.map((line, i) => (
                    <span key={line}>
                      {line}
                      {i < slide.quote.length - 1 ? (
                        <>
                          <br className="hidden sm:inline" />{' '}
                        </>
                      ) : (
                        '\u201D'
                      )}
                    </span>
                  ))}
                </blockquote>
                <figcaption className="mt-[10px] text-[13px] text-text-secondary">
                  - {slide.author}, {slide.role}
                </figcaption>
              </div>
            </motion.figure>
          </AnimatePresence>
        </div>
        <CarouselArrows label="testimonial" onPrev={() => go(-1)} onNext={() => go(1)} disabled={count < 2} className="hidden sm:flex" />
      </div>

      <div className="mt-5 flex items-center justify-between sm:justify-start xl:mt-[29px] xl:pl-[120px]">
        <div className="flex gap-[7px]" role="tablist" aria-label="Choose testimonial">
          {testimonials.map((t, i) => (
            <button
              key={t.author}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => {
                setDirection(i > active ? 1 : -1);
                setActive(i);
              }}
              className={`h-[4px] rounded-full transition-all duration-300 ${i === active ? 'w-[35px] bg-green' : 'w-[34px] bg-border hover:bg-border-strong'}`}
            />
          ))}
        </div>
        <CarouselArrows label="testimonial" onPrev={() => go(-1)} onNext={() => go(1)} disabled={count < 2} className="!gap-3 sm:hidden" />
      </div>
    </section>
  );
}