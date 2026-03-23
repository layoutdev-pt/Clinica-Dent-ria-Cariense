"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    // Set ALL attributes imperatively — React hydration can miss some on iOS Safari
    v.muted = true;
    v.defaultMuted = true;
    v.loop = true;
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");
    v.setAttribute("x5-playsinline", "");

    const tryPlay = () => {
      v.muted = true;
      v.play().catch(() => {});
    };

    // Try immediately (works if video is already in cache or loading)
    tryPlay();

    // Also try as soon as the browser has enough data to play
    v.addEventListener("loadedmetadata", tryPlay);
    v.addEventListener("canplay", tryPlay);

    // Resume after tab becomes visible again
    const onVisibility = () => { if (!document.hidden) tryPlay(); };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      v.removeEventListener("loadedmetadata", tryPlay);
      v.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 w-full h-full object-cover"
      src="https://ge1temxvqllmetmu.public.blob.vercel-storage.com/clinica%20carience.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}
