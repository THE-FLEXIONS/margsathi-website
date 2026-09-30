/** Organic mint wave entering from the lower-right edge of the hero. */
export default function HeroDecoration() {
  return (
    <svg
      viewBox="0 0 640 260"
      preserveAspectRatio="none"
      className="pointer-events-none absolute right-0 bottom-0 z-[5] hidden h-[30%] w-[42%] lg:block"
      aria-hidden
    >
      <defs>
        <linearGradient id="mint-wave" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="var(--color-mint)" stopOpacity="0.55" />
          <stop offset="1" stopColor="var(--color-mint-strong)" />
        </linearGradient>
      </defs>
      <path d="M0 260 C170 250 330 215 450 150 C530 106 590 60 640 30 V260 Z" fill="var(--color-mint)" opacity="0.6" />
      <path d="M150 260 C300 250 420 215 510 160 C565 126 605 96 640 80 V260 Z" fill="url(#mint-wave)" />
    </svg>
  );
}