import sigiriyaImg from "../assets/images/hero-sigiriya.jpg";
import Reveal from "./Reveal";
import safariImg from "../assets/images/tour-safari.jpg";
import trainImg from "../assets/images/tour-train.jpg";
import beachImg from "../assets/images/tour-beach.jpg";
import galleImg from "../assets/images/tour-heritage.jpg";
import kandyImg from "../assets/images/gallery-kandy.jpg";

const packages = [
  {
    img: sigiriyaImg,
    alt: "Sigiriya Rock Fortress rising above the jungle canopy",
    tag: "Cultural",
    title: "Ancient Cities & Sigiriya",
    days: "4 days",
    from: "US$420",
    desc: "Sigiriya at first light, Dambulla's cave temples and the lost city of Polonnaruwa by bicycle.",
  },
  {
    img: safariImg,
    alt: "A mother and calf elephant crossing a dirt track in a Sri Lankan national park",
    tag: "Safari",
    title: "Yala Wildlife Safari",
    days: "2 days",
    from: "US$260",
    desc: "Dawn and dusk game drives through leopard and elephant territory with a resident tracker.",
  },
  {
    img: trainImg,
    alt: "A blue Sri Lankan train crossing the Nine Arches Bridge near Ella",
    tag: "Scenic rail",
    title: "Hill Country by Rail",
    days: "3 days",
    from: "US$310",
    desc: "Tea estates, waterfalls and the Ella to Kandy rail line — one of the world's great train rides.",
  },
  {
    img: beachImg,
    alt: "Aerial view of a palm-lined bay on Sri Lanka's south coast",
    tag: "Beach",
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

const Packages = () => {
  return (
    <section id="tours" className="py-20 md:py-28 bg-spice-50/40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-700">
            Tours &amp; packages
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink">
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

        <Reveal className="mt-10 grid sm:grid-cols-3 gap-6 rounded-2xl bg-ink text-white p-8">
          {[
            { title: "Airport Transfers", desc: "Meet & greet at BIA, direct to your first stop." },
            { title: "Private Transportation", desc: "Air-conditioned vehicle and driver for the whole trip." },
            { title: "Fully Custom Packages", desc: "Send us your dates — we'll route the rest." },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-white/70">{item.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Packages;
