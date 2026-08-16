import { useEffect, useRef, useState } from "react";

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
  const [on, setOn] = useState(false);
  const ctxRef = useRef(null);
  const nodesRef = useRef(null);

  useEffect(
    () => () => {
      ctxRef.current?.close();
    },
    []
  );

  const toggle = () => {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    if (!ctxRef.current) {
      ctxRef.current = new AudioCtx();
    }
    const audioCtx = ctxRef.current;
    if (audioCtx.state === "suspended") audioCtx.resume();
    if (!nodesRef.current) {
      nodesRef.current = createOceanAmbience(audioCtx);
    }

    const { masterGain } = nodesRef.current;
    masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
    if (on) {
      masterGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.8);
    } else {
      masterGain.gain.linearRampToValueAtTime(0.22, audioCtx.currentTime + 1.4);
    }
    setOn(!on);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? "Turn off ambient ocean sound" : "Turn on ambient ocean sound"}
      className="animate-fade-up absolute top-20 left-4 sm:top-24 sm:left-6 md:top-28 md:left-10 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/25 text-white shadow-soft hover:bg-white/20 transition-colors"
      style={{ animationDelay: "420ms" }}
    >
      {on ? (
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
