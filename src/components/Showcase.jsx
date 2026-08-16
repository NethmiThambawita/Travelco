import { useEffect, useRef, useState } from "react";
import posterImg from "../assets/images/showcase-coconut-swing.jpg";
import showcaseVideo from "../assets/videos/coconut-tree-hill.mp4";
import Reveal from "./Reveal";

const Showcase = () => {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const [allowVideo, setAllowVideo] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) setAllowVideo(true);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal className="text-white order-2 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-400">
            Coconut Tree Hill, Mirissa
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Some days, the itinerary is just a swing and the sea
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed max-w-lg">
            Between safaris and cave temples, we always leave room for
            the slow afternoons — a rope swing under the palms, waves
            rolling in below, nothing on the schedule until sunset.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink hover:bg-ocean-100 transition-colors"
          >
            Build a day like this
          </a>
        </Reveal>

        <Reveal direction="up" delay={120} className="order-1 lg:order-2 mx-auto w-full max-w-sm">
          <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-soft">
            <img
              src={posterImg}
              alt="A wooden swing hanging over turquoise water beneath the palms at Coconut Tree Hill, Mirissa"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              width="1400"
              height="1867"
            />
            {allowVideo && (
              <video
                ref={videoRef}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  videoReady ? "opacity-100" : "opacity-0"
                }`}
                src={showcaseVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
                onCanPlay={() => setVideoReady(true)}
              />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Showcase;
