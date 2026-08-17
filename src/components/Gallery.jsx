import { useEffect, useRef, useState } from "react";
import wawatennaImg from "../assets/images/about-wawatenna.jpg";
import pidurangalaImg from "../assets/images/gallery-pidurangala.jpg";
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
  { img: fortImg, tag: "Heritage", title: "Galle Fort", desc: "Colonial ramparts, string lights and quiet cobbled lanes by the sea." },
  { img: templesImg, tag: "Sacred Sites", title: "Anuradhapura", desc: "Ancient stupas glowing gold against the sunset sky." },
  { img: colomboImg, tag: "City", title: "Colombo", desc: "Skyline views and street food between flights or transfers." },
  { img: tuktukImg, tag: "Island Life", title: "On the Road", desc: "The tuk-tuk — still the best way to feel the pace of the island." },
  { img: ninearchImg, tag: "Hill Country", title: "Nine Arches Bridge", desc: "A blue train crossing century-old brickwork above the jungle." },
  { img: beachSunsetImg, tag: "South Coast", title: "Beach Escapes", desc: "Fishing boats and empty sand at the end of the day." },
];

const DestinationCard = ({ d }) => (
  <div className="relative w-[240px] sm:w-[280px] aspect-[3/4.5] shrink-0 overflow-hidden rounded-2xl shadow-soft">
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

const ArrowButton = ({ direction, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={direction === "prev" ? "Previous destinations" : "Next destinations"}
    className="absolute top-1/2 z-20 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink shadow-soft ring-1 ring-ink/10 backdrop-blur transition-colors hover:bg-white active:scale-95 md:h-11 md:w-11"
    style={direction === "prev" ? { left: "0.5rem" } : { right: "0.5rem" }}
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === "prev" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const Gallery = () => {
  const track = [...destinations, ...destinations];
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const resumeTimeoutRef = useRef(null);
  const [hintVisible, setHintVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setHintVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frameId;
    const step = () => {
      if (!pausedRef.current) {
        const halfWidth = el.scrollWidth / 2;
        el.scrollLeft += 0.6;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        }
      }
      frameId = requestAnimationFrame(step);
    };
    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const pauseAutoplay = () => {
    pausedRef.current = true;
    setHintVisible(false);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const resumeAutoplaySoon = (delay = 2500) => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, delay);
  };

  const scrollByCard = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    pauseAutoplay();
    const amount = el.clientWidth * 0.8 * (direction === "prev" ? -1 : 1);
    el.scrollBy({ left: amount, behavior: "smooth" });
    resumeAutoplaySoon(3000);
  };

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

        <ArrowButton direction="prev" onClick={() => scrollByCard("prev")} />
        <ArrowButton direction="next" onClick={() => scrollByCard("next")} />

        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 bottom-6 z-20 flex justify-center transition-opacity duration-700 ${
            hintVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 rounded-full bg-ink/80 px-4 py-2 text-xs font-medium text-white shadow-soft backdrop-blur">
            <span className="animate-swipe-hint inline-block text-base">👆</span>
            <span>Swipe to explore</span>
          </div>
        </div>

        <div
          ref={trackRef}
          onMouseEnter={pauseAutoplay}
          onMouseLeave={() => resumeAutoplaySoon(0)}
          onTouchStart={pauseAutoplay}
          onTouchEnd={() => resumeAutoplaySoon()}
          className="flex gap-5 overflow-x-auto scroll-smooth px-5 md:px-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {track.map((d, i) => (
            <DestinationCard key={`${d.title}-${i}`} d={d} />
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Gallery;
