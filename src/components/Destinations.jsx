import { useState } from "react";
import Reveal from "./Reveal";
import sigiriyaImg from "../assets/images/hero-sigiriya.jpg";
import trainImg from "../assets/images/tour-train.jpg";
import beachImg from "../assets/images/gallery-beach-sunset.jpg";
import kandyImg from "../assets/images/gallery-kandy.jpg";
import galleImg from "../assets/images/gallery-gallestreet.jpg";
import palmImg from "../assets/images/gallery-palm.jpg";

const destinations = [
  {
    name: "Cultural Triangle",
    eyebrow: "Ancient kingdoms",
    image: sigiriyaImg,
    detailImage: kandyImg,
    alt: "Sigiriya Rock rising above Sri Lanka's green forest",
    description:
      "Climb Sigiriya before the day warms, cycle between Polonnaruwa's ruins and end beneath Dambulla's painted cave ceilings. This is Sri Lanka at its most storied.",
    note: "Temple drums at dawn, village lunches at noon, and two thousand years of stories in between.",
  },
  {
    name: "Hill Country",
    eyebrow: "Tea country & trails",
    image: trainImg,
    detailImage: palmImg,
    alt: "A blue train crossing Nine Arches Bridge in Sri Lanka",
    description:
      "Ride the slow train into Ella, walk through tea estates with a local planter and follow cool mountain paths to waterfalls hidden in the mist.",
    note: "Open train doors, warm cups of tea and cloud-soft views all the way to the horizon.",
  },
  {
    name: "South Coast",
    eyebrow: "Ocean & old forts",
    image: beachImg,
    detailImage: galleImg,
    alt: "A palm-lined beach at sunset on Sri Lanka's south coast",
    description:
      "Trace the coast from Galle's old ramparts to quiet swimming coves, stopping for roadside hoppers, whale watching and unhurried evenings by the sea.",
    note: "Salt in the air, fishing boats on the horizon and nowhere you need to be before sunset.",
  },
];

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M3 10h13M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Destinations = () => {
  const [active, setActive] = useState(0);
  const destination = destinations[active];

  return (
    <section id="destinations" className="overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-700">Explore the island</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink md:text-6xl">Where will Sri Lanka take you?</h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-ink/65 lg:justify-self-end">
            One small island, a remarkable change of scene. Move from ancient rock citadels to cloud-wrapped tea country and the warm Indian Ocean in a single, beautifully paced journey.
          </p>
        </Reveal>

        <Reveal className="mt-12 border-y border-ink/15" delay={80}>
          <div className="flex gap-8 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:justify-center">
            {destinations.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(index)}
                className={`relative shrink-0 py-5 text-sm font-semibold transition-colors ${active === index ? "text-ink" : "text-ink/45 hover:text-ink/75"}`}
                aria-pressed={active === index}
              >
                {item.name}
                <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-ocean-600 transition-transform ${active === index ? "scale-x-100" : "scale-x-0"}`} />
              </button>
            ))}
          </div>
        </Reveal>

        <div key={destination.name} className="mt-12 grid items-center gap-10 animate-fade-up lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="relative pb-12 pr-8 md:pb-16 md:pr-20">
            <img src={destination.image} alt={destination.alt} width="1100" height="760" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft" />
            <img src={destination.detailImage} alt="" aria-hidden="true" width="480" height="600" className="absolute bottom-0 right-0 aspect-[4/5] w-[34%] rounded-2xl border-4 border-white object-cover shadow-soft md:rounded-3xl" />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-700">{destination.eyebrow}</p>
            <h3 className="mt-3 font-serif text-4xl font-semibold text-ink md:text-5xl">{destination.name}</h3>
            <p className="mt-6 leading-relaxed text-ink/70">{destination.description}</p>
            <blockquote className="mt-7 border-l-2 border-spice-400 pl-5 font-serif text-xl italic leading-relaxed text-ink/80">“{destination.note}”</blockquote>
            <a href="#contact" className="mt-8 inline-flex items-center gap-3 border-b border-ink pb-1 text-sm font-semibold text-ink transition-colors hover:text-ocean-700">
              Build this into my trip <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
