'use strict';
/* import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill'; */

import toggleFirstModal from './modules/toggleFirstModal';
import check from './modules/check';
import consultation from './modules/consultation';
import firstTabs from './modules/firstTabs';
import moreBtn from './modules/moreBtn';
import sendForm from './modules/sendForm';
import sentence from './modules/sentence';
import validation from './modules/validation';
import secondTabs from './modules/secondTabs';

toggleFirstModal();

check();

consultation();

firstTabs();

moreBtn();

secondTabs();

sendForm(`#form-1`);
sendForm(`#form-2`);
sendForm(`#form-3`);
sendForm(`#form-4`);
sendForm(`#form-5`);
sendForm(`#form-6`);
sendForm(`#form-7`);

sentence();

validation();