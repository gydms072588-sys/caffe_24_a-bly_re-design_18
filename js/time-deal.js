(() => {
  const params = new URLSearchParams(window.location.search);
  if (params.get('view') !== 'timedeal') return;

  document.body.classList.add('time-deal-page');
  document.title = 'ABLY | 타임특가';

  const pageTitle = document.querySelector('#products-page-title');
  const breadcrumbCurrent = document.querySelector('.products-breadcrumb [aria-current="page"]');
  const featuredTitle = document.querySelector('#featured-products-title');
  const allProductsTitle = document.querySelector('#all-products-title');

  if (pageTitle) pageTitle.textContent = '타임특가';
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = '타임특가';
  if (featuredTitle) featuredTitle.textContent = '지금 가장 인기 있는 타임특가';
  if (allProductsTitle) allProductsTitle.textContent = '타임특가 상품';

  const cards = Array.from(document.querySelectorAll('.product-card'));
  const endTimes = cards.map((card, index) => {
    const media = card.querySelector('.product-card__media');
    const countdown = document.createElement('span');
    countdown.className = 'product-card__timedeal';
    countdown.setAttribute('aria-label', '타임특가 남은 시간');
    media.append(countdown);

    return {
      countdown,
      endTime: Date.now() + ((3 * 60 * 60) + (index * 23 * 60) + 17) * 1000
    };
  });

  const updateCountdowns = () => {
    let activeCount = 0;

    endTimes.forEach(({ countdown, endTime }) => {
      const remaining = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
      const hours = String(Math.floor(remaining / 3600)).padStart(2, '0');
      const minutes = String(Math.floor((remaining % 3600) / 60)).padStart(2, '0');
      const seconds = String(remaining % 60).padStart(2, '0');
      countdown.textContent = remaining ? `${hours}:${minutes}:${seconds} 남음` : '00:00:00 종료';
      if (remaining) activeCount += 1;
    });

    return activeCount;
  };

  updateCountdowns();
  const timer = window.setInterval(() => {
    if (!updateCountdowns()) window.clearInterval(timer);
  }, 1000);
})();
