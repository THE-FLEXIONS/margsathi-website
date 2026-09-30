import type { ProblemStat } from '../../data/whyItMatters';

interface ProblemStatisticsProps {
  stats: ProblemStat[];
}

const columnWidths = ['sm:w-[174px]', 'sm:w-[218px]', 'sm:w-auto'];

export default function ProblemStatistics({ stats }: ProblemStatisticsProps) {
  return (
    <dl className="grid grid-cols-2 gap-x-5 gap-y-7 sm:flex sm:gap-0">
      {stats.map(({ value, label }, i) => (
        <div
          key={value}
          className={`flex flex-col ${columnWidths[i]} ${
            i > 0 ? 'sm:border-l sm:border-border sm:pl-[28px]' : ''
          } ${i === 2 ? 'col-span-2' : ''}`}
        >
          <dt className="order-last mt-[13px] text-[14.5px] leading-[1.5] text-text-secondary sm:whitespace-nowrap">
            {label[0]}
            <br />
            {label[1]}
          </dt>
          <dd className="text-[32px] leading-none font-bold tracking-[-0.02em] text-navy">{value}</dd>
        </div>
      ))}
    </dl>
  );
}