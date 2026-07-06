(() => {
  const page = document.querySelector('.cart-purchase-page');
  if (!page) return;

  const storageKey = 'ablySelectedProduct';
  const list = document.querySelector('[data-cart-list]');
  const count = document.querySelector('[data-cart-count]');
  const productsTotal = document.querySelector('[data-cart-products-total]');
  const shippingTotal = document.querySelector('[data-cart-shipping]');
  const paymentTotal = document.querySelector('[data-cart-payment]');
  let product = null;
  let selectedKeys = new Set();

  try {
    product = JSON.parse(localStorage.getItem(storageKey));
  } catch (error) {
    product = null;
  }

  if (!product?.options?.length) product = null;
  if (product) product.options.forEach((option) => selectedKeys.add(option.key));

  const formatPrice = (price) => `${Number(price || 0).toLocaleString('ko-KR')}원`;
  const optionLabel = (option) => [option.color, option.size, option.extra === '선택 안 함' ? '' : option.extra].filter(Boolean).join(' / ');
  const optionPrice = (option) => Number(product.unitPrice) + Number(option.extraPrice || 0);

  const save = () => {
    if (!product?.options?.length) {
      localStorage.removeItem(storageKey);
      return;
    }

    product.totalQuantity = product.options.reduce((sum, option) => sum + option.quantity, 0);
    product.totalPrice = product.options.reduce((sum, option) => sum + (optionPrice(option) * option.quantity), 0);
    localStorage.setItem(storageKey, JSON.stringify(product));
  };

  const selectedOptions = () => product?.options.filter((option) => selectedKeys.has(option.key)) || [];

  const render = () => {
    const options = product?.options || [];
    count.textContent = String(options.length);

    list.innerHTML = options.length
      ? options.map((option) => `
          <article class="cart-purchase-item" data-cart-key="${option.key}">
            <label class="cart-purchase-item__check">
              <input type="checkbox" data-cart-check ${selectedKeys.has(option.key) ? 'checked' : ''}>
              <span class="sr-only">${optionLabel(option)} 선택</span>
            </label>
            <a class="cart-purchase-item__product" href="product-detail.html">
              <img src="${product.image || 'assets/images/category/product_01.jpg'}" alt="${product.product}">
              <span><small>${product.brand || ''}</small><strong>${product.product}</strong><em>${formatPrice(optionPrice(option))}</em><span>배송: 무료배송</span><span>[옵션: ${optionLabel(option)}]</span></span>
            </a>
            <button class="cart-purchase-item__remove" type="button" data-cart-remove aria-label="${optionLabel(option)} 삭제"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
            <div class="cart-purchase-item__quantity" aria-label="${optionLabel(option)} 수량">
              <button type="button" data-cart-quantity="decrease" aria-label="수량 줄이기">−</button><output>${option.quantity}</output><button type="button" data-cart-quantity="increase" aria-label="수량 늘리기">+</button>
            </div>
            <div class="cart-purchase-item__price"><strong>${formatPrice(optionPrice(option) * option.quantity)}</strong><button type="button" data-cart-buy-one>BUY NOW</button></div>
          </article>`).join('')
      : '<div class="cart-purchase-empty"><span class="material-symbols-outlined" aria-hidden="true">shopping_bag</span><strong>장바구니가 비어 있습니다.</strong><a href="category.html">상품 보러가기</a></div>';

    const selected = selectedOptions();
    const productAmount = selected.reduce((sum, option) => sum + (optionPrice(option) * option.quantity), 0);
    const shipping = 0;
    productsTotal.textContent = formatPrice(productAmount);
    shippingTotal.textContent = formatPrice(shipping);
    paymentTotal.textContent = formatPrice(productAmount + shipping);
  };

  const removeByKey = (key) => {
    if (!product) return;
    product.options = product.options.filter((option) => option.key !== key);
    selectedKeys.delete(key);
    if (!product.options.length) product = null;
    save();
    render();
  };

  list.addEventListener('change', (event) => {
    const checkbox = event.target.closest('[data-cart-check]');
    const item = event.target.closest('[data-cart-key]');
    if (!checkbox || !item) return;
    if (checkbox.checked) selectedKeys.add(item.dataset.cartKey);
    else selectedKeys.delete(item.dataset.cartKey);
    render();
  });

  list.addEventListener('click', (event) => {
    const item = event.target.closest('[data-cart-key]');
    if (!item || !product) return;
    const key = item.dataset.cartKey;
    const option = product.options.find((entry) => entry.key === key);
    if (!option) return;

    if (event.target.closest('[data-cart-remove]')) return removeByKey(key);
    const quantityButton = event.target.closest('[data-cart-quantity]');
    if (quantityButton) {
      option.quantity += quantityButton.dataset.cartQuantity === 'increase' ? 1 : -1;
      if (option.quantity <= 0) return removeByKey(key);
      save();
      render();
      return;
    }

    if (event.target.closest('[data-cart-buy-one]')) {
      localStorage.setItem('ablyOrderDraft', JSON.stringify({ ...product, options: [option] }));
      window.alert('선택한 상품으로 주문서를 준비했습니다.');
    }
  });

  document.querySelector('[data-cart-select-all]').addEventListener('click', () => {
    const options = product?.options || [];
    const allSelected = options.length && options.every((option) => selectedKeys.has(option.key));
    selectedKeys = new Set(allSelected ? [] : options.map((option) => option.key));
    render();
  });

  document.querySelector('[data-cart-delete-selected]').addEventListener('click', () => {
    if (!selectedKeys.size || !product) return;
    product.options = product.options.filter((option) => !selectedKeys.has(option.key));
    selectedKeys.clear();
    if (!product.options.length) product = null;
    save();
    render();
  });

  const order = (onlySelected) => {
    const options = onlySelected ? selectedOptions() : product?.options || [];
    if (!options.length) {
      window.alert('주문할 상품을 선택해주세요.');
      return;
    }
    localStorage.setItem('ablyOrderDraft', JSON.stringify({ ...product, options }));
    window.alert('주문서를 준비했습니다.');
  };

  document.querySelector('[data-cart-order-selected]').addEventListener('click', () => order(true));
  document.querySelector('[data-cart-order-all]').addEventListener('click', () => order(false));
  render();
})();
