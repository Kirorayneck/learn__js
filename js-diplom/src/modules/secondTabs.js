const secondTabs = () => {
  const tabHeader = document.querySelector('#accordion-two'),
    tab = tabHeader.querySelectorAll('.panel-heading'),
    tabContent = tabHeader.querySelectorAll('.panel-collapse');
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
};

secondTabs();