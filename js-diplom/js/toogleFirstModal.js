const toogleFirstModal = () => {
  const callMe = document.querySelector('.call-btn'),
        firstModal = document.querySelector('.popup-call');
  callMe.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('call-btn')) {
      firstModal.style.display = 'block';
    }
  });
  /* const showMenu = () => {
    firstModal.style.display = 'block';
  }; */
};
toogleFirstModal();