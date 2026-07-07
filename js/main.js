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

// Site-wide copy used by every page. The existing data-i18n keys above handle
// the home hero; this dictionary covers ordinary text nodes and accessibility
// labels across product, cart, account and community pages.
const siteCopy = {
  "ABLY | 오늘의 취향을 만나는 쇼핑": ["ABLY | Shopping for Your Style", "ABLY | 今日の好みに出会うショッピング", "ABLY | 遇见今日心动风格"],
  "ABLY | 모든 상품": ["ABLY | All Products", "ABLY | すべての商品", "ABLY | 全部商品"],
  "ABLY | 상품 상세": ["ABLY | Product Details", "ABLY | 商品詳細", "ABLY | 商品详情"],
  "ABLY | 장바구니": ["ABLY | Shopping Bag", "ABLY | ショッピングバッグ", "ABLY | 购物袋"],
  "ABLY | 로그인": ["ABLY | Log In", "ABLY | ログイン", "ABLY | 登录"],
  "ABLY | 회원가입": ["ABLY | Sign Up", "ABLY | 会員登録", "ABLY | 注册"],
  "ABLY | 게시판": ["ABLY | Community", "ABLY | 掲示板", "ABLY | 社区"],
  "ABLY | 게시글 상세": ["ABLY | Post", "ABLY | 投稿詳細", "ABLY | 帖子详情"],
  "ABLY | 게시글 작성": ["ABLY | Write a Post", "ABLY | 投稿作成", "ABLY | 发布帖子"],
  "ABLY | 타임특가": ["ABLY | Time Deals", "ABLY | タイムセール", "ABLY | 限时特价"],
  "본문 바로가기": ["Skip to content", "本文へ移動", "跳转到正文"],
  "브랜드": ["Brand", "ブランド", "品牌"],
  "모든상품": ["All Products", "すべての商品", "全部商品"],
  "모든 상품": ["All Products", "すべての商品", "全部商品"],
  "패션": ["Fashion", "ファッション", "时尚"],
  "신발": ["Shoes", "シューズ", "鞋履"],
  "뷰티": ["Beauty", "ビューティー", "美妆"],
  "라이프": ["Lifestyle", "ライフ", "生活"],
  "타임특가": ["Time Deal", "タイムセール", "限时特价"],
  "지금 가장 인기 있는 타임특가": ["Most Popular Time Deals", "今もっとも人気のタイムセール", "当前最热门限时特价"],
  "타임특가 상품": ["Time Deal Products", "タイムセール商品", "限时特价商品"],
  "타임특가 남은 시간": ["Time deal remaining", "タイムセール残り時間", "限时特价剩余时间"],
  "타임딜 종료 00:00:00": ["Time deal ended 00:00:00", "タイムセール終了 00:00:00", "限时特价已结束 00:00:00"],
  "리뷰": ["Reviews", "レビュー", "评价"],
  "커뮤니티": ["Community", "コミュニティ", "社区"],
  "공지사항": ["Notices", "お知らせ", "公告"],
  "상품QA": ["Product Q&A", "商品Q&A", "商品问答"],
  "이벤트": ["Events", "イベント", "活动"],
  "자주묻는질문": ["FAQ", "よくある質問", "常见问题"],
  "자주 묻는 질문": ["FAQ", "よくある質問", "常见问题"],
  "로그인": ["Log In", "ログイン", "登录"],
  "로그인 해주세요": ["Please log in", "ログインしてください", "请登录"],
  "회원 가입하고 다양한 혜택 받으세요": ["Sign up and enjoy member benefits", "会員登録してさまざまな特典をお楽しみください", "注册会员，享受多重优惠"],
  "회원가입": ["Sign Up", "会員登録", "注册"],
  "마이페이지": ["My Page", "マイページ", "我的页面"],
  "장바구니": ["Shopping Bag", "ショッピングバッグ", "购物袋"],
  "주문배송조회": ["Track Orders", "注文・配送照会", "订单配送查询"],
  "관심상품": ["Wishlist", "お気に入り", "收藏商品"],
  "언어변경": ["Language", "言語変更", "切换语言"],
  "고객센터": ["Customer Service", "カスタマーサービス", "客服中心"],
  "검색": ["Search", "検索", "搜索"],
  "검색어": ["Search term", "検索語", "搜索词"],
  "인기 검색어": ["Popular Searches", "人気検索ワード", "热门搜索"],
  "최근 검색어": ["Recent Searches", "最近の検索", "最近搜索"],
  "최근 검색어가 없습니다.": ["No recent searches.", "最近の検索はありません。", "暂无最近搜索。"],
  "원피스": ["Dresses", "ワンピース", "连衣裙"],
  "가디건": ["Cardigans", "カーディガン", "开衫"],
  "데님팬츠": ["Denim Pants", "デニムパンツ", "牛仔裤"],
  "스니커즈": ["Sneakers", "スニーカー", "运动鞋"],
  "블라우스": ["Blouses", "ブラウス", "衬衫"],
  "니트": ["Knitwear", "ニット", "针织衫"],
  "토트백": ["Tote Bags", "トートバッグ", "托特包"],
  "립틴트": ["Lip Tints", "リップティント", "唇釉"],
  "미니백": ["Mini Bags", "ミニバッグ", "迷你包"],
  "스커트": ["Skirts", "スカート", "半身裙"],
  "홈": ["Home", "ホーム", "首页"],
  "오늘의 발견": ["Today's Picks", "今日のおすすめ", "今日推荐"],
  "카테고리": ["Category", "カテゴリー", "分类"],
  "전체": ["All", "すべて", "全部"],
  "의류": ["Clothing", "衣類", "服装"],
  "패션소품": ["Accessories", "ファッション小物", "时尚配饰"],
  "패션 소품": ["Accessories", "ファッション小物", "时尚配饰"],
  "남자패션": ["Menswear", "メンズファッション", "男装"],
  "빅사이즈": ["Plus Size", "大きいサイズ", "大码"],
  "상의": ["Tops", "トップス", "上装"],
  "아우터": ["Outerwear", "アウター", "外套"],
  "가방": ["Bags", "バッグ", "箱包"],
  "신상품": ["New Arrivals", "新商品", "新品"],
  "낮은가격": ["Price: Low to High", "価格の安い順", "价格从低到高"],
  "높은가격": ["Price: High to Low", "価格の高い順", "价格从高到低"],
  "전체보기": ["View All", "すべて見る", "查看全部"],
  "이달의 인기상품을 확인해보세요": ["Discover this month's popular products", "今月の人気商品をチェック", "查看本月热门商品"],
  "많이 찾는 아이템만 모았어요": ["The most-searched items, all in one place", "よく検索されるアイテムを集めました", "精选高人气搜索商品"],
  "요즘 가장 반응 좋은 아이템을 모았어요.": ["Explore the items everyone loves right now.", "今人気のアイテムを集めました。", "汇集当下最受欢迎的单品。"],
  "바로 가는 카테고리": ["Shop by Category", "カテゴリーから探す", "快捷分类"],
  "지금 뜨는": ["Trending Now", "今注目の", "当下流行"],
  "취향에 맞는 룩을 빠르게 만나보세요": ["Quickly find looks that match your taste", "好みに合うコーデをすぐに見つけよう", "快速找到适合你的穿搭"],
  "먼저 경험한 고객들의 생생한 후기를 확인해보세요.": ["See honest reviews from customers who tried it first.", "先に体験したお客様のリアルなレビューをご覧ください。", "查看顾客的真实体验评价。"],
  "오늘의 취향": ["Today's Style", "今日のスタイル", "今日风格"],
  "지금 가장 사랑받는 스타일을 만나보세요.": ["Discover today's most-loved styles.", "今もっとも愛されているスタイルをご覧ください。", "探索当下最受喜爱的风格。"],
  "에이블리로 떠나는 취향 탐험": ["Explore your taste with ABLY", "ABLYで好みを探す旅へ", "与 ABLY 一起探索你的喜好"],
  "지금 쇼핑하기": ["Shop Now", "今すぐショッピング", "立即选购"],
  "첫 구매": ["First Purchase", "初回購入", "首次购买"],
  "혜택": ["Benefits", "特典", "优惠"],
  "한눈에 보기": ["View at a Glance", "ひと目で見る", "一览"],
  "놓치기 아쉬운 쿠폰과 이벤트를": ["Don't miss our coupons and events", "見逃せないクーポンとイベントを", "不容错过的优惠券与活动"],
  "한 번에 확인해보세요.": ["Check them all in one place.", "まとめてチェックしてください。", "一次全部查看。"],
  "혜택 확인하기": ["View Benefits", "特典を確認", "查看优惠"],
  "신규 혜택 보기": ["View New Member Benefits", "新規特典を見る", "查看新人优惠"],
  "추천 상품 보기": ["View Recommendations", "おすすめ商品を見る", "查看推荐商品"],
  "회원님을 위한 추천 상품": ["Recommended for You", "あなたへのおすすめ", "为你推荐"],
  "상품명": ["Product", "商品名", "商品名称"],
  "할인 적용 금액은 주문서작성의 결제예정금액에서 확인 가능합니다.": ["Discounts are shown in the estimated payment total at checkout.", "割引額は注文書の決済予定金額で確認できます。", "优惠金额可在结算页的预计付款金额中确认。"],
  "전체선택": ["Select All", "すべて選択", "全选"],
  "선택상품 삭제": ["Delete Selected", "選択商品を削除", "删除所选商品"],
  "총 상품금액": ["Subtotal", "商品合計", "商品总额"],
  "총 배송비": ["Shipping", "送料合計", "配送费"],
  "결제 금액": ["Total", "お支払い金額", "支付金额"],
  "전체상품주문": ["Order All", "すべて注文", "全部下单"],
  "선택상품주문": ["Order Selected", "選択商品を注文", "购买所选商品"],
  "장바구니가 비어 있습니다.": ["Your shopping bag is empty.", "ショッピングバッグは空です。", "购物袋还是空的。"],
  "상품 보러가기": ["Continue Shopping", "商品を見に行く", "继续购物"],
  "아이디": ["Username", "ユーザーID", "用户名"],
  "비밀번호": ["Password", "パスワード", "密码"],
  "아이디 저장": ["Remember username", "IDを保存", "记住用户名"],
  "아이디 찾기": ["Find Username", "IDを探す", "找回用户名"],
  "비밀번호 찾기": ["Find Password", "パスワードを探す", "找回密码"],
  "이메일": ["Email", "メール", "邮箱"],
  "비밀번호 확인": ["Confirm Password", "パスワード確認", "确认密码"],
  "스타일 관심사": ["Style Interests", "スタイルの好み", "风格偏好"],
  "선호 카테고리": ["Preferred Categories", "好きなカテゴリー", "偏好分类"],
  "데일리룩": ["Daily", "デイリー", "日常"],
  "출근룩": ["Workwear", "通勤コーデ", "通勤"],
  "데이트룩": ["Date Look", "デートコーデ", "约会"],
  "스트릿": ["Street", "ストリート", "街头"],
  "러블리": ["Lovely", "ラブリー", "甜美"],
  "미니멀": ["Minimal", "ミニマル", "简约"],
  "캐주얼": ["Casual", "カジュアル", "休闲"],
  "전체 약관에 동의합니다.": ["I agree to all terms.", "すべての規約に同意します。", "我同意全部条款。"],
  "개인정보 수집 및 이용 동의": ["Agree to personal data collection and use", "個人情報の収集・利用に同意", "同意收集及使用个人信息"],
  "쇼핑 혜택 및 이벤트 알림 수신": ["Receive shopping offers and event alerts", "ショッピング特典・イベント通知を受信", "接收购物优惠及活动通知"],
  "가입하기": ["Create Account", "登録する", "注册账号"],
  "관심 스타일을 선택해 취향에 맞는 상품과 이벤트를 받아보세요.": ["Choose your favorite styles for personalized products and events.", "好きなスタイルを選んで、好みに合う商品やイベントを受け取りましょう。", "选择喜欢的风格，获取个性化商品与活动。"],
  "게시글 검색어": ["Search posts", "投稿を検索", "搜索帖子"],
  "제목+내용": ["Title + Content", "タイトル＋内容", "标题＋内容"],
  "제목": ["Title", "タイトル", "标题"],
  "작성자": ["Author", "作成者", "作者"],
  "작성일": ["Date", "作成日", "日期"],
  "조회": ["Views", "閲覧", "浏览"],
  "글쓰기": ["Write", "投稿する", "写帖子"],
  "게시글 작성": ["Write a Post", "投稿を作成", "发布帖子"],
  "내용": ["Content", "内容", "内容"],
  "첨부파일": ["Attachment", "添付ファイル", "附件"],
  "파일 선택": ["Choose File", "ファイルを選択", "选择文件"],
  "등록": ["Submit", "登録", "提交"],
  "취소": ["Cancel", "キャンセル", "取消"],
  "목록": ["Back to List", "一覧へ", "返回列表"],
  "이전글": ["Previous", "前の記事", "上一篇"],
  "다음글": ["Next", "次の記事", "下一篇"],
  "홈": ["Home", "ホーム", "首页"],
  "남은 시간 08:42:19": ["Time left 08:42:19", "残り時間 08:42:19", "剩余时间 08:42:19"],
  "은은한 핑크 베이지 무드로 완성하는 데일리 블라우스": ["A daily blouse in a soft pink-beige mood", "淡いピンクベージュで仕上げたデイリーブラウス", "柔和粉米色氛围的日常衬衫"],
  "배송 구분": ["Shipping Area", "配送区分", "配送范围"],
  "국내 · 해외배송": ["Domestic · International", "国内・海外配送", "国内·海外配送"],
  "국내배송": ["Domestic", "国内配送", "国内配送"],
  "배송방법": ["Shipping Method", "配送方法", "配送方式"],
  "택배": ["Courier", "宅配便", "快递"],
  "배송비": ["Shipping Fee", "送料", "运费"],
  "무료배송": ["Free Shipping", "送料無料", "免运费"],
  "옵션 1": ["Option 1", "オプション1", "选项 1"],
  "옵션 2": ["Option 2", "オプション2", "选项 2"],
  "추가옵션": ["Extra Option", "追加オプション", "附加选项"],
  "색상을 선택해주세요": ["Select a color", "カラーを選択してください", "请选择颜色"],
  "사이즈를 선택해주세요": ["Select a size", "サイズを選択してください", "请选择尺码"],
  "추가옵션을 선택해주세요": ["Select an extra option", "追加オプションを選択してください", "请选择附加选项"],
  "핑크": ["Pink", "ピンク", "粉色"],
  "아이보리": ["Ivory", "アイボリー", "象牙白"],
  "블랙": ["Black", "ブラック", "黑色"],
  "선물 포장 (+3,000원)": ["Gift wrap (+3,000 KRW)", "ギフト包装（+3,000ウォン）", "礼品包装（+3,000韩元）"],
  "선택 안 함": ["None", "選択しない", "不选择"],
  "옵션을 모두 선택하면 수량을 변경할 수 있습니다.": ["Select all options to change the quantity.", "すべてのオプションを選ぶと数量を変更できます。", "选择全部选项后可修改数量。"],
  "배송 도착예정": ["Estimated Delivery", "お届け予定", "预计送达"],
  "오늘 주문 시 7월 8일(수) 도착 예정": ["Order today for estimated delivery Wed, July 8", "本日注文で7月8日（水）お届け予定", "今日下单，预计7月8日（周三）送达"],
  "카드 혜택": ["Card Benefits", "カード特典", "银行卡优惠"],
  "무이자 할부": ["Interest-free Installments", "分割払い手数料無料", "免息分期"],
  "주요 카드사 최대 6개월": ["Up to 6 months with major cards", "主要カード会社で最大6か月", "主流银行卡最高6期"],
  "첫 구매 혜택": ["First Purchase Benefit", "初回購入特典", "首购优惠"],
  "앱 전용 10% 할인 쿠폰": ["10% app-only coupon", "アプリ限定10%OFFクーポン", "App 专享9折优惠券"],
  "구매하기": ["Buy Now", "購入する", "立即购买"],
  "장바구니 담기": ["Add to Bag", "カートに入れる", "加入购物袋"],
  "배송: 무료배송": ["Shipping: Free", "配送: 送料無料", "配送：免运费"],
  "수량 줄이기": ["Decrease Quantity", "数量を減らす", "减少数量"],
  "수량 늘리기": ["Increase Quantity", "数量を増やす", "增加数量"],
  "현재 수량": ["Current Quantity", "現在の数量", "当前数量"],
  "선택된 옵션이 없습니다": ["No options selected", "選択されたオプションはありません", "尚未选择选项"],
  "상세정보": ["Details", "詳細情報", "商品详情"],
  "상품후기쓰기": ["Write a Review", "レビューを書く", "撰写评价"],
  "문의하기": ["Ask a Question", "お問い合わせ", "咨询"],
  "리뷰 보기": ["View Reviews", "レビューを見る", "查看评价"],
  "상품 구매하기": ["Purchase", "商品を購入", "购买商品"],
  "상품 옵션 선택": ["Select Options", "商品オプションを選択", "选择商品选项"],
  "배송도 빠르고 안전하게 도착했어요.": ["Delivery was fast and everything arrived safely.", "配送が早く、無事に届きました。", "配送很快，商品也安全送达。"],
  "핏이 가볍고 색감이 사진 그대로라 마음에 들어요. 슬랙스와 함께 입으니 출근룩으로도 자연스럽습니다.": ["I love the light fit and true-to-photo color. It also works naturally as office wear with slacks.", "軽い着心地で色も写真どおり。スラックスと合わせると通勤コーデにも自然です。", "版型轻盈，颜色与图片一致。搭配西裤作为通勤装也很自然。"],
  "개인정보 처리방침": ["Privacy Policy", "個人情報処理方針", "隐私政策"],
  "서비스 이용 약관": ["Terms of Service", "サービス利用規約", "服务使用条款"],
  "위치기반서비스 이용 약관": ["Location Service Terms", "位置情報サービス利用規約", "位置服务使用条款"],
  "청소년 보호정책": ["Youth Protection Policy", "青少年保護方針", "青少年保护政策"],
  "사업자정보확인": ["Business Information", "事業者情報確認", "商家信息确认"],
  "에이블리 팀 소개": ["About the ABLY Team", "ABLYチーム紹介", "ABLY 团队介绍"],
  "입점안내": ["Partner With Us", "出店案内", "入驻指南"],
  "입점 안내": ["Partner With Us", "出店案内", "入驻指南"],
  "쇼핑 안내": ["Shopping Guide", "ショッピングガイド", "购物指南"],
  "배송 안내": ["Shipping Guide", "配送案内", "配送指南"],
  "교환 · 반품 안내": ["Exchanges & Returns", "交換・返品案内", "换货与退货指南"],
  "주문 조회": ["Order Lookup", "注文照会", "订单查询"],
  "회사 소개": ["About Us", "会社紹介", "公司介绍"],
  "이용약관": ["Terms", "利用規約", "使用条款"],
  "사업자 정보": ["Business Information", "事業者情報", "商家信息"],
  "1:1 문의하기": ["Contact Us", "1:1お問い合わせ", "一对一咨询"],
  "평일 10:00 - 17:00": ["Weekdays 10:00–17:00", "平日 10:00〜17:00", "工作日 10:00–17:00"],
  "점심 12:00 - 13:00": ["Lunch 12:00–13:00", "昼休み 12:00〜13:00", "午休 12:00–13:00"],
  "일반상품": ["General Products", "一般商品", "普通商品"],
  "일반상품 (": ["General Products (", "一般商品 (", "普通商品（"],
  "공지": ["Notice", "お知らせ", "公告"],
  "날짜": ["Date", "日付", "日期"],
  "조회수": ["Views", "閲覧数", "浏览量"],
  "상품 사용후기": ["Product Reviews", "商品レビュー", "商品评价"],
  "상품 Q&A": ["Product Q&A", "商品Q&A", "商品问答"],
  "이용안내 FAQ": ["Help & FAQ", "ご利用案内・FAQ", "使用指南与常见问题"],
  "일주일": ["One Week", "1週間", "一周"],
  "한달": ["One Month", "1か月", "一个月"],
  "시즌": ["Season", "シーズン", "季节"],
  "스타일": ["Style", "スタイル", "风格"],
  "모음": ["Collection", "コレクション", "合集"],
  "가볍게 챙겨요": ["Easy Layers", "気軽に羽織る", "轻松搭配"],
  "가입 후 바로 사용할 수 있는 쿠폰으로": ["With coupons ready right after signup", "登録後すぐに使えるクーポンで", "使用注册后即可领取的优惠券"],
  "첫 쇼핑을 더 부담 없이 시작하세요.": ["Start your first shopping experience with less worry.", "初めてのお買い物をもっと気軽に始めましょう。", "轻松开启首次购物。"],
  "취향에 맞는 데일리룩과 무료배송 혜택을 더 빠르게 확인하세요.": ["Find daily looks you love and free-shipping benefits faster.", "好みに合うデイリーコーデと送料無料特典をもっと早くチェック。", "更快查看适合你的日常穿搭与免运费优惠。"],
  "신규회원 쿠폰팩 지급 안내": ["New Member Coupon Pack", "新規会員クーポンパックのご案内", "新会员优惠券礼包说明"],
  "에이블리 리디자인 쇼핑몰을 방문한 신규 회원을 위해 앱 전용 쿠폰팩과 무료배송 혜택을 준비했습니다.": ["New members can enjoy app-only coupons and free-shipping benefits.", "新規会員の皆様にアプリ限定クーポンパックと送料無料特典をご用意しました。", "我们为新会员准备了 App 专享优惠券礼包和免运费福利。"],
  "여름 데일리룩 무료배송 기획전": ["Summer Daily Looks: Free Shipping", "夏のデイリーコーデ送料無料企画", "夏日日常穿搭免运费专题"],
  "베스트 상품 리뷰 이벤트": ["Best Product Review Event", "ベスト商品レビューイベント", "热销商品评价活动"],
  "재입고 알림 신청 방법": ["How to Request Restock Alerts", "再入荷通知の申込方法", "如何申请补货提醒"],
  "공지, 이벤트, 리뷰, 문의를 등록하는 디자인용 작성 화면입니다.": ["A sample form for notices, events, reviews, and inquiries.", "お知らせ、イベント、レビュー、お問い合わせ用のサンプル投稿画面です。", "用于发布公告、活动、评价及咨询的示例页面。"],
  "본 페이지는 카페24 게시글 상세 화면으로 옮기기 쉬운 정적 디자인입니다. 실제 게시글 본문, 이미지, 첨부파일 영역은 운영 환경에서 치환할 수 있습니다.": ["This static layout is designed for easy migration to a Cafe24 post page. Post content, images, and attachments can be replaced in production.", "この静的デザインはCafe24の投稿詳細画面へ移行しやすい構成です。本文、画像、添付ファイルは運用環境で差し替えられます。", "此静态设计便于迁移至 Cafe24 帖子详情页；正文、图片及附件可在正式环境中替换。"],
  "Soft Pintuck Blouse 상세정보": ["Soft Pintuck Blouse Details", "Soft Pintuck Blouse 詳細情報", "Soft Pintuck Blouse 商品详情"],
  "데일리 스트라이프 셔츠": ["Daily Stripe Shirt", "デイリーストライプシャツ", "日常条纹衬衫"],
  "데일리 슬림 스트라이프 셔츠": ["Daily Slim Stripe Shirt", "デイリースリムストライプシャツ", "日常修身条纹衬衫"],
  "데일리 코튼 니트 가디건": ["Daily Cotton Knit Cardigan", "デイリーコットンニットカーディガン", "日常棉质针织开衫"],
  "라이트 케이블 반팔 니트": ["Light Cable Short-Sleeve Knit", "ライトケーブル半袖ニット", "轻盈麻花短袖针织衫"],
  "로맨틱 릴리즈 블라우스": ["Romantic Release Blouse", "ロマンティックリリースブラウス", "浪漫荷叶边衬衫"],
  "루즈핏 스트라이프 셔츠": ["Loose-Fit Stripe Shirt", "ルーズフィットストライプシャツ", "宽松条纹衬衫"],
  "릴리즈 프릴 블라우스": ["Release Frill Blouse", "リリースフリルブラウス", "荷叶边衬衫"],
  "모던 핀턱 와이드 슬랙스": ["Modern Pintuck Wide Slacks", "モダンピンタックワイドスラックス", "摩登褶裥阔腿西裤"],
  "베이직 유넥 소프트 티셔츠": ["Basic U-Neck Soft T-Shirt", "ベーシックUネックソフトTシャツ", "基础U领柔软T恤"],
  "베이직 U넥 티셔츠": ["Basic U-Neck T-Shirt", "ベーシックUネックTシャツ", "基础U领T恤"],
  "브리즈 쉬폰 원피스": ["Breeze Chiffon Dress", "ブリーズシフォンワンピース", "轻盈雪纺连衣裙"],
  "소프트 리본 퍼프 블라우스": ["Soft Ribbon Puff Blouse", "ソフトリボンパフブラウス", "柔软蝴蝶结泡泡袖衬衫"],
  "스퀘어 퍼프 블라우스": ["Square-Neck Puff Blouse", "スクエアパフブラウス", "方领泡泡袖衬衫"],
  "오버핏 싱글 자켓": ["Oversized Single Jacket", "オーバーフィットシングルジャケット", "宽松单排扣夹克"],
  "이지 라운드 썸머 가디건": ["Easy Round Summer Cardigan", "イージーラウンドサマーカーディガン", "轻松圆领夏季开衫"],
  "케이블 라운드 니트": ["Cable Round Knit", "ケーブルラウンドニット", "麻花圆领针织衫"],
  "크롭 트위드 자켓": ["Cropped Tweed Jacket", "クロップドツイードジャケット", "短款粗花呢夹克"],
  "클래식 크롭 트위드 재킷": ["Classic Cropped Tweed Jacket", "クラシッククロップドツイードジャケット", "经典短款粗花呢夹克"],
  "프릴 포인트 코튼 블라우스": ["Frill Detail Cotton Blouse", "フリルポイントコットンブラウス", "荷叶边棉质衬衫"],
  "플라워 레이스 원피스": ["Floral Lace Dress", "フラワーレースワンピース", "花卉蕾丝连衣裙"],
  "가볍게 걸치기 좋은 정돈된 실루엣의 트위드 재킷": ["A polished tweed jacket made for easy layering", "気軽に羽織れる整ったシルエットのツイードジャケット", "利落廓形的粗花呢夹克，轻松叠穿"],
  "단독으로도 레이어드로도 활용하기 좋은 소프트 티셔츠": ["A soft T-shirt made for wearing solo or layered", "一枚でもレイヤードでも使いやすいソフトTシャツ", "柔软T恤，单穿叠穿皆宜"],
  "단정한 실루엣에 경쾌한 컬러를 더한 데일리 셔츠": ["A daily shirt with a neat silhouette and lively color", "端正なシルエットに軽やかなカラーを添えたデイリーシャツ", "利落廓形搭配轻快色彩的日常衬衫"],
  "사랑스러운 프릴과 산뜻한 코튼 소재가 만난 블라우스": ["A fresh cotton blouse with lovely frills", "愛らしいフリルと爽やかなコットン素材のブラウス", "甜美荷叶边与清爽棉料结合的衬衫"],
  "여름까지 산뜻하게 입는 가벼운 케이블 짜임 니트": ["A lightweight cable knit that stays fresh through summer", "夏まで爽やかに着られる軽いケーブル編みニット", "轻盈麻花针织衫，清爽穿至夏季"],
  "은은한 셔링과 리본 디테일로 완성한 데일리 블라우스": ["A daily blouse finished with soft gathers and ribbon details", "控えめなシャーリングとリボンが映えるデイリーブラウス", "柔和褶皱与蝴蝶结细节打造的日常衬衫"],
  "일교차가 큰 날 가볍게 챙기는 부드러운 여름 가디건": ["A soft summer cardigan for days with changing temperatures", "寒暖差のある日に便利な柔らかいサマーカーディガン", "适合温差较大天气的柔软夏季开衫"],
  "자연스럽게 떨어지는 핏과 편안한 착용감의 와이드 팬츠": ["Wide pants with an easy drape and comfortable fit", "自然に落ちるシルエットと快適な履き心地のワイドパンツ", "自然垂坠、穿着舒适的阔腿裤"],
  "디자인이 정말 예뻐요!": ["The design is beautiful!", "デザインが本当に素敵です！", "设计真的很好看！"],
  "부드럽고 핏이 좋아요": ["Soft with a great fit", "柔らかくてシルエットもきれい", "柔软又合身"],
  "코디하기 편해요": ["Easy to style", "コーディネートしやすい", "很容易搭配"],
  "데일리 셔츠로 추천": ["Perfect as an everyday shirt", "デイリーシャツにおすすめ", "推荐作为日常衬衫"],
  "사진 그대로 깔끔해요": ["Clean and polished, just like the photos", "写真どおりきれいです", "和图片一样简洁利落"],
  "단정하지만 답답하지 않고 중요한 날 입기 좋은 재킷이에요.": ["It is polished without feeling stiff—a great jacket for important days.", "きちんと感がありながら窮屈でなく、大切な日にぴったりのジャケットです。", "利落却不拘束，很适合重要场合穿着。"],
  "사진보다 컬러가 더 화사하고 핏도 자연스러워서 자주 입고 있어요.": ["The color is brighter than in the photos and the fit is natural, so I wear it often.", "写真より色が鮮やかで、自然なシルエットなのでよく着ています。", "颜色比图片更亮丽，版型自然，所以经常穿。"],
  "가볍고 촉감이 좋아서 일교차 큰 날 매일 챙겨 입기 좋습니다.": ["It is light and soft—perfect for days with changing temperatures.", "軽くて肌触りがよく、寒暖差のある日に毎日羽織れます。", "轻盈柔软，很适合温差较大的天气。"],
  "어떤 하의에도 잘 어울리고 실제로 보면 소재가 더 고급스러워요.": ["It pairs with any bottoms, and the fabric looks even more premium in person.", "どんなボトムにも合い、実物は素材がさらに上品です。", "百搭各种下装，实物面料更显高级。"],
  "적당히 여유 있는 핏이라 편하고 출근룩으로도 잘 입고 있어요.": ["The relaxed fit is comfortable and works well for the office.", "ほどよくゆとりがあり、通勤コーデにも活躍しています。", "版型适度宽松舒适，通勤穿也很合适。"],
  "(주)에이블리코퍼레이션": ["ABLY Corporation", "株式会社ABLY", "ABLY 股份有限公司"],
  "대표: 강석훈": ["CEO: Seok-hoon Kang", "代表: カン・ソクフン", "代表：姜锡勋"],
  "사업자등록번호 164-87-00149": ["Business Registration No. 164-87-00149", "事業者登録番号 164-87-00149", "营业执照号 164-87-00149"],
  "통신판매업신고번호 2021-서울서초-2450": ["E-commerce Registration 2021-Seoul Seocho-2450", "通信販売業申告番号 2021-ソウル瑞草-2450", "网络销售备案号 2021-首尔瑞草-2450"],
  "전화: 1833-8021": ["Tel: 1833-8021", "電話: 1833-8021", "电话：1833-8021"],
  "이메일:": ["Email:", "メール:", "邮箱："],
  "주소: 서울특별시 서초구 강남대로 465, 9층": ["Address: 9F, 465 Gangnam-daero, Seocho-gu, Seoul", "住所: ソウル特別市瑞草区江南大路465 9階", "地址：首尔特别市瑞草区江南大路465号9层"],
  "IBK 에스크로 가입확인": ["Verify IBK Escrow", "IBKエスクロー加入確認", "确认 IBK 托管服务"],
  "나이스페이 에스크로 가입확인": ["Verify NICEPAY Escrow", "NICEPAYエスクロー加入確認", "确认 NICEPAY 托管服务"],
  "ABLY 홈": ["ABLY Home", "ABLYホーム", "ABLY 首页"],
  "주요 메뉴": ["Main Menu", "メインメニュー", "主菜单"],
  "모바일 주요 메뉴": ["Mobile Main Menu", "モバイルメインメニュー", "移动端主菜单"],
  "모바일 사용자 메뉴": ["Mobile User Menu", "モバイルユーザーメニュー", "移动端用户菜单"],
  "모바일 메뉴 열기": ["Open Mobile Menu", "モバイルメニューを開く", "打开移动菜单"],
  "모바일 메뉴 닫기": ["Close Mobile Menu", "モバイルメニューを閉じる", "关闭移动菜单"],
  "상품 검색": ["Product Search", "商品検索", "商品搜索"],
  "검색 열기": ["Open Search", "検索を開く", "打开搜索"],
  "검색 닫기": ["Close Search", "検索を閉じる", "关闭搜索"],
  "검색 실행": ["Search", "検索する", "执行搜索"],
  "검색어 지우기": ["Clear Search", "検索語を消去", "清除搜索词"],
  "검색어를 입력해주세요.": ["Enter a search term.", "検索語を入力してください。", "请输入搜索词。"],
  "로그인 및 마이페이지": ["Login and My Page", "ログイン・マイページ", "登录与我的页面"],
  "로그인 및 마이페이지 메뉴": ["Login and My Page Menu", "ログイン・マイページメニュー", "登录与我的页面菜单"],
  "장바구니 및 구매 페이지": ["Shopping Bag and Checkout", "カート・購入ページ", "购物袋与结算页面"],
  "언어 변경": ["Change Language", "言語変更", "切换语言"],
  "모바일 상품 검색": ["Mobile Product Search", "モバイル商品検索", "移动端商品搜索"],
  "모든상품 하위 메뉴": ["All Products Submenu", "すべての商品サブメニュー", "全部商品子菜单"],
  "커뮤니티 하위 메뉴": ["Community Submenu", "コミュニティサブメニュー", "社区子菜单"],
  "푸터 정책 및 안내": ["Footer Policies and Information", "フッターポリシー・案内", "页脚政策与指南"],
  "현재 위치": ["Breadcrumb", "現在位置", "当前位置"],
  "상품 카테고리": ["Product Categories", "商品カテゴリー", "商品分类"],
  "상품 카테고리 바로가기": ["Product Category Shortcuts", "商品カテゴリーへのショートカット", "商品分类快捷入口"],
  "상품 정렬": ["Sort Products", "商品を並べ替え", "商品排序"],
  "상품 목록 페이지": ["Product List Pages", "商品一覧ページ", "商品列表页"],
  "첫 페이지": ["First Page", "最初のページ", "第一页"],
  "이전 페이지": ["Previous Page", "前のページ", "上一页"],
  "다음 페이지": ["Next Page", "次のページ", "下一页"],
  "마지막 페이지": ["Last Page", "最後のページ", "最后一页"],
  "페이지네이션": ["Pagination", "ページネーション", "分页导航"],
  "게시글 목록": ["Post List", "投稿一覧", "帖子列表"],
  "커뮤니티 게시판": ["Community Board", "コミュニティ掲示板", "社区论坛"],
  "이전글 다음글": ["Previous and Next Posts", "前後の記事", "上一篇与下一篇"],
  "결제 금액 요약": ["Order Summary", "お支払い金額の概要", "支付金额汇总"],
  "상품 상세 정보": ["Product Details", "商品詳細情報", "商品详情"],
  "상품 상세 탭": ["Product Detail Tabs", "商品詳細タブ", "商品详情标签"],
  "상품 이미지 목록": ["Product Images", "商品画像一覧", "商品图片列表"],
  "색상 선택": ["Select Color", "カラー選択", "选择颜色"],
  "사이즈 선택": ["Select Size", "サイズ選択", "选择尺码"],
  "추가 옵션 선택": ["Select Extra Option", "追加オプション選択", "选择附加选项"],
  "상품 공유": ["Share Product", "商品をシェア", "分享商品"],
  "구매 옵션 닫기": ["Close Purchase Options", "購入オプションを閉じる", "关闭购买选项"],
  "페이지 빠른 이동": ["Page Shortcuts", "ページクイック移動", "页面快捷导航"],
  "페이지 위로 이동": ["Go to Top", "ページ上部へ", "返回顶部"],
  "페이지 아래로 이동": ["Go to Bottom", "ページ下部へ", "前往底部"],
  "이전 리뷰": ["Previous Review", "前のレビュー", "上一条评价"],
  "다음 리뷰": ["Next Review", "次のレビュー", "下一条评价"],
  "리뷰 슬라이드 이동": ["Review Carousel Navigation", "レビューカルーセル移動", "评价轮播导航"],
  "이전 배너": ["Previous Banner", "前のバナー", "上一张横幅"],
  "다음 배너": ["Next Banner", "次のバナー", "下一张横幅"],
  "프로모션 배너": ["Promotion Banners", "プロモーションバナー", "促销横幅"],
  "프로모션 배너 페이지": ["Promotion Banner Pages", "プロモーションバナーページ", "促销横幅分页"],
  "주요 쇼핑 혜택": ["Featured Shopping Benefits", "主なショッピング特典", "精选购物优惠"],
  "지금 진행 중인 혜택": ["Current Benefits", "開催中の特典", "当前优惠"],
  "SNS 로그인": ["Social Login", "SNSログイン", "社交账号登录"],
  "아이디 또는 이메일": ["Username or Email", "IDまたはメール", "用户名或邮箱"],
  "영문/숫자 6자 이상": ["At least 6 letters or numbers", "英数字6文字以上", "至少6位英文或数字"],
  "제목을 입력하세요": ["Enter a title", "タイトルを入力してください", "请输入标题"],
  "내용을 입력하세요": ["Enter content", "内容を入力してください", "请输入内容"],
  "별점 4점": ["4 out of 5 stars", "星4つ", "4星"],
  "별점 5점": ["5 out of 5 stars", "星5つ", "5星"],
  "별점 5점 만점에 5점": ["5 out of 5 stars", "5点満点中5点", "满分5星，获得5星"],
  "에이블리에서 판매되는 상품 중에는 개별 입점 판매자(셀러즈)의 상품이 포함되어 있습니다. 해당 상품에 대해 (주)에이블리코퍼레이션은 통신판매중개자의 지위에 있고 통신판매의 당사자가 아닙니다. 해당 상품의 거래 전반에 관한 의무와 책임은 각 입점 판매자에게 있습니다.": ["Some products sold on ABLY are offered by independent sellers. ABLY Corporation acts as an e-commerce intermediary and is not a party to those transactions; each seller is responsible for its products and transactions.", "ABLYで販売される商品には個別出店者の商品が含まれます。株式会社ABLYは通信販売仲介者であり取引当事者ではなく、取引に関する責任は各出店者が負います。", "ABLY 销售的部分商品由独立入驻商家提供。ABLY 股份有限公司作为网络销售中介，并非交易当事方；相关交易责任由各商家承担。"]
};

