import heroImg from "../assets/images/hero-sigiriya.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-end md:items-center overflow-hidden">
      <img
        src={heroImg}
        alt="View across the rainforest canopy to Sigiriya Rock Fortress at sunrise, Sri Lanka"
        className="absolute inset-0 h-full w-full object-cover animate-kenburns"
        fetchPriority="high"
        width="1920"
        height="1280"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10 pb-16 pt-40 md:py-32 text-white">
        <p className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ocean-100 ring-1 ring-white/20">
          Private Sri Lanka Journeys
        </p>
        <h1
          className="animate-fade-up mt-6 max-w-2xl text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08]"
          style={{ animationDelay: "120ms" }}
        >
          Discover the island that gave the world serendipity.
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-xl text-base md:text-lg text-white/85"
          style={{ animationDelay: "240ms" }}
        >
          Ancient citadels, misty tea hills, wild elephants and empty
          beaches — Serendib Trails builds private, expert-guided
          itineraries across Sri Lanka, from your first enquiry to the
          moment you land back home.
        </p>

        <div
          className="animate-fade-up mt-9 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "360ms" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm md:text-base font-semibold text-white shadow-soft hover:bg-ocean-700 transition-colors"
          >
            Plan My Trip
          </a>
          <a
            href="#tours"
            className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur px-7 py-3.5 text-sm md:text-base font-semibold text-white ring-1 ring-white/30 hover:bg-white/20 transition-colors"
          >
            Explore Tours
          </a>
        </div>

        <dl
          className="animate-fade-up mt-14 grid grid-cols-3 max-w-md gap-6 border-t border-white/15 pt-6"
          style={{ animationDelay: "480ms" }}
        >
          <div>
            <dt className="sr-only">Years operating</dt>
            <dd className="text-2xl md:text-3xl font-bold">12+</dd>
            <p className="text-xs text-white/70 mt-1">Years on the road</p>
          </div>
          <div>
            <dt className="sr-only">Travellers hosted</dt>
            <dd className="text-2xl md:text-3xl font-bold">4,300+</dd>
            <p className="text-xs text-white/70 mt-1">Travellers hosted</p>
          </div>
          <div>
            <dt className="sr-only">Average rating</dt>
            <dd className="text-2xl md:text-3xl font-bold">4.9/5</dd>
            <p className="text-xs text-white/70 mt-1">Average rating</p>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Hero;
