import type { ImpactInsightData } from '../../data/earlyFeedback';
import { toneClasses } from '../../data/home';

export default function ImpactInsight({ icon: Icon, text, tone }: ImpactInsightData) {
  return (
    <li className="flex items-center gap-[28px]">
      <span className={`grid size-[56px] shrink-0 place-items-center rounded-full ${toneClasses[tone].chip}`} aria-hidden>
        <Icon className={`size-[26px] ${toneClasses[tone].icon} ${toneClasses[tone].fill}`} strokeWidth={2.2} />
      </span>
      <p className="text-[14.5px] leading-[1.45] text-text-secondary">
        {text[0]}
        <br />
        {text[1]}
      </p>
    </li>
  );
}