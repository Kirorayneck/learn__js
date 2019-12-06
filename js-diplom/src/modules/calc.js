const calc = (price = 10000) => {
  const calcBlock = document.querySelector('#accordion'),
    calcType = document.querySelector('#collapseTwo'),
    calcSquare = document.querySelector('.calc-square'),
    calcDay = document.querySelector('.calc-day'),
    totalValue = document.getElementById('calc-result'),
    calcSelect = calcType.querySelectorAll('.form-control'),
    collapseThree = document.querySelector('#collapseThree'),
    switchLabel = document.querySelector('.onoffswitch-label'),
    switchBtnSecond = collapseThree.querySelector('.onoffswitch-label');
    switchBtnSecond.classList.add('true');
    

    switchBtnSecond.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('onoffswitch-inner') || target.classList.contains('onoffswitch-switch')) {
        switchBtnSecond.classList.toggle('true');
      }
    });
    const countSum =() => {
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
          console.log(startPrice);
          console.log(bottomPrice);
          console.log(firstValue);
          console.log(secondValue);
          console.log(thirdValue);
          console.log(fourthValue);
    };
    


calcBlock.addEventListener('change', (event) => {
  const target = event.target;
  if (target.matches('select') || target.matches('input')) {
    countSum();
  }
});

 
};
calc();