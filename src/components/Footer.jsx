import { useState } from "react";
import Logo from "./Logo";

const nav = [
  { href: "#about", label: "About" },
  { href: "#tours", label: "Tours" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const social = [
  {
    label: "WhatsApp",
    href: "https://wa.me/94812345678",
    icon: (
      <path
        d="M12 2a10 10 0 00-8.94 14.47L2 22l5.66-1.06A10 10 0 1012 2zm0 18a8 8 0 01-4.08-1.12l-.29-.17-3 .56.57-2.94-.19-.3A8 8 0 1120 12a8 8 0 01-8 8z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <path
        d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 5.7a2.2 2.2 0 110-4.4 2.2 2.2 0 010 4.4zm4.5-5.85a.82.82 0 11-1.64 0 .82.82 0 011.64 0zM12 4.3c2.4 0 2.68 0 3.63.05 2.36.11 3.02.78 3.13 3.13.05.95.05 1.23.05 3.63s0 2.68-.05 3.63c-.11 2.35-.77 3.02-3.13 3.13-.95.05-1.23.05-3.63.05s-2.68 0-3.63-.05c-2.36-.11-3.02-.78-3.13-3.13-.05-.95-.05-1.23-.05-3.63s0-2.68.05-3.63c.11-2.35.78-3.02 3.13-3.13.95-.05 1.23-.05 3.63-.05zM12 2.6c-2.44 0-2.74 0-3.7.06-3.19.14-4.96 1.91-5.1 5.1-.06.96-.06 1.26-.06 3.7s0 2.74.06 3.7c.14 3.19 1.91 4.96 5.1 5.1.96.06 1.26.06 3.7.06s2.74 0 3.7-.06c3.19-.14 4.96-1.91 5.1-5.1.06-.96.06-1.26.06-3.7s0-2.74-.06-3.7c-.14-3.19-1.91-4.96-5.1-5.1-.96-.06-1.26-.06-3.7-.06z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <path
        d="M13.5 21v-7.9h2.65l.4-3.08h-3.05V8.05c0-.89.25-1.5 1.52-1.5h1.63V3.85C15.9 3.79 15 3.7 13.94 3.7c-2.19 0-3.7 1.34-3.7 3.79v2.53H7.6v3.08h2.65V21h3.25z"
        fill="currentColor"
      />
    ),
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-ink text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-10 py-12 md:py-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h2 className="font-serif italic text-2xl sm:text-3xl md:text-4xl max-w-lg">
            Sign up for Sri Lanka travel inspiration
          </h2>

          {subscribed ? (
            <p className="text-sm text-ocean-100">
              You're on the list — thank you.
            </p>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex w-full md:w-auto md:min-w-[360px] items-center gap-3 border-b border-white/30 pb-2 focus-within:border-white/70 transition-colors"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-transparent text-sm placeholder:text-white/45 outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="h-9 w-9 shrink-0 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-ink transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M4 10h12M11 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-10 py-14 md:py-16 grid md:grid-cols-3 gap-12">
        <div>
          <Logo variant="light" />
          <p className="mt-5 text-sm leading-relaxed max-w-xs text-white/60">
            Private, hand-built Sri Lanka itineraries — round tours, day
            trips, safaris and transfers, planned by a local team based
            in Kandy.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/45">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/45">
            Contact
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>hello@serendibtrails.com</li>
            <li>+94 81 234 5678</li>
            <li>24 Temple View Lane, Kandy, Sri Lanka</li>
          </ul>

          <h3 className="mt-8 text-xs font-semibold uppercase tracking-widest text-white/45">
            Connect
          </h3>
          <div className="mt-4 flex gap-3">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="h-10 w-10 rounded-full border border-white/25 flex items-center justify-center text-white/80 hover:bg-white hover:text-ink hover:border-white transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-10 py-7">
          <p className="max-w-2xl text-xs text-white/45 leading-relaxed">
            Serendib Trails is a private, independently operated Sri Lanka
            trip designer. Every itinerary is custom-quoted and confirmed
            directly with our Kandy office before booking — trusted by
            4,300+ travellers with a 4.9/5 average rating.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-10 py-5 flex items-center justify-between gap-4 text-xs text-white/45">
          <p>
            © {new Date().getFullYear()} Serendib Trails. Fictional agency
            created for a design &amp; development assessment.
          </p>
          <a
            href="#top"
            aria-label="Back to top"
            className="h-9 w-9 shrink-0 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M10 15V5M5 9l5-5 5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
