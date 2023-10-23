const dropdownOneBtns = document.querySelectorAll(".dropdown-one_btn");
const dropdownOneResult = document.querySelector(".dropdown-one_result");
const dropdownOneHover = document.querySelector(".dropdown-one_hover");
const dropdownOneItem = document.querySelector(".dropdown-one_item");
const dropdownOneArrow = document.querySelector(".dropdown-one_arrow");
const dropdownOneItems = document.querySelector(".dropdown-one_items");

dropdownOneBtns.forEach((element) => {
  element.addEventListener("click", ({ target: { textContent } }) => {
    dropdownOneResult.textContent = `${textContent}`;
  });
});
