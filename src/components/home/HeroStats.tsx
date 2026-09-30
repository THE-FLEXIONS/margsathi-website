import type { HeroStat } from '../../data/home';
import { toneClasses } from '../../data/home';

interface HeroStatsProps {
  stats: HeroStat[];
}

const gutter = 'sm:px-[clamp(18px,1.55vw,25px)]';

export default function HeroStats({ stats }: HeroStatsProps) {
  return (
    <dl className="grid grid-cols-2 gap-y-7 sm:flex sm:gap-y-0">
      {stats.map(({ icon: Icon, value, label, tone, filled }, i) => (
        <div
          key={label}
          className={`flex flex-col ${gutter} ${i === 0 ? 'sm:pl-0' : 'sm:border-l sm:border-border'} ${
            i % 2 === 1 ? 'border-l border-border pl-5' : ''
          }`}
        >
          <span className={`grid size-[33px] place-items-center rounded-full ${toneClasses[tone].chip}`} aria-hidden>
            <Icon
              className={`size-[18px] ${toneClasses[tone].icon} ${filled ? 'fill-current' : ''}`}
              strokeWidth={2.2}
            />
          </span>
          <dt className="order-last mt-[10px] text-[15px] font-medium whitespace-nowrap text-text-secondary">{label}</dt>
          <dd className="mt-[18px] text-[23px] leading-none font-bold tracking-[-0.01em] text-navy">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
