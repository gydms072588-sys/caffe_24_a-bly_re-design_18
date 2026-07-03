const SELECTORS = {
  menuButton: "[data-menu-button]",
  mobileMenu: "[data-mobile-menu]",
  heroSwiper: "[data-hero-swiper]",
  benefitSwiper: "[data-benefit-swiper]",
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

function ensureSharedNavigation() {
  const header = document.querySelector(".site-header[data-header]");

  if (!header || header.classList.contains("home-header")) return;

  document.body.classList.add("home-page");
  header.classList.add("home-header");
  header.innerHTML = `
    <div class="site-header__inner home-header__inner">
      <button class="menu-button" type="button" aria-label="모바일 메뉴 열기" aria-expanded="false" aria-controls="mobile-menu" data-menu-button>
        <span class="material-symbols-outlined" aria-hidden="true">menu</span>
      </button>

      <a class="site-header__logo" href="index.html" aria-label="ABLY 홈">
        <img src="assets/images/logo/logo.png" alt="ABLY">
      </a>

      <nav class="site-header__nav" aria-label="주요 메뉴">
        <ul class="gnb">
          <li class="gnb__item"><a class="gnb__link" href="category.html?cate=brand">브랜드</a></li>
          <li class="gnb__item gnb__item--dropdown">
            <a class="gnb__link" href="category.html" aria-haspopup="true">모든상품</a>
            <ul class="gnb-dropdown" aria-label="모든상품 하위 메뉴">
              <li><a href="category.html?cate=fashion">패션</a></li>
              <li><a href="category.html?cate=shoes">신발</a></li>
              <li><a href="category.html?cate=beauty">뷰티</a></li>
              <li><a href="category.html?cate=life">라이프</a></li>
            </ul>
          </li>
          <li class="gnb__item"><a class="gnb__link" href="index.html#promotion">타임특가</a></li>
          <li class="gnb__item"><a class="gnb__link" href="index.html#reviews">리뷰</a></li>
          <li class="gnb__item gnb__item--dropdown">
            <a class="gnb__link" href="board-list.html" aria-haspopup="true">커뮤니티</a>
            <ul class="gnb-dropdown" aria-label="커뮤니티 하위 메뉴">
              <li><a href="board-list.html?board=notice">공지사항</a></li>
              <li><a href="board-list.html?board=qa">상품QA</a></li>
              <li><a href="board-list.html?board=event">이벤트</a></li>
              <li><a href="board-list.html?board=faq">자주묻는질문</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      <div class="site-header__tools home-header__tools">
        <form class="search-form home-header__search" role="search" aria-label="상품 검색" data-search-form>
          <label class="sr-only" for="site-search">검색어</label>
          <input id="site-search" name="search" type="search" placeholder="취향 저격 드무드레스" autocomplete="off" data-search-input>
          <button class="search-clear-button" type="button" aria-label="검색어 지우기" data-search-clear>
            <span class="material-symbols-outlined" aria-hidden="true">close</span>
          </button>
          <button class="icon-button" type="submit" aria-label="검색">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.5-4.5m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
          </button>
          <div class="search-panel" data-search-panel><ul data-search-suggestion-list></ul></div>
        </form>

        <div class="account-menu" data-account-menu>
          <button class="header-icon-button home-header__icon" type="button" aria-label="로그인 및 마이페이지 메뉴" aria-expanded="false" aria-controls="account-dropdown" data-account-button>
            <span class="material-symbols-outlined" aria-hidden="true">person</span>
          </button>
          <div class="account-menu__dropdown" id="account-dropdown" data-account-dropdown>
            <a class="account-menu__login" href="login.html">로그인</a>
            <a href="cart.html">주문배송조회</a>
            <a href="#wishlist">관심상품</a>
            <a href="login.html">마이페이지</a>
          </div>
        </div>

        <a class="header-icon-button home-header__icon" href="cart.html" aria-label="장바구니">
          <span class="material-symbols-outlined" aria-hidden="true">shopping_bag</span>
        </a>

        <div class="language-switcher site-header__icon">
          <button class="header-icon-button home-header__icon" type="button" aria-label="언어 변경" aria-expanded="false" data-language-button>
            <span class="material-symbols-outlined" aria-hidden="true">globe</span>
          </button>
          <div class="language-menu" data-language-menu>
            <button type="button" data-lang="ko">한국어</button>
            <button type="button" data-lang="en">English</button>
            <button type="button" data-lang="ja">日本語</button>
            <button type="button" data-lang="zh">中文</button>
          </div>
        </div>

        <button class="header-icon-button home-header__icon mobile-search-button" type="button" aria-label="검색 열기" aria-expanded="false" aria-controls="mobile-search-layer" data-mobile-search-open>
          <span class="material-symbols-outlined" aria-hidden="true">search</span>
        </button>
      </div>
    </div>`;

  header.insertAdjacentHTML("afterend", `
    <nav class="mobile-nav" id="mobile-menu" aria-label="모바일 주요 메뉴" data-mobile-menu>
      <div class="mobile-nav__account">
        <strong>로그인 해주세요</strong>
        <p>회원 가입하고 다양한 혜택 받으세요</p>
        <div class="mobile-nav__account-actions">
          <a href="login.html">로그인</a>
          <a href="signup.html">회원가입</a>
        </div>
      </div>

      <div class="mobile-nav__primary">
        <a href="category.html?cate=brand">브랜드</a>
        <div class="mobile-nav__group">
          <button class="mobile-nav__toggle" type="button" aria-expanded="false" aria-controls="mobile-products-submenu" data-mobile-submenu-toggle>
            <span>모든상품</span><span class="material-symbols-outlined" aria-hidden="true">expand_more</span>
          </button>
          <div class="mobile-nav__submenu" id="mobile-products-submenu" hidden>
            <a href="category.html?cate=fashion">패션</a><a href="category.html?cate=shoes">신발</a><a href="category.html?cate=beauty">뷰티</a><a href="category.html?cate=life">라이프</a>
          </div>
        </div>
        <a href="index.html#promotion">타임특가</a>
        <a href="index.html#reviews">리뷰</a>
        <div class="mobile-nav__group">
          <button class="mobile-nav__toggle" type="button" aria-expanded="false" aria-controls="mobile-community-submenu" data-mobile-submenu-toggle>
            <span>커뮤니티</span><span class="material-symbols-outlined" aria-hidden="true">expand_more</span>
          </button>
          <div class="mobile-nav__submenu" id="mobile-community-submenu" hidden>
            <a href="board-list.html?board=notice">공지사항</a><a href="board-list.html?board=qa">상품QA</a><a href="board-list.html?board=event">이벤트</a><a href="board-list.html?board=faq">자주묻는질문</a>
          </div>
        </div>
      </div>

      <div class="mobile-nav__utility" aria-label="모바일 사용자 메뉴">
        <a href="login.html"><span class="material-symbols-outlined" aria-hidden="true">person</span><span>마이페이지</span></a>
        <details class="mobile-nav__language">
          <summary><span class="material-symbols-outlined" aria-hidden="true">globe</span><span>언어변경</span></summary>
          <div><button type="button" data-lang="ko">한국어</button><button type="button" data-lang="en">English</button><button type="button" data-lang="ja">日本語</button><button type="button" data-lang="zh">中文</button></div>
        </details>
        <a href="board-list.html?board=faq"><span class="material-symbols-outlined" aria-hidden="true">support_agent</span><span>고객센터</span></a>
      </div>
    </nav>
    <button class="mobile-nav-dim" type="button" aria-label="모바일 메뉴 닫기" data-mobile-nav-dim></button>

    <section class="mobile-search-layer" id="mobile-search-layer" aria-label="모바일 상품 검색" aria-hidden="true" data-mobile-search-layer>
      <div class="mobile-search-layer__panel">
        <div class="mobile-search-layer__header">
          <h2>검색</h2>
          <button type="button" aria-label="검색 닫기" data-mobile-search-close><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
        </div>
        <form class="mobile-search-layer__form" action="category.html" role="search">
          <label class="sr-only" for="mobile-search-input">검색어</label>
          <input id="mobile-search-input" name="search" type="search" placeholder="검색어를 입력해주세요." autocomplete="off" data-mobile-search-input>
          <button type="submit" aria-label="검색 실행"><span class="material-symbols-outlined" aria-hidden="true">search</span></button>
        </form>
        <div class="mobile-search-layer__section">
          <h3>인기 검색어</h3>
          <ol class="mobile-search-layer__keywords">
            <li><a href="category.html?search=원피스"><span>1</span>원피스</a></li><li><a href="category.html?search=가디건"><span>2</span>가디건</a></li>
            <li><a href="category.html?search=데님팬츠"><span>3</span>데님팬츠</a></li><li><a href="category.html?search=스니커즈"><span>4</span>스니커즈</a></li>
            <li><a href="category.html?search=블라우스"><span>5</span>블라우스</a></li><li><a href="category.html?search=니트"><span>6</span>니트</a></li>
            <li><a href="category.html?search=토트백"><span>7</span>토트백</a></li><li><a href="category.html?search=립틴트"><span>8</span>립틴트</a></li>
            <li><a href="category.html?search=미니백"><span>9</span>미니백</a></li><li><a href="category.html?search=스커트"><span>10</span>스커트</a></li>
          </ol>
        </div>
        <div class="mobile-search-layer__section mobile-search-layer__recent"><h3>최근 검색어</h3><p>최근 검색어가 없습니다.</p></div>
      </div>
    </section>`);
}

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

function initAccountMenu() {
  const container = document.querySelector("[data-account-menu]");
  const button = document.querySelector("[data-account-button]");
  const dropdown = document.querySelector("[data-account-dropdown]");

  if (!container || !button || !dropdown) return;

  const closeAccountMenu = () => {
    button.setAttribute("aria-expanded", "false");
    dropdown.classList.remove("is-open");
  };

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    dropdown.classList.toggle("is-open", !isOpen);
  });

  document.addEventListener("click", (event) => {
    if (!container.contains(event.target)) closeAccountMenu();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAccountMenu();
  });
}

