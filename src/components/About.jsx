import aboutImg from "../assets/images/college.jpeg";
import accentImg from "../assets/images/elephants.jpeg";
import Reveal from "./Reveal";

const points = [
  "Sri Lankan-based trip designers who drive every route themselves",
  "Private vehicles and English-speaking chauffeur guides, not shared coaches",
  "24/7 support line while you're on the road",
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center overflow-visible">

        {/* Images */}
        <Reveal className="flex justify-center">
          <div className="relative w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[320px] mb-10 sm:mb-0">
            <img
              src={aboutImg}
              alt="A photo collage celebrating Sri Lanka — elephants, Sigiriya, Ceylon tea and island culture"
              className="h-auto w-full rounded-3xl shadow-soft"
              loading="lazy"
              width="720"
              height="1280"
            />

            <img
              src={accentImg}
              alt="Elephants wading through a lily-covered lake in Sri Lanka"
              loading="lazy"
              className="hidden sm:block absolute -bottom-10 -left-10 h-32 w-28 md:h-36 md:w-32 object-cover rounded-2xl border-4 border-white shadow-soft"
            />

            <div className="absolute -bottom-8 right-4 bg-white/40 backdrop-blur-xl ring-1 ring-white/60 rounded-2xl shadow-soft px-6 py-5 max-w-[220px] text-center">
              <p className="font-serif text-3xl font-semibold text-ink">15</p>
              <p className="text-sm text-ink/70 mt-1">
                Districts we personally route and revisit every season
              </p>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={120} className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-700">
            Who we are
          </p>

          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold text-ink">
            A local team that plans the way we'd travel ourselves
          </h2>

          <p className="mt-5 text-ink/70 leading-relaxed">
            Serendib Trails started in Kandy with a single van and a
            conviction that Sri Lanka rewards travellers who go slowly:
            fewer stops, better guides, real time to look around. Today
            we still keep every itinerary hand-built — no fixed
            departures, no bus queues at Sigiriya at 6am with three
            hundred other people.
          </p>

          <p className="mt-4 text-ink/70 leading-relaxed">
            Whether you have four days or four weeks, we route it around
            the seasons, the tides and the festivals that guidebooks
            miss.
          </p>

          {/* Points */}
          <ul className="mt-7 space-y-4 flex flex-col items-center">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-ink/80 max-w-xl text-left"
              >
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-ocean-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4l2.3 2.29 6.3-6.29a1 1 0 011.4 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default About;