// light and dark mode
const body = document.querySelector("body");
const btn = document.querySelector(".nav-settings");
const moon = document.querySelector(".mode-moon");
const sun = document.querySelector(".mode-sun");

if (localStorage.getItem("mode") === "dark") {
  body.classList.add("dark-mode");
  sun.classList.remove("block");
  moon.classList.add("block");
}

btn.addEventListener("click", () => {
  const localInfo = localStorage.getItem("mode");

  if (localInfo === "light" || localInfo === null) {
    body.classList.add("dark-mode");
    localStorage.setItem("mode", "dark");

    sun.classList.remove("block");
    moon.classList.add("block");
  }
  if (localInfo === "dark") {
    body.classList.remove("dark-mode");
    localStorage.removeItem("mode");

    moon.classList.remove("block");
    sun.classList.add("block");
  }
});
