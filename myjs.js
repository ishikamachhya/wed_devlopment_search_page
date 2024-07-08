const dropdownButton = document.querySelector(".dropdown-button");
const dropdownMenu = document.querySelector(".dropdown-menu");
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

dropdownButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    dropdownMenu.classList.remove("show");
  }
});

searchButton.addEventListener("click", () => {
  // Add search functionality here
  console.log("Search button clicked!");
});
