// script.js

// Wait for the DOM to load completely before running the script
document.addEventListener("DOMContentLoaded", () => {
  const recipeCards = document.querySelectorAll(".recipe-card");

  // Add event listener for hover effect on recipe cards
  recipeCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.05)";
      card.style.transition = "transform 0.3s ease";
    });

    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
    });
  });
});
