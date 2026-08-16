import aboutImg from "../assets/images/college.jpeg";
import Reveal from "./Reveal";

const points = [
  "Sri Lankan-based trip designers who drive every route themselves",
  "Private vehicles and English-speaking chauffeur guides, not shared coaches",
  "24/7 support line while you're on the road",
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 overflow-visible px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
        
        {/* Image */}
        <Reveal className="flex justify-center lg:justify-start">
          <div className="relative mb-10 w-full max-w-[260px] sm:max-w-[300px] lg:mb-0 lg:max-w-[320px]">
            <img
              src={aboutImg}
              alt="A photo collage celebrating Sri Lanka — elephants, Sigiriya, Ceylon tea and island culture"
              className="h-auto w-full rounded-3xl shadow-soft"
              loading="lazy"
              width="720"
              height="1280"
            />

            {/* Experience Badge */}
            <div className="absolute -bottom-8 right-4 max-w-[220px] rounded-2xl bg-white/70 px-6 py-5 shadow-soft backdrop-blur-xl ring-1 ring-white/60">
              <p className="font-serif text-3xl font-semibold text-ink">
                15
              </p>

              <p className="mt-1 text-sm leading-relaxed text-ink/70">
                Districts we personally route and revisit every season
              </p>
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <Reveal delay={120}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-700">
            Who we are
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold text-ink md:text-4xl">
            A local team that plans the way we'd travel ourselves
          </h2>

          <p className="mt-5 leading-relaxed text-ink/70">
            Serendib Trails started in Kandy with a single van and a
            conviction that Sri Lanka rewards travellers who go slowly:
            fewer stops, better guides, real time to look around. Today,
            we still keep every itinerary hand-built — no fixed
            departures, no bus queues at Sigiriya at 6am with three
            hundred other people.
          </p>

          <p className="mt-4 leading-relaxed text-ink/70">
            Whether you have four days or four weeks, we route it around
            the seasons, the tides and the festivals that guidebooks miss.
          </p>

          {/* Points */}
          <ul className="mt-7 space-y-3">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-ink/80"
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