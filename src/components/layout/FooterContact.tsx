import { Mail, MapPin, Phone } from 'lucide-react';
import AppDownloadBadges from './AppDownloadBadges';
import { contact } from '../../data/footer';

const rows = [
  { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: contact.phoneDisplay, href: contact.phoneHref },
  { icon: MapPin, label: contact.location, href: contact.mapHref, external: true },
];

export default function FooterContact() {
  return (
    <div>
      <h2 className="text-[18px] font-bold text-navy">Get in Touch</h2>
      <address className="mt-[14px] flex flex-col gap-[14px] not-italic">
        {rows.map(({ icon: Icon, label, href, external }) => (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            className="flex items-center gap-[16px] text-[15.5px] text-text-secondary sm:gap-[22px] sm:text-[16px] transition-colors duration-300 hover:text-navy xl:text-[17px]"
          >
            <Icon className="ml-[4px] size-[19px] shrink-0 fill-navy/80 text-navy [&>circle]:fill-white" strokeWidth={1.8} aria-hidden />
            {label}
          </a>
        ))}
      </address>
      <hr className="mt-[20px] border-border" />
      <h2 className="mt-[20px] text-[18px] font-bold text-navy">Download the App</h2>
      <div className="mt-[12px]">
        <AppDownloadBadges />
      </div>
    </div>
  );
}