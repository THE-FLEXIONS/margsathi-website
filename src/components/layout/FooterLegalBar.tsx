import { legalLinks } from '../../data/footer';

export default function FooterLegalBar() {
  return (
    <div className="flex flex-col gap-4 border-t border-border/80 pt-[24px] md:flex-row md:items-center md:justify-between">
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-0">
        {legalLinks.map((link, i) => (
          <li key={link.label} className="flex items-center">
            {i > 0 && (
              <span className="mx-[20px] hidden text-text-secondary/70 sm:inline" aria-hidden>
                |
              </span>
            )}
            <a href={link.href} className="text-[14.5px] text-text-secondary transition-colors duration-300 hover:text-navy sm:text-[15px]">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-[14px] text-text-secondary sm:text-[15px]">
        {'\u00A9'} {new Date().getFullYear()} MARGSATHI. All rights reserved.
      </p>
    </div>
  );
}