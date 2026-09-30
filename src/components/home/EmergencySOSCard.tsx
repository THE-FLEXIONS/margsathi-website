import SafetyInfoCard from './SafetyInfoCard';
import { safetyCards } from '../../data/whyItMatters';

export default function EmergencySOSCard({ className = '' }: { className?: string }) {
  return <SafetyInfoCard {...safetyCards.sos} className={`h-full ${className}`} />;
}