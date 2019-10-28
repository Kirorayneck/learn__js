let money;

let start = function() {
  do {
    money = prompt('Ваш месячный доход', 50000);
  }
  while(isNaN(money) || money === '' || money === null);
};

start();

let appData = {
  budget: +money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  income: {},
  addIncome: [],
  expenses: {},
  addExpences: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 1000000,
  period: 3,
  asking: function(){
    if(confirm('Есть ли у вас дополнительный источник заработка?')){
      let itemIncome,
          cashIncome;
      do {
        itemIncome = prompt('Назовите Ваш дополнительный заработок', 'Фриланс');
      }
      while (!isNaN(itemIncome) || itemIncome === '' || itemIncome === null);
      do {
        cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 7000);
      }
      while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null);

      appData.income[itemIncome] = cashIncome;
    }
    let addExpenses;
      do {
        addExpenses= prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
      }
      while (!isNaN(addExpenses) || addExpenses === '' || addExpenses === null);
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
    let question,
        costs;
      for (let i = 0; i < 2; i++) {
      if (i === 0) {
        question = prompt('Какие обязательные ежемесячные расходы у вас есть?');
      }
      if (i === 1) {
        question = prompt('Какие обязательные ежемесячные расходы у вас есть?');
      }
      do {
        costs = prompt('Во сколько это обойдется?');
      }
      while (isNaN(costs) || costs === '' || costs === null);
      
        appData.expenses[question] = costs;
    }
  },
  getExpensesMonth: function () {
    for (let key in appData.expenses){
      appData.expensesMonth += appData.expenses[key]*1;
    }
  },
  getBudget: function () {
    appData.budgetMonth = appData.budget - +appData.expensesMonth;
    console.log('Доход в месяц: ', appData.budgetMonth);

    appData.budgetDay = appData.budgetMonth / 30;
    console.log('Дневной бюджет: ', appData.budgetDay);

  },
  getStatusIncome: function () {
    if (appData.budgetMonth > 800) {
      return ('Высокий уровень дохода');
    }
    else if (appData.budgetMonth < 800 && appData.budgetMonth > 300) {
      return ('Средний уровень дохода');
    }
    else if (300 > appData.budgetMonth && appData.budgetMonth > 0) {
      return ('Низкий уровень дохода');
    }
    else if (0 > appData.budgetMonth) {
      return ('Что то пошло не так');
    }
    else {
      return ('Ошибка');
    }
  },
  
  getTargetMonth: function () {
    appData.period = appData.mission / appData.budgetMonth;
  },
  getInfoDeposit: function(){
    if (appData.deposit) {
      do {
        appData.percentDeposit = prompt('Укажите процент по вкладу!', 10);
      }
      while (isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null);
      do {
        appData.moneyDeposit = prompt('Укажите сумму вклада', 25000);
      }
      while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);
    }
  },
  calcSavedMoney: function(){
    return appData.budgetMonth * appData.period;
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getStatusIncome();
appData.getTargetMonth();
console.log(appData.getStatusIncome());
console.log('Расходы за месяц составляют: ' + appData.expenсesMonth);

if (appData.budgetMonth < 0) {
  console.log('Цель не будет достигнута');
}
else {
  console.log('Цель будет достигнута за: ' + Math.ceil(appData.period) + ' месяцев');
}
console.log('Ваш уровень дохода: ' + appData.getStatusIncome());

console.log("Наша программа включает в себя данные: ");
for (let key in appData) {
  console.log(key + ": " + appData[key]);
}


for (let i = 0; i < appData.addExpenses.length; i++) {
  appData.addExpenses[i] = appData.addExpenses[i][0].toUpperCase() + appData.addExpenses[i].slice(1);
}
console.log(appData.addExpenses.join(', '));
