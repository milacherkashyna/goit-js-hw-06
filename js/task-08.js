const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (form.elements.email.value === "" || form.elements.password.value === "") {
    alert("Введіть ваші дані");
    return;
  }
  console.log({
    email: form.elements.email.value,
    password: form.elements.password.value,
  });
  form.reset();
});
