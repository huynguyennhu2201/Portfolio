import { initAvatarFallbacks, initSkillIconFallbacks } from "./avatar-fallback.js";
import { initHeroTypewriter } from "./hero-typewriter.js";
import { renderSiteContent } from "./render-content.js";
import { initActiveNav, initScrollReveal } from "./scroll-reveal.js";

document.addEventListener("DOMContentLoaded", async () => {
  await renderSiteContent();
  initAvatarFallbacks();
  initSkillIconFallbacks();
  initHeroTypewriter();
  initScrollReveal();
  initActiveNav();
});
