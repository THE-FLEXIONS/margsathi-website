/**
 * Oversized MARGSATHI wordmark over the road, skyline and sun.
 * Interim raster cut from the design reference; swap in the final illustration (ideally SVG).
 */
export default function FooterBrandArtwork() {
  return (
    <div className="relative w-full overflow-hidden">
      <p className="sr-only">MARGSATHI {'\u2014'} Safer people, brighter journeys.</p>
      <img
        src="/assets/footer/brand-artwork.webp"
        alt=""
        aria-hidden
        width={1536}
        height={224}
        loading="lazy"
        className="block h-[22.8vw] w-full object-cover object-[0%_bottom] sm:h-auto"
      />
    </div>
  );
}