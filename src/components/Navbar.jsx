import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#destinations", label: "Destinations" },
  { href: "#tours", label: "Tours" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-5 md:px-10 py-3">
        <a href="#top" className="flex items-center" aria-label="Serendib Trails home">
          <Logo />
        </a>

        <ul className="hidden lg:flex items-center gap-8 font-medium text-sm text-ink">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-ocean-700 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-ocean-600 transition-colors"
        >
          Plan My Trip
        </a>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-ink/10 shadow-lg">
          <ul className="flex flex-col px-5 py-4 gap-1 font-medium text-ink">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 border-b border-ink/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-5 pb-5">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
            >
              Plan My Trip
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
