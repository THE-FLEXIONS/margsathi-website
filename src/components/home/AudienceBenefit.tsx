import type { AudienceBenefitData } from '../../data/whoWeServe';
import type { Tone } from '../../data/home';
import { toneClasses } from '../../data/home';

export default function AudienceBenefit({ icon: Icon, label, tone }: AudienceBenefitData & { tone: Tone }) {
  return (
    <li className="flex items-center gap-[14px] text-[14.5px] text-navy/85">
      <span className={`grid size-[32px] shrink-0 place-items-center rounded-full ${toneClasses[tone].chip}`} aria-hidden>
        <Icon className={`size-[16px] ${toneClasses[tone].icon} ${toneClasses[tone].fill}`} strokeWidth={2.2} />
      </span>
      {label}
    </li>
  );
}