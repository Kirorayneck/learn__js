'use strict';

const countTimer = function (deadline) {
  let dayTimes = document.createElement(`li`),
      weekPart = document.createElement(`li`),
      timeNow = document.createElement(`li`),
      timeNewYear = document.createElement(`li`);

  const getTimeRemaining = function () {
    let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60),
        days = Math.floor(timeRemaining / 60 / 60 / 24);
    return {
      timeRemaining,
      days,
      hours,
      minutes,
      seconds
    };
  };
  let newYear = getTimeRemaining();

  const presentTime = function () {
    let today = new Date(),
        time = today.toLocaleTimeString(),
        day = today.getDay();

    return {
      today,
      time,
      day
    };

  };
  let present = presentTime();

  const data = function () {
    if (present.today.getHours() < 6) {
      dayTimes.textContent = 'Доброй ночи';
    } else if (present.today.getHours() > 6 && present.today.getHours() < 12) {
      dayTimes.textContent = 'Доброе утро';
    } else if (present.today.getHours() > 12 && present.today.getHours() < 18) {
      dayTimes.textContent = 'Добрый день';
    } else {
      dayTimes.textContent = 'Доброй вечер';
    }
    let dayWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    dayWeek.forEach((item, i) => {
      if (present.today.getDay() === i) {
        weekPart.textContent = `Сегодня:${item}`;
      }
    });
    timeNow.textContent = `Текущее время:${present.time}`;
    timeNewYear.textContent = `До Нового Года осталось ${newYear.days} дней`;
  };
  const dataOutput = function () {
    document.body.appendChild(dayTimes);
    document.body.appendChild(weekPart);
    document.body.appendChild(timeNow);
    document.body.appendChild(timeNewYear);
  };
  data();
  dataOutput();
};

countTimer(`1 january 2020`);
