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

const defaultSearchSuggestions = [
  "러블리 원피스",
  "여름 데일리룩",
  "무료배송 가디건",
  "출근룩 블라우스",
  "데이트룩 스커트"
];

const searchSuggestionTemplates = [
  "{query} 코디",
  "{query} 추천",
  "{query} 무료배송",
  "{query} 인기상품",
  "{query} 스타일링"
];

const translations = {
  ko: {
    "nav.today": "오늘의 발견",
    "nav.category": "카테고리",
    "nav.brand": "브랜드",
    "nav.event": "이벤트",
    "search.form": "상품 검색",
    "search.label": "검색어",
    "search.placeholder": "취향 저격 드무드레스",
    "search.button": "검색",
    "header.mypage": "로그인 및 마이페이지",
    "header.cart": "장바구니 및 구매 페이지",
    "header.language": "언어 변경",
    "header.menuOpen": "모바일 메뉴 열기",
    "header.menuClose": "모바일 메뉴 닫기",
    "hero1.eyebrow": "Daily Style, ABLY",
    "hero1.titleLine1": "오늘의 취향,",
    "hero1.titleStrong": "에이블리",
    "hero1.titleSuffix": "에서",
    "hero1.desc": "지금 가장 사랑받는 스타일을 만나보세요. 에이블리로 떠나는 취향 탐험",
    "hero1.cta": "지금 쇼핑하기",
    "hero2.eyebrow": "FREE SHIPPING",
    "hero2.titleLine1": "배송비 걱정 없이,",
    "hero2.titleLine2": "없이,",
    "hero2.titleStrong": "더 가볍게",
    "hero2.desc": "무료배송 혜택으로 오늘의 스타일을 부담 없이 만나보세요.",
    "hero2.cta": "혜택 보러가기",
    "category.eyebrow": "01. Category",
    "category.titleLine1": "인기 카테고리",
    "category.titleLine2": "지금 많이 찾는 아이템",
    "category.desc": "에이블리에서 가장 인기있는 카테고리로 스타일링하세요.",
    "category.cta": "전체 카테고리 보기",
    "trend.eyebrow": "02. Trend Category",
    "trend.titleLine1": "지금, 에이블리에서",
    "trend.titleStrong": "사랑받는 스타일",
    "trend.desc": "에디터가 추천하는 트렌드 룩을 확인해보세요.",
    "event.eyebrow": "03. Shopping Benefits",
    "event.titleLine1": "오늘의 혜택을",
    "event.titleStrong": "가장 먼저 만나보세요",
    "event.desc": "놓치기 아쉬운 에이블리 인기 상품을 한눈에 확인하세요.",
    "download.eyebrow": "04. Shopping Benefits",
    "download.titleLine1": "앱에서 더 빠르게",
    "download.titleStrong": "나만의 쇼핑을 시작하세요",
    "download.desc": "관심 상품 알림부터 무료배송 혜택까지, 에이블리 앱에서 더 편리하게 확인해보세요.",
    "download.appStore": "App Store 다운로드",
    "download.googlePlay": "Google Play 다운로드",
    "common.viewMore": "자세히 보기"
  },
  en: {
    "nav.today": "Today's Picks",
    "nav.category": "Category",
    "nav.brand": "Brand",
    "nav.event": "Event",
    "search.form": "Product Search",
    "search.label": "Search",
    "search.placeholder": "Find your favorite dress",
    "search.button": "Search",
    "header.mypage": "Login and My Page",
    "header.cart": "Cart and Orders",
    "header.language": "Change Language",
    "header.menuOpen": "Open mobile menu",
    "header.menuClose": "Close mobile menu",
    "hero1.eyebrow": "Daily Style, ABLY",
    "hero1.titleLine1": "Your taste today,",
    "hero1.titleStrong": "ABLY",
    "hero1.titleSuffix": " awaits",
    "hero1.desc": "Explore the most-loved styles now and discover your taste with ABLY.",
    "hero1.cta": "Shop Now",
    "hero2.eyebrow": "FREE SHIPPING",
    "hero2.titleLine1": "No shipping worries,",
    "hero2.titleLine2": "worries,",
    "hero2.titleStrong": "shop lighter",
    "hero2.desc": "Enjoy today's styles more freely with free shipping benefits.",
    "hero2.cta": "View Benefits",
    "category.eyebrow": "01. Category",
    "category.titleLine1": "Popular Categories",
    "category.titleLine2": "Items everyone wants now",
    "category.desc": "Style your day with ABLY's most popular categories.",
    "category.cta": "View All Categories",
    "trend.eyebrow": "02. Trend Category",
    "trend.titleLine1": "Loved now",
    "trend.titleStrong": "on ABLY",
    "trend.desc": "Explore trend looks recommended by our editors.",
    "event.eyebrow": "03. Shopping Benefits",
    "event.titleLine1": "Today's benefits",
    "event.titleStrong": "before anyone else",
    "event.desc": "See ABLY's popular offers at a glance.",
    "download.eyebrow": "04. Shopping Benefits",
    "download.titleLine1": "Start faster",
    "download.titleStrong": "in the ABLY app",
    "download.desc": "Check wish alerts, free shipping benefits, and more in the ABLY app.",
    "download.appStore": "Download on App Store",
    "download.googlePlay": "Download on Google Play",
    "common.viewMore": "View More"
  },
  ja: {
    "nav.today": "今日のおすすめ",
    "nav.category": "カテゴリー",
    "nav.brand": "ブランド",
    "nav.event": "イベント",
    "search.form": "商品検索",
    "search.label": "検索語",
    "search.placeholder": "お気に入りのワンピースを探す",
    "search.button": "検索",
    "header.mypage": "ログイン・マイページ",
    "header.cart": "カート・購入ページ",
    "header.language": "言語変更",
    "header.menuOpen": "モバイルメニューを開く",
    "header.menuClose": "モバイルメニューを閉じる",
    "hero1.eyebrow": "Daily Style, ABLY",
    "hero1.titleLine1": "今日の好みを、",
    "hero1.titleStrong": "ABLY",
    "hero1.titleSuffix": "で",
    "hero1.desc": "今いちばん愛されているスタイルを、ABLYで見つけてください。",
    "hero1.cta": "今すぐショッピング",
    "hero2.eyebrow": "FREE SHIPPING",
    "hero2.titleLine1": "送料を気にせず、",
    "hero2.titleLine2": "気にせず、",
    "hero2.titleStrong": "もっと気軽に",
    "hero2.desc": "送料無料の特典で、今日のスタイルをもっと気軽に楽しめます。",
    "hero2.cta": "特典を見る",
    "category.eyebrow": "01. Category",
    "category.titleLine1": "人気カテゴリー",
    "category.titleLine2": "今よく探されているアイテム",
    "category.desc": "ABLYで人気のカテゴリーからスタイリングしてみてください。",
    "category.cta": "すべてのカテゴリーを見る",
    "trend.eyebrow": "02. Trend Category",
    "trend.titleLine1": "今、ABLYで",
    "trend.titleStrong": "愛されるスタイル",
    "trend.desc": "エディターおすすめのトレンドルックをチェックしてください。",
    "event.eyebrow": "03. Shopping Benefits",
    "event.titleLine1": "今日の特典を",
    "event.titleStrong": "いち早くチェック",
    "event.desc": "見逃せないABLYの人気特典を一目で確認できます。",
    "download.eyebrow": "04. Shopping Benefits",
    "download.titleLine1": "アプリでもっと早く",
    "download.titleStrong": "自分だけのショッピングを",
    "download.desc": "お気に入り通知から送料無料特典まで、ABLYアプリで便利に確認できます。",
    "download.appStore": "App Storeでダウンロード",
    "download.googlePlay": "Google Playでダウンロード",
    "common.viewMore": "詳しく見る"
  },
  zh: {
    "nav.today": "今日推荐",
    "nav.category": "分类",
    "nav.brand": "品牌",
    "nav.event": "活动",
    "search.form": "商品搜索",
    "search.label": "搜索词",
    "search.placeholder": "寻找心动连衣裙",
    "search.button": "搜索",
    "header.mypage": "登录与我的页面",
    "header.cart": "购物车与订单",
    "header.language": "切换语言",
    "header.menuOpen": "打开移动菜单",
    "header.menuClose": "关闭移动菜单",
    "hero1.eyebrow": "Daily Style, ABLY",
    "hero1.titleLine1": "今天的喜好，",
    "hero1.titleStrong": "ABLY",
    "hero1.titleSuffix": "为你准备",
    "hero1.desc": "现在就遇见最受喜爱的风格，在 ABLY 开始你的喜好探索。",
    "hero1.cta": "立即选购",
    "hero2.eyebrow": "FREE SHIPPING",
    "hero2.titleLine1": "无需担心运费，",
    "hero2.titleLine2": "运费，",
    "hero2.titleStrong": "轻松选购",
    "hero2.desc": "通过免运费优惠，更轻松地享受今日风格。",
    "hero2.cta": "查看优惠",
    "category.eyebrow": "01. Category",
    "category.titleLine1": "热门分类",
    "category.titleLine2": "现在大家都在找的单品",
    "category.desc": "从 ABLY 人气分类中完成你的今日穿搭。",
    "category.cta": "查看全部分类",
    "trend.eyebrow": "02. Trend Category",
    "trend.titleLine1": "现在，ABLY 上",
    "trend.titleStrong": "备受喜爱的风格",
    "trend.desc": "查看编辑推荐的流行穿搭。",
    "event.eyebrow": "03. Shopping Benefits",
    "event.titleLine1": "今日优惠",
    "event.titleStrong": "抢先查看",
    "event.desc": "一眼查看不容错过的 ABLY 人气优惠。",
    "download.eyebrow": "04. Shopping Benefits",
    "download.titleLine1": "在应用中更快",
    "download.titleStrong": "开始专属购物",
    "download.desc": "从关注商品提醒到免运费优惠，都可在 ABLY 应用中便捷查看。",
    "download.appStore": "在 App Store 下载",
    "download.googlePlay": "在 Google Play 下载",
    "common.viewMore": "查看更多"
  }
};

