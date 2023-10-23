const dropdownOneBtns = document.querySelectorAll(".dropdown-one_btn");
const dropdownOneHover = document.querySelector(".dropdown-one_hover");
const dropdownOneItem = document.querySelector(".dropdown-one_item");
const dropdownOneArrow = document.querySelector(".dropdown-one_arrow");
const dropdownOneItems = document.querySelector(".dropdown-one_items");

dropdownOneBtns.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    if (btn.getAttribute("disabled")) {
      btn.style.cursor = `no-drop`;
    } else if (btn.getAttribute("class").includes("red")) {
      btn.style.cssText = `
        color: #ffffff;
        background-color: var(--error-main);
      `;
    } else {
      btn.style.cssText = `
        color: #ffffff;
        background-color: var(--primary-light);
      `;
    }
  });
  btn.addEventListener("mouseout", () => {
    if (btn.getAttribute("class").includes("red")) {
      btn.style.cssText = `
        color: var(--error-main));
        background-color: transparent;
      `;
    } else if (!btn.getAttribute("disabled")) {
      btn.style.cssText = `
        color: var( --text-primary);
        background-color: transparent;
      `;
    }
  });
});
