import { useEffect, useRef, useState } from "react";

const TARGET_VOLUME = 0.22;

const createOceanAmbience = (audioCtx) => {
  const bufferSize = 2 * audioCtx.sampleRate;
  const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  let lastOut = 0;
  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    lastOut = (lastOut + 0.02 * white) / 1.02;
    output[i] = lastOut * 3.5;
  }

  const noiseSource = audioCtx.createBufferSource();
  noiseSource.buffer = noiseBuffer;
  noiseSource.loop = true;

  const filter = audioCtx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 700;

  const waveGain = audioCtx.createGain();
  waveGain.gain.value = 0.5;

  const lfo = audioCtx.createOscillator();
  lfo.frequency.value = 0.12;
  const lfoGain = audioCtx.createGain();
  lfoGain.gain.value = 0.35;
  lfo.connect(lfoGain);
  lfoGain.connect(waveGain.gain);

  const masterGain = audioCtx.createGain();
  masterGain.gain.value = 0;

  noiseSource.connect(filter);
  filter.connect(waveGain);
  waveGain.connect(masterGain);
  masterGain.connect(audioCtx.destination);

  noiseSource.start();
  lfo.start();

  return { noiseSource, lfo, masterGain };
};

const AmbientSound = () => {
  const [audible, setAudible] = useState(false);
  const ctxRef = useRef(null);
  const nodesRef = useRef(null);
  const enabledRef = useRef(true);
  const heroVisibleRef = useRef(true);
  const unlockedRef = useRef(false);

  const ensureAudio = () => {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    if (!ctxRef.current) ctxRef.current = new AudioCtx();
    const audioCtx = ctxRef.current;
    if (audioCtx.state === "suspended") audioCtx.resume();
    if (!nodesRef.current) nodesRef.current = createOceanAmbience(audioCtx);
    return audioCtx;
  };

  const rampTo = (target) => {
    const audioCtx = ctxRef.current;
    if (!audioCtx || !nodesRef.current) return;
    const { masterGain } = nodesRef.current;
    masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
    masterGain.gain.linearRampToValueAtTime(target, audioCtx.currentTime + (target > 0 ? 1.4 : 0.8));
    setAudible(target > 0);
  };

  // Start on the first genuine user gesture, anywhere on the page — real
  // autoplay-with-sound is blocked by every browser, so this is as close
  // to "on by default" as the platform allows.
  useEffect(() => {
    const unlock = () => {
      if (unlockedRef.current) return;
      unlockedRef.current = true;
      const audioCtx = ensureAudio();
      if (audioCtx && enabledRef.current && heroVisibleRef.current) {
        rampTo(TARGET_VOLUME);
      }
    };
    const events = ["pointerdown", "touchstart", "keydown"];
    events.forEach((evt) => window.addEventListener(evt, unlock, { once: true }));
    return () => events.forEach((evt) => window.removeEventListener(evt, unlock));
  }, []);

  // Fade out once the hero scrolls out of view, fade back in on return.
  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        heroVisibleRef.current = entry.isIntersecting;
        if (!unlockedRef.current || !enabledRef.current) return;
        rampTo(entry.isIntersecting ? TARGET_VOLUME : 0);
      },
      { threshold: 0.3 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(
    () => () => {
      ctxRef.current?.close();
    },
    []
  );

  const toggle = () => {
    const next = !enabledRef.current;
    enabledRef.current = next;
    if (next) {
      unlockedRef.current = true;
      const audioCtx = ensureAudio();
      if (audioCtx && heroVisibleRef.current) rampTo(TARGET_VOLUME);
    } else {
      rampTo(0);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={audible}
      aria-label={audible ? "Turn off ambient ocean sound" : "Turn on ambient ocean sound"}
      className="animate-fade-up absolute top-20 left-4 sm:top-24 sm:left-6 md:top-28 md:left-10 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/25 text-white shadow-soft hover:bg-white/20 transition-colors"
      style={{ animationDelay: "420ms" }}
    >
      {audible ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" />
          <path d="M16.5 8.5a5 5 0 010 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M19.3 6a9 9 0 010 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" />
          <path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
};

export default AmbientSound;
