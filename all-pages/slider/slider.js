const inputOne = document.querySelector(".slider-one");

inputOne.addEventListener("input", (event) => {
  const inputVal = event.target.value;
  const maxVal = inputOne.max;

  const progress = (inputVal / maxVal) * 100;

  inputOne.style.background = `linear-gradient(to right, var(--primary-main) ${progress}%, var(--primary-main-opacity) ${progress}%)`;
});
