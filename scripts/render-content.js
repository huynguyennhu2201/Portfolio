let content;

const loadPortfolioContent = async () => {
  const version = Date.now();
  const module = await import(`../content/portfolio-data.js?v=${version}`);
  return module.portfolioContent;
};

const slot = (name) => document.querySelector(`[data-render="${name}"]`);

const createElement = (tag, options = {}, children = []) => {
  const element = document.createElement(tag);
  const childList = Array.isArray(children) ? children : [children];

  Object.entries(options).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    if (key === "className") {
      element.className = value;
      return;
    }

    if (key === "text") {
      element.textContent = value;
      return;
    }

    if (key === "dataset") {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue;
      });
      return;
    }

    if (key === "style") {
      Object.entries(value).forEach(([styleKey, styleValue]) => {
        element.style.setProperty(styleKey, styleValue);
      });
      return;
    }

    if (key === "ariaHidden") {
      element.setAttribute("aria-hidden", value);
      return;
    }

    element.setAttribute(key, value);
  });

  childList.filter(Boolean).forEach((child) => {
    element.append(child.nodeType ? child : document.createTextNode(child));
  });

  return element;
};

const clearAndAppend = (target, children) => {
  if (!target) return;
  target.replaceChildren(...children.filter(Boolean));
};

const clampPercent = (value) => Math.max(0, Math.min(100, Number(value) || 0));

const addCacheVersion = (src) => {
  if (!src || src.startsWith("http") || src.includes("?")) return src;
  return `${src}?v=${Date.now()}`;
};

const createAvatar = (className) => {
  const image = content.hero.portrait;

  return createElement("div", { className: `avatar ${className}` }, [
    createElement("img", {
      className: "avatar-image",
      src: addCacheVersion(image.src),
      alt: image.alt,
      dataset: { avatar: "" },
    }),
    createElement("span", {
      className: "avatar-fallback",
      ariaHidden: "true",
      text: image.initials,
    }),
  ]);
};

const createSectionHeading = (section) =>
  createElement("div", { className: "section-heading", dataset: { reveal: "" } }, [
    createElement("p", { className: "eyebrow", text: section.eyebrow }),
    createElement("h2", { text: section.title }),
  ]);

const renderPageMeta = () => {
  document.documentElement.lang = content.page.language || "en";
  document.title = content.page.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", content.page.description);
  }
};

const renderHero = () => {
  const hero = slot("hero");
  const heroDown = document.querySelector(".hero-down");

  if (heroDown) {
    heroDown.setAttribute("aria-label", content.hero.scrollLabel);
  }

  clearAndAppend(hero, [
    createElement("div", { className: "hero-avatar-float" }, [
      createElement("div", { className: "hero-avatar-ring", ariaHidden: "true" }),
      createAvatar("hero-avatar"),
    ]),
    createElement("p", { className: "hero-kicker", text: content.hero.kicker }),
    createElement("h1", { text: content.hero.headline }),
    createElement("p", { className: "hero-type" }, [
      createElement("span", {
        dataset: { typewriter: "" },
        "data-phrases": JSON.stringify(content.hero.phrases),
      }),
      createElement("span", {
        className: "type-cursor",
        ariaHidden: "true",
        text: "|",
      }),
    ]),
  ]);
};

const renderNav = () => {
  const nav = slot("nav");
  const links = content.nav.map((item, index) =>
    createElement("a", {
      className: index === 0 ? "is-active" : "",
      href: item.href,
      text: item.label,
    }),
  );

  clearAndAppend(nav, links);
};

const renderProfile = () => {
  const profile = slot("profile");
  const contactItems = content.profile.contacts.map((item) => {
    const tag = item.href ? "a" : "p";
    const options = item.href ? { href: item.href } : {};

    return createElement(tag, options, [
      createElement("span", { className: "contact-icon", text: item.icon }),
      createElement("span", {}, [
        createElement("small", { text: item.label }),
        item.value,
      ]),
    ]);
  });

  clearAndAppend(profile, [
    createElement("div", { className: "profile-top" }, [
      createAvatar("profile-avatar"),
      createElement("div", {}, [
        createElement("p", { className: "eyebrow", text: content.profile.eyebrow }),
        createElement("h2", { text: content.profile.name }),
        createElement("p", { className: "profile-role", text: content.profile.role }),
      ]),
    ]),
    createElement("div", { className: "contact-list", "aria-label": "Contact details" }, contactItems),
  ]);
};

