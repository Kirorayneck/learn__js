window.addEventListener('DOMContentLoaded', function(){
'use strict';
  //Timer
  const countTimer = function (deadline) {
    const timerHours = document.querySelector(`#timer-hours`),
          timerMinutes = document.querySelector(`#timer-minutes`),
          timerSeconds = document.querySelector(`#timer-seconds`);
    const getTimeRemaining = function () {
      let dateStop = new Date(deadline).getTime(),
          dateNow = new Date().getTime(),
          timeRemaining = (dateStop - dateNow) / 1000,
          seconds = Math.floor(timeRemaining % 60),
          minutes = Math.floor((timeRemaining / 60) % 60),
          hours = Math.floor(timeRemaining / 60 / 60);
          return { timeRemaining, hours, minutes, seconds };
    };
    const firstZero = (elem) => {
       return (elem < 10) ? `0${elem}` : elem;
    };
    const updateClock = function () {
      const timer = getTimeRemaining();
      timerHours.textContent = firstZero(timer.hours);
      timerMinutes.textContent = firstZero(timer.minutes);
      timerSeconds.textContent = firstZero(timer.seconds);
      if (timer.timeRemaining <= 0) {
        timerHours.textContent = firstZero(0);
        timerMinutes.textContent = firstZero(0);
        timerSeconds.textContent = firstZero(0);
      }
      let timePeriod = setInterval(updateClock, 1000);
      if (timer.timeRemaining <= 0) {
        clearInterval(timePeriod);
      }
    };
    updateClock();
  };

  countTimer(`26 november 2019`);


  //Меню
  const toggleMenu = () => {

    const btnMenu = document.querySelector(`.menu`),
          menu = document.querySelector(`menu`),
          closeBtn = document.querySelector('.close-btn'),
          menuItems = menu.querySelectorAll('ul>li');
          /* const handlerMenu = () => {
            if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
              menu.style.transform = `translate(0)`;
            }
            else {
              menu.style.transform = `translate(-100%)`;
            }     
          }; */
          const handlerMenu = () => {
            menu.classList.toggle('active-menu');
          };
    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
  };
  toggleMenu();

  //popup

  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupClose = document.querySelector('.popup-close'),
    popupContent = document.querySelector('.popup-content');
    
    let count = 0;
    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';
        popupContent.style.opacity = 0 + '%';
        const popupUp = () => {
          if (document.body.clientWidth > 768) {
            count++;
            popupContent.style.opacity = count + '%';
            if (count < 100) {
              setTimeout(popupUp, 20);
            }
          }
          else {
            popupContent.style.opacity = 1;
          }
        };
        popupUp();
      });
    });
    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
      count = 0;
    });
  };
  togglePopUp();
});