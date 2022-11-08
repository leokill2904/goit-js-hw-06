const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return window.alert("УВАГА! Поля вводу повинні бути заповнені!");
  }

  let userData = {
    Email: email.value,
    Password: password.value,
  };
  console.log(userData);

  event.currentTarget.reset();
});
