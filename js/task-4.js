const form = document.querySelector(".login-form");
const emailInputs = document.querySelector(".email-input");
const passwordInputs = document.querySelector(".password-input");

const outHeadler = (event) => {
  event.preventDefault();
  if (emailInputs.value === "" || passwordInputs.value === "") {
    return alert("All form fields must be filled in");
  } else {
    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();

    const dataObj = {
      email: email,
      password: password,
    };
    console.log(dataObj);
    form.reset();
  }
};

form.addEventListener("submit", outHeadler);
