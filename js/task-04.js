let counterValue = 0;
const buttonDecrement = document.querySelector('[data-action="decrement"]');

const buttonIncrement = document.querySelector('[data-action="increment"]');

buttonDecrement.addEventListener("click", () => {
  counterValue -= 1;
  span.textContent = counterValue;
});
buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
  span.textContent = counterValue;
});

const span = document.querySelector("#value");
