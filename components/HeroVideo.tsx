"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.loop = true;
    v.play().catch(() => {
      // autoplay blocked — video stays paused until user interaction
    });
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
