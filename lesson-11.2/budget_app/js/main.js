'use strict';

const start = document.querySelector('#start'),
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
      
      
      reset = document.querySelector('#cancel'),
      periodAmountItem = document.querySelector('.period-amount'),
      depositBank = document.querySelector('.deposit-bank'),
      depositAmount = document.querySelector('.deposit-amount'),
      depositPercent = document.querySelector('.deposit-percent'),
      data = document.querySelector('.data');

let inputs = document.querySelectorAll('input'),
    incomeItems = document.querySelectorAll('.income-items'),
    expensesItems = document.querySelectorAll('.expenses-items');







class AppData {
  constructor(){
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
  this.moneyDeposit = 0;
  this.percentDeposit = 0;
  this.percent = 0;
}

start() {
    salaryAmount.addEventListener('input', function () {
      start.removeAttribute('disabled', '');
    });
    if (salaryAmount.value === '') {
      start.setAttribute('disabled', '');
      return;
    }
    
    this.budget = +salaryAmount.value;


    this.getBlock();
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getIncomeMonth(); 
    this.getStatusIncome(); 
    
    this.getPeriodAmount();
    this.getInfoDeposit();
    this.getPercent();
    this.getBudget();
    this.getTargetMonth();
    this.getReset();
    this.showResult();
  }

showResult() {
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = Math.ceil(this.budgetDay);
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = this.addExpenses.join(', ');
  additionalIncomeValue.value = this.addIncome.join(', ');
  targetMonthValue.value = Math.ceil(this.period);
  incomePeriodValue.value = this.calcPeriod();
    
  periodSelect.addEventListener('input', function () {
    incomePeriodValue.value = this.calcPeriod();
  });
}
getBlock() {
    let dataContent = data.querySelectorAll('*');
    for (let i = 0; i < dataContent.length; i++) {
      if (dataContent[i].type == 'text') {
        dataContent[i].setAttribute('disabled', '');
      }
    }
}
getReset() {
    start.style.display = 'none';
    reset.style.display = 'block';
}
addBlock(item, button, itemClass) {

  let cloneItem = item[0].cloneNode(true);
  let itemChild = cloneItem.querySelectorAll('*');

  for (let i = 0; i < itemChild.length; i++) {
    itemChild[i].value = '';
  }

  item[0].parentNode.insertBefore(cloneItem, button);
  item = document.querySelectorAll(itemClass);

  if (item.length === 3) {
    button.style.display = 'none';
  }
}
addExpensesBlock (){
  let cloneExpensesItem = expensesItems[0].cloneNode(true);
  let expensesChildren = cloneExpensesItem.querySelectorAll('*');

  for (let i = 0; i < expensesChildren.length; i++) {
    if (expensesChildren[i].type == 'text') {
      expensesChildren[i].value = null;
    }
  }

}
addIncomeBlock() {
  let cloneIncomeItem = incomeItems[0].cloneNode(true);
  let incomeChildren = cloneIncomeItem.querySelectorAll('*');

  for (let i = 0; i < incomeChildren.length; i++) {
    if (incomeChildren[i].type == 'text') {
      incomeChildren[i].value = null;
    }
  }
}
getExpenses(){
  expensesItems = document.querySelectorAll('.expenses-items');
  expensesItems.forEach(function (item){
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
    if (itemExpenses !== '' && cashExpenses !== '') {
      this.expenses[itemExpenses] = +cashExpenses;
    }
  });
}
getIncome() {
  const This = this;
  incomeItems = document.querySelectorAll('.income-items');
  incomeItems.forEach(function (item) {
    let itemIncome = item.querySelector('.income-title').value;
    let cashIncome = item.querySelector('.income-amount').value;
    if (itemIncome !== '' && cashIncome !== '') {
      This.income[itemIncome] = +cashIncome;
    }
  });
}

getExpensesMonth() {
  const This = this;
  for (let key in this.expenses) {
    This.expensesMonth += This.expenses[key] * 1;
  }
}
getIncomeMonth() {
  const This = this;
  for (let key in This.income) {
    This.incomeMonth += This.income[key] * 1;
  }
}
getInfoDeposit() {
  const This = this;
  if (This.deposit) {
    This.percentDeposit = depositPercent.value;
    This.moneyDeposit = depositAmount.value;
  }
}
getPercent() {
  this.percent = +this.moneyDeposit * +this.percentDeposit / 12;
}
getBudget() {
  this.budgetMonth = this.budget + this.incomeMonth - +this.expensesMonth + this.percent;
    console.log('Доход в месяц: ', this.budgetMonth);

  this.budgetDay = this.budgetMonth / 30;
  console.log('Дневной бюджет: ', this.budgetDay);

}
getPeriodAmount() {
  let periodAmountItem = document.querySelector('.period-amount');
  periodSelect.addEventListener('input', function () {
    periodAmountItem.textContent = periodSelect.value;
  });
}

getStatusIncome() {
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
}

getTargetMonth() {
  const This = this;
  This.period = targetAmount.value / This.budgetMonth;
}
calcPeriod(){
  const This = this;
  return This.budgetMonth * periodSelect.value;
}
deleteArea() {
  inputs = document.querySelectorAll('input');
  let expensesArea = document.querySelectorAll('.expenses-items');
  let incomeArea = document.querySelectorAll('.income-items');
  
  for (let i = 1; i < incomeArea.length; i++) {
    incomeArea[i].remove();
  }
  for (let i = 1; i < expensesArea.length; i++) {
    expensesArea[i].remove();
  }
}
reset() {
  this.deleteArea();
  this.addIncome.length = 0;
  this.addExpenses.length = 0;
  this.deposit = false;

  periodAmountItem.textContent = 1;
  start.style.display = 'block';
  reset.style.display = 'none';
  buttonPlus1.style.display = 'block';
  buttonPlus2.style.display = 'block';

  inputs.forEach((item) => {
    item.removeAttribute('disabled');
    item.value = '';
    periodSelect.value = 1;
  });
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
  this.moneyDeposit = 0;
  this.percentDeposit = 0;
  this.percent = 0;
}
eventsListeners() {
  depositCheck.addEventListener('change', () => {
    if (depositCheck.checked === true) {
      depositBank.style.display = 'inline-block';
      depositAmount.style.display = 'inline-block';
      appData.deposit = 'true';
      depositBank.addEventListener('change', function () {
        let selectIndex = this.options[this.selectedIndex].value;
        if (selectIndex === 'other') {
          depositPercent.style.display = 'inline-block';
          depositPercent.value = '';
        }
        else {
          depositPercent.style.display = 'none';
          depositPercent.value = selectIndex;
        }
      });
    }
    else {
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      depositAmount.value = '';
      appData.deposit = 'false';
    }
  });
  start.addEventListener('click', () => {this.start();});
  reset.addEventListener('click', () => {this.reset();});
  buttonPlus2.addEventListener('click', () => {
    this.addBlock(expensesItems, buttonPlus2, '.expenses-items');
  });
  buttonPlus1.addEventListener('click', () => {
    this.addBlock(incomeItems, buttonPlus1, '.income-items');
  });

  this.getPeriodAmount();
  }
}
const appData = new AppData();
appData.eventsListeners();
