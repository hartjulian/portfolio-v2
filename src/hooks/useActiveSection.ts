"use client";

import { useEffect, useState } from "react";

const ACTIVATE_OFFSET = 128;
const BOTTOM_THRESHOLD = 96;

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");
  const sectionIdsKey = sectionIds.join("|");

  useEffect(() => {
    const ids = sectionIdsKey.split("|").filter(Boolean);
    if (ids.length === 0) return;

    const getSectionTop = (element: HTMLElement) =>
      element.getBoundingClientRect().top + window.scrollY;

    const isNearBottom = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const canScroll = scrollHeight > clientHeight + 1;

      return (
        canScroll && scrollTop + clientHeight >= scrollHeight - BOTTOM_THRESHOLD
      );
    };

    const updateActiveSection = () => {
      if (isNearBottom()) {
        setActiveSection(ids[ids.length - 1]);
        return;
      }

      let current = ids[0];

      for (const id of ids) {
        const section = document.getElementById(id);
        if (!section) continue;

        if (window.scrollY >= getSectionTop(section) - ACTIVATE_OFFSET) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    let frame = 0;

    const scheduleUpdate = () => {
      if (!frame) {
        frame = requestAnimationFrame(() => {
          updateActiveSection();
          frame = 0;
        });
      }
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [sectionIdsKey]);

  return activeSection;
}
