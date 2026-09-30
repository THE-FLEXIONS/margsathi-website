import type { SafetyLayerItemData } from '../../data/howItWorks';
import { toneClasses } from '../../data/home';

export default function SafetyLayerItem({ icon: Icon, title, description, tone }: SafetyLayerItemData) {
  return (
    <li className="flex flex-col items-center text-center">
      <span className={`grid size-[60px] place-items-center rounded-full ${toneClasses[tone].chip}`} aria-hidden>
        <Icon className={`size-[27px] ${toneClasses[tone].icon} ${toneClasses[tone].fill}`} strokeWidth={2.2} />
      </span>
      <h3 className="mt-[13px] text-[17.5px] leading-tight font-bold text-navy">{title}</h3>
      <p className="mt-[6px] text-[14.5px] leading-[1.38] text-text-secondary">
        {description[0]}
        <br />
        {description[1]}
      </p>
    </li>
  );
}