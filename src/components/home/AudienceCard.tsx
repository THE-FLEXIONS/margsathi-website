import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AudienceBenefit from './AudienceBenefit';
import type { AudienceData } from '../../data/whoWeServe';
import type { Tone } from '../../data/home';
import { toneClasses } from '../../data/home';

const panelTint: Record<Tone, string> = {
  blue: 'to-tint-blue',
  red: 'to-tint-red',
  orange: 'to-tint-orange',
  green: 'to-tint-green',
  purple: 'to-tint-purple',
};

export default function AudienceCard({ audience, index }: { audience: AudienceData; index: number }) {
  const { title, description, icon: Icon, tone, image, benefits, href } = audience;
  const titleId = `audience-${title.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <motion.article
      aria-labelledby={titleId}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-border/70 bg-white shadow-[0_10px_30px_-18px_rgb(19_37_74/0.22)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgb(19_37_74/0.3)]"
    >
      <div className="h-[190px] overflow-hidden sm:h-[175px]">
        <img
          src={image.src}
          alt={image.alt}
          width={333}
          height={168}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div
        className={`relative -mt-[14px] flex flex-1 flex-col rounded-t-[24px] bg-gradient-to-b from-white from-15% ${panelTint[tone]} px-[22px] pt-[16px] pb-[22px] shadow-[0_-6px_16px_-10px_rgb(19_37_74/0.18)] xl:pr-[20px] xl:pl-[28px] xl:pb-[23px]`}
      >
        <div className="flex gap-[22px] xl:min-h-[100px] xl:gap-[21px]">
          <span className={`grid size-[60px] shrink-0 place-items-center rounded-[18px] xl:size-[64px] ${toneClasses[tone].chip}`} aria-hidden>
            <Icon className={`size-[30px] ${toneClasses[tone].icon} ${toneClasses[tone].fill}`} strokeWidth={2.2} />
          </span>
          <div className="pt-[6px]">
            <h3 id={titleId} className="text-[19px] leading-tight font-bold tracking-[-0.01em] text-navy">
              {title}
            </h3>
            <p className="mt-[8px] text-[15px] leading-[1.34] tracking-[-0.01em] text-text-secondary xl:text-[14px]">
              {description.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < description.length - 1 && (
                    <>
                      <br className="hidden min-[1440px]:inline" />{' '}
                    </>
                  )}
                </span>
              ))}
            </p>
          </div>
        </div>

        <hr className="mt-[18px] border-border/70" />

        <ul className="mt-[16px] flex flex-col gap-[10px] xl:mt-[21px]">
          {benefits.map((benefit) => (
            <AudienceBenefit key={benefit.label} {...benefit} tone={tone} />
          ))}
        </ul>

        <a
          href={href}
          aria-label={`Learn more about MARGSATHI for ${title.toLowerCase()}`}
          className="group/cta mt-auto inline-flex w-fit items-center gap-[22px] pt-[30px] xl:pt-[17px] text-[15.5px] font-semibold text-navy"
        >
          Learn more
          <span className="grid size-[40px] place-items-center rounded-full bg-white shadow-[0_4px_14px_-4px_rgb(19_37_74/0.2)] transition-[transform,box-shadow] duration-300 group-hover/cta:-translate-y-0.5 group-hover:shadow-card">
            <ArrowRight className="size-[18px] transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.2} aria-hidden />
          </span>
        </a>
      </div>
    </motion.article>
  );
}