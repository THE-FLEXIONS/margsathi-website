// Interim imagery for the "Early feedback" section, cut from the design reference
// (scripts/reference-feedback.webp) until final assets are supplied.
// Re-run: node scripts/extract-feedback-assets.mjs
import sharp from 'sharp';

const src = 'scripts/reference-feedback.webp';
const crop = (left, top, width, height, out) =>
  sharp(src).extract({ left, top, width, height }).webp({ quality: 90 }).toFile(`public/assets/feedback/${out}`);

// Organic top-right plate; its curved edge is part of the photo. The note card drawn over
// its lower-left corner in the reference is re-created in code and overlays the same area.
await crop(1060, 0, 476, 228, 'student-bus-plate.webp');
await crop(66, 732, 480, 252, 'student-bus-stop.webp');

// Reviewer portraits (placeholders from the design mock).
const avatars = [
  ['reviewer-rk-sharma.webp', 97],
  ['reviewer-neha-gupta.webp', 454],
  ['reviewer-arjun-mehta.webp', 810],
  ['reviewer-s-verma.webp', 1167],
];
for (const [file, left] of avatars) await crop(left, 553, 65, 65, file);
