import SocialIcon from './SocialIcon';
import { socialLinks } from '../../data/footer';

export default function FooterBrand() {
  return (
    <div className="lg:pr-8">
      <a href="#home" className="flex items-center gap-[16px]" aria-label="MARGSATHI home">
        <img src="https://res.cloudinary.com/cyymn1yh/image/upload/v1791140285/margsathi_logo-removebg-preview.png" alt="" width={108} height={78} className="h-[52px] w-auto sm:h-[76px]" />
        <span className="text-[27px] font-extrabold tracking-[-0.01em] text-navy sm:text-[36px]">MARGSATHI</span>
      </a>
      <p className="mt-[20px] max-w-[340px] text-[16px] sm:mt-[28px] sm:text-[17px] leading-[1.38] text-text-secondary xl:text-[18.5px]">
        Building safer, more connected journeys for students, women, children and daily commuters.
      </p>
      <ul className="mt-[24px] flex gap-[14px] sm:mt-[30px] sm:gap-[17px]">
        {socialLinks.map(({ platform, label, href }) => (
          <li key={platform}>
            <a
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="grid size-[46px] place-items-center rounded-full sm:size-[50px] border border-border/70 bg-white/70 text-navy-deep transition-[transform,color,box-shadow] duration-300 hover:-translate-y-0.5 hover:text-orange hover:shadow-card"
            >
              <SocialIcon platform={platform} className="size-[21px]" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}