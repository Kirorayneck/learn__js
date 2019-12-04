const toogleFirstModal = () => {
  const callBtn = document.querySelectorAll('.call-btn'),
        popup = document.querySelector('.popup'),
        firstModal = document.querySelector('.popup-call');

  callBtn.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('call-btn')) {
        event.preventDefault();
        showMenu();
      }
    });
  });
  
  popup.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('popup-close')) {
      hideMenu();
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        hideMenu();
      }
    }
  });
  const showMenu = () => {
    firstModal.style.display = 'block';
  };
  const hideMenu = () => {
    firstModal.style.display = 'none';
  };
};
toogleFirstModal();