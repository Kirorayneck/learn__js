const firstTabs = () => {
  const tabHeader = document.querySelector('#accordion'),
    tab = tabHeader.querySelectorAll('.panel-heading'),
    tabContent = tabHeader.querySelectorAll('.panel-collapse'),
    switchLabel = document.querySelector('.onoffswitch-label'),
    panelTwo = document.querySelector('.panel-two'),
    titleText = panelTwo.querySelectorAll('.title-text'),
    selectBox = panelTwo.querySelectorAll('.select-box'),
    constructBtn = tabHeader.querySelectorAll('.construct-btn');

    switchLabel.classList.add('true');

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
  tabHeader.addEventListener('click', (event) => {
    let target = event.target;
    target = target.closest('.panel-heading');
    if (target.classList.contains('panel-heading')) {
      tab.forEach((item, i) => {
        if (item === target) {
          event.preventDefault();
          toggleTabContent(i);
        }
      });
    }
  });
  tabHeader.addEventListener('click', (event) => {
    let target = event.target;
    target = target.closest('.construct-btn');
    if (target.classList.contains('construct-btn')) {
      constructBtn.forEach((item, i) => {
        if (item === target) {
          event.preventDefault();
          toggleTabContent(i + 1);
        }
      });
    }
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
};
firstTabs();
