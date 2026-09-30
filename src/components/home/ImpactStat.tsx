import type { ImpactStatData } from '../../data/keyFeatures';
import { toneClasses } from '../../data/home';

export default function ImpactStat({ icon: Icon, value, description, tone, filled }: ImpactStatData) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className={`grid size-[50px] place-items-center rounded-full ${toneClasses[tone].chip}`} aria-hidden>
        <Icon className={`size-[24px] ${toneClasses[tone].icon} ${filled ? 'fill-current' : toneClasses[tone].fill}`} strokeWidth={2.2} />
      </span>
      <dt className="order-last mt-[6px] text-[15px] leading-[1.3] text-text-secondary">
        {description.map((line, i) => (
          <span key={line}>
            {line}
            {i < description.length - 1 && <br />}
          </span>
        ))}
      </dt>
      <dd className="mt-[14px] text-[22px] leading-tight font-bold text-navy">{value}</dd>
    </div>
  );
}