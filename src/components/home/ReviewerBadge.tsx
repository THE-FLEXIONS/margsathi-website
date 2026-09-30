import type { Tone } from '../../data/home';
import { toneClasses } from '../../data/home';

export default function ReviewerBadge({ label, tone }: { label: string; tone: Tone }) {
  return (
    <span
      className={`inline-flex h-[35px] w-fit items-center rounded-full px-[16px] text-[14.5px] font-semibold ${toneClasses[tone].chip} ${toneClasses[tone].icon}`}
    >
      {label}
    </span>
  );
}