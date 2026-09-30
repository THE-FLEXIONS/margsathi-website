import { motion } from 'framer-motion';
import NewsletterForm from './NewsletterForm';
import { newsletterBenefits, newsletterCopy } from '../../data/footer';
import { toneClasses } from '../../data/home';
import { fadeUp } from '../../lib/motion';

export function BrandRule({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`block h-[3px] rounded-full bg-[linear-gradient(90deg,var(--color-navy)_0_35%,var(--color-green)_35%_60%,var(--color-orange)_60%_82%,#f5b301_82%)] ${className}`}
    />
  );
}

export default function NewsletterFooterCTA() {
  return (
    <motion.section
      {...fadeUp(0)}
      aria-labelledby="newsletter-heading"
      className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(100deg,#f1f6f7_0%,#f4f8f9_45%,#f5f7f5_75%,#f7f6f0_100%)] shadow-[0_12px_40px_-30px_rgb(19_37_74/0.3)]"
    >
      <img
        src="/assets/footer/newsletter-road.webp"
        alt=""
        aria-hidden
        width={358}
        height={294}
        loading="lazy"
        className="pointer-events-none absolute right-0 bottom-0 hidden h-full w-auto [mask-image:linear-gradient(90deg,transparent,black_18%)] lg:block"
      />
      <div className="relative grid grid-cols-[minmax(0,1fr)] gap-7 px-5 pt-9 pb-4 sm:gap-8 sm:px-10 sm:py-10 lg:grid-cols-[540fr_495fr] lg:gap-[70px] lg:pr-[27%] xl:py-0 xl:pt-[40px] xl:pb-[30px] xl:pl-[50px]">
        <div>
          <p className="flex flex-wrap items-center gap-[12px] text-[11px] font-semibold tracking-[0.24em] text-navy uppercase sm:text-[11.5px] sm:tracking-[0.3em]">
            {newsletterCopy.eyebrow}
            <BrandRule className="w-[98px]" />
          </p>
          <h2
            id="newsletter-heading"
            className="mt-[24px] text-[clamp(24px,7.4vw,30px)] sm:text-[clamp(30px,3.06vw,47px)] leading-[1.09] font-bold tracking-[-0.03em] text-navy lg:whitespace-nowrap"
          >
            Get the latest updates
            <br />
            for <span className="text-green">safer</span>{' '}
            <span className="bg-gradient-to-r from-orange to-[#f5a300] bg-clip-text text-transparent">journeys.</span>
          </h2>
          <p className="mt-[20px] text-[16.5px] leading-[1.5] text-text-secondary xl:text-[17.5px]">
            {newsletterCopy.description[0]}
            <br className="hidden xl:inline" /> {newsletterCopy.description[1]}
          </p>
        </div>

        <div className="lg:pt-[62px]">
          <NewsletterForm />
          <ul className="mt-[26px] xl:mt-[18px] grid grid-cols-3 gap-3 sm:flex sm:gap-[24px] xl:gap-[46px]">
            {newsletterBenefits.map(({ icon: Icon, label, tone }) => (
              <li key={label[0]} className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-[19px]">
                <span className={`grid size-[50px] shrink-0 place-items-center rounded-full sm:size-[56px] ${toneClasses[tone].chip}`} aria-hidden>
                  <Icon className={`size-[24px] ${toneClasses[tone].icon} fill-current [&>path:last-child]:stroke-white`} strokeWidth={2} />
                </span>
                <span className="text-[14.5px] leading-[1.35] text-navy sm:text-[15px]">
                  {label[0]}
                  <br />
                  {label[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* artwork in flow on small screens */}
      <img
        src="/assets/footer/newsletter-road.webp"
        alt=""
        aria-hidden
        width={358}
        height={294}
        loading="lazy"
        className="-mt-4 ml-auto block w-[62%] max-w-[358px] [mask-image:linear-gradient(90deg,transparent,black_25%)] sm:mt-0 lg:hidden"
      />
    </motion.section>
  );
}