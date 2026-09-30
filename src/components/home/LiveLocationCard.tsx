import JourneyStatusCard from './JourneyStatusCard';

export default function LiveLocationCard({ className = '' }: { className?: string }) {
  return (
    <JourneyStatusCard
      className={className}
      label="Live location shared: Riya's trip to School, in progress"
      leading={<img src="/assets/how/avatar-riya.webp" alt="" className="size-[3.7em] rounded-full object-cover" />}
    >
      <span className="block text-[1em] font-semibold whitespace-nowrap text-navy">Live location shared</span>
      <span className="block text-[0.86em] whitespace-nowrap text-text-secondary">Riya{'\u2019'}s trip to School</span>
      <span className="mt-[0.35em] flex items-center gap-[0.5em] text-[0.84em] font-medium text-green">
        <span className="relative flex size-[0.75em]">
          <span className="absolute inset-0 animate-ping rounded-full bg-green/50 [animation-duration:2.2s]" />
          <span className="relative size-full rounded-full bg-green" />
        </span>
        In progress
      </span>
    </JourneyStatusCard>
  );
}