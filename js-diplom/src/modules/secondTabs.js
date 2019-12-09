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
  tab.forEach((item, i) => {
    item.addEventListener(`click`, (event) => {
      event.preventDefault();
      let target = event.target;
      if (target.parentNode === item.children[0] || target.parentNode === item || target === item) {
        toggleTabContent(i);
      }
    });
  });
};

export default secondTabs;