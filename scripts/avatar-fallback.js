export function initAvatarFallbacks() {
  const images = document.querySelectorAll("[data-avatar]");

  images.forEach((image) => {
    const avatar = image.closest(".avatar");
    if (!avatar) return;

    const showFallback = () => avatar.classList.add("avatar--fallback");
    image.addEventListener("error", showFallback, { once: true });

    if (image.complete && image.naturalWidth === 0) {
      showFallback();
    }
  });
}

export function initSkillIconFallbacks() {
  const images = document.querySelectorAll("[data-skill-icon]");

  images.forEach((image) => {
    const icon = image.closest(".skill-icon");
    if (!icon) return;

    const showFallback = () => icon.classList.add("skill-icon--fallback");
    image.addEventListener("error", showFallback, { once: true });

    if (image.complete && image.naturalWidth === 0) {
      showFallback();
    }
  });
}
