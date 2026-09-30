import type { Audience } from '../../data/whyItMatters';
import { toneClasses } from '../../data/home';

export default function AudienceItem({ icon: Icon, title, description, tone }: Audience) {
  return (
    <li className="flex flex-col items-center text-center">
      <span className={`grid size-[58px] place-items-center rounded-full ${toneClasses[tone].chip}`} aria-hidden>
        <Icon className={`size-[27px] ${toneClasses[tone].icon} ${toneClasses[tone].fill}`} strokeWidth={2.2} />
      </span>
      <h3 className="mt-[16px] text-[17.5px] leading-tight font-bold text-navy">{title}</h3>
      <p className="mt-[9px] text-[13.5px] leading-[1.45] text-text-secondary sm:text-[14.5px]">
        {description[0]}
        <br />
        {description[1]}
      </p>
    </li>
  );
}