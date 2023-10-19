const inputOne = document.querySelector(".slider-one");
const inputTwo = document.querySelector(".slider-two");
const inputThere = document.querySelector(".slider-there");

// input-one
inputOne.addEventListener("input", (event) => {
  const inputVal = event.target.value;
  const maxVal = inputOne.max;

  const progress = (inputVal / maxVal) * 100;

  inputOne.style.background = `linear-gradient(to right, var(--primary-main) ${progress}%, var(--primary-main-opacity) ${progress}%)`;
});

// input-two
inputTwo.addEventListener("input", (event) => {
  const inputVal = event.target.value;
  document.querySelector(".display-input2").textContent = inputVal;

  const maxVal = inputTwo.max;

  const progress = (inputVal / maxVal) * 100;

  inputTwo.style.background = `linear-gradient(to right, var(--primary-main) ${progress}%, var(--primary-main-opacity) ${progress}%)`;
});

// input-there
inputThere.addEventListener("input", (event) => {
  const inputVal = event.target.value;

  const maxVal = inputThere.max;

  const progress = (inputVal / maxVal) * 100;

  inputThere.style.background = `linear-gradient(to right, var(--primary-main) ${progress}%, var(--primary-main-opacity) ${progress}%)`;
});
