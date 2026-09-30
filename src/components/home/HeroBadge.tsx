interface HeroBadgeProps {
  label: string;
}

export default function HeroBadge({ label }: HeroBadgeProps) {
  return (
    <p className="inline-flex h-[29px] items-center gap-[10px] rounded-full bg-mint/80 pr-[11px] pl-[11px] text-[11px] font-semibold tracking-[0.16em] text-text-secondary uppercase sm:text-[12.5px]">
      <span className="size-[7px] rounded-full bg-green" aria-hidden />
      {label}
    </p>
  );
}
