import {
  BarChart3,
  Bus,
  House,
  MapPin,
  Search,
  ShieldHalf,
  User,
  UserRound,
  type LucideIcon,
} from 'lucide-react';
import RouteMap from './RouteMap';

interface QuickItem {
  icon: LucideIcon;
  label: string;
  chip: string;
  color: string;
}

const quickItems: QuickItem[] = [
  { icon: House, label: 'School', chip: 'bg-icon-blue-bg', color: 'text-icon-blue' },
  { icon: BarChart3, label: 'Office', chip: 'bg-icon-green-bg', color: 'text-green' },
  { icon: MapPin, label: 'Nearby', chip: 'bg-icon-orange-bg', color: 'text-orange' },
  { icon: UserRound, label: 'Track', chip: 'bg-icon-purple-bg', color: 'text-icon-purple' },
];

const tabs: { icon: LucideIcon; label: string }[] = [
  { icon: House, label: 'Home' },
  { icon: MapPin, label: 'Trips' },
  { icon: ShieldHalf, label: 'SOS' },
  { icon: User, label: 'Profile' },
];

/**
 * iPhone-style device frame with the MARGSATHI passenger home screen.
 * Internals are sized in container-query units (cqw) so the device scales as one piece.
 */
export default function PhoneMockup() {
  return (
    <div
      className="@container aspect-[255/543] w-full rounded-[15.5cqw] bg-gradient-to-b from-[#dfe3e8] via-[#9aa1ab] to-[#cfd4db] p-[1.2cqw] shadow-phone"
      role="img"
      aria-label="MARGSATHI mobile app home screen showing a bus arriving in 5 minutes on a live route map"
    >
      <div className="h-full rounded-[14.5cqw] bg-phone-bezel p-[2.6cqw]">
        <div className="relative flex h-full flex-col overflow-hidden rounded-[12cqw] bg-phone-screen" aria-hidden>
          {/* Status bar + Dynamic Island */}
          <div className="relative flex h-[13cqw] shrink-0 items-center justify-between px-[8.5cqw] pt-[1.5cqw] text-[3.9cqw] font-bold text-navy-deep">
            <span>9:41</span>
            <span className="absolute top-[3.2cqw] left-1/2 h-[7cqw] w-[26cqw] -translate-x-1/2 rounded-full bg-phone-bezel" />
            <span className="flex items-center gap-[1.2cqw]">
              <span className="flex items-end gap-[0.5cqw]">
                <span className="h-[1.4cqw] w-[0.8cqw] rounded-[0.3cqw] bg-navy-deep" />
                <span className="h-[2cqw] w-[0.8cqw] rounded-[0.3cqw] bg-navy-deep" />
                <span className="h-[2.6cqw] w-[0.8cqw] rounded-[0.3cqw] bg-navy-deep" />
                <span className="h-[3.2cqw] w-[0.8cqw] rounded-[0.3cqw] bg-navy-deep" />
              </span>
              <span className="h-[2.8cqw] w-[5.6cqw] rounded-[0.9cqw] bg-navy-deep" />
            </span>
          </div>

          {/* Greeting */}
          <div className="mt-[8cqw] flex items-center justify-between px-[6.5cqw]">
            <div className="leading-[1.3]">
              <p className="text-[5cqw] font-medium text-text-secondary">Good morning,</p>
              <p className="text-[5.6cqw] font-bold text-navy-deep">Aarav</p>
            </div>
            <img src="/assets/avatar-aarav.webp" alt="" className="size-[14.5cqw] rounded-full object-cover" />
          </div>

          {/* Search */}
          <div className="mx-[5.5cqw] mt-[5.5cqw] flex h-[12.5cqw] items-center justify-between rounded-[4cqw] bg-white px-[3.8cqw] text-[3.9cqw] font-medium text-navy shadow-card">
            Where do you want to go?
            <Search className="size-[5cqw] text-navy" strokeWidth={2.4} />
          </div>

          {/* Quick destinations */}
          <ul className="mt-[5cqw] grid grid-cols-4 px-[4cqw]">
            {quickItems.map(({ icon: Icon, label, chip, color }) => (
              <li key={label} className="flex flex-col items-center gap-[2.2cqw]">
                <span className={`grid size-[12cqw] place-items-center rounded-full ${chip}`}>
                  <Icon className={`size-[6cqw] ${color}`} strokeWidth={2.4} />
                </span>
                <span className="text-[3.6cqw] font-medium text-navy">{label}</span>
              </li>
            ))}
          </ul>

          {/* Live map */}
          <div className="relative mx-[4.5cqw] mt-[5cqw] min-h-0 flex-1 overflow-hidden rounded-[5cqw]">
            <RouteMap />
            <div className="absolute top-[4cqw] left-[18cqw] flex items-center gap-[2.4cqw] rounded-[3cqw] bg-white py-[2cqw] pr-[5cqw] pl-[2.6cqw] shadow-card">
              <span className="grid size-[8.5cqw] place-items-center rounded-[2cqw] bg-icon-orange-bg">
                <Bus className="size-[5.2cqw] text-orange" strokeWidth={2.4} />
              </span>
              <span className="leading-[1.25]">
                <span className="block text-[3.7cqw] font-bold text-navy-deep">Bus arriving</span>
                <span className="block text-[3.1cqw] font-medium text-text-secondary">5 min away</span>
              </span>
            </div>
          </div>

          {/* Tab bar */}
          <div className="mt-[3cqw] grid h-[20cqw] shrink-0 grid-cols-4 items-start bg-white px-[3cqw] pt-[3.2cqw]">
            {tabs.map(({ icon: Icon, label }, i) => (
              <span
                key={label}
                className={`flex flex-col items-center gap-[1.4cqw] text-[3.2cqw] font-medium ${
                  i === 0 ? 'text-orange' : 'text-text-muted'
                }`}
              >
                <Icon className={`size-[6.2cqw] ${i === 0 ? 'fill-orange/20' : ''}`} strokeWidth={2.2} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}