import SafetyImageCard from './SafetyImageCard';
import { safetyCards } from '../../data/whyItMatters';

export default function WomenSafetyCard({ className = '' }: { className?: string }) {
  return (
    <SafetyImageCard
      className={className}
      card={safetyCards.women}
      image={{ src: '/assets/why/woman-cab.webp', alt: 'Woman travelling confidently in the back seat of a cab', width: 284, height: 190 }}
      cardBox={{ left: '38.7%', top: '57.9%', width: '83.1%', height: '44.7%' }}
      cardScale="4.6cqw"
    />
  );
}