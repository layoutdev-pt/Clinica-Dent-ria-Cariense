"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // Force all required attributes imperatively for iOS Safari compatibility
    v.muted = true;
    v.defaultMuted = true;
    v.loop = true;
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");
    v.setAttribute("x5-playsinline", ""); // WeChat/Android WebView
    const tryPlay = () => { v.muted = true; v.play().catch(() => {}); };
    tryPlay();
    // Resume after tab becomes visible again
    const onVisibility = () => { if (!document.hidden) tryPlay(); };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
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
