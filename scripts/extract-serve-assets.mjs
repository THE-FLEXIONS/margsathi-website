// Interim photography for the "Who we serve" section, cut from the design reference
// (scripts/reference-serve.webp) until final assets are supplied.
// Re-run: node scripts/extract-serve-assets.mjs
import sharp from 'sharp';

const src = 'scripts/reference-serve.webp';
const crop = (left, top, width, height, out) =>
  sharp(src).extract({ left, top, width, height }).webp({ quality: 90 }).toFile(`public/assets/serve/${out}`);

// Photo band of each audience card (above the information panel).
await crop(68, 293, 333, 168, 'students.webp');
await crop(429, 293, 333, 168, 'women.webp');
await crop(790, 293, 329, 168, 'children.webp');
await crop(1148, 293, 329, 168, 'daily-commuters.webp');
await crop(1010, 112, 76, 76, 'testimonial-priya.webp');
