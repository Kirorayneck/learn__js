const moreBtn = () => {
  const more = document.querySelector('.add-sentence-btn'),
    hiddenBlock = document.querySelectorAll('.hidden'),
    visibleSmBlock = document.querySelector('.visible-sm-block');

  more.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('add-sentence-btn')) {
        more.style.display = 'none';
        visibleSmBlock.classList.remove('visible-sm-block');
        hiddenBlock.forEach((elem) => {
          elem.classList.remove('hidden');
        });
      }
  });
};
moreBtn();