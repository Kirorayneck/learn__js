  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popupContent = document.querySelector('.popup-content');

    let count = 0,
        appear;
    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';
        popupContent.style.opacity = 0 + '%';
        let popupUp = () => {
          appear = requestAnimationFrame(popupUp);
          if (document.body.clientWidth > 768) {
            count += 0.05;
            popupContent.style.opacity = count;
            if (count > 1) {
              cancelAnimationFrame(appear);
              popup.style.opacity = 1;
            }
          } else {
            popupContent.style.opacity = 1;
          }
        };
        popupUp();
      });
    });
    popup.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('popup-close')) {
        popup.style.display = 'none';
        count = 0;
      } else {
        target = target.closest('.popup-content');
        if (!target) {
          popup.style.display = 'none';
          count = 0;
        }
      }
    });
  };

  export default togglePopUp;