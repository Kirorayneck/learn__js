'use strict';
import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import validCalc from './modules/validCalc';
import hoverImage from './modules/hoverImage';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import validation from './modules/validation';
//Timer
countTimer(`30 december 2019`);
//Меню
toggleMenu();
//popup
togglePopUp();
//Табы
tabs();
// слайдер
slider();
//Калькулятор
validCalc();
//Наша команда
hoverImage();
//Калькулятор
calc();
//отправка формы
sendForm(`form1`);
sendForm(`form2`);
sendForm(`form3`);
//Валидация
validation();