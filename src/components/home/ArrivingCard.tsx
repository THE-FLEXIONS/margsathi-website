import { Bus } from 'lucide-react';
import JourneyStatusCard from './JourneyStatusCard';

export default function ArrivingCard({ className = '' }: { className?: string }) {
  return (
    <JourneyStatusCard
      className={className}
      label="School Bus on Route A arriving in 5 minutes"
      leading={
        <span className="grid size-[3.2em] place-items-center rounded-[0.9em] bg-icon-orange-bg">
          <Bus className="size-[1.7em] text-orange" strokeWidth={2.3} aria-hidden />
        </span>
      }
    >
      <span className="block text-[0.93em] text-navy">Arriving in</span>
      <span className="block text-[1.08em] leading-tight font-bold text-navy">5 mins</span>
      <span className="mt-[0.2em] block text-[0.84em] whitespace-nowrap text-text-secondary">School Bus {'\u2022'} Route A</span>
    </JourneyStatusCard>
  );
}