const renderAbout = () => {
  clearAndAppend(slot("about"), [
    createElement("p", { className: "eyebrow", text: content.about.eyebrow }),
    createElement("h2", { text: content.about.title }),
    createElement("p", { text: content.about.body }),
  ]);
};

const createSkillIcon = (item) => {
  const children = [];

  if (item.iconSrc) {
    children.push(
      createElement("img", {
        className: "skill-icon-image",
        src: addCacheVersion(item.iconSrc),
        alt: `${item.title} logo`,
        loading: "lazy",
        dataset: { skillIcon: "" },
      }),
    );
  }

  if (item.icon) {
    children.push(
      createElement("span", {
        className: "skill-icon-fallback",
        ariaHidden: "true",
        text: item.icon,
      }),
    );
  }

  return createElement(
    "span",
    { className: item.iconSrc ? "skill-icon has-image" : "skill-icon" },
    children,
  );
};

const renderSkills = () => {
  const cards = content.skills.items.map((item, index) =>
    createElement(
      "article",
      {
        className: "skill-card elevated-card",
        dataset: { reveal: "" },
        style: { "--delay": `${index * 40}ms` },
      },
      [
        createSkillIcon(item),
        createElement("h3", { text: item.title }),
        createElement("p", { text: item.description }),
      ],
    ),
  );

  clearAndAppend(slot("skills"), [
    createSectionHeading(content.skills),
    createElement("div", { className: "skills-grid" }, cards),
  ]);
};

const renderSoftSkills = () => {
  const bars = content.softSkills.items.map((item) => {
    const value = clampPercent(item.value);

    return createElement(
      "div",
      {
        className: "bar-card elevated-card",
        dataset: { reveal: "", progress: String(value) },
        style: { "--value": `${value}%` },
      },
      [
        createElement("div", { className: "bar-label" }, [
          createElement("span", { text: item.label }),
        ]),
        createElement(
          "div",
          {
            className: "progress-track",
            role: "progressbar",
            "aria-label": item.label,
            "aria-valuemin": "0",
            "aria-valuemax": "100",
            "aria-valuenow": String(value),
          },
          createElement("span", { className: "progress-fill" }),
        ),
      ],
    );
  });

  clearAndAppend(slot("soft-skills"), [
    createSectionHeading(content.softSkills),
    createElement("div", { className: "bar-list" }, bars),
  ]);
};

const renderProjects = () => {
  const cards = content.projects.items.map((item, index) => {
    const links = [];

    if (item.demoHref) {
      links.push(
        createElement("a", {
          href: item.demoHref,
          target: "_blank",
          rel: "noopener",
          text: item.demoLabel || "Live demo",
        }),
      );
    }

    if (item.href) {
      links.push(
        createElement("a", {
          href: item.href,
          target: item.href.startsWith("http") ? "_blank" : null,
          rel: item.href.startsWith("http") ? "noopener" : null,
          text: item.linkLabel || "View project",
        }),
      );
    }

    return createElement(
      "article",
      {
        className: "project-card elevated-card",
        dataset: { reveal: "" },
        style: { "--delay": `${index * 80}ms` },
      },
      [
        createElement("div", { className: "project-tag", text: item.tag }),
        createElement("h3", { text: item.title }),
        createElement("p", { text: item.description }),
        createElement("div", { className: "project-links" }, links),
      ],
    );
  });

  clearAndAppend(slot("projects"), [
    createSectionHeading(content.projects),
    createElement("div", { className: "project-grid" }, cards),
  ]);
};

export async function renderSiteContent() {
  content = await loadPortfolioContent();
  renderPageMeta();
  slot("skip-link").textContent = "Skip to portfolio";
  renderHero();
  renderNav();
  renderProfile();
  renderAbout();
  renderSkills();
  renderSoftSkills();
  renderProjects();
}
