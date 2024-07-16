var dark = document.getElementById("todo-darkmode");
var isDarkMode = false;

dark.addEventListener("click", (e) => {
  console.log(e, "button");
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    document.documentElement.style.setProperty("--main-color", "white");
    document.documentElement.style.setProperty("--secondary-color", "black");
    e.target.textContent = "Light Mode";
  } else {
    document.documentElement.style.setProperty("--main-color", "black");
    document.documentElement.style.setProperty("--secondary-color", "white");
    e.target.textContent = "Dark Mode";
  }
});
