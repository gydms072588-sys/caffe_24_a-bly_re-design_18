const SELECTORS = {
  menuButton: "[data-menu-button]",
  mobileMenu: "[data-mobile-menu]",
  heroSwiper: "[data-hero-swiper]",
  trendSwiper: "[data-trend-swiper]",
  trendItem: ".trend-item",
  trendProgress: "[data-trend-progress]",
  eventItem: ".event-item",
  eventMain: "[data-event-main]",
  eventImage: "[data-event-image]",
  eventLabel: "[data-event-label]",
  eventTitle: "[data-event-title]",
  categoryHeroSwiper: "[data-category-hero-swiper]",
  categoryCurrent: "[data-category-current]",
  categoryTotal: "[data-category-total]",
  circleCategoryItem: ".circle-category__item",
  productSortButton: ".product-sort button",
  viewButton: ".view-button"
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initMobileMenu() {
  const button = document.querySelector(SELECTORS.menuButton);
  const menu = document.querySelector(SELECTORS.mobileMenu);

  if (!button || !menu) return;

  const closeMenu = () => {
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "모바일 메뉴 열기");
    menu.classList.remove("is-open");
    document.body.classList.remove("is-menu-open");
  };

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    button.setAttribute("aria-label", isOpen ? "모바일 메뉴 열기" : "모바일 메뉴 닫기");
    menu.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("is-menu-open", !isOpen);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

function initHeroSwiper() {
  const container = document.querySelector(SELECTORS.heroSwiper);
  if (!window.Swiper || !container) return;

  return new Swiper(container, {
    effect: "fade",
    fadeEffect: { crossFade: true },
    loop: true,
    speed: prefersReducedMotion ? 0 : 900,
    autoplay: prefersReducedMotion ? false : {
      delay: 5500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".hero__pagination",
      clickable: true
    },
    on: {
      slideChange(swiper) {
        const videos = swiper.el.querySelectorAll("video");
        videos.forEach((video) => {
          video.currentTime = 0;
          video.play().catch(() => {});
        });
      }
    }
  });
}

function initTrendSwiper() {
  const items = Array.from(document.querySelectorAll(SELECTORS.trendItem));
  const progress = document.querySelector(SELECTORS.trendProgress);
  const container = document.querySelector(SELECTORS.trendSwiper);

  if (!window.Swiper || !items.length || !container) return;

  const swiper = new Swiper(container, {
    slidesPerView: 1,
    speed: prefersReducedMotion ? 0 : 650,
    loop: false,
    navigation: {
      prevEl: ".trend-button-prev",
      nextEl: ".trend-button-next"
    },
    on: {
      init(instance) {
        updateTrendState(instance.realIndex, items, progress);
      },
      slideChange(instance) {
        updateTrendState(instance.realIndex, items, progress);
      }
    }
  });

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const index = Number(item.dataset.trendIndex || 0);
      swiper.slideTo(index);
      updateTrendState(index, items, progress);
    });
  });

  return swiper;
}

function initCategoryHeroSwiper() {
  const container = document.querySelector(SELECTORS.categoryHeroSwiper);
  const current = document.querySelector(SELECTORS.categoryCurrent);
  const total = document.querySelector(SELECTORS.categoryTotal);

  if (!window.Swiper || !container) return;

  const swiper = new Swiper(container, {
    slidesPerView: 1,
    loop: true,
    speed: prefersReducedMotion ? 0 : 650,
    autoplay: prefersReducedMotion ? false : {
      delay: 4200,
      disableOnInteraction: false
    },
    navigation: {
      prevEl: ".category-hero-prev",
      nextEl: ".category-hero-next"
    },
    on: {
      init(instance) {
        updateCategoryHeroCount(instance, current, total);
      },
      slideChange(instance) {
        updateCategoryHeroCount(instance, current, total);
      }
    }
  });

  return swiper;
}

function updateCategoryHeroCount(swiper, current, total) {
  if (!current || !total) return;

  const realSlides = swiper.el.querySelectorAll(".swiper-slide:not(.swiper-slide-duplicate)").length || swiper.slides.length;
  current.textContent = String(swiper.realIndex + 1);
  total.textContent = String(realSlides);
}

function updateTrendState(activeIndex, items, progress) {
  items.forEach((item, index) => {
    const isActive = index === activeIndex;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });

  if (progress) {
    const percent = ((activeIndex + 1) / items.length) * 100;
    progress.style.width = `${percent}%`;
  }
}

