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
    







let appData = {
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 1000000,
  period: 3,
  
  start: function (appData) {
    console.log(this);
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
    
  },

  showResult: function(){
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.ceil(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.period);
    incomePeriodValue.value = this.calcPeriod();
    
    periodSelect.addEventListener('input', function () {
      incomePeriodValue.value = appData.calcPeriod();
    });
  },
  getBlock: function () {
    let dataContent = data.querySelectorAll('*');
    for (let i = 0; i < dataContent.length; i++) {
      if (dataContent[i].type == 'text') {
        dataContent[i].setAttribute('disabled', '');
      }
    }
  },
  getReset: function () {
    start.style.display = 'none';
    reset.style.display = 'block';
  },
  addExpensesBlock: function(){
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonPlus2);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3){
      buttonPlus2.style.display='none';
    }
  },
  addIncomeBlock: function () {
    let cloneincomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneincomeItem, buttonPlus1);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
      buttonPlus1.style.display = 'none';
    }
  },
  getExpenses: function(){
    expensesItems.forEach(function (item){
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
  getIncome: function () {
    incomeItems.forEach(function (item) {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== '') {
        appData.income[itemIncome] = cashIncome;
      }
    });
    
  },
  getAddExpenses: function () {
    let addExpenses = additionalExpensesItem.value.split(',');

    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== '') {
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function () {
    additionalIncomeItem.forEach(function(item){
      let itemValue = item.value.trim();
      if (itemValue !== ''){
        appData.addIncome.push(itemValue);
      }
    });
  },
  getExpensesMonth: function () {
    for (let key in this.expenses) {
      this.expensesMonth += this.expenses[key] * 1;
    }
  },
  getIncomeMonth: function () {
    for (let key in this.income) {
      this.incomeMonth += this.income[key] * 1;
    }
  },
  getBudget: function () {
    this.budgetMonth = this.budget + this.incomeMonth - +this.expensesMonth;
    console.log('Доход в месяц: ', this.budgetMonth);

    this.budgetDay = this.budgetMonth / 30;
    console.log('Дневной бюджет: ', this.budgetDay);

  },
   getPeriodAmount: function () {

     let periodAmountItem = document.querySelector('.period-amount');
     periodSelect.addEventListener('input', function () {
       periodAmountItem.textContent = periodSelect.value;
     });

   },
  getStatusIncome: function () {
    if (this.budgetMonth > 800) {
      return ('Высокий уровень дохода');
    } else if (this.budgetMonth < 800 && this.budgetMonth > 300) {
      return ('Средний уровень дохода');
    } else if (300 > this.budgetMonth && this.budgetMonth > 0) {
      return ('Низкий уровень дохода');
    } else if (0 > this.budgetMonth) {
      return ('Что то пошло не так');
    } else {
      return ('Ошибка');
    }
  },

  getTargetMonth: function () {
    this.period = targetAmount.value / this.budgetMonth;
  },
  calcPeriod: function (){
    return this.budgetMonth * periodSelect.value;
  },
};
appData.getPeriodAmount();
start.addEventListener('click', appData.start.bind(appData));
reset.addEventListener('click', appData.reset);
buttonPlus2.addEventListener('click', appData.addExpensesBlock);
buttonPlus1.addEventListener('click', appData.addIncomeBlock);



/* if (appData.budgetMonth < 0) {
  console.log('Цель не будет достигнута');
} else {
  console.log('Цель будет достигнута за: ' + Math.ceil(appData.period) + ' месяцев');
}
console.log('Ваш уровень дохода: ' + appData.getStatusIncome());

console.log("Наша программа включает в себя данные: ");
for (let key in appData) {
  console.log(key + ": " + appData[key]);
}
 */