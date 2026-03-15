"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Variant = "fade-up" | "slide-left" | "slide-right" | "scale" | "stagger";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
  threshold?: number;
}

const variantClass: Record<Variant, string> = {
  "fade-up":    "anim-fade-up",
  "slide-left": "anim-slide-left",
  "slide-right":"anim-slide-right",
  "scale":      "anim-scale",
  "stagger":    "anim-stagger",
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
  threshold = 0.1,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      if (el) el.style.opacity = "1";
      return;
    }
    if (delay) el.style.transitionDelay = `${delay}ms`;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`${variantClass[variant]} ${className}`}>
      {children}
    </div>
  );
}
