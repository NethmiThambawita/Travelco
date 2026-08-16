import { useEffect, useRef, useState } from "react";
import heroImg from "../assets/images/hero-sigiriya.jpg";
import heroVideo from "../assets/videos/hero-sri-lanka.mp4";

const Hero = () => {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const [allowVideo, setAllowVideo] = useState(false);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) setAllowVideo(true);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const sriLankaTime = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Colombo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(now);

  const sriLankaDate = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Colombo",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(now);

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
      {allowVideo && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onCanPlay={() => setVideoReady(true)}
        />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20"
        aria-hidden="true"
      />

      <div
        className="animate-fade-up absolute top-20 right-4 sm:top-24 sm:right-6 md:top-28 md:right-10 z-20 flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-md pl-3 pr-4 py-2.5 md:pl-3.5 md:pr-5 md:py-3 text-white shadow-soft ring-1 ring-white/25"
        style={{ animationDelay: "420ms" }}
        aria-live="off"
      >
        <div className="relative flex h-9 w-9 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-ocean-100">
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-spice-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-spice-400 ring-2 ring-ink/50" />
          </span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
            <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.14em] text-ocean-100">
            Sri Lanka time
          </p>
          <p className="text-sm md:text-lg font-bold leading-tight tabular-nums">{sriLankaTime}</p>
          <p className="hidden sm:block mt-0.5 text-[10px] text-white/65">{sriLankaDate}</p>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10 pb-16 pt-40 md:py-32 text-white">
        <p className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ocean-100 ring-1 ring-white/20">
          Private Sri Lanka Journeys
        </p>
        <h1
          className="animate-fade-up mt-4 max-w-2xl leading-[1.05]"
          style={{ animationDelay: "120ms" }}
        >
          <span className="block font-script text-3xl sm:text-4xl md:text-5xl font-medium text-ocean-100">
            Discover the island that gave the world
          </span>
          <span className="mt-1 block text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            Serendipity.
          </span>
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
