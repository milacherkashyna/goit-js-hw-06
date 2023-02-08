const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value;
  if (email === "" || password === "") {
    alert("Введіть ваші дані");
    return;
  }
  console.log({
    email,
    password,
  });
  event.target.reset();
});