const siteCopyLanguageIndex = { en: 0, ja: 1, zh: 2 };
let siteCopyObserver;
let siteCopyApplying = false;

function translateSiteString(value, lang) {
  if (lang === "ko" || !value) return value;
  const index = siteCopyLanguageIndex[lang];
  const exact = siteCopy[value];
  if (exact) return exact[index];

  if (/^[\d,]+원$/.test(value)) {
    const amount = value.replace("원", "");
    return lang === "en" ? `${amount} KRW` : lang === "ja" ? `${amount}ウォン` : `${amount}韩元`;
  }

  let match = value.match(/^리뷰:\s*(\d+)$/);
  if (match) return lang === "en" ? `Reviews: ${match[1]}` : lang === "ja" ? `レビュー: ${match[1]}` : `评价: ${match[1]}`;
  match = value.match(/^(\d+)개의 후기$/);
  if (match) return lang === "en" ? `${match[1]} reviews` : lang === "ja" ? `${match[1]}件のレビュー` : `${match[1]}条评价`;
  match = value.match(/^전체\s+([\d,]+)개$/);
  if (match) return lang === "en" ? `${match[1]} items` : lang === "ja" ? `全${match[1]}件` : `共${match[1]}件`;
  match = value.match(/^남은 시간\s+(.+)$/);
  if (match) return lang === "en" ? `Time left ${match[1]}` : lang === "ja" ? `残り時間 ${match[1]}` : `剩余时间 ${match[1]}`;
  match = value.match(/^(.+)\s+남음$/);
  if (match) return lang === "en" ? `${match[1]} left` : lang === "ja" ? `残り ${match[1]}` : `剩余 ${match[1]}`;
  match = value.match(/^\[옵션:\s*(.+)\]$/);
  if (match) {
    const options = match[1].split(" / ").map((option) => translateSiteString(option, lang)).join(" / ");
    return lang === "en" ? `[Option: ${options}]` : lang === "ja" ? `[オプション: ${options}]` : `[选项：${options}]`;
  }

  const productSuffixes = [
    [" 장바구니에 담기", [" Add to Bag", "をカートに入れる", "加入购物袋"]],
    [" 상세 보기", [" Details", "の詳細を見る", "查看详情"]],
    [" 찜하기", [" Add to Wishlist", "をお気に入りに追加", "加入收藏"]],
    ["를 입은 모델", [" worn by a model", "を着用したモデル", "模特穿着"]],
    ["을 입은 모델", [" worn by a model", "を着用したモデル", "模特穿着"]],
    [" 카테고리", [" Category", "カテゴリー", "分类"]]
  ];
  for (const [suffix, translatedSuffixes] of productSuffixes) {
    if (!value.endsWith(suffix)) continue;
    const base = value.slice(0, -suffix.length);
    return `${translateSiteString(base, lang)}${translatedSuffixes[index]}`;
  }
  return value;
}

