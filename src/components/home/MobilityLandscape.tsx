/**
 * Decorative road / bus / skyline illustration that hands off to the next section.
 * Interim raster cut from the design reference; swap the file for the final illustration.
 */
export default function MobilityLandscape() {
  return (
    <div className="pointer-events-none relative -mt-[1.3vw] w-full" aria-hidden>
      <img
        src="/assets/why/mobility-landscape.webp"
        alt=""
        width={1536}
        height={164}
        loading="lazy"
        className="block h-auto min-h-[90px] w-full object-cover object-[70%_bottom]"
      />
    </div>
  );
}