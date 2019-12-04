const sentence = () => {
  const sentenceBlock = document.querySelector('.sentence'),
    sentenceBtn = sentenceBlock.querySelectorAll('.sentence-btn'),
    popupDiscount = document.querySelector('.popup-discount');

  sentenceBtn.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('sentence-btn')) {
        showPopupDiscount();
      }
    });
  });
  popupDiscount.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('popup-close')) {
      hidePopupDiscount();
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        hidePopupDiscount();
      }
    }
  });
  const showPopupDiscount = () => {
    popupDiscount.style.display = 'block';
  };
  const hidePopupDiscount = () => {
    popupDiscount.style.display = 'none';
  };
};

sentence();