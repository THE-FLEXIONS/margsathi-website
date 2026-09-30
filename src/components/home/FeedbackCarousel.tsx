import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import FeedbackCard from './FeedbackCard';
import type { Feedback } from '../../data/earlyFeedback';

interface FeedbackCarouselProps {
  items: Feedback[];
  /** Rotation applied when every card is already visible (md and up). */
  offset: number;
}

/**
 * Below md: a swipeable scroll-snap track. From md: a grid whose order rotates with the
 * arrow controls, animated with layout transitions.
 */
const FeedbackCarousel = forwardRef<HTMLUListElement, FeedbackCarouselProps>(({ items, offset }, ref) => {
  const ordered = items.map((_, i) => items[(i + offset) % items.length]);
  return (
    <ul
      ref={ref}
      aria-label="Reviewer feedback"
      className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-2 [scrollbar-width:none] sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-4 xl:gap-[18px] [&::-webkit-scrollbar]:hidden"
    >
      {ordered.map((item, i) => (
        <motion.li
          key={item.reviewer}
          layout
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1], layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          className="w-[86%] max-w-[360px] shrink-0 snap-start md:w-auto md:max-w-none"
        >
          <FeedbackCard {...item} />
        </motion.li>
      ))}
    </ul>
  );
});
FeedbackCarousel.displayName = 'FeedbackCarousel';

export default FeedbackCarousel;