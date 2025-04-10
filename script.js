function filterCategory(category) {
  let recipes = document.querySelectorAll(".recipe-item");
  recipes.forEach((recipe) => {
    if (category === "all") {
      recipe.style.display = "block"; // Show all recipes
    } else if (recipe.classList.contains(category)) {
      recipe.style.display = "block"; // Show recipes that match the category
    } else {
      recipe.style.display = "none"; // Hide recipes that don't match the category
    }
  });
}
