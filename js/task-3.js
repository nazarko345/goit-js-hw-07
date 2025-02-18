const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const outHeadler = (event) => {
  if(nameInput.value === "") {
    return nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = event.currentTarget.value.trim();
  }
};

nameInput.addEventListener("input", outHeadler);
