"use client";

import { useEffect } from "react";
import { initMotion } from "@/lib/motion";

/** Mounts the scroll effects for the current page. Renders nothing. */
export function SiteMotion() {
  useEffect(() => initMotion(), []);
  return null;
}
