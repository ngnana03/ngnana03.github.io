const searchInput = document.querySelector("#searchInput");
const recipeCards = document.querySelectorAll(".recipe-card");

searchInput.addEventListener("input", function () {
  const search = searchInput.value.toLowerCase();

  recipeCards.forEach(function (card) {
    const recipeName = card.querySelector("h3").textContent.toLowerCase();

    if (recipeName.includes(search)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});