let money;

let start = function() {
  do {
    money = prompt('Ваш месячный доход', 50000);
  }
  while(isNaN(money) || money === '' || money === null);
};

start();

let appData = {
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expenсesMonth: 0,
  income: {},
  addIncome: [],
  expenses: {},
  addExpences: [],
  deposit: false,
  mission: 1000000,
  period: 3,
  asking: function(){
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
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
  getExpencesMonth: function () {
    for (let key in appData.expenses){
      appData.expenсesMonth += +appData.expenses[key];
    }
  },
  getBudget: function () {
    appData.budgetMonth = money - +appData.expenсesMonth;
    console.log('Доход в месяц: ', appData.budgetMonth);

    appData.budgetDay = appData.budgetMonth / 30;
    console.log('Дневной бюджет: ', appData.budgetDay);

    return +money - appData.expenсesMonth;
  },
  getStatusIncome: function () {
    if (appData.getBudget() > 800) {
      return ('Высокий уровень дохода');
    }
    else if (appData.getBudget() < 800 && appData.getBudget() > 300) {
      return ('Средний уровень дохода');
    }
    else if (300 > appData.getBudget()) {
      return ('Низкий уровень дохода');
    }
    else if (0 > appData.getBudget()) {
      return ('Что то пошло не так');
    }
    else {
      return ('Ошибка');
    }
  },
  
  getTargetMonth: function () {
    return appData.mission / acumulatedMonth;
  }
};

appData.asking();
appData.getExpencesMonth();
appData.getStatusIncome();
appData.getBudget();
let acumulatedMonth = appData.getBudget();
appData.getTargetMonth();