function initEventInteraction() {
  const items = Array.from(document.querySelectorAll(SELECTORS.eventItem));
  const main = document.querySelector(SELECTORS.eventMain);
  const image = document.querySelector(SELECTORS.eventImage);
  const label = document.querySelector(SELECTORS.eventLabel);
  const title = document.querySelector(SELECTORS.eventTitle);

  if (!items.length || !main || !image || !label || !title) return;

  items.forEach((item) => {
    item.addEventListener("click", () => {
      items.forEach((button) => {
        button.classList.remove("is-active");
        button.setAttribute("aria-pressed", "false");
      });

      item.classList.add("is-active");
      item.setAttribute("aria-pressed", "true");

      main.classList.add("is-changing");

      const nextImage = item.dataset.eventImage;
      const nextLabel = item.dataset.eventLabel;
      const nextTitle = item.dataset.eventTitle;

      window.setTimeout(() => {
        if (nextImage) image.src = nextImage;
        if (nextTitle) image.alt = `${nextTitle} 대표 이미지`;
        if (nextLabel) label.textContent = nextLabel;
        if (nextTitle) title.textContent = nextTitle;
        main.classList.remove("is-changing");
      }, prefersReducedMotion ? 0 : 160);
    });
  });
}

function initToggleButtonGroups() {
  const groups = [
    document.querySelectorAll(SELECTORS.circleCategoryItem),
    document.querySelectorAll(SELECTORS.productSortButton),
    document.querySelectorAll(SELECTORS.viewButton)
  ];

  groups.forEach((group) => {
    const buttons = Array.from(group);
    if (!buttons.length) return;

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((target) => {
          target.classList.remove("is-active");
          target.setAttribute("aria-pressed", "false");
        });
        button.classList.add("is-active");
        button.setAttribute("aria-pressed", "true");
      });
    });
  });
}

function initGsapAnimations() {
  if (prefersReducedMotion || !window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".section-heading").forEach((heading) => {
    gsap.from(heading.children, {
      y: 40,
      opacity: 0,
      duration: 0.75,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: heading,
        start: "top 78%"
      }
    });
  });

  gsap.from(".hero__content > *", {
    y: 34,
    opacity: 0,
    duration: 0.85,
    ease: "power3.out",
    stagger: 0.12
  });

  gsap.from(".hero__visual", {
    x: 44,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
  });

  if (document.querySelector(".breadcrumb")) {
    gsap.from(".breadcrumb, .category-hero__copy, .category-hero__banner", {
      y: 38,
      opacity: 0,
      duration: 0.75,
      ease: "power3.out",
      stagger: 0.12
    });
  }

  gsap.from(".category .reveal-card", {
    y: 44,
    opacity: 0,
    duration: 0.75,
    ease: "power3.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".category__grid",
      start: "top 78%"
    }
  });

  if (document.querySelector(".circle-category__item")) {
    gsap.from(".circle-category__item", {
      y: 34,
      opacity: 0,
      duration: 0.65,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".circle-category",
        start: "top 82%"
      }
    });
  }

  gsap.from(".trend__content", {
    x: -54,
    opacity: 0,
    duration: 0.85,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".trend",
      start: "top 70%"
    }
  });

  gsap.from(".trend__showcase", {
    x: 54,
    opacity: 0,
    duration: 0.85,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".trend",
      start: "top 70%"
    }
  });

  gsap.from(".event__main", {
    scale: 0.96,
    opacity: 0,
    duration: 0.85,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".event__layout",
      start: "top 76%"
    }
  });

  gsap.from(".event-item", {
    y: 38,
    opacity: 0,
    duration: 0.65,
    ease: "power3.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".event-list",
      start: "top 78%"
    }
  });

  if (document.querySelector(".product-card")) {
    gsap.from(".product-card", {
      y: 38,
      opacity: 0,
      duration: 0.62,
      ease: "power3.out",
      stagger: 0.045,
      scrollTrigger: {
        trigger: ".product-grid",
        start: "top 78%"
      }
    });

    gsap.from(".benefit-banner", {
      y: 44,
      opacity: 0,
      duration: 0.75,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".benefit-banner",
        start: "top 84%"
      }
    });
  }

  gsap.from(".download__content", {
    x: -48,
    opacity: 0,
    duration: 0.85,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".download",
      start: "top 72%"
    }
  });

  gsap.from(".download__mockup", {
    y: 72,
    opacity: 0,
    duration: 0.95,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".download__visual",
      start: "top 75%"
    }
  });

  gsap.utils.toArray(".download__object").forEach((object, index) => {
    gsap.from(object, {
      y: 36,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".download__visual",
        start: "top 75%"
      }
    });

    gsap.to(object, {
      y: index % 2 === 0 ? -14 : 14,
      duration: 2.8 + index * 0.25,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  });
}

function initImageFallbacks() {
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      img.style.opacity = "0";
      img.parentElement?.classList.add("is-image-missing");
    }, { once: true });
  });
}

function initApp() {
  initMobileMenu();
  initHeroSwiper();
  initTrendSwiper();
  initCategoryHeroSwiper();
  initEventInteraction();
  initToggleButtonGroups();
  initGsapAnimations();
  initImageFallbacks();
}

document.addEventListener("DOMContentLoaded", initApp);
