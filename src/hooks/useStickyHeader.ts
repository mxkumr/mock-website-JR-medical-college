"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getScrollTop, onScrollRoot } from "@/lib/scroll-root";

const TOP_OFFSET = 300;
const SCROLL_DELTA = 80;

export type StickyHeaderState = "transparent" | "visible" | "hidden";

/**
 * Port of VamTam sticky header logic (custom-animations.js → stickyHeader).
 * Transparent at top; hides on scroll down; reappears on scroll up past 300px.
 */
export function useStickyHeader(options?: {
  transparent?: boolean;
  menuOpen?: boolean;
}) {
  const transparentHeader = options?.transparent ?? true;
  const menuOpen = options?.menuOpen ?? false;

  const [state, setState] = useState<StickyHeaderState>("transparent");
  const prevY = useRef(0);
  const lastScrollYPause = useRef(0);
  const lastDirection = useRef<"up" | "down" | null>(null);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const applyState = useCallback((next: StickyHeaderState) => {
    setState((prev) => (prev === next ? prev : next));
  }, []);

  useEffect(() => {
    const isDesktop = () => window.matchMedia("(min-width: 1025px)").matches;

    const initialCheck = () => {
      if (getScrollTop() >= TOP_OFFSET) {
        applyState("hidden");
      }
    };
    initialCheck();

    const onScroll = () => {
      if (!isDesktop()) {
        applyState(getScrollTop() > 60 ? "visible" : "transparent");
        return;
      }

      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => {
        lastScrollYPause.current = getScrollTop();
      }, 500);

      if (debounceTimer.current) clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(() => {
        const y = getScrollTop();
        const direction: "up" | "down" = y > prevY.current ? "down" : "up";

        if (menuOpen) {
          if (transparentHeader && y < TOP_OFFSET) {
            applyState("transparent");
          } else {
            applyState("visible");
          }
          prevY.current = y;
          return;
        }

        if (lastDirection.current !== direction) {
          lastScrollYPause.current = y;
        }
        lastDirection.current = direction;

        const scrollDifference = Math.abs(y - lastScrollYPause.current);
        if (scrollDifference < SCROLL_DELTA && y > SCROLL_DELTA) {
          prevY.current = y;
          return;
        }

        if (direction === "up") {
          if (y >= TOP_OFFSET) {
            applyState("visible");
          } else {
            applyState("transparent");
          }
        } else if (y > SCROLL_DELTA && (y >= TOP_OFFSET || transparentHeader)) {
          applyState("hidden");
        } else if (y <= SCROLL_DELTA) {
          applyState("transparent");
        }

        prevY.current = y;
      }, 50);
    };

    const removeScroll = onScrollRoot(onScroll, { passive: true });
    return () => {
      removeScroll();
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [applyState, menuOpen, transparentHeader]);

  return {
    state,
    isTransparent: state === "transparent",
    isHidden: state === "hidden",
    isVisible: state === "visible",
    hasBackground: state !== "transparent",
  };
}
