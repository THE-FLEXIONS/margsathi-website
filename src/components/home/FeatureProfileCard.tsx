import JourneyStatusCard from './JourneyStatusCard';

export default function FeatureProfileCard({ className = '' }: { className?: string }) {
  return (
    <JourneyStatusCard
      className={className}
      label="Aaradhya's trip to School, on route"
      leading={<img src="/assets/features/avatar-aaradhya.webp" alt="" className="size-[4em] rounded-full object-cover" />}
    >
      <span className="block text-[1.05em] font-semibold text-navy">Aaradhya</span>
      <span className="block text-[0.9em] text-text-secondary">Trip to School</span>
      <span className="mt-[0.3em] flex items-center gap-[0.5em] text-[0.88em] font-medium text-green">
        <span className="relative flex size-[0.75em]">
          <span className="absolute inset-0 animate-ping rounded-full bg-green/50 [animation-duration:2.2s]" />
          <span className="relative size-full rounded-full bg-green" />
        </span>
        On route
      </span>
    </JourneyStatusCard>
  );
}