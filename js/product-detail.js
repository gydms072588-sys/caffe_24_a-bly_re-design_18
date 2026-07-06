(() => {
  const root = document.querySelector('.product-detail-page');
  if (!root) return;

  const colorSelect = root.querySelector('[data-product-option="color"]');
  const sizeSelect = root.querySelector('[data-product-option="size"]');
  const extraSelect = root.querySelector('[data-product-option="extra"]');
  const selectedList = root.querySelector('[data-product-selected]');
  const summary = root.querySelector('[data-product-summary]');
  const totalOutput = root.querySelector('[data-product-total]');
  const totalBox = root.querySelector('.product-detail-total');
  const galleryMainImage = root.querySelector('.product-detail-gallery__main img');
  const galleryThumbnails = root.querySelector('.product-detail-gallery__thumbs');
  const unitPrice = Number(totalBox?.dataset.unitPrice || 0);
  const selectedOptions = new Map();
  const countdown = root.querySelector('[data-timedeal-countdown]');
  const countdownStorageKey = 'ablyProductTimedealEnd';
  const initialCountdownSeconds = Number(countdown.dataset.countdownSeconds || 0);
  let countdownEnd = 0;

  try {
    countdownEnd = Number(sessionStorage.getItem(countdownStorageKey));
    if (!countdownEnd) {
      countdownEnd = Date.now() + (initialCountdownSeconds * 1000);
      sessionStorage.setItem(countdownStorageKey, String(countdownEnd));
    }
  } catch (error) {
    countdownEnd = Date.now() + (initialCountdownSeconds * 1000);
  }

  const updateCountdown = () => {
    const remainingSeconds = Math.max(0, Math.ceil((countdownEnd - Date.now()) / 1000));
    const hours = String(Math.floor(remainingSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(remainingSeconds % 60).padStart(2, '0');
    countdown.textContent = remainingSeconds
      ? `남은 시간 ${hours}:${minutes}:${seconds}`
      : '타임딜 종료 00:00:00';
    return remainingSeconds;
  };

  updateCountdown();
  const countdownTimer = window.setInterval(() => {
    if (!updateCountdown()) window.clearInterval(countdownTimer);
  }, 1000);

  const formatPrice = (price) => `${price.toLocaleString('ko-KR')}원`;

  galleryThumbnails.addEventListener('click', (event) => {
    const thumbnailButton = event.target.closest('button');
    const thumbnailImage = thumbnailButton?.querySelector('img');
    if (!thumbnailButton || !thumbnailImage) return;

    galleryMainImage.src = thumbnailImage.currentSrc || thumbnailImage.src;
    galleryMainImage.alt = `${thumbnailButton.getAttribute('aria-label')} 크게 보기`;
    galleryThumbnails.querySelectorAll('button').forEach((button) => {
      button.classList.toggle('is-active', button === thumbnailButton);
    });
  });

  const getOptionDetail = (item) => {
    const extraLabel = item.extra === '선택 안 함'
      ? ''
      : `${item.extra}${item.extraPrice ? ` (+${formatPrice(item.extraPrice)})` : ''}`;
    const details = [item.size, extraLabel].filter(Boolean);
    return details.join(' · ');
  };

  const getOptionName = (item) => [item.color, getOptionDetail(item)].filter(Boolean).join(' / ');

  const getPayload = () => ({
    product: 'Soft Pintuck Blouse',
    brand: 'Luelle',
    image: 'assets/images/category/product_01.jpg',
    unitPrice,
    options: Array.from(selectedOptions.values()).map((item) => ({ ...item })),
    totalQuantity: Array.from(selectedOptions.values()).reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: Array.from(selectedOptions.values()).reduce(
      (sum, item) => sum + ((unitPrice + item.extraPrice) * item.quantity),
      0
    )
  });

  const render = () => {
    const items = Array.from(selectedOptions.values());

    selectedList.innerHTML = items.length
      ? items.map((item) => `
          <div class="product-detail-selected__item" data-option-key="${item.key}">
            <p class="product-detail-selected__name">${item.color}<small>${getOptionDetail(item)}</small></p>
            <div class="product-detail-selected__quantity" aria-label="${getOptionName(item)} 수량">
              <button type="button" data-quantity-action="decrease" aria-label="${getOptionName(item)} 수량 줄이기">−</button>
              <output aria-label="현재 수량">${item.quantity}</output>
              <button type="button" data-quantity-action="increase" aria-label="${getOptionName(item)} 수량 늘리기">+</button>
            </div>
            <button class="product-detail-selected__remove" type="button" data-quantity-action="remove" aria-label="${getOptionName(item)} 옵션 삭제"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
          </div>`).join('')
      : '<p class="product-detail-selected__empty">옵션을 모두 선택하면 수량을 변경할 수 있습니다.</p>';

    summary.innerHTML = items.length
      ? items.map((item) => `<p>${getOptionName(item)} ${item.quantity}개</p>`).join('')
      : '<p class="product-detail-total__empty">선택된 옵션이 없습니다</p>';

    const totalPrice = items.reduce(
      (sum, item) => sum + ((unitPrice + item.extraPrice) * item.quantity),
      0
    );
    totalOutput.textContent = formatPrice(totalPrice);
  };

  const syncSelectedColor = () => {
    const color = colorSelect.value;
    const size = sizeSelect.value;
    const extra = extraSelect.value;
    const extraPrice = Number(extraSelect.selectedOptions[0]?.dataset.extraPrice || 0);
    if (!color || !size || !extra) return;

    const key = [color, size, extra].join('|');
    const current = selectedOptions.get(key);
    selectedOptions.set(key, {
      key,
      color,
      size,
      extra,
      extraPrice,
      quantity: current?.quantity || 1
    });
    render();
  };

  colorSelect.addEventListener('change', syncSelectedColor);
  sizeSelect.addEventListener('change', syncSelectedColor);
  extraSelect.addEventListener('change', syncSelectedColor);

  selectedList.addEventListener('click', (event) => {
    const actionButton = event.target.closest('[data-quantity-action]');
    const itemElement = event.target.closest('[data-option-key]');
    if (!actionButton || !itemElement) return;

    const key = itemElement.dataset.optionKey;
    const item = selectedOptions.get(key);
    if (!item) return;

    const action = actionButton.dataset.quantityAction;
    if (action === 'increase') item.quantity += 1;
    if (action === 'decrease') item.quantity -= 1;
    if (action === 'remove' || item.quantity <= 0) selectedOptions.delete(key);
    render();
  });

  root.querySelectorAll('[data-product-submit]').forEach((button) => {
    button.addEventListener('click', (event) => {
      const payload = getPayload();
      if (!payload.totalQuantity) {
        event.preventDefault();
        window.alert('상품 옵션을 먼저 선택해주세요.');
        colorSelect.focus();
        return;
      }

      payload.action = button.dataset.productSubmit;
      localStorage.setItem('ablySelectedProduct', JSON.stringify(payload));
    });
  });

  const mobileQuery = window.matchMedia('(max-width: 768px)');
  const sheet = document.querySelector('[data-mobile-sheet]');
  const sheetContent = document.querySelector('[data-mobile-sheet-content]');
  const sheetOpenButton = document.querySelector('[data-mobile-sheet-open]');
  const reviewScrollButton = document.querySelector('[data-review-scroll]');
  const desktopScrollButtons = document.querySelector('.product-detail-desktop-scroll');
  const sheetCloseButton = document.querySelector('[data-mobile-sheet-close]');
  const sheetDim = document.querySelector('[data-mobile-sheet-dim]');
  const mobileControls = [
    root.querySelector('.product-detail-options'),
    root.querySelector('.product-detail-selected'),
    root.querySelector('.product-detail-total'),
    root.querySelector('.product-detail-actions')
  ].filter(Boolean);
  const controlAnchors = mobileControls.map((control) => {
    const anchor = document.createComment(`original position: ${control.className}`);
    control.before(anchor);
    return { control, anchor };
  });
  let sheetIsOpen = false;

  const closeMobileSheet = (restoreFocus = true) => {
    if (!sheetIsOpen) return;
    sheetIsOpen = false;
    sheet.classList.remove('is-open');
    sheetDim.classList.remove('is-open');
    sheet.setAttribute('aria-hidden', 'true');
    sheetOpenButton.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('is-product-sheet-open');
    if (restoreFocus) window.setTimeout(() => sheetOpenButton.focus(), 320);
  };

  const openMobileSheet = () => {
    if (!mobileQuery.matches || sheetIsOpen) return;
    sheetIsOpen = true;
    sheet.classList.add('is-open');
    sheetDim.classList.add('is-open');
    sheet.setAttribute('aria-hidden', 'false');
    sheetOpenButton.setAttribute('aria-expanded', 'true');
    document.body.classList.add('is-product-sheet-open');
    window.setTimeout(() => sheetCloseButton.focus(), 80);
  };

  const placeMobileControls = (event) => {
    const isMobile = event.matches;
    if (isMobile) {
      mobileControls.forEach((control) => sheetContent.append(control));
      return;
    }

    closeMobileSheet(false);
    controlAnchors.forEach(({ control, anchor }) => anchor.after(control));
  };

  const updateDesktopScrollButtons = () => {
    if (mobileQuery.matches) {
      desktopScrollButtons.classList.remove('is-visible');
      return;
    }

    const detailContent = root.querySelector('.product-detail-content').getBoundingClientRect();
    const isInsideDetailContent = detailContent.top < (window.innerHeight * .8) && detailContent.bottom > 120;
    desktopScrollButtons.classList.toggle('is-visible', isInsideDetailContent);
  };

  sheetOpenButton.addEventListener('click', openMobileSheet);
  reviewScrollButton.addEventListener('click', () => {
    closeMobileSheet(false);
    root.querySelector('#product-detail-review').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  sheetCloseButton.addEventListener('click', () => closeMobileSheet());
  sheetDim.addEventListener('click', () => closeMobileSheet());
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && sheetIsOpen) closeMobileSheet();
  });
  document.querySelectorAll('[data-page-scroll]').forEach((button) => {
    button.addEventListener('click', () => {
      const top = button.dataset.pageScroll === 'top'
        ? 0
        : document.documentElement.scrollHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
  mobileQuery.addEventListener('change', placeMobileControls);
  mobileQuery.addEventListener('change', updateDesktopScrollButtons);
  window.addEventListener('scroll', updateDesktopScrollButtons, { passive: true });
  window.addEventListener('resize', updateDesktopScrollButtons);
  placeMobileControls(mobileQuery);
  updateDesktopScrollButtons();

  render();
})();
