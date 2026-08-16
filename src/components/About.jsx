import aboutImg from "../assets/images/about-wawatenna.jpg";
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
        <Reveal className="relative max-w-full">
          <img
            src={aboutImg}
            alt="A lone pine and viewpoint bench overlooking the Wawatenna Lakeplain in Sri Lanka's hill country"
            className="w-full h-auto rounded-3xl shadow-soft"
            loading="lazy"
            width="1000"
            height="1203"
          />
          <div className="absolute -bottom-8 right-4 bg-white rounded-2xl shadow-soft px-6 py-5 max-w-[220px]">
            <p className="text-3xl font-bold text-ink">15</p>
            <p className="text-sm text-ink/60 mt-1">
              Districts we personally route and revisit every season
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-700">
            Who we are
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink">
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

          <ul className="mt-7 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-ink/80">
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
