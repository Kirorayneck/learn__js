const firstTabs = () => {
  const tabHeader = document.querySelector('#accordion'),
    tab = tabHeader.querySelectorAll('.panel-heading'),
    tabContent = tabHeader.querySelectorAll('.panel-collapse'),
    switchLabel = document.querySelector('.onoffswitch-label'),
    panelTwo = document.querySelector('.panel-two'),
    titleText = panelTwo.querySelectorAll('.title-text'),
    calcType = document.querySelector('#collapseTwo'),
    totalValue = document.getElementById('calc-result'),
    collapseThree = document.querySelector('#collapseThree'),
    selectBox = panelTwo.querySelectorAll('.select-box'),
    constructBtn = tabHeader.querySelectorAll('.construct-btn'),
    calcSelect = calcType.querySelectorAll('.form-control'),
    switchBtnSecond = collapseThree.querySelector('.onoffswitch-label');

    switchLabel.classList.add('true');
    switchBtnSecond.classList.add('true');

  for (let i = 0; i < titleText.length; i++) {
    if (i > 0) {
     titleText[i].classList.add('collapse');
     titleText[i].classList.remove('title-text');
    }
  }
  for (let i = 0; i < selectBox.length; i++) {
    if (i > 1) {
      selectBox[i].classList.add('collapse');
      selectBox[i].classList.remove('select-box');
    }
  }
  const toggleTabContent = (index) => {
    for (let i = 0; i < tabContent.length; i++) {
      if (index === i) {
        tabContent[i].classList.add('in');
      } else {
        tabContent[i].classList.remove('in');
      }
    }
  };
  tab.forEach((item, i) => {
    item.addEventListener(`click`, (event) => {
      event.preventDefault();
      let target = event.target;
      if (target.parentNode === item.children[0] || target.parentNode === item || target === item) {
        toggleTabContent(i);
      }
    });
  });
  constructBtn.forEach((item, i) => {
    item.addEventListener(`click`, (event) => {
      event.preventDefault();
      let target = event.target;
      if (target.parentNode === item.children[0] || target.parentNode === item || target === item) {
        toggleTabContent(i + 1);
        countSum();
      }
    });
  });
  switchLabel.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('onoffswitch-inner') || target.classList.contains('onoffswitch-switch')) {
      switchLabel.classList.toggle('true');
      for (let i = 0; i < titleText.length; i++) {
        if (i > 0) {
          titleText[i].classList.toggle('collapse');
          titleText[i].classList.toggle('title-text');
        }
      }
      for (let i = 0; i < selectBox.length; i++) {
        if (i > 1) {
          selectBox[i].classList.toggle('collapse');
          selectBox[i].classList.toggle('select-box');
        }
      }
    }
  });
  

  switchBtnSecond.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('onoffswitch-inner') || target.classList.contains('onoffswitch-switch')) {
      switchBtnSecond.classList.toggle('true');
    }
  });

  const countSum = () => {
    let total = 10000,
      selectFirst = calcSelect[0].value,
      selectSecond = calcSelect[1].value,
      selectThird = calcSelect[2].value,
      selectFourth = calcSelect[3].value,
      firstValue,
      secondValue,
      thirdValue,
      fourthValue,
      startPrice,
      bottomPrice;

    if (switchLabel.classList.contains('true')) {
      startPrice = +10000;
    } else {
      startPrice = +15000;
    }

    if (switchBtnSecond.classList.contains('true') && startPrice === 10000) {
      bottomPrice = +1000;
    } else if (switchBtnSecond.classList.contains('true') && startPrice === 15000) {
      bottomPrice = +2000;
    } else {
      bottomPrice = 0;
    }

    if (selectFirst == '1.4 метра') {
      firstValue = 1;
    } else if (selectFirst == '2 метра') {
      firstValue = 1.2;
    }

    if (selectSecond == '1 штука') {
      secondValue = 1;
    } else if (selectSecond == '2 штуки') {
      secondValue = 1.3;
    } else if (selectSecond == '3 штуки') {
      secondValue = 1.5;
    }

    if (selectThird == '1.4 метра') {
      thirdValue = 1;
    } else if (selectThird == '2 метра') {
      thirdValue = 1.2;
    }

    if (selectFourth == '1 штука') {
      fourthValue = 1;
    } else if (selectFourth == '2 штуки') {
      fourthValue = 1.3;
    } else if (selectFourth == '3 штуки') {
      fourthValue = 1.5;
    }
    if (switchLabel.classList.contains('true')) {
      thirdValue = 1;
      fourthValue = 1;
    }
    total = +startPrice * firstValue * secondValue * thirdValue * fourthValue + bottomPrice;
    totalValue.value = total;
  };


  tabHeader.addEventListener('change', (event) => {
    const target = event.target;
    if (target.matches('select') || target.matches('input')) {
      countSum();
    }
  });
};
firstTabs();
