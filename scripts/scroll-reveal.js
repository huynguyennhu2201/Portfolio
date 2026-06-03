const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

const showImmediately = (items) => {
  items.forEach((item) => item.classList.add("is-visible"));
};

export function initScrollReveal() {
  const items = Array.from(document.querySelectorAll("[data-reveal]"));
  if (!items.length) return;

  if (!("IntersectionObserver" in window) || window.matchMedia(reducedMotionQuery).matches) {
    showImmediately(items);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.18,
    },
  );

  items.forEach((item) => observer.observe(item));
}

export function initActiveNav() {
  const links = Array.from(document.querySelectorAll(".site-nav a[href^='#']"));
  if (!links.length || !("IntersectionObserver" in window)) return;

  const pairs = links
    .map((link) => {
      const target = document.querySelector(link.getAttribute("href"));
      return target ? { link, target } : null;
    })
    .filter(Boolean);

  const setActive = (activeLink) => {
    links.forEach((link) => link.classList.toggle("is-active", link === activeLink));
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      const pair = pairs.find((item) => item.target === visible.target);
      if (pair) setActive(pair.link);
    },
    {
      rootMargin: "-38% 0px -54% 0px",
      threshold: [0.1, 0.35, 0.6],
    },
  );

  pairs.forEach(({ target }) => observer.observe(target));
}
