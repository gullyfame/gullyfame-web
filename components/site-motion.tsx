"use client";

import { useEffect } from "react";
import { initMotion } from "@/lib/motion";
import { initScrollSpy } from "@/lib/scroll-spy";
import { initSmoothScroll } from "@/lib/smooth-scroll";

/** Mounts the page's scroll effects. Renders nothing. */
export function SiteMotion() {
  useEffect(() => {
    const stopMotion = initMotion();
    const stopSmoothScroll = initSmoothScroll();
    const stopScrollSpy = initScrollSpy();
    return () => {
      stopMotion();
      stopSmoothScroll();
      stopScrollSpy();
    };
  }, []);

  return null;
}
