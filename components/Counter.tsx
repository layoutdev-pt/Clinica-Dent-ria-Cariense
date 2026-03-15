"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export default function Counter({ target, prefix = "", suffix = "", duration = 2000 }: Props) {
  const [value, setValue] = useState(0);
  const [ticking, setTicking] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setValue(target);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            // easeOutExpo
            const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
            const next = Math.floor(eased * target);
            setValue(next);
            // flash tick on each integer change
            setTicking(true);
            setTimeout(() => setTicking(false), 80);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return (
    <span
      ref={ref}
      className={`tabular-nums inline-block transition-transform duration-75 ${ticking ? "scale-105" : "scale-100"}`}
      style={{ display: "inline-block" }}
    >
      {prefix}{value.toLocaleString("pt-PT")}{suffix}
    </span>
  );
}
