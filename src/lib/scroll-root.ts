const MOBILE_MQ = "(max-width: 1024px)";

/** Mobile homepage scrolls inside #page-scroll; desktop uses the document. */
export function getScrollRoot(): HTMLElement | null {
  if (typeof window === "undefined") return null;
  if (!window.matchMedia(MOBILE_MQ).matches) return null;
  return document.getElementById("page-scroll");
}

export function getScrollTop(): number {
  const root = getScrollRoot();
  return root ? root.scrollTop : window.scrollY;
}

export function scrollToTop(behavior: ScrollBehavior = "smooth") {
  const root = getScrollRoot();
  if (root) {
    root.scrollTo({ top: 0, behavior });
    return;
  }
  window.scrollTo({ top: 0, behavior });
}

export function onScrollRoot(
  handler: () => void,
  options?: AddEventListenerOptions,
): () => void {
  const root = getScrollRoot();
  const target: EventTarget = root ?? window;
  target.addEventListener("scroll", handler, options);
  return () => target.removeEventListener("scroll", handler, options);
}
