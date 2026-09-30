import { ArrowRight } from 'lucide-react';

interface ArrowPillButtonProps {
  label: string;
  href: string;
  variant: 'navy' | 'orange';
  className?: string;
}

const variants = {
  navy: {
    button: 'h-[50px] gap-5 bg-navy-deep pl-[27px] pr-[5px] text-[15.5px] ring-4 ring-navy-deep/10 hover:bg-navy',
    chip: 'size-10',
  },
  orange: {
    button: 'h-[58px] gap-6 bg-orange pl-[29px] pr-[6px] text-[17px] shadow-cta ring-4 ring-orange/15 hover:bg-orange-hover',
    chip: 'size-[44px]',
  },
};

/** Pill CTA with a white circular arrow chip on the right, used in the header and hero. */
export default function ArrowPillButton({ label, href, variant, className = '' }: ArrowPillButtonProps) {
  const v = variants[variant];
  return (
    <a
      href={href}
      className={`group inline-flex shrink-0 items-center justify-between rounded-full font-semibold whitespace-nowrap text-white transition-colors duration-300 ${v.button} ${className}`}
    >
      <span>{label}</span>
      <span
        className={`${v.chip} grid place-items-center rounded-full bg-white text-navy transition-transform duration-300 group-hover:translate-x-1`}
      >
        <ArrowRight className="size-5" strokeWidth={2.25} aria-hidden />
      </span>
    </a>
  );
}
