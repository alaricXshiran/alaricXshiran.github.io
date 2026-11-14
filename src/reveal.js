// Scroll-reveal: anything with a `data-reveal` attribute fades and slides in
// the first time it scrolls into view. Returns a cleanup function.

export function initReveal() {
  const root = document.documentElement;
  const items = Array.from(document.querySelectorAll("[data-reveal]"));

  const reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Without IntersectionObserver (or with reduced motion) just show everything
  if (reduceMotion || !("IntersectionObserver" in window)) {
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  // Content is only hidden once this class is set, so it stays visible
  // if the script never runs.
  root.classList.add("reveal-ready");
  items.forEach((el) => observer.observe(el));

  return () => {
    observer.disconnect();
    root.classList.remove("reveal-ready");
  };
}

// Small helper for staggering items in a list: <div {...stagger(i)}>
export function stagger(index, step = 90, perRow = 3) {
  return {
    "data-reveal": "",
    style: { "--reveal-delay": `${(index % perRow) * step}ms` },
  };
}
