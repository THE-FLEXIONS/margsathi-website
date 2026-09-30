import { forwardRef } from 'react';
import type { LucideProps } from 'lucide-react';

/** Steering wheel drawn on Lucide's 24px grid and stroke conventions (Lucide ships none). */
const SteeringWheel = forwardRef<SVGSVGElement, LucideProps>(
  ({ size = 24, strokeWidth = 2, color = 'currentColor', className, ...rest }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="13" r="2.5" />
      <path d="M2.5 10.5c3-1.3 6-2 9.5-2s6.5.7 9.5 2" />
      <path d="M9.6 14.2 6 20.5" />
      <path d="M14.4 14.2 18 20.5" />
    </svg>
  ),
);
SteeringWheel.displayName = 'SteeringWheel';

export default SteeringWheel;