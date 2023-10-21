const horizontal = document.querySelector("#horizontal");
const vertical = document.querySelector("#vertical");
const flexItemsOne = document.querySelector(".flex-items_one");

const flexJustifyItems = document.querySelector(".flex-justify_styles");
const flexJustifyItem = document.querySelectorAll(".flex-justify_style");
const flexAlignItems = document.querySelector(".flex-align_styles");
const flexAlignItem = document.querySelectorAll(".flex-align_style");
const flexItemsTwo = document.querySelector(".flex-items_two");

const small = document.querySelector("#small");
const middle = document.querySelector("#middle");
const large = document.querySelector("#large");
const customize = document.querySelector("#customize");
const flexItemsThere = document.querySelector(".flex-items_there");
const flexRange = document.querySelector(".flex-range");

// ========================================
horizontal.addEventListener("click", (event) => {
  if (event.target.checked) {
    flexItemsOne.classList.remove("vertical");
  }
});
vertical.addEventListener("click", (event) => {
  if (event.target.checked) {
    flexItemsOne.classList.add("vertical");
  }
});

// ==========================================
flexJustifyItem.forEach((value) => {
  value.addEventListener("click", ({ target }) => {
    flexJustifyItem.forEach((value) => {
      value.classList.remove("active");
    });

    target.classList.add("active");
    flexItemsTwo.style.justifyContent = `${target.textContent}`;
  });
});
flexAlignItem.forEach((value) => {
  value.addEventListener("click", ({ target }) => {
    flexAlignItem.forEach((value) => {
      value.classList.remove("active");
    });

    flexItemsTwo.style.alignItems = `${target.textContent}`;
    target.classList.add("active");
  });
});

// ===========================================
small.addEventListener("click", () => {
  flexItemsThere.style.gap = "8px";

  flexRange.classList.add("block");
});
middle.addEventListener("click", () => {
  flexItemsThere.style.gap = "18px";

  flexRange.classList.add("block");
});
large.addEventListener("click", () => {
  flexItemsThere.style.gap = "28px";

  flexRange.classList.add("block");
});
customize.addEventListener("click", () => {
  flexRange.classList.remove("block");
});
flexRange.addEventListener("input", ({ target }) => {
  flexItemsThere.style.gap = `${target.value}px`;
});
