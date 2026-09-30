import { ArrowRight } from 'lucide-react';

export default function FeaturesLink({ label }: { label: string }) {
  return (
    <a
      href="#features"
      className="group inline-flex items-center gap-[14px] border-b border-navy/40 pb-[5px] text-[16.5px] font-medium text-navy transition-colors duration-300 hover:border-navy"
    >
      {label}
      <ArrowRight className="size-[18px] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} aria-hidden />
    </a>
  );
}