function getStoredLanguage() {
  return localStorage.getItem("ably-language") || "ko";
}

function getTranslation(key) {
  const selectedTranslations = translations[getStoredLanguage()] || translations.ko;
  return selectedTranslations[key] || translations.ko[key] || "";
}

function applyLanguage(lang) {
  const selectedTranslations = translations[lang];

  if (!selectedTranslations) return;

  document.documentElement.lang = lang;
  localStorage.setItem("ably-language", lang);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (selectedTranslations[key]) {
      element.textContent = selectedTranslations[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;

    if (selectedTranslations[key]) {
      element.setAttribute("placeholder", selectedTranslations[key]);
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;

    if (selectedTranslations[key]) {
      element.setAttribute("aria-label", selectedTranslations[key]);
    }
  });
}

function initLanguageSwitcher() {
  const languageButton = document.querySelector("[data-language-button]");
  const languageMenu = document.querySelector("[data-language-menu]");
  const languageOptions = document.querySelectorAll("[data-lang]");

  applyLanguage(getStoredLanguage());

  if (languageButton && languageMenu) {
    languageButton.addEventListener("click", (event) => {
      event.stopPropagation();

      const isOpen = languageMenu.classList.toggle("is-open");
      languageButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  languageOptions.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedLang = button.dataset.lang;

      applyLanguage(selectedLang);

      if (languageMenu) {
        languageMenu.classList.remove("is-open");
      }

      if (languageButton) {
        languageButton.setAttribute("aria-expanded", "false");
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (
      languageMenu &&
      languageButton &&
      !languageMenu.contains(event.target) &&
      !languageButton.contains(event.target)
    ) {
      languageMenu.classList.remove("is-open");
      languageButton.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && languageMenu && languageButton) {
      languageMenu.classList.remove("is-open");
      languageButton.setAttribute("aria-expanded", "false");
    }
  });
}

function initHeaderSearch() {
  const searchForm = document.querySelector("[data-search-form]");
  const searchInput = document.querySelector("[data-search-input]");
  const searchClear = document.querySelector("[data-search-clear]");
  const searchPanel = document.querySelector("[data-search-panel]");
  const suggestionList = document.querySelector("[data-search-suggestion-list]");

  if (!searchForm || !searchInput || !searchClear || !searchPanel || !suggestionList) return;

  const renderSuggestions = (query = "") => {
    const trimmedQuery = query.trim();
    const suggestions = trimmedQuery
      ? searchSuggestionTemplates.map((template) => template.replace("{query}", trimmedQuery))
      : defaultSearchSuggestions;

    suggestionList.replaceChildren();

    suggestions.forEach((text) => {
      const item = document.createElement("li");
      const button = document.createElement("button");

      button.type = "button";
      button.dataset.suggestion = text;
      button.textContent = text;

      item.append(button);
      suggestionList.append(item);
    });
  };

  const openSearch = () => {
    searchForm.classList.add("is-open");
    renderSuggestions(searchInput.value);
  };

  const closeSearch = () => {
    searchForm.classList.remove("is-open");
  };

  const updateValueState = () => {
    const value = searchInput.value.trim();

    searchForm.classList.toggle("has-value", value.length > 0);
    renderSuggestions(value);
  };

  searchInput.addEventListener("focus", openSearch);
  searchInput.addEventListener("input", updateValueState);

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    openSearch();
    searchInput.focus();
  });

  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    updateValueState();
    searchInput.focus();
  });

  suggestionList.addEventListener("click", (event) => {
    const suggestionButton = event.target.closest("[data-suggestion]");

    if (!suggestionButton) return;

    searchInput.value = suggestionButton.dataset.suggestion;
    updateValueState();
    searchInput.focus();
  });

  document.addEventListener("click", (event) => {
    if (!searchForm.contains(event.target)) {
      closeSearch();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSearch();
      searchInput.blur();
    }
  });

  renderSuggestions();
  updateValueState();
}

