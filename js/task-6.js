function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector(".create-btn");
const destroyBtn = document.querySelector(".destroy-btn");
const numberInput = document.querySelector(".number-input");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  boxes.innerHTML = "";
  let size = 30;
  let containers = "";

  for (let i = 0; i < amount; i++) {
    containers += `<div class="box" style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()}"></div>`;
    size += 10;
  }

  boxes.innerHTML = containers;
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount =+ numberInput.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    numberInput.value = "";
  }
});

destroyBtn.addEventListener("click", destroyBoxes);
