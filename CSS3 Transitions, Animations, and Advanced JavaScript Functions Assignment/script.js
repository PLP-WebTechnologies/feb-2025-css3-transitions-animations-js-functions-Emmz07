// === THEME TOGGLE with LOCAL STORAGE ===
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme on page load
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
  }
}
loadTheme();

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const theme = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

// === TRIGGER ANIMATION ===
const message = document.getElementById("message");
document.getElementById("showMessage").addEventListener("click", () => {
  message.classList.add("animate");
});

// === STORE USER PREFERENCE ===
const prefForm = document.getElementById("preferenceForm");
const colorInput = document.getElementById("favColor");
const colorResult = document.getElementById("colorResult");

// Load saved color on page load
const savedColor = localStorage.getItem("favoriteColor");
if (savedColor) {
  colorResult.textContent = `Your favorite color is ${savedColor}!`;
}

prefForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const color = colorInput.value.trim();
  if (color) {
    localStorage.setItem("favoriteColor", color);
    colorResult.textContent = `Your favorite color is ${color}!`;
    colorInput.value = "";
  }
});
