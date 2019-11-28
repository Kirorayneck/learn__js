const hoverImage = () => {
  const team = document.querySelector(`.command`);
  let images = team.querySelectorAll(`img`);

  team.addEventListener(`mouseover`, (event) => {
    let hover = event.target;
    images.forEach((item) => {
      if (hover === item) {
        item.dataset.img2 = item.src;
        item.src = item.dataset.img;
      }
    });
  });

  team.addEventListener(`mouseout`, (event) => {
    let hover = event.target;
    images.forEach((item) => {
      if (hover === item) {
        item.src = item.dataset.img2;
      }
    });
  });
};

export default hoverImage;