function translateSiteNode(root, lang) {
  const scope = root?.nodeType === Node.ELEMENT_NODE ? root : document.body;
  if (!scope) return;
  siteCopyApplying = true;

  const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || parent.closest("script, style, [data-i18n]")) return NodeFilter.FILTER_REJECT;
      return /[가-힣]/.test(node.nodeValue) || node.__ablyKoText ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach((node) => {
    if (!node.__ablyKoText && /[가-힣]/.test(node.nodeValue)) node.__ablyKoText = node.nodeValue;
    if (!node.__ablyKoText) return;
    const original = node.__ablyKoText;
    const trimmed = original.trim();
    const translated = translateSiteString(trimmed, lang);
    node.nodeValue = `${original.match(/^\s*/)[0]}${translated}${original.match(/\s*$/)[0]}`;
  });

  const elements = [scope, ...scope.querySelectorAll("[placeholder], [aria-label], [title], img[alt]")];
  elements.forEach((element) => {
    ["placeholder", "aria-label", "title", "alt"].forEach((attribute) => {
      if (!element.hasAttribute?.(attribute)) return;
      const property = `ablyKo${attribute.replace("-", "")}`;
      const current = element.getAttribute(attribute);
      if (!element.dataset[property] && /[가-힣]/.test(current)) element.dataset[property] = current;
      const original = element.dataset[property];
      if (original) element.setAttribute(attribute, translateSiteString(original, lang));
    });
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  if (!document.documentElement.dataset.ablyKoTitle && /[가-힣]/.test(document.title)) {
    document.documentElement.dataset.ablyKoTitle = document.title;
  }
  if (document.documentElement.dataset.ablyKoTitle) {
    document.title = translateSiteString(document.documentElement.dataset.ablyKoTitle, lang);
  }
  siteCopyApplying = false;
}

function initSiteCopyObserver() {
  if (siteCopyObserver || !document.body) return;
  siteCopyObserver = new MutationObserver((mutations) => {
    if (siteCopyApplying) return;
    const lang = getStoredLanguage();
    mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) translateSiteNode(node, lang);
      else if (node.nodeType === Node.TEXT_NODE && /[가-힣]/.test(node.nodeValue)) translateSiteNode(node.parentElement, lang);
    }));
  });
  siteCopyObserver.observe(document.body, { childList: true, subtree: true });
}

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
          <li class="gnb__item"><a class="gnb__link" href="category.html?view=timedeal">타임특가</a></li>
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
        <a href="category.html?view=timedeal">타임특가</a>
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

  translateSiteNode(document.body, lang);
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

  if (document.querySelector(".product-card") && !document.body.classList.contains("products-page")) {
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
  initSiteCopyObserver();
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
