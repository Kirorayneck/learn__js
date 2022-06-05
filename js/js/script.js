const title = 'Новый сайт';
const screens = 'Простые, Сложные, Интерактивные';
const screenPrice = 3000;
const rollback = 23;
const fullPrice = 60000;
const adaptive = false;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов ', screenPrice, ' рублей');
console.log('Стоимость разработки сайта', fullPrice, ' рублей');
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));