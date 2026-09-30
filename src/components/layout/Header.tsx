import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import ArrowPillButton from '../ui/ArrowPillButton';
import { navItems } from '../../data/home';

export default function Header() {
  const [active, setActive] = useState<string>('Home');
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-4 sm:px-8 lg:h-24 lg:px-[4.6%]">
      <Logo />

      <nav aria-label="Primary" className="absolute top-1/2 left-[31%] hidden -translate-y-1/2 lg:block xl:left-[32.2%]">
        <ul className="flex items-center gap-7 xl:gap-[38px]">
          {navItems.map((item) => {
            const isActive = item.label === active;
            return (
              <li key={item.label} className="relative">
                <a
                  href={item.href}
                  onClick={() => setActive(item.label)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`block py-2 text-[16px] transition-colors ${
                    isActive ? 'font-semibold text-navy-deep' : 'font-medium text-text-secondary hover:text-navy'
                  }`}
                >
                  {item.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-[6px] left-0 h-[2px] w-full rounded-full bg-orange"
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <ArrowPillButton label="Explore the Solution" href="#solution" variant="navy" className="!hidden lg:!inline-flex" />

      <button
        type="button"
        className="grid size-11 place-items-center rounded-full border border-border bg-white text-navy lg:hidden"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-4 top-[72px] rounded-2xl border border-border bg-white p-4 shadow-card lg:hidden"
          >
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => {
                      setActive(item.label);
                      setOpen(false);
                    }}
                    className={`block rounded-lg px-3 py-3 text-[16px] font-medium ${
                      item.label === active ? 'bg-icon-orange-bg text-navy-deep' : 'text-text-secondary'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ArrowPillButton label="Explore the Solution" href="#solution" variant="navy" className="mt-3 w-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
