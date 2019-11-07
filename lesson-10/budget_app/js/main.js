'use strict';

let start = document.querySelector('#start'),
    buttonPlus1 = document.querySelectorAll('button')[0],
    buttonPlus2 = document.querySelectorAll('button')[1],
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgetMonthValue = document.querySelector('.budget_month-value'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    incomeItems = document.querySelectorAll('.income-items'),
    reset = document.querySelector('#cancel'),
    inputs = document.querySelectorAll('input'),
    periodAmountItem = document.querySelector('.period-amount'),
    data = document.querySelector('.data');
    







const AppData = function(){
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.mission = 1000000;
  this.period = 3;
};

const appData = new AppData();
AppData.prototype.start = function () {
    if (salaryAmount.value === '') {
      start.setAttribute('disable', '');
      return;
    } else {
      start.removeAttribute('disable', '');
    }
    this.budget = +salaryAmount.value;


    this.getBlock();
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getIncomeMonth();
    
    this.getStatusIncome();
    
    
    this.getAddExpenses();
    this.getAddIncome();
    this.getPeriodAmount();
    this.getBudget();
    this.getTargetMonth();
    this.getReset();
    this.showResult();
    
  };

AppData.prototype.showResult = function () {
  const This = this;
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = Math.ceil(this.budgetDay);
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = this.addExpenses.join(', ');
  additionalIncomeValue.value = this.addIncome.join(', ');
  targetMonthValue.value = Math.ceil(this.period);
  incomePeriodValue.value = this.calcPeriod();
    
  periodSelect.addEventListener('input', function () {
    incomePeriodValue.value = This.calcPeriod();
  });
};
AppData.prototype.getBlock = function () {
    let dataContent = data.querySelectorAll('*');
    for (let i = 0; i < dataContent.length; i++) {
      if (dataContent[i].type == 'text') {
        dataContent[i].setAttribute('disabled', '');
      }
    }
};
AppData.prototype.getReset =function () {
    start.style.display = 'none';
    reset.style.display = 'block';
};
AppData.prototype.addExpensesBlock = function(){
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
  let expensesChildren = cloneExpensesItem.querySelectorAll('*');

  for (let i = 0; i < expensesChildren.length; i++) {
    if (expensesChildren[i].type == 'text') {
      expensesChildren[i].value = null;
    }
  }

  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonPlus2);
  expensesItems = document.querySelectorAll('.expenses-items');
  if (expensesItems.length === 3) {
    buttonPlus2.style.display = 'none';
  }
  cloneExpensesItem.querySelectorAll('input').forEach(this.getCheckPlaceholder);
};
AppData.prototype.addIncomeBlock = function () {
  let cloneincomeItem = incomeItems[0].cloneNode(true);
  incomeItems[0].parentNode.insertBefore(cloneincomeItem, buttonPlus1);
  incomeItems = document.querySelectorAll('.income-items');
  if (incomeItems.length === 3) {
    buttonPlus1.style.display = 'none';
  }
};
AppData.prototype.getExpenses = function(){
  const This = this;
  expensesItems.forEach(function (item){
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
    if (itemExpenses !== '' && cashExpenses !== '') {
      This.expenses[itemExpenses] = +cashExpenses;
    }
  });
};
AppData.prototype.getIncome = function () {
  const This = this;
  incomeItems.forEach(function (item) {
    let itemIncome = item.querySelector('.income-title').value;
    let cashIncome = item.querySelector('.income-amount').value;
    if (itemIncome !== '' && cashIncome !== '') {
      This.income[itemIncome] = +cashIncome;
    }
    for (let key in This.income) {
      This.incomeMonth += +This.income[key];
    }
  });
};
AppData.prototype.getAddExpenses = function () {
  const This = this;
  let addExpenses = additionalExpensesItem.value.split(',');

  addExpenses.forEach(function (item) {
    item = item.trim();
    if (item !== '') {
      This.addExpenses.push(item);
    }
  });
};
AppData.prototype.getAddIncome = function () {
  const This = this;
  additionalIncomeItem.forEach(function(item){
    let itemValue = item.value.trim();
    if (itemValue !== ''){
      This.addIncome.push(itemValue);
    }
  });
};
AppData.prototype.getExpensesMonth = function () {
  const This = this;
  for (let key in this.expenses) {
    This.expensesMonth += This.expenses[key] * 1;
  }
};
AppData.prototype.getIncomeMonth = function () {
  const This = this;
  for (let key in This.income) {
    This.incomeMonth += This.income[key] * 1;
  }
};
AppData.prototype.getBudget = function () {
  const This = this;
  This.budgetMonth = This.budget + This.incomeMonth - +This.expensesMonth;
    console.log('Доход в месяц: ', this.budgetMonth);

  This.budgetDay = This.budgetMonth / 30;
  console.log('Дневной бюджет: ', This.budgetDay);

  };
AppData.prototype.getPeriodAmount = function () {
  let periodAmountItem = document.querySelector('.period-amount');
  periodSelect.addEventListener('input', function () {
    periodAmountItem.textContent = periodSelect.value;
  });
};

AppData.prototype.getStatusIncome = function () {
  const This = this;
  if (This.budgetMonth > 800) {
      return ('Высокий уровень дохода');
  } else if (This.budgetMonth < 800 && This.budgetMonth > 300) {
      return ('Средний уровень дохода');
  } else if (300 > This.budgetMonth && This.budgetMonth > 0) {
      return ('Низкий уровень дохода');
  } else if (0 > This.budgetMonth) {
      return ('Что то пошло не так');
    } else {
      return ('Ошибка');
    }
};

AppData.prototype.getTargetMonth = function () {
  const This = this;
  This.period = targetAmount.value / This.budgetMonth;
};
AppData.prototype.calcPeriod = function (){
  const This = this;
  return This.budgetMonth * periodSelect.value;
};

AppData.prototype.eventsListeners = function () {
  const This = this;

  start.addEventListener('click', appData.start.bind(appData));
  reset.addEventListener('click', appData.reset);
  buttonPlus2.addEventListener('click', appData.addExpensesBlock);
  buttonPlus1.addEventListener('click', appData.addIncomeBlock);

  This.getPeriodAmount();

};
appData.eventsListeners();