function initMobileMenu() {
  const button = document.querySelector(SELECTORS.menuButton);
  const menu = document.querySelector(SELECTORS.mobileMenu);

  if (!button || !menu) return;

  const closeMenu = () => {
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", getTranslation("header.menuOpen"));
    menu.classList.remove("is-open");
    document.body.classList.remove("is-menu-open");
  };

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    button.setAttribute("aria-label", isOpen ? getTranslation("header.menuOpen") : getTranslation("header.menuClose"));
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

  const syncVideos = (swiper) => {
    swiper.el.querySelectorAll(".swiper-slide video").forEach((video) => {
      const isActive = video.closest(".swiper-slide")?.classList.contains("swiper-slide-active");

      if (isActive) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  };

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
    navigation: {
      prevEl: ".home-hero__arrow--prev",
      nextEl: ".home-hero__arrow--next"
    },
    on: {
      init: syncVideos,
      slideChange(swiper) {
        syncVideos(swiper);
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

  const activateItem = (item) => {
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
  };

  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      if (event.target.closest(".event-item__arrow")) return;
      activateItem(item);
    });

    item.addEventListener("keydown", (event) => {
      if (event.target.closest(".event-item__arrow")) return;
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      activateItem(item);
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

  const downloadVisual = document.querySelector(".download__visual");

  if (downloadVisual) {
    const downloadPhone = downloadVisual.querySelector(".download__phone");
    const downloadHeart = downloadVisual.querySelector(".download__heart-bg");
    const downloadProducts = gsap.utils.toArray(downloadVisual.querySelectorAll(".download__object"));
    const canHoverDownloadVisual = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    let isDownloadVisualReady = false;
    let isDownloadProductsOpen = false;
    let heartFloatTween = null;
    let productFloatTweens = [];

    if (!downloadPhone) return;

    gsap.set(downloadPhone, { x: 0, y: 60, rotation: 0, scale: 0.96, opacity: 0 });
    if (downloadHeart) {
      gsap.set(downloadHeart, { xPercent: -50, yPercent: -50, x: 0, y: 0, scale: 0.65, opacity: 0 });
    }

    const getVisibleDownloadProducts = () => downloadProducts.filter((object) => object.offsetParent !== null);

    const getProductCssNumber = (object, property) => {
      const value = window.getComputedStyle(object).getPropertyValue(property);
      return Number.parseFloat(value) || 0;
    };

    const getProductSpreadTarget = (object) => ({
      x: getProductCssNumber(object, "--spread-x"),
      y: getProductCssNumber(object, "--spread-y"),
      rotation: getProductCssNumber(object, "--product-rotation")
    });

    const killDownloadFloating = () => {
      heartFloatTween?.kill();
      heartFloatTween = null;
      productFloatTweens.forEach((tween) => tween.kill());
      productFloatTweens = [];
    };

    const clusterDownloadProducts = (duration = 0, opacity = 0) => {
      const products = getVisibleDownloadProducts();
      const state = {
        x: 0,
        y: 0,
        xPercent: -50,
        yPercent: -50,
        scale: 0.45,
        opacity,
        rotation: 0,
        overwrite: true
      };

      if (duration) {
        gsap.to(products, {
          ...state,
          duration,
          ease: "power3.inOut"
        });
      } else {
        gsap.set(products, state);
      }
    };

    const hideDownloadHeart = (duration = 0) => {
      const state = {
        xPercent: -50,
        yPercent: -50,
        x: 0,
        y: 0,
        scale: 0.65,
        opacity: 0,
        overwrite: true
      };

      if (!downloadHeart) return;

      if (duration) {
        gsap.to(downloadHeart, {
          ...state,
          duration,
          ease: "power3.out"
        });
      } else {
        gsap.set(downloadHeart, state);
      }
    };

    const floatDownloadHeart = () => {
      if (!downloadHeart || !isDownloadProductsOpen) return;

      heartFloatTween = gsap.to(downloadHeart, {
        y: -6,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        overwrite: "auto"
      });
    };

    const floatDownloadProducts = (products) => {
      if (!isDownloadProductsOpen) return;

      const floatYValues = [-6, -4, -5, -7];
      const floatDurations = [3.2, 3.6, 3.4, 3.8];

      productFloatTweens = products.map((object, index) => {
        const target = getProductSpreadTarget(object);

        return gsap.to(object, {
          y: target.y + floatYValues[index],
          duration: floatDurations[index],
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          overwrite: "auto"
        });
      });
    };

    const spreadDownloadProducts = () => {
      if (!isDownloadVisualReady || isDownloadProductsOpen) return;

      isDownloadProductsOpen = true;
      downloadVisual.classList.add("is-expanded");
      killDownloadFloating();

      const visibleProducts = getVisibleDownloadProducts();
      const productTargets = new Map(visibleProducts.map((object) => [object, getProductSpreadTarget(object)]));

      gsap.set(visibleProducts, {
        x: 0,
        y: 0,
        xPercent: -50,
        yPercent: -50,
        scale: 0.45,
        opacity: 0,
        rotation: 0
      });

      if (downloadHeart) {
        gsap.to(downloadHeart, {
          xPercent: -50,
          yPercent: -50,
          x: 0,
          y: 0,
          scale: 1,
          opacity: 0.64,
          duration: 0.78,
          ease: "back.out(1.3)",
          overwrite: true,
          onComplete: floatDownloadHeart
        });
      }

      gsap.to(visibleProducts, {
        x: (index, object) => productTargets.get(object).x,
        y: (index, object) => productTargets.get(object).y,
        xPercent: -50,
        yPercent: -50,
        scale: 1,
        opacity: 1,
        rotation: (index, object) => productTargets.get(object).rotation,
        duration: 0.75,
        ease: "back.out(1.35)",
        stagger: 0.07,
        overwrite: true,
        onComplete: () => floatDownloadProducts(visibleProducts)
      });
    };

    const gatherDownloadProducts = () => {
      if (!isDownloadVisualReady) return;

      isDownloadProductsOpen = false;
      downloadVisual.classList.remove("is-expanded");
      killDownloadFloating();

      clusterDownloadProducts(0.58, 0);
      hideDownloadHeart(0.5);
    };

    const activateDownloadVisual = () => {
      if (!isDownloadVisualReady) return;

      spreadDownloadProducts();
    };

    requestAnimationFrame(() => {
      clusterDownloadProducts(0, 0);
      hideDownloadHeart(0);
    });

    const downloadTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: downloadVisual,
        start: "top 74%",
        once: true
      }
    });

    downloadTimeline
      .to(downloadPhone, {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.95,
        ease: "power3.out"
      })
      .add(() => {
        gsap.to(downloadPhone, {
          y: -8,
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      })
      .add(() => clusterDownloadProducts(0.25, 0))
      .add(() => {
        isDownloadVisualReady = true;

        if (canHoverDownloadVisual && downloadVisual.matches(":hover")) {
          activateDownloadVisual();
        } else if (!canHoverDownloadVisual) {
          activateDownloadVisual();
        }
      });

    if (canHoverDownloadVisual) {
      downloadVisual.addEventListener("mouseenter", activateDownloadVisual);
      downloadVisual.addEventListener("mouseleave", gatherDownloadProducts);
    }

    window.addEventListener("resize", () => {
      if (isDownloadProductsOpen) {
        const visibleProducts = getVisibleDownloadProducts();

        killDownloadFloating();
        gsap.set(visibleProducts, {
          x: (index, object) => getProductCssNumber(object, "--spread-x"),
          y: (index, object) => getProductCssNumber(object, "--spread-y"),
          xPercent: -50,
          yPercent: -50,
          scale: 1,
          opacity: 1,
          rotation: (index, object) => getProductCssNumber(object, "--product-rotation")
        });
        if (downloadHeart) {
          gsap.set(downloadHeart, { xPercent: -50, yPercent: -50, x: 0, y: 0, scale: 1, opacity: 0.64 });
        }
        floatDownloadHeart();
        floatDownloadProducts(visibleProducts);
      } else {
        killDownloadFloating();
        clusterDownloadProducts();
        hideDownloadHeart();
      }
    });
  }
}

function initImageFallbacks() {
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      img.style.opacity = "0";
      img.parentElement?.classList.add("is-image-missing");
    }, { once: true });
  });
}

