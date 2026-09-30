import { appStores } from '../../data/footer';

export default function AppDownloadBadges() {
  return (
    <ul className="flex flex-wrap gap-[12px] xl:gap-[clamp(8px,0.8vw,12px)]">
      {appStores.map(({ label, src, width, href }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            className="block overflow-hidden rounded-[8px] transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
          >
            <img src={src} alt={label} width={width} height={51} loading="lazy" className="h-[50px] w-auto xl:h-[clamp(40px,3.2vw,50px)]" />
          </a>
        </li>
      ))}
    </ul>
  );
}