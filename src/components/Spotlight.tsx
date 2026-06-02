"use client";

import { useEffect, useRef } from "react";

export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const desktop = window.matchMedia("(min-width: 1024px)").matches;

    if (reducedMotion || coarsePointer || !desktop) {
      el.style.display = "none";
      return;
    }

    let x = 0;
    let y = 0;
    let frame = 0;

    const updatePosition = () => {
      el.style.background = `radial-gradient(400px circle at ${x}px ${y}px, color-mix(in srgb, var(--accent) 10%, transparent), transparent 70%)`;
      frame = 0;
    };

    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) {
        frame = requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener("mousemove", onMove);
    updatePosition();

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
