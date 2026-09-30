/** Stylised street map with the live bus route, rendered as SVG so it stays crisp at any size. */
export default function RouteMap() {
  return (
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full" aria-hidden>
      <defs>
        <linearGradient id="route-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--color-green)" />
          <stop offset="0.55" stopColor="var(--color-green-light)" />
          <stop offset="1" stopColor="var(--color-icon-blue)" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="var(--color-map-base)" />
      <g fill="var(--color-map-block)">
        <rect x="8" y="10" width="36" height="34" rx="4" />
        <rect x="62" y="72" width="40" height="30" rx="4" />
        <rect x="126" y="70" width="36" height="32" rx="4" />
        <rect x="8" y="130" width="34" height="34" rx="4" />
        <rect x="126" y="12" width="34" height="30" rx="4" />
      </g>
      <g stroke="#ffffff" strokeLinecap="round" fill="none">
        <path d="M-10 56 C60 48 120 62 210 46" strokeWidth="7" />
        <path d="M-10 116 C70 110 130 126 210 108" strokeWidth="6" />
        <path d="M52 -10 C46 60 60 130 50 210" strokeWidth="6" />
        <path d="M114 -10 C118 60 108 140 122 210" strokeWidth="6" />
        <path d="M-10 176 C60 170 140 186 210 168" strokeWidth="4" />
        <path d="M172 -10 C164 70 180 130 174 210" strokeWidth="4" />
      </g>
      <path
        d="M40 70 C42 98 58 114 80 126 S124 150 142 160 S162 168 166 172"
        fill="none"
        stroke="url(#route-gradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="40" cy="70" r="4" fill="#ffffff" stroke="var(--color-green)" strokeWidth="2.5" />
      <circle cx="118" cy="145" r="2.4" fill="var(--color-icon-blue)" opacity="0.7" />
      <g transform="translate(166 158)">
        <ellipse cx="0" cy="16" rx="8" ry="3" fill="var(--color-icon-blue)" opacity="0.2" />
        <path d="M0 15 C-7 6 -9 1 -9 -3 a9 9 0 0 1 18 0 c0 4 -2 9 -9 18z" fill="var(--color-icon-blue)" stroke="#ffffff" strokeWidth="1.6" />
        <circle cx="0" cy="-3" r="3.2" fill="#ffffff" />
      </g>
    </svg>
  );
}