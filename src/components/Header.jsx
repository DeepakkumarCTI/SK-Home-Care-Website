import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, PhoneCall } from 'lucide-react'

// Replace this image with your actual logo.
// Place your logo at: public/images/sk-home-care-logo.png
const logoImage = '/images/sk-home-care-logo.png'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

const serviceLocations = [
  'Coimbatore',
  'Erode',
  'Tiruppur',
  'Madurai',
  'Pollachi',
  'Gobichettipalayam (Gobi)',
  'Tiruchirappalli (Trichy)',
  'Chennai',
  'Karur',
  'Salem',
  'Sathyamangalam',
  'Mangalore',
  'All Over Tamil Nadu',
  'Bengaluru',
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-rose-100 bg-white/95 shadow-sm backdrop-blur">
      {/* Main Navigation */}
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-3 px-3 py-2.5 sm:px-4 lg:px-6">
        {/* Logo and Brand */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2.5 sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src={logoImage}
            alt="SK Home Care Logo"
            className="h-11 w-11 rounded-xl bg-white object-contain sm:h-12 sm:w-12"
          />

          <span>
            <span className="block whitespace-nowrap text-lg font-black tracking-tight text-rose-950 sm:text-xl">
              SK HOME CARE
            </span>

            <span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-amber-700 sm:text-[10px] sm:tracking-[0.2em]">
              Care • Trust • Experience
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 lg:gap-7 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `whitespace-nowrap text-sm font-bold transition hover:text-rose-800 ${isActive ? 'text-rose-900' : 'text-stone-600'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Call Button */}
        <a
          href="tel:9944130912"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-rose-900 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-rose-900/15 transition hover:bg-rose-800 lg:flex"
        >
          <PhoneCall size={16} />
          99441 30912
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-stone-200 p-2 text-rose-950 transition hover:bg-rose-50 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="border-t border-stone-100 bg-white px-4 py-3 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2.5 text-sm font-semibold transition ${isActive
                  ? 'bg-rose-50 text-rose-900'
                  : 'text-stone-700 hover:bg-rose-50 hover:text-rose-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <a
            href="tel:9944130912"
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-rose-900 px-3 py-3 text-sm font-bold text-white transition hover:bg-rose-800"
          >
            <PhoneCall size={16} />
            Call 99441 30912
          </a>
        </nav>
      )}

      {/* Continuously Scrolling Service Locations */}
      <div className="overflow-hidden border-t border-rose-100 bg-rose-950 py-2 text-white">
        <div className="flex w-max animate-[scrollLocations_35s_linear_infinite] items-center hover:[animation-play-state:paused]">
          {[...serviceLocations, ...serviceLocations].map((location, index) => (
            <span
              key={`${location}-${index}`}
              className="flex shrink-0 items-center text-xs font-semibold sm:text-sm"
            >
              <span className="px-3 sm:px-4">{location}</span>
              <span className="text-amber-300">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scrolling Animation */}
      <style>
        {`
          @keyframes scrollLocations {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </header>
  )
}