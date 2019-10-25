let money;

let start = function() {
  do {
    money = prompt('Ваш месячный доход', 50000);
  }
  while(isNaN(money) || money === '' || money === null);
};

start();

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    addExpenses = addExpenses.split(',');
console.log(addExpenses);

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

let income = 'taxi, freelance, crafting',
    mission = 1000000;
    


/* let firstCosts = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    firstCostsAmount = +prompt('Во сколько это обойдется?'),
    secondCosts = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    secondCostsAmount = +prompt('Во сколько это обойдется?');
    budgetMonth = money - firstCostsAmount - secondCostsAmount; */

let getExpencesMonth = function() {
  let sum = 0,
      costs;

  for (let i = 0; i < 2; i++){
    if (i === 0){
      firstCosts = prompt('Какие обязательные ежемесячные расходы у вас есть?');
    }
    if (i === 1) {
      secondCosts = prompt('Какие обязательные ежемесячные расходы у вас есть?');
    }
    do {
      costs = prompt('Во сколько это обойдется?');
    }
    while (isNaN(costs) || costs === '' || costs === null); 

    sum += +costs;
    console.log('sum: ', sum);
  }
  return sum;
};
let expensesAmount = getExpencesMonth();

  budgetMonth = money - expensesAmount;

let period = mission / budgetMonth;
console.log(Math.ceil(period));

let dayBudget = budgetMonth / 30;
console.log(Math.floor(dayBudget));

let showTypeOf = function(data) {
  console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let getStatusIncome = function() {
  if (dayBudget > 800) {
    return ('Высокий уровень дохода');
  }
  else if (dayBudget < 800 && dayBudget > 300) {
    return ('Средний уровень дохода');
  }
  else if (300 > dayBudget) {
    return ('Низкий уровень дохода');
  }
  else if (0 > dayBudget) {
    return ('Что то пошло не так');
  }
  else {
    return ('Ошибка');
  }
};


let getAccumulatedMonth = function() {
  return (money - expensesAmount);
};

console.log(getAccumulatedMonth());

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function() {
  let period = mission / accumulatedMonth;
  if (period > 0)
    alert('Цель будет достигнута за ' + (Math.ceil(period)) + ' месяцев');
  else
    alert('Цель не будет достигнута');
};

console.log(getTargetMonth());