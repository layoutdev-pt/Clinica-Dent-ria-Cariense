"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // These must be set before play() to satisfy autoplay policies
    v.muted = true;
    v.playsInline = true;
    v.loop = true;

    const tryPlay = () => {
      v.play().catch(() => {
        // Retry once after a short delay (handles some browser timing issues)
        setTimeout(() => v.play().catch(() => {}), 500);
      });
    };

    if (v.readyState >= 2) {
      tryPlay();
    } else {
      v.addEventListener("canplay", tryPlay, { once: true });
    }
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 w-full h-full object-cover"
      src="/hero.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}
