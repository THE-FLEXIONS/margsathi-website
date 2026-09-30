import type { SafetyCardData } from '../../data/whyItMatters';
import SafetyInfoCard from './SafetyInfoCard';

export interface SafetyImageCardProps {
  card: SafetyCardData;
  image: { src: string; alt: string; width: number; height: number };
  /** Card placement as percentages of the photo box, measured from the reference. */
  cardBox: { left: string; top: string; width: string; height: string };
  /** Card font-size in cqw of the photo box, keeping card/photo proportions fixed. */
  cardScale: string;
  className?: string;
}

/** Rounded photo with an overlapping SafetyInfoCard, scaled together as one unit. */
export default function SafetyImageCard({ card, image, cardBox, cardScale, className = '' }: SafetyImageCardProps) {
  return (
    <div className={`@container relative ${className}`}>
      <div
        className="overflow-hidden rounded-[5.5cqw] bg-white shadow-card"
        style={{ aspectRatio: `${image.width} / ${image.height}` }}
      >
        <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" className="size-full object-cover" />
      </div>
      <div className="absolute" style={{ ...cardBox, fontSize: cardScale }}>
        <SafetyInfoCard {...card} className="h-full" />
      </div>
    </div>
  );
}