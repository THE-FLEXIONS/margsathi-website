// Interim footer artwork cut from the design reference (scripts/reference-footer.webp)
// until the final brand files are supplied. Replace the store badges with the official
// Apple / Google artwork before launch (see their marketing-guideline pages).
// Re-run: node scripts/extract-footer-assets.mjs
import sharp from 'sharp';

const src = 'scripts/reference-footer.webp';
const crop = (left, top, width, height, out, opts = { quality: 92 }) =>
  sharp(src).extract({ left, top, width, height }).webp(opts).toFile(`public/assets/footer/${out}`);

await crop(1134, 86, 358, 294, 'newsletter-road.webp');
await crop(0, 800, 1536, 224, 'brand-artwork.webp');
await crop(55, 426, 108, 78, 'margsathi-logo-mark-lg.webp', { lossless: true });
await crop(1176, 643, 146, 51, 'badge-app-store.webp', { lossless: true });
await crop(1336, 643, 147, 51, 'badge-google-play.webp', { lossless: true });
