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
          menu = document.querySelector(`menu`);
    const openMenu = () => {
      menu.classList.add('active-menu');
    };
    const closeMenu = () => {
      menu.classList.remove('active-menu');
    };
    btnMenu.addEventListener('click', (event) => {
      let target = event.target;
      target = target.closest('.menu');
      if (target.classList.contains('menu')) {
        openMenu();
      } 
      if (target.classList.contains('close-btn')) {
        closeMenu();
      }
    });
    menu.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('close-btn')) {
        closeMenu();
      }
      if (target.tagName != 'li') {
        closeMenu();
      }
      else {
        closeMenu();
      }
    });
          

    /* menuItems.forEach((elem) => elem.addEventListener('click', closeMenu)); */
  };
  toggleMenu();

  //popup

  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
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
    popup.addEventListener('click', (event) => {
      let target = event.target;
      if(target.classList.contains('popup-close')){
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
  togglePopUp();

  //Табы
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
          tab = tabHeader.querySelectorAll('.service-header-tab'),
          tabContent = document.querySelectorAll('.service-tab');
    const toggleTabContent = (index) => {
      for(let i = 0; i < tabContent.length; i++) {
        if (index === i){
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };
    tabHeader.addEventListener('click', (event) => {
      let target = event.target;
      target = target.closest('.service-header-tab');
      if (target.classList.contains('service-header-tab')){
        tab.forEach((item, i) => {
          if(item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };

  tabs();
});