interface SectionEyebrowProps {
  label: string;
  className?: string;
}

/** Pale-blue uppercase pill used above section headings. */
export default function SectionEyebrow({ label, className = '' }: SectionEyebrowProps) {
  return (
    <p
      className={`flex h-[27px] w-fit items-center rounded-full bg-soft-blue px-[14px] text-[12px] font-semibold tracking-[0.2em] text-navy/80 uppercase ${className}`}
    >
      {label}
    </p>
  );
}