const dropdownOneBtns = document.querySelectorAll(".dropdown-one_btn");
const dropdownOneResult = document.querySelector(".dropdown-one_result");

const dropdownTwoBtns = document.querySelectorAll(".dropdown-two_btn");
const dropdownTwoItem = document.querySelector(".dropdown-two_item");
const dropdownTwoItems = document.querySelector(".dropdown-two_items");
const dropdownTwoHover = document.querySelector(".dropdown-two_hover");
const dropdownTwoResult = document.querySelector(".dropdown-two_result");

// ====================================
dropdownOneBtns.forEach((element) => {
  element.addEventListener("click", ({ target: { textContent } }) => {
    dropdownOneResult.textContent = `${textContent}`;
  });
});

// =================================
dropdownTwoBtns.forEach((element) => {
  element.addEventListener("click", ({ target: { textContent } }) => {
    dropdownTwoResult.textContent = `${textContent}`;
  });
});
dropdownTwoItem.addEventListener("click", () => {
  dropdownTwoHover.classList.toggle("active");
});
window.addEventListener("click", (event) => {
  if (event.target !== dropdownTwoItem && event.target !== dropdownTwoHover) {
    dropdownTwoHover.classList.remove("active");
  }
});