function initMobileMenu() {
  const button = document.querySelector(SELECTORS.menuButton);
  const menu = document.querySelector(SELECTORS.mobileMenu);
  const dim = document.querySelector("[data-mobile-nav-dim]");

  if (!button || !menu) return;

  const closeMenu = () => {
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", getTranslation("header.menuOpen"));
    menu.classList.remove("is-open");
    document.body.classList.remove("is-menu-open");
  };

  const submenuToggles = Array.from(menu.querySelectorAll("[data-mobile-submenu-toggle]"));

  submenuToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      const submenu = document.getElementById(toggle.getAttribute("aria-controls"));

      submenuToggles.forEach((otherToggle) => {
        if (otherToggle === toggle) return;
        otherToggle.setAttribute("aria-expanded", "false");
        const otherSubmenu = document.getElementById(otherToggle.getAttribute("aria-controls"));
        if (otherSubmenu) otherSubmenu.hidden = true;
      });

      toggle.setAttribute("aria-expanded", String(!isOpen));
      if (submenu) submenu.hidden = isOpen;
    });
  });

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";

    if (!isOpen) {
      const searchLayer = document.querySelector("[data-mobile-search-layer]");
      const searchButton = document.querySelector("[data-mobile-search-open]");
      searchLayer?.classList.remove("is-open");
      searchLayer?.setAttribute("aria-hidden", "true");
      searchButton?.setAttribute("aria-expanded", "false");
      document.body.classList.remove("is-search-open");
    }

    button.setAttribute("aria-expanded", String(!isOpen));
    button.setAttribute("aria-label", isOpen ? getTranslation("header.menuOpen") : getTranslation("header.menuClose"));
    menu.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("is-menu-open", !isOpen);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  dim?.addEventListener("click", closeMenu);

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

