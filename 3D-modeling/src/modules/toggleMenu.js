const toggleMenu = () => {

  const btnMenu = document.querySelector(`.menu`),
    menu = document.querySelector(`menu`),
    body = document.querySelector('body');
  const openMenu = () => {
    menu.classList.add('active-menu');
  };
  const closeMenu = () => {
    menu.classList.remove('active-menu');
  };
  body.addEventListener('click', (event) => {
    let target = event.target;
    if (target.closest(`.menu`)) {
      openMenu();
    } else if (target.closest(`.close-btn`) || !target.closest(`menu`)) {
      closeMenu();
    } else if (target.tagName != 'li') {
      closeMenu();
    } else {
      closeMenu();
    }
  });
};

export default toggleMenu;