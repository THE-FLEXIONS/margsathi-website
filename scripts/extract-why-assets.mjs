// Interim photography/illustration for the "Why it matters" section, cut from the design
// reference (scripts/reference-why.webp) until final assets are supplied.
// Re-run: node scripts/extract-why-assets.mjs
import sharp from 'sharp';

const src = 'scripts/reference-why.webp';
const region = (left, top, width, height) => sharp(src).extract({ left, top, width, height });

// Main traveller photo. The reference draws the Emergency SOS card over its upper-left corner;
// rebuild that area from the sunset sky just beside it so the photo itself is clean.
const main = { left: 810, top: 50, width: 456, height: 515 };
// Feather the right and bottom edges so the patch blends into the photo.
const PW = 196;
const PH = 158;
const rgb = await region(990, 66, 70, 44).resize(PW, PH, { fit: 'fill' }).blur(10).removeAlpha().raw().toBuffer();
const rgba = Buffer.alloc(PW * PH * 4);
const ramp = (v, start) => Math.min(1, Math.max(0, (1 - v) / (1 - start)));
for (let y = 0; y < PH; y++) {
  for (let x = 0; x < PW; x++) {
    const i = y * PW + x;
    rgba.set(rgb.subarray(i * 3, i * 3 + 3), i * 4);
    rgba[i * 4 + 3] = Math.round(255 * ramp(x / PW, 0.84) * ramp(y / PH, 0.86));
  }
}
const patch = await sharp(rgba, { raw: { width: PW, height: PH, channels: 4 } }).png().toBuffer();
await region(main.left, main.top, main.width, main.height)
  .composite([{ input: patch, left: 0, top: 0 }])
  .webp({ quality: 90 })
  .toFile('public/assets/why/traveller-bus-stop.webp');

await region(787, 430, 227, 185).webp({ quality: 90 }).toFile('public/assets/why/child-commute.webp');
await region(1158, 430, 284, 190).webp({ quality: 90 }).toFile('public/assets/why/woman-cab.webp');
await region(1427, 215, 48, 48).webp({ quality: 90 }).toFile('public/assets/why/avatar-guardian.webp');
await region(0, 860, 1536, 164).webp({ quality: 90 }).toFile('public/assets/why/mobility-landscape.webp');
