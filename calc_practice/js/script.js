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
          body = document.querySelector('body');
    const openMenu = () => {
      menu.classList.add('active-menu');
    };
    const closeMenu = () => {
      menu.classList.remove('active-menu');
    };
    body.addEventListener('click', (event) => {
      let target = event.target;
      if (target.closest(`.menu`)) {
        openMenu();
      } else if (target.closest(`.close-btn`) || !target.closest(`menu`)) {
        closeMenu();
      } else if (target.tagName != 'li') {
        closeMenu();
      }
      else {
        closeMenu();
      }
    });
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

  // слайдер

  const slider = () => {
    const slide = document.querySelectorAll(`.portfolio-item`),
      slider = document.querySelector(`.portfolio-content`),
      dotsArea = document.querySelector(`.portfolio-dots`);
    let dot = document.querySelectorAll(`.dot`);
    const dots = () => {

      slide.forEach(() => {
        let newDot = document.createElement(`li`);
        newDot.classList.add(`dot`);
        dotsArea.appendChild(newDot);

      });
      dot = document.querySelectorAll(`.dot`);
    };
    dots();

    let currentSlide = 0,
      interval;
    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };
    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, `portfolio-item-active`);
      prevSlide(dot, currentSlide, `dot-active`);
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, `portfolio-item-active`);
      nextSlide(dot, currentSlide, `dot-active`);
    };
    const startSlide = (time) => {
      interval = setInterval(autoPlaySlide, time);
    };
    startSlide(1500);
    
    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener(`click`, (event) => {
      event.preventDefault();

      let target = event.target;

      if (!target.matches(`.portfolio-btn, .dot`)) {
        return;
      }

      prevSlide(slide, currentSlide, `portfolio-item-active`);
      prevSlide(dot, currentSlide, `dot-active`);

      if (target.matches(`#arrow-right`)) { 
        currentSlide++;
      } else if (target.matches(`#arrow-left`)) { 
        currentSlide--;
      } else if (target.matches(`.dot`)) {
        dot.forEach((elem, i) => {
          if (elem === target) {
            currentSlide = i;
          }
        });
      }
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide, `portfolio-item-active`);
      nextSlide(dot, currentSlide, `dot-active`);
    });
    slider.addEventListener(`mouseover`, (event) => {
      if (event.target.matches(`.portfolio-btn, .dot`)) {
        stopSlide();
      }
    });
    slider.addEventListener(`mouseout`, (event) => {
      if (event.target.matches(`.portfolio-btn, .dot`)) {
        startSlide(1500);
      }
    });
  };
  slider();

  //Калькулятор
  const validCalc = () => {
    let val = document.querySelectorAll(`input`);
    val.forEach((item) => {
      if (item.getAttribute(`type`) === `number`) {
        item.addEventListener(`input`, () => {
          item.value = item.value.replace(/\D/, '');
        });
      }
    });

  };
  validCalc();

  //Наша команда
  const hoverImage = () => {
    const team = document.querySelector(`.command`);
  let images = team.querySelectorAll(`img`);

  team.addEventListener(`mouseover`, (event) => {
    let hover = event.target;
    images.forEach( (item) => {
      if (hover === item) {
        item.dataset.img2 = item.src;
        item.src = item.dataset.img;
      }
    });
  });
  
  team.addEventListener(`mouseout`, (event) => {
    let hover = event.target;
    images.forEach( (item) => {
      if (hover === item) {
        item.src = item.dataset.img2;
      }
    });
  });
  };
  hoverImage();


  //Калькулятор

  const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
          calcType = document.querySelector('.calc-type'),
          calcSquare = document.querySelector('.calc-square'),
          calcDay = document.querySelector('.calc-day'),
          totalValue = document.getElementById('total'),
          calcCount = document.querySelector('.calc-count');

    const countSum = () => {
      let total = 0,
          countValue = 1,
          dayValue = 1;
      const typeValue = calcType.options[calcType.selectedIndex].value;
      let squareValue = +calcSquare.value;
      if (calcCount.value > 1){
        countValue += (calcCount.value - 1) / 10;
      }
      if (calcDay.value && calcDay.value < 5){
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (typeValue && squareValue){
        total = price * typeValue * squareValue * countValue * dayValue;
      }
      totalValue.textContent = total;
    };

    calcBlock.addEventListener('change', (event) => {
      const target = event.target;
      if (target.matches('select') || target.matches('input')){
        countSum();
      }
    });
  };
  calc();
});