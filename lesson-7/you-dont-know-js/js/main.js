'use strict';

let books = document.querySelector('.books');
let book = document.querySelectorAll('.book');
let book_2 = book[0],
    book_1 = book[1],
    book_6 = book[2],
    book_4 = book[3],
    book_3 = book[4],
    book_5 = book[5];
    

books.insertBefore(book_1, book_2);
books.insertBefore(book_3, book_4);
books.appendChild(book_6);

document.body.setAttribute('style', 'background-image: url("./image/you-dont-know-js.jpg")');

book_3.querySelector('a').textContent = "Книга 3. this и Прототипы Объектов";

let add = document.querySelector('.adv');
document.body.removeChild(add);

let chapterCollect_2 = book[0].querySelector('ul'),
  chapters_2 = book[0].querySelectorAll('li');

chapterCollect_2.appendChild(chapters_2[4]);
chapterCollect_2.appendChild(chapters_2[5]);

let chapterCollect_5 = book[5].querySelector('ul'),
  chapters_5 = book[5].querySelectorAll('li');

chapterCollect_5.insertBefore(chapters_5[9], chapters_5[2]);
chapterCollect_5.insertBefore(chapters_5[5], chapters_5[8]);
chapterCollect_5.insertBefore(chapters_5[2], chapters_5[6]);

let chapterCollect_6 = book[2].querySelector('ul'),
  chapters_6 = book[2].querySelectorAll('li'),
  newChapter = document.createElement('li');

newChapter.textContent = 'Глава 8: За пределами ES6';

chapterCollect_6.insertBefore(newChapter, chapters_6[9]);