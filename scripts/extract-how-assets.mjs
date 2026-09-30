// Interim photography for the "How it works" section, cut from the design reference
// (scripts/reference-how.webp) until final assets are supplied.
// The status cards drawn over each photo in the reference are re-created in code and
// always overlay the same area, so the photos can be cropped whole.
// Re-run: node scripts/extract-how-assets.mjs
import sharp from 'sharp';

const src = 'scripts/reference-how.webp';
const crop = (left, top, width, height, out) =>
  sharp(src).extract({ left, top, width, height }).webp({ quality: 90 }).toFile(`public/assets/how/${out}`);

await crop(384, 469, 214, 283, 'student-boarding-bus.webp');
await crop(1248, 487, 226, 268, 'student-arriving-school.webp');
await crop(806, 141, 52, 52, 'avatar-riya.webp');
await crop(689, 709, 40, 38, 'school-bus-thumb.webp');
