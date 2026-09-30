// Extracts interim raster assets from the design reference (scripts/reference.webp)
// until the final brand photography / logo files are supplied. Re-run: node scripts/extract-assets.mjs
import sharp from 'sharp';
const src = 'scripts/reference.webp';
const crop = (left, top, width, height, out, opts = {}) =>
  sharp(src).extract({ left, top, width, height }).webp({ quality: 92, ...opts }).toFile(out);
await crop(72, 22, 62, 50, 'public/assets/margsathi-logo-mark.webp', { lossless: true });
// Scene slices free of UI overlays: street/bus/students, and the shelter canopy above the phone.
await crop(772, 96, 308, 736, 'public/assets/hero-mobility.webp');
await crop(1080, 96, 520, 150, 'public/assets/hero-mobility-canopy.webp');
await crop(1271, 319, 38, 38, 'public/assets/avatar-aarav.webp');
