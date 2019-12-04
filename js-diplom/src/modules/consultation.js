const consultation = () => {
  const consultationBtn = document.querySelector('.consultation-btn'),
    popupConsultation = document.querySelector('.popup-consultation');

  consultationBtn.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('consultation-btn')) {
        showModal();
      }
  });

  popupConsultation.addEventListener('click', (event) => {
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
    popupConsultation.style.display = 'block';
  };
  const hideModal = () => {
    popupConsultation.style.display = 'none';
  };
};
consultation();