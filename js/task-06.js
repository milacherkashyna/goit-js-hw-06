const input = document.querySelector("#validation-input");
const inputLength = Number(input.dataset.length);
input.addEventListener("blur", () => {
  const inputValueLength = input.value.length;
  input.classList.remove("valid", "invalid");
  inputValueLength === inputLength
    ? input.classList.add("valid")
    : input.classList.add("invalid");
});
