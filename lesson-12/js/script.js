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

  countTimer(`16 november 2019`);

});