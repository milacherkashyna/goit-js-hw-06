const span = document.querySelector("#name-output");
const inputName = document.querySelector("#name-input");
inputName.addEventListener("input", () => {
  const inputValue = inputName.value;
  span.textContent = inputValue === "" ? "Anonimous" : inputValue;
});
