console.log("Client side javascript file is loaded!");

// eslint-disable-next-line no-undef
const weatherForm = document.querySelector("form");
// eslint-disable-next-line no-undef
const search = document.querySelector("input");
// eslint-disable-next-line no-undef
const messageOne = document.querySelector("#message-1");
// eslint-disable-next-line no-undef
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();

  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  // fetch("http://localhost:3000/weather?address=" + location).then(response => {
  // eslint-disable-next-line no-undef
  fetch("/weather?address=" + location).then(response => {
    response.json().then(data => {
      if (data.errorMessage) {
        messageOne.textContent = data.errorMessage;
      } else {
        const mensaje = `La temperatura actual es ${data.forecast.temperatura} 
              pero se siente una temperatura de ${data.forecast.sensacion}`;
        messageOne.textContent = data.location;
        messageTwo.textContent = mensaje;
      }
    });
  });
});
