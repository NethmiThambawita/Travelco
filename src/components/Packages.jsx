import sigiriyaImg from "../assets/images/hero-sigiriya.jpg";
import Reveal from "./Reveal";
import safariImg from "../assets/images/tour-safari.jpg";
import trainImg from "../assets/images/tour-train.jpg";
import beachImg from "../assets/images/tour-beach.jpg";
import galleImg from "../assets/images/tour-heritage.jpg";
import kandyImg from "../assets/images/gallery-kandy.jpg";
import ServiceRequestCard from "./ServiceRequestCard";

const packages = [
  {
    img: sigiriyaImg,
    alt: "Sigiriya Rock Fortress rising above the jungle canopy",
    tag: "Round tour",
    title: "Ancient Cities & Sigiriya",
    days: "4 days",
    from: "US$420",
    desc: "Sigiriya at first light, Dambulla's cave temples and the lost city of Polonnaruwa by bicycle.",
  },
  {
    img: safariImg,
    alt: "A mother and calf elephant crossing a dirt track in a Sri Lankan national park",
    tag: "Wildlife safari",
    title: "Yala Wildlife Safari",
    days: "2 days",
    from: "US$260",
    desc: "Dawn and dusk game drives through leopard and elephant territory with a resident tracker.",
  },
  {
    img: trainImg,
    alt: "A blue Sri Lankan train crossing the Nine Arches Bridge near Ella",
    tag: "Round tour",
    title: "Hill Country by Rail",
    days: "3 days",
    from: "US$310",
    desc: "Tea estates, waterfalls and the Ella to Kandy rail line — one of the world's great train rides.",
  },
  {
    img: beachImg,
    alt: "Aerial view of a palm-lined bay on Sri Lanka's south coast",
    tag: "Round tour",
    title: "South Coast Beach Escape",
    days: "5 days",
    from: "US$390",
    desc: "Reef bays and whale-watching out of Mirissa, with easy days built in between.",
  },
  {
    img: galleImg,
    alt: "The Dutch-era clock tower inside Galle Fort, Sri Lanka",
    tag: "Day tour",
    title: "Galle Fort Heritage Walk",
    days: "Full day",
    from: "US$95",
    desc: "Ramparts, colonial streets and a seafood lunch inside the walls of a 16th-century fort.",
  },
  {
    img: kandyImg,
    alt: "The Temple of the Sacred Tooth Relic reflected in its moat at dusk, Kandy",
    tag: "Day tour",
    title: "Kandy & the Hill Capital",
    days: "Full day",
    from: "US$85",
    desc: "The Temple of the Tooth, botanical gardens and an evening Kandyan dance performance.",
  },
];

const services = [
  {
    title: "Airport Transfers",
    desc: "Meet & greet at Bandaranaike International, straight to your first stop.",
    dateLabel: "Pickup date",
    fieldLabel: "Flight number (optional)",
    fieldPlaceholder: "e.g. UL 504",
    icon: (
      <path
        d="M2 16l20-7-2 8-6 2-2 5-3-6-7-2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: "Private Transportation",
    desc: "Your own air-conditioned vehicle and driver-guide for the whole trip.",
    dateLabel: "Start date",
    fieldLabel: "How many days?",
    fieldPlaceholder: "e.g. 7 days",
    icon: (
      <path
        d="M4 16V9a2 2 0 012-2h9l3 4h1a2 2 0 012 2v3a1 1 0 01-1 1h-1a3 3 0 11-6 0H10a3 3 0 11-6 0H3a1 1 0 01-1-1v-1z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: "Custom Tour Packages",
    desc: "Send us your dates and interests — we'll design the itinerary around them.",
    dateLabel: "Preferred start date",
    fieldLabel: "What are you interested in?",
    fieldPlaceholder: "e.g. wildlife, hill country, beaches",
    icon: (
      <path
        d="M12 3v18M3 12h18M7 7l10 10M17 7L7 17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

const Packages = () => {
  return (
    <section id="tours" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-700">
            Tours &amp; packages
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold text-ink">
            Round tours, day trips and safaris — built around you
          </h2>
          <p className="mt-4 text-ink/70">
            Every package below is a starting point. Swap days, combine
            routes or hand us a blank page — we'll quote a private
            itinerary either way.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {packages.map((pkg, i) => (
            <Reveal
              key={pkg.title}
              as="article"
              delay={(i % 3) * 90}
              className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={pkg.img}
                  alt={pkg.alt}
                  loading="lazy"
                  width="900"
                  height="600"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-ink">
                  {pkg.tag}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between text-xs text-ink/50 font-medium">
                  <span>{pkg.days}</span>
                  <span>From {pkg.from} / person</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-ink">{pkg.title}</h3>
                <p className="mt-2 text-sm text-ink/65 flex-1">{pkg.desc}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean-700 hover:text-ocean-700"
                >
                  Enquire about this route
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M4 10h12M11 5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16" delay={90}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-700">
            Also included
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceRequestCard key={s.title} service={s} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Packages;
