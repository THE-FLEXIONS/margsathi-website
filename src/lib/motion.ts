const ease = [0.22, 1, 0.36, 1] as const;

/** Subtle rise-in used for section content as it scrolls into view. */
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease },
});