"use strict";
// fp
const mainList = document.querySelectorAll(".item");
const numCateg = mainList.length;

console.log("Number of categories: ", numCateg);

// sp
const wholeItems = document.querySelectorAll(".item");
wholeItems.forEach((item) => {
    const titleContent = item.querySelector(".list-title");
    const listItem = item.querySelectorAll(".list-item");
  console.log("Category: ", titleContent.textContent);
  console.log("Elements: ", listItem.length);
});
