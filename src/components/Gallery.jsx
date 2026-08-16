import wawatennaImg from "../assets/images/about-wawatenna.jpg";
import pidurangalaImg from "../assets/images/gallery-pidurangala.jpg";
import elephantsImg from "../assets/images/elephants.jpeg";
import fortImg from "../assets/images/fort.jpeg";
import templesImg from "../assets/images/temples.jpeg";
import colomboImg from "../assets/images/gallery-colombo.jpg";
import tuktukImg from "../assets/images/gallery-tuktuk.jpg";
import ninearchImg from "../assets/images/gallery-ninearch.jpg";
import beachSunsetImg from "../assets/images/gallery-beach-sunset.jpg";
import Reveal from "./Reveal";

const destinations = [
  { img: wawatennaImg, tag: "Hill Country", title: "Wawatenna Lakeplain", desc: "A quiet viewpoint over tea country, best caught at first light." },
  { img: pidurangalaImg, tag: "Ancient City", title: "Sigiriya Rock", desc: "Climb Pidurangala at dawn for the classic view across to the fortress." },
  { img: elephantsImg, tag: "Wildlife", title: "Wild Elephants", desc: "Herds wading through lily-covered lakes in the dry-zone parks." },
  { img: fortImg, tag: "Heritage", title: "Galle Fort", desc: "Colonial ramparts, string lights and quiet cobbled lanes by the sea." },
  { img: templesImg, tag: "Sacred Sites", title: "Anuradhapura", desc: "Ancient stupas glowing gold against the sunset sky." },
  { img: colomboImg, tag: "City", title: "Colombo", desc: "Skyline views and street food between flights or transfers." },
  { img: tuktukImg, tag: "Island Life", title: "On the Road", desc: "The tuk-tuk — still the best way to feel the pace of the island." },
  { img: ninearchImg, tag: "Hill Country", title: "Nine Arches Bridge", desc: "A blue train crossing century-old brickwork above the jungle." },
  { img: beachSunsetImg, tag: "South Coast", title: "Beach Escapes", desc: "Fishing boats and empty sand at the end of the day." },
];

const DestinationCard = ({ d }) => (
  <div className="relative w-[240px] sm:w-[280px] aspect-[3/4] shrink-0 overflow-hidden rounded-2xl shadow-soft">
    {d.video ? (
      <video
        src={d.video}
        poster={d.img}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="h-full w-full object-cover"
      />
    ) : (
      <img
        src={d.img}
        alt={d.title}
        loading="lazy"
        className="h-full w-full object-cover"
        draggable="false"
      />
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" aria-hidden="true" />
    <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink">
      {d.tag}
    </span>
    <div className="absolute inset-x-0 bottom-0 p-5">
      <h3 className="font-serif text-xl font-semibold text-white leading-tight">{d.title}</h3>
      <p className="mt-1.5 text-xs text-white/75 leading-relaxed">{d.desc}</p>
      <a
        href="#contact"
        className="mt-4 inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/30 backdrop-blur hover:bg-white hover:text-ink transition-colors"
      >
        Learn more
      </a>
    </div>
  </div>
);

const Gallery = () => {
  const track = [...destinations, ...destinations];

  return (
    <section id="gallery" className="py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-700">
            Gallery
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold text-ink">
            A few places we send people back to
          </h2>
        </Reveal>
      </div>

      <Reveal className="mt-12 relative" delay={90}>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" aria-hidden="true" />

        <div className="animate-marquee flex w-max gap-5 px-5 md:px-10">
          {track.map((d, i) => (
            <DestinationCard key={`${d.title}-${i}`} d={d} />
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Gallery;
