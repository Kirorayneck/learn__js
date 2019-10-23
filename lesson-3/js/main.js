let money = +prompt('Ваш месячный доход');
console.log(money);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    addExpenses = addExpenses.split(',');
console.log(addExpenses);

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

let income = 'taxi, freelance, crafting',
    mission = 1000000;
    

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

let firstCosts = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    firstCostsAmount = +prompt('Во сколько это обойдется?'),
    secondCosts = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    secondCostsAmount = +prompt('Во сколько это обойдется?');
    budgetMonth = money - firstCostsAmount - secondCostsAmount;

console.log(budgetMonth);

let period = mission / budgetMonth;
console.log(Math.ceil(period));

let dayBudget = budgetMonth / 30;
console.log(Math.floor(dayBudget));

if (dayBudget > 800){
  console.log('Высокий уровень дохода');
}
  else if (dayBudget < 800 && dayBudget > 300) {
    console.log('Средний уровень дохода');
}
  else if (300 > dayBudget){
    console.log('Низкий уровень дохода');
}
  else if (0 > dayBudget){
    console.log('Что то пошло не так');
}
  else {
    console.log('Ошибка');
}



console.log(income.length);
console.log('Период ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(dayBudget);
console.log(money % 30);

