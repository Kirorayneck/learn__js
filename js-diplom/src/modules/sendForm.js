const sendForm = (formId) => {
  const errorMessage = `Произошла ошибка :(`,
    loadMessage = `Сообщение в пути`,
    succesMessage = `Сообщение получено! Мы скоро с вами свяжемся!`;

  const form = document.querySelector(formId);

  const inputs = form.querySelectorAll(`input`);

  const statusMessage = document.createElement(`div`);
  statusMessage.style.cssText = `font-size: 2rem; color: blue;`;

  const a = document.createElement(`div`);
  a.style.cssText = `height: 50px; width: 50px; border-radius: 50%; border: 2px dotted blue; margin: 0 auto;`;
  let animate,
    count = 0;
  const loading = () => {
    animate = requestAnimationFrame(loading);
    count++;
    a.style.transform = `rotate(${count}deg)`;
  };

  form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    inputs.forEach((item) => {
      if (item.classList.contains(`error`)) {
        return sendForm(false);
      }
    });
    statusMessage.remove();
    form.appendChild(a);
    loading();

    const formData = new FormData(form);
    let body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });
    postData(body, () => {
        a.remove();
        cancelAnimationFrame(animate);
        form.appendChild(statusMessage);
        statusMessage.textContent = succesMessage;
      },
      (error) => {
        a.remove();
        cancelAnimationFrame(animate);
        form.appendChild(statusMessage);
        statusMessage.textContent = errorMessage;
        console.error(error);
      });

  });
  const postData = (body, outputData, errorData) => {
    const request = new XMLHttpRequest();
    request.addEventListener(`readystatechange`, () => {

      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        outputData();
        form.reset();
        inputs.forEach((item) => item.classList.remove(`success`));
      } else {
        errorData(request.status);
      }
    });
    request.open('POST', './server.php');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(body));
  };

};
sendForm(`#form-1`);
sendForm(`#form-2`);
sendForm(`#form-3`);
sendForm(`#form-4`);
sendForm(`#form-5`);
sendForm(`#form-6`);
sendForm(`#form-7`);