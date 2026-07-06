(() => {
  const page = document.querySelector('.community-page');
  if (!page) return;

  const boardNames = {
    notice: '공지사항',
    review: '상품 사용후기',
    qa: '상품 Q&A',
    faq: '이용안내 FAQ',
    event: '이벤트'
  };
  const board = new URLSearchParams(window.location.search).get('board') || 'notice';
  const activeBoard = boardNames[board] ? board : 'notice';
  const title = document.querySelector('[data-community-title]');

  title.textContent = boardNames[activeBoard];
  document.title = `ABLY | ${boardNames[activeBoard]}`;
  document.querySelectorAll('[data-community-tab]').forEach((tab) => {
    const isActive = tab.dataset.communityTab === activeBoard;
    tab.classList.toggle('is-active', isActive);
    if (isActive) tab.setAttribute('aria-current', 'page');
    else tab.removeAttribute('aria-current');
  });
})();
