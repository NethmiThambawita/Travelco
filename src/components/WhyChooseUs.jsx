import Reveal from "./Reveal";

const features = [
  {
    title: "Local expert guides",
    desc: "Every driver-guide is Sri Lankan, trained, and lives on the routes they run.",
    icon: (
      <path
        d="M12 2a5 5 0 015 5c0 3-2 5-5 9-3-4-5-6-5-9a5 5 0 015-5zm0 7a2 2 0 100-4 2 2 0 000 4z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Private, not shared",
    desc: "Your own vehicle and guide throughout — no fixed departures, no shared coaches.",
    icon: (
      <path
        d="M4 16V9a2 2 0 012-2h9l3 4h1a2 2 0 012 2v3a1 1 0 01-1 1h-1a3 3 0 11-6 0H10a3 3 0 11-6 0H3a1 1 0 01-1-1v-1z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Transparent pricing",
    desc: "One quote covers vehicle, fuel, guide and entry planning — no hidden add-ons.",
    icon: (
      <path
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 15h-2v-1.1a3.5 3.5 0 01-2.7-2.6l1.9-.5c.2.8.9 1.4 1.8 1.4.9 0 1.6-.5 1.6-1.2 0-.8-.7-1.1-2-1.5-1.7-.5-3.2-1.1-3.2-3 0-1.4 1.1-2.4 2.6-2.7V5h2v1c1.2.2 2.1 1 2.5 2.1l-1.8.6c-.2-.6-.8-1.1-1.6-1.1-.8 0-1.4.4-1.4 1.1 0 .7.7 1 2 1.4 1.8.5 3.2 1.2 3.2 3.1 0 1.5-1.1 2.6-2.9 2.9V17z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Support on the road",
    desc: "A direct WhatsApp line to our Kandy office, day or night, for the length of your trip.",
    icon: (
      <path
        d="M12 2a10 10 0 00-8.94 14.47L2 22l5.66-1.06A10 10 0 1012 2zm0 18a8 8 0 01-4.08-1.12l-.29-.17-3 .56.57-2.94-.19-.3A8 8 0 1120 12a8 8 0 01-8 8z"
        fill="currentColor"
      />
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-700">
            Why choose us
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink">
            The difference is in who plans your trip
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 90}
              className="rounded-2xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-11 w-11 rounded-xl bg-ocean-50 flex items-center justify-center text-ocean-700">
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                  {f.icon}
                </svg>
              </div>
              <h3 className="mt-5 font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
