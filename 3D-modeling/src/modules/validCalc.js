const validCalc = () => {
  let val = document.querySelectorAll(`input`);
  val.forEach((item) => {
    if (item.getAttribute(`type`) === `number`) {
      item.addEventListener(`input`, () => {
        item.value = item.value.replace(/\D/, '');
      });
    }
  });

};

export default validCalc;