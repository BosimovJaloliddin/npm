const dropdownOneBtns = document.querySelectorAll(".dropdown-one_btn");
const dropdownOneResult = document.querySelector(".dropdown-one_result");

const dropdownTwoBtns = document.querySelectorAll(".dropdown-two_btn");
const dropdownTwoItem = document.querySelector(".dropdown-two_item");
const dropdownTwoHover = document.querySelector(".dropdown-two_hover");
const dropdownTwoResult = document.querySelector(".dropdown-two_result");
const dropdownTwoArrow = document.querySelector(".dropdown-two_arrow");

const dropdownThereBar = document.querySelector(".dropdown-there_menu");
const dropdownThereHover = document.querySelector(".dropdown-there_hover");

// ====================================
dropdownOneBtns.forEach((element) => {
  element.addEventListener("click", ({ target: { textContent } }) => {
    dropdownOneResult.textContent = `${textContent}`;
  });
});

// ==============  Two  ===================
dropdownTwoBtns.forEach((element) => {
  element.addEventListener("click", ({ target: { textContent } }) => {
    dropdownTwoResult.textContent = `${textContent}`;
  });
});
dropdownTwoItem.addEventListener("click", () => {
  dropdownTwoHover.classList.toggle("active");

  if (dropdownTwoHover.classList.contains("active")) {
    dropdownTwoArrow.style.transform = `rotate(90deg)`;
  } else {
    dropdownTwoArrow.style.transform = `rotate(0deg)`;
  }
});
window.addEventListener("click", (event) => {
  if (event.target !== dropdownTwoItem && event.target !== dropdownTwoHover) {
    dropdownTwoHover.classList.remove("active");
  }
});

// ================ There ===============
// dropdownThereBar.addEventListener("mouseover", () => {
//   dropdownThereHover.classList.add("active");
// });
// dropdownThereBar.addEventListener("mouseout", () => {
//   dropdownThereHover.classList.remove("active");
// });