function initHomeWishlist() {
  document.querySelectorAll("[data-wishlist]").forEach((button) => {
    button.addEventListener("click", () => {
      const isActive = button.classList.toggle("is-active");
      button.setAttribute("aria-pressed", String(isActive));
    });
  });
}

function initHomeReviewSwiper() {
  const container = document.querySelector("[data-review-swiper]");
  const progress = document.querySelector("[data-review-progress]");

  if (!window.Swiper || !container) return;

  const updateProgress = (swiper) => {
    if (!progress) return;

    const visible = Number(swiper.params.slidesPerView) || 1;
    const completed = Math.min(swiper.slides.length, swiper.realIndex + visible);
    progress.style.width = `${(completed / swiper.slides.length) * 100}%`;
  };

  return new Swiper(container, {
    slidesPerView: 1.14,
    spaceBetween: 10,
    speed: prefersReducedMotion ? 0 : 600,
    grabCursor: true,
    watchOverflow: true,
    navigation: {
      prevEl: ".home-review-prev",
      nextEl: ".home-review-next"
    },
    breakpoints: {
      641: {
        slidesPerView: 2.25,
        spaceBetween: 16
      },
      900: {
        slidesPerView: 3.15,
        spaceBetween: 18
      }
    },
    on: {
      init: updateProgress,
      slideChange: updateProgress,
      breakpoint: updateProgress
    }
  });
}

function initHomeFooter() {
  const groups = Array.from(document.querySelectorAll(".home-footer__group"));
  if (!groups.length) return;

  const mobileQuery = window.matchMedia("(max-width: 640px)");
  let previousMobileState = null;

  const syncGroups = () => {
    if (previousMobileState === mobileQuery.matches) return;

    previousMobileState = mobileQuery.matches;
    groups.forEach((group) => {
      group.open = !mobileQuery.matches;
    });
  };

  syncGroups();
  mobileQuery.addEventListener?.("change", syncGroups);
}

function initApp() {
  initLanguageSwitcher();
  initHeaderSearch();
  initMobileMenu();
  initHeroSwiper();
  initTrendSwiper();
  initCategoryHeroSwiper();
  initEventInteraction();
  initToggleButtonGroups();
  initGsapAnimations();
  initImageFallbacks();
  initHomeWishlist();
  initHomeReviewSwiper();
  initHomeFooter();
}

document.addEventListener("DOMContentLoaded", initApp);
