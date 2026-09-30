// Interim photography for the "Key features" section, cut from the design reference
// (scripts/reference-features.webp) until final assets are supplied.
// - guardian-student-wide: the full right-hand photo plate (incl. its decorative mint
//   corner and bottom wave). The profile, map and feature cards baked into the
//   reference are re-created in code and always overlay the same areas on desktop.
// - guardian-student: a clean portrait crop free of overlays, used below xl.
// Re-run: node scripts/extract-features-assets.mjs
import sharp from 'sharp';

const src = 'scripts/reference-features.webp';
const crop = (left, top, width, height, out) =>
  sharp(src).extract({ left, top, width, height }).webp({ quality: 90 }).toFile(`public/assets/features/${out}`);

await crop(826, 0, 710, 770, 'guardian-student-wide.webp');
await crop(830, 240, 386, 495, 'guardian-student.webp');
await crop(832, 160, 54, 54, 'avatar-aaradhya.webp');
