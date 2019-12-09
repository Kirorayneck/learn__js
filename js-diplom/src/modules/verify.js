const verify = () => {
  const forms = document.querySelectorAll('form'),
  const inputs = document.querySelectorAll(`input`),
    invalidNameMessage = `Некорректное имя`,
    invalidNumberMessage = `Некорректный номер телефона. Введите номер телефона полностью`;



  const valid = document.createElement(`div`);
  valid.style.cssText = `font-size: 2rem; color: blue;`;
  inputs.forEach((item) => {
    if (item.type === `tel` && item.value.length < 11) {
      alert('Некорректный номер телефона. Введите номер телефона полностью. Минимальное количество символов номера телефона - 11');
    }
    if (item.type === `text` && item.value.length > 50 || item.value.length < 2) {
      alert('Некорректное имя. Минимальное количество символов имени - 2');
    }
  });


};
verify();