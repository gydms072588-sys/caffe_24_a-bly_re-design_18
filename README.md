# ABLY Main & Category Page

ABLY 스타일의 반응형 쇼핑몰 페이지입니다. `index.html`은 메인 페이지, `category.html`은 여성의류 > 상의 카테고리 서브페이지입니다. `css/reset.css`, `css/style.css`, `js/main.js`로 구조, 스타일, 인터랙션을 분리했습니다.

## 섹션 구조

- Header: 로고, GNB, 검색, 사용자/장바구니, 모바일 메뉴
- Hero: Swiper 기반 영상 슬라이드와 CTA
- Section 1: 인기 카테고리 카드 그리드
- Section 2: 트렌드 아이템 선택형 스타일 슬라이드
- Section 3: 이벤트 리스트 선택형 메인 썸네일
- Section 4: 앱 다운로드 QR, 스토어 버튼, 앱 목업 오브젝트
- Footer: 회사 정보, 약관 링크, SNS

## 서브페이지 구조

- Breadcrumb: 홈 > 카테고리 > 여성의류 > 상의
- Category Hero: 카테고리 설명과 Swiper 배너
- Circle Category Menu: 원형 세부 카테고리 메뉴
- Product Toolbar: 상품 수, 정렬, 보기 옵션
- Product Grid: 12개 상품 카드
- Pagination: 페이지 이동 UI
- Benefit Banner: 무료배송, 오늘출발, 첫구매혜택, 멤버십 혜택

## 이미지 및 영상 교체

마크업 기준 경로는 다음 구조를 사용합니다.

```text
assets/images/
assets/videos/
```

이미지를 교체할 때는 동일한 파일명으로 바꾸면 HTML 수정 없이 반영됩니다. 다른 파일명을 쓰는 경우 `index.html` 또는 `category.html`의 `src`, `poster`, `data-event-image` 값을 함께 변경하세요.

히어로 영상은 `assets/videos/hero_01.mp4`, `assets/videos/hero_02.mp4`를 사용합니다. 모바일과 접근성을 위해 각 영상에는 `poster` 이미지가 연결되어 있습니다.

카테고리 서브페이지 주요 교체 파일은 `assets/images/category/category_banner.jpg`, `cate_top.png` ~ `cate_blouse.png`, `product_01.jpg` ~ `product_12.jpg`입니다.

## 인터랙션

`js/main.js`는 기능별로 분리되어 있습니다.

- `initHeroSwiper()`: 히어로 영상 슬라이드
- `initTrendSwiper()`: 섹션2 스타일 카드 슬라이드와 좌측 아이템 클릭
- `initEventInteraction()`: 섹션3 이벤트 클릭 시 메인 이미지 변경
- `initCategoryHeroSwiper()`: 카테고리 서브페이지 배너 슬라이드
- `initToggleButtonGroups()`: 원형 카테고리, 정렬, 보기 버튼 active 상태
- `initGsapAnimations()`: ScrollTrigger 기반 진입 애니메이션
- `initMobileMenu()`: 모바일 메뉴 접근성 상태 제어

`prefers-reduced-motion` 사용자는 CSS와 JS에서 모션이 최소화됩니다.
