const DEFAULT_PHRASES = [
  "a Data Analyst",
  "MSc Business Analytics",
  "I turn data into decisions",
];

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const parsePhrases = (node) => {
  try {
    const parsed = JSON.parse(node.dataset.phrases || "[]");
    return parsed.filter((item) => typeof item === "string" && item.trim());
  } catch {
    return DEFAULT_PHRASES;
  }
};

export function initHeroTypewriter() {
  const node = document.querySelector("[data-typewriter]");
  if (!node) return;

  const phrases = parsePhrases(node);
  const queue = phrases.length ? phrases : DEFAULT_PHRASES;

  if (prefersReducedMotion()) {
    node.textContent = queue[0];
    return;
  }

  let phraseIndex = 0;
  let letterIndex = 0;
  let deleting = false;

  const tick = () => {
    const phrase = queue[phraseIndex];
    node.textContent = phrase.slice(0, letterIndex);

    if (!deleting && letterIndex < phrase.length) {
      letterIndex += 1;
      window.setTimeout(tick, 58);
      return;
    }

    if (!deleting && letterIndex === phrase.length) {
      deleting = true;
      window.setTimeout(tick, 1350);
      return;
    }

    if (deleting && letterIndex > 0) {
      letterIndex -= 1;
      window.setTimeout(tick, 32);
      return;
    }

    deleting = false;
    phraseIndex = (phraseIndex + 1) % queue.length;
    window.setTimeout(tick, 260);
  };

  tick();
}
