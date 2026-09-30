import { Check } from 'lucide-react';

export interface StatusPhotoCardProps {
  image: { src: string; alt: string; width: number; height: number };
  title: string;
  meta: string;
  /** Status card placement as percentages of the photo, measured from the reference. */
  cardBox: { left: string; top: string; width: string; height: string };
  /** Status card font-size in cqw of the photo width. */
  scale: string;
}

/** Portrait photo with an overlapping green-check status card, scaled as one unit. */
export default function StatusPhotoCard({ image, title, meta, cardBox, scale }: StatusPhotoCardProps) {
  return (
    <figure className="@container relative w-full">
      <div
        className="overflow-hidden rounded-[7.5cqw] bg-surface-card shadow-card"
        style={{ aspectRatio: `${image.width} / ${image.height}` }}
      >
        <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" className="size-full object-cover" />
      </div>
      <figcaption
        className="absolute flex items-center gap-[0.8em] rounded-[0.95em] bg-white px-[0.95em] shadow-card"
        style={{ ...cardBox, fontSize: scale }}
      >
        <span className="grid size-[2.6em] shrink-0 place-items-center rounded-full bg-green shadow-[0_0_0_0.28em_var(--color-icon-green-bg)]">
          <Check className="size-[1.4em] text-white" strokeWidth={3} aria-hidden />
        </span>
        <span className="leading-[1.35]">
          <span className="block text-[1em] font-semibold whitespace-nowrap text-navy">{title}</span>
          <span className="block text-[0.8em] whitespace-nowrap text-text-secondary">{meta}</span>
        </span>
      </figcaption>
    </figure>
  );
}