function initHeroSwiper() {
  const container = document.querySelector(SELECTORS.heroSwiper);
  if (!window.Swiper || !container) return;

  const syncVideos = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];

    swiper.el.querySelectorAll(".swiper-slide video").forEach((video) => {
      const isActive = video.closest(".swiper-slide") === activeSlide;

      if (isActive) {
        video.muted = true;
        video.playsInline = true;

        const playActiveVideo = () => {
          if (video.closest(".swiper-slide") === swiper.slides[swiper.activeIndex]) {
            video.play().catch(() => {});
          }
        };

        if (video.readyState >= 2) {
          playActiveVideo();
        } else {
          video.addEventListener("canplay", playActiveVideo, { once: true });
          video.load();
        }
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
      activeIndexChange(swiper) {
        syncVideos(swiper);
      },
      slideChangeTransitionStart(swiper) {
        syncVideos(swiper);
      },
      slideChangeTransitionEnd(swiper) {
        syncVideos(swiper);
      }
    }
  });
}

function initMobileSearchLayer() {
  const openButton = document.querySelector("[data-mobile-search-open]");
  const closeButton = document.querySelector("[data-mobile-search-close]");
  const layer = document.querySelector("[data-mobile-search-layer]");
  const input = document.querySelector("[data-mobile-search-input]");

  if (!openButton || !closeButton || !layer) return;

  const closeSearchLayer = () => {
    openButton.setAttribute("aria-expanded", "false");
    layer.classList.remove("is-open");
    layer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-search-open");
  };

  const openSearchLayer = () => {
    const menuButton = document.querySelector(SELECTORS.menuButton);
    const mobileMenu = document.querySelector(SELECTORS.mobileMenu);

    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", getTranslation("header.menuOpen"));
    mobileMenu?.classList.remove("is-open");
    document.body.classList.remove("is-menu-open");

    openButton.setAttribute("aria-expanded", "true");
    layer.classList.add("is-open");
    layer.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-search-open");
    window.requestAnimationFrame(() => input?.focus());
  };

  openButton.addEventListener("click", openSearchLayer);
  closeButton.addEventListener("click", closeSearchLayer);
  layer.addEventListener("click", (event) => {
    if (event.target === layer) closeSearchLayer();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && layer.classList.contains("is-open")) {
      closeSearchLayer();
      openButton.focus();
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

function initBenefitSwiper() {
  const container = document.querySelector(SELECTORS.benefitSwiper);

  if (!window.Swiper || !container) return;

  return new Swiper(container, {
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    loop: true,
    speed: prefersReducedMotion ? 0 : 700,
    grabCursor: true,
    keyboard: {
      enabled: true
    },
    autoplay: prefersReducedMotion ? false : {
      delay: 4800,
      disableOnInteraction: false
    },
    pagination: {
      el: container.querySelector(".section-promo__pagination"),
      clickable: true
    }
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
      group.open = !mobileQuery.matches || group.hasAttribute("data-footer-always-open");
    });
  };

  groups.forEach((group) => {
    if (!group.hasAttribute("data-footer-always-open")) return;

    group.addEventListener("toggle", () => {
      if (mobileQuery.matches && !group.open) group.open = true;
    });
  });

  syncGroups();
  mobileQuery.addEventListener?.("change", syncGroups);
}

function initApp() {
  ensureSharedNavigation();
  initLanguageSwitcher();
  initHeaderSearch();
  initAccountMenu();
  initMobileMenu();
  initMobileSearchLayer();
  initHeroSwiper();
  initBenefitSwiper();
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
