import SafetyImageCard from './SafetyImageCard';
import { safetyCards } from '../../data/whyItMatters';

export default function ChildSafetyCard({ className = '' }: { className?: string }) {
  return (
    <SafetyImageCard
      className={className}
      card={safetyCards.child}
      image={{ src: '/assets/why/child-commute.webp', alt: 'Smiling schoolgirl with a backpack on her commute', width: 227, height: 185 }}
      cardBox={{ left: '2.2%', top: '66%', width: '98.2%', height: '43.2%' }}
      cardScale="5.8cqw"
    />
  );
}