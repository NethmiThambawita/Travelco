import Logo from "./Logo";

const nav = [
  { href: "#about", label: "About" },
  { href: "#tours", label: "Tours" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const social = [
  { label: "WhatsApp", href: "https://wa.me/94812345678" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

const Footer = () => {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <Logo variant="light" />
          <p className="mt-5 text-sm leading-relaxed max-w-xs">
            Private, hand-built Sri Lanka itineraries — round tours, day
            trips, safaris and transfers, planned by a local team based
            in Kandy.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
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
          <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>+94 81 234 5678</li>
            <li>hello@serendibtrails.com</li>
            <li>24 Temple View Lane, Kandy, Sri Lanka</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold rounded-full bg-white/10 px-3 py-1.5 hover:bg-white/20 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Serendib Trails. All rights reserved.</p>
          <p>Fictional agency created for a design &amp; development assessment.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
