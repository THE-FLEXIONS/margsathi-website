import AudienceCard from './AudienceCard';
import { audiences } from '../../data/whoWeServe';

export default function AudienceGrid() {
  return (
    <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-[24px]">
      {audiences.map((audience, i) => (
        <li key={audience.title}>
          <AudienceCard audience={audience} index={i} />
        </li>
      ))}
    </ul>
  );
}