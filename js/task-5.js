function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector(".change-color");
const changeSpan = document.querySelector(".color");
const body = document.querySelector("body");

changeBtn.addEventListener("click", function () {
  const colorResult = body.style.backgroundColor = getRandomHexColor();
  changeSpan.textContent = colorResult;
});
