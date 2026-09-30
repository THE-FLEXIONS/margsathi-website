import { ArrowRight } from 'lucide-react';
import type { FeatureItem } from '../../data/keyFeatures';
import { toneClasses } from '../../data/home';

export default function FeatureCard({ icon: Icon, title, description, tone, href }: FeatureItem) {
  return (
    <a
      href={href}
      className="group flex h-full items-start gap-[19px] rounded-[20px] border border-border/60 bg-white py-[17px] pr-[20px] pl-[17px] xl:gap-[clamp(10px,1.1vw,17px)] xl:pr-[clamp(12px,1.1vw,17px)] xl:pl-[clamp(12px,1.1vw,17px)] shadow-[0_6px_24px_-12px_rgb(19_37_74/0.14)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-card"
    >
      <span className={`grid size-[54px] shrink-0 place-items-center rounded-full xl:size-[clamp(44px,3.78vw,58px)] ${toneClasses[tone].chip}`} aria-hidden>
        <Icon className={`size-[26px] ${toneClasses[tone].icon} ${toneClasses[tone].fill}`} strokeWidth={2.2} />
      </span>
      <span className="min-w-0 flex-1 pt-[6px]">
        <span className="block text-[17.5px] leading-tight font-semibold text-navy min-[1500px]:whitespace-nowrap xl:text-[clamp(14.5px,1.07vw,16.5px)] xl:tracking-[-0.005em]">{title}</span>
        <span className="mt-[9px] block text-[15px] leading-[1.34] text-text-secondary xl:text-[clamp(12.5px,0.95vw,14.6px)]">
          {description.map((line, i) => (
            <span key={line}>
              {line}
              {i < description.length - 1 && (
                <>
                  <br className="hidden min-[1500px]:inline" />{' '}
                </>
              )}
            </span>
          ))}
        </span>
      </span>
      <span
        className="mt-[14px] grid size-[30px] shrink-0 xl:size-[clamp(26px,1.95vw,30px)] place-items-center rounded-full bg-surface-card text-navy transition-colors duration-300 group-hover:bg-soft-blue"
        aria-hidden
      >
        <ArrowRight className="size-[16px] transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.2} />
      </span>
    </a>
  );
}