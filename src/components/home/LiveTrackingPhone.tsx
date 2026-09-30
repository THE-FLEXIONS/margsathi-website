import { ArrowLeft, ArrowRight, Bus, MapPin } from 'lucide-react';

/** Phone showing the guardian live-tracking screen. 1em = 12.5px at the 208px reference width. */
export default function LiveTrackingPhone() {
  return (
    <div
      className="@container relative aspect-[208/294] w-full"
      role="img"
      aria-label="Live tracking screen: school bus on route, 5 minutes away"
    >
      <div className="absolute inset-x-0 top-0 h-[96%] text-[6cqw]" aria-hidden>
        <div className="h-full rounded-[2.7em] bg-phone-bezel p-[0.42em] shadow-phone">
          <div className="flex h-full flex-col overflow-hidden rounded-[2.3em] bg-white">
            <div className="relative flex h-[2.3em] shrink-0 items-center justify-between px-[1.9em] pt-[0.3em] text-[0.72em] font-bold text-navy-deep">
              <span>9:41</span>
              <span className="absolute top-[0.9em] left-1/2 h-[1.35em] w-[7.2em] -translate-x-1/2 rounded-full bg-phone-bezel" />
              <span className="flex items-center gap-[0.3em]">
                <span className="h-[0.7em] w-[0.9em] rounded-[0.15em] bg-navy-deep/80" />
                <span className="h-[0.7em] w-[1.3em] rounded-[0.2em] bg-navy-deep" />
              </span>
            </div>
            <div className="flex items-center gap-[0.55em] px-[1em] pt-[0.55em]">
              <ArrowLeft className="size-[1.05em] text-navy" strokeWidth={2.3} />
              <span className="flex-1 text-[0.93em] font-semibold text-navy">Live Tracking</span>
              <ArrowRight className="size-[0.95em] text-text-secondary" strokeWidth={2.2} />
            </div>
            <p className="flex items-center gap-[0.5em] px-[1em] pt-[0.2em] text-[0.8em] font-medium text-green">
              <span className="size-[0.55em] rounded-full bg-green" />
              On route
            </p>
            <div className="relative mx-[0.5em] mt-[0.8em] flex-1 overflow-hidden rounded-[1em] bg-map-base">
              <svg viewBox="0 0 182 170" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
                <g stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round">
                  <path d="M-5 40 C60 34 120 46 190 36" />
                  <path d="M-5 118 C60 112 120 126 190 112" />
                  <path d="M58 -5 C52 60 66 120 58 180" />
                  <path d="M132 -5 C136 60 126 120 138 180" />
                </g>
                <g fill="var(--color-map-water)">
                  <path d="M22 22 l4 -7 4 7 -4 7z" />
                  <circle cx="40" cy="60" r="3" />
                  <circle cx="160" cy="92" r="3" />
                  <circle cx="30" cy="140" r="2.5" />
                </g>
                <path d="M86 64 C84 86 92 96 106 102 S130 118 140 126 S150 132 152 128" fill="none" stroke="var(--color-green)" strokeWidth="3.5" strokeLinecap="round" />
                <circle cx="86" cy="64" r="3.5" fill="var(--color-green)" />
              </svg>
              <span className="absolute top-[16%] left-[36%] flex items-center gap-[0.45em] rounded-[0.6em] bg-white py-[0.4em] pr-[0.75em] pl-[0.45em] text-[0.75em] font-semibold whitespace-nowrap text-navy shadow-card">
                <span className="grid size-[1.9em] place-items-center rounded-[0.45em] bg-icon-orange-bg">
                  <Bus className="size-[1.25em] text-orange" strokeWidth={2.4} />
                </span>
                5 min away
              </span>
              <MapPin className="absolute top-[70%] left-[84%] size-[1.9em] -translate-x-1/2 -translate-y-1/2 fill-icon-blue text-white" strokeWidth={1.8} />
            </div>
            <div className="h-[4.2em] shrink-0" />
          </div>
        </div>
      </div>

      {/* Route card overlapping the bottom of the phone */}
      <div className="absolute inset-x-0 top-[80%] flex h-[20%] items-center gap-[0.7em] rounded-[1em] bg-white px-[0.9em] text-[6cqw] shadow-card">
        <img src="/assets/how/school-bus-thumb.webp" alt="" className="size-[3.2em] shrink-0 rounded-[0.6em] object-cover" />
        <span className="min-w-0 flex-1 leading-[1.35]">
          <span className="block text-[1em] font-semibold text-navy">School Bus</span>
          <span className="block text-[0.85em] whitespace-nowrap text-text-secondary">Route A {'\u2022'} 8:15 AM</span>
        </span>
        <ArrowRight className="size-[1.2em] shrink-0 text-navy" strokeWidth={2.2} aria-hidden />
      </div>
    </div>
  );
}