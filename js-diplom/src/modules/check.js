const check = () => {
  const checkBtn = document.querySelector('.check-btn'),
        popupCheck = document.querySelector('.popup-check');

  checkBtn.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('check-btn')) {
      showModal();
    }
  });

  popupCheck.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('popup-close')) {
      hideModal();
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        hideModal();
      }
    }
  });
  const showModal = () => {
    popupCheck.style.display = 'block';
  };
  const hideModal = () => {
    popupCheck.style.display = 'none';
  };
};

check();