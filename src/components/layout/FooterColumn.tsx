import type { FooterColumnData } from '../../data/footer';

export default function FooterColumn({ title, links }: FooterColumnData) {
  const headingId = `footer-${title.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <nav aria-labelledby={headingId}>
      <h2 id={headingId} className="text-[18px] font-bold text-navy">
        {title}
      </h2>
      <ul className="mt-[14px] flex flex-col gap-[12px] sm:gap-[15.5px]">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="inline-block text-[15px] text-text-secondary transition-[color,transform] sm:text-[16px] duration-300 hover:translate-x-0.5 hover:text-navy xl:text-[16.5px]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}