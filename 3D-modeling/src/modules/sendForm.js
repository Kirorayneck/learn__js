const sendForm = (formId) => {
  const errorMessage = `Что-то пошло не так...`,
    succesMessage = `Спасибо! Мы скоро с вами свяжемся!`;

  const form = document.getElementById(formId);

  const inputs = form.querySelectorAll(`input`);

  const statusMessage = document.createElement(`div`);
  statusMessage.style.cssText = `font-size: 2rem; color: yellow;`;

  const a = document.createElement(`div`);
  a.style.cssText = `height: 50px; width: 50px; border-radius: 50%; border: 2px dotted yellow; margin: 0 auto;`;
  let animate,
    count = 0;
  const loading = () => {
    animate = requestAnimationFrame(loading);
    count++;
    a.style.transform = `rotate(${count}deg)`;
  };

  let end;
  form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    inputs.forEach((item) => {
      if (item.classList.contains(`error`)) {
        end = false;
        return;
      } else {
        end = true;
      }
    });
    if (!end) {
      return false;
    }
    statusMessage.remove();
    form.appendChild(a);
    loading();

    const formData = new FormData(form);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });

    const apply = () => {
      a.remove();
      cancelAnimationFrame(animate);
      form.appendChild(statusMessage);
      statusMessage.textContent = succesMessage;
      form.reset();
      inputs.forEach((item) => item.classList.remove(`success`));
    };

    const error = () => {
      a.remove();
      cancelAnimationFrame(animate);
      form.appendChild(statusMessage);
      statusMessage.textContent = errorMessage;
      console.error(error);
    };

    const postData = (body) => {
      return fetch('./server.php', {
        method: `POST`,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
    };
    postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(errorMessage);
        }
        a.remove();
        cancelAnimationFrame(animate);
        form.appendChild(statusMessage);
        statusMessage.textContent = succesMessage;
        form.reset();
        inputs.forEach((item) => item.classList.remove(`success`));
      })
      .catch((error) => {
        a.remove();
        cancelAnimationFrame(animate);
        form.appendChild(statusMessage);
        statusMessage.textContent = errorMessage;
        console.error(error);
      });

  });
};

export default sendForm;