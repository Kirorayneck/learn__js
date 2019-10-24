let money = +prompt('Ваш месячный доход');
console.log(money);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    addExpenses = addExpenses.split(',');
console.log(addExpenses);

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

let income = 'taxi, freelance, crafting',
    mission = 1000000;
    


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

console.log(getStatusIncome());

let getExpensesMonth = function() {
  return (firstCostsAmount + secondCostsAmount);
};

console.log(getExpensesMonth());

let getAccumulatedMonth = function() {
  return (money - getExpensesMonth());
};

console.log(getAccumulatedMonth());

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function() {
  return (mission / accumulatedMonth);
};

console.log(getTargetMonth());