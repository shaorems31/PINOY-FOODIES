function toggleMoreInfo() {
  const moreInfo = document.getElementById('moreInfo');
  const button = document.querySelector('.toggle-btn');

  if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
    moreInfo.style.display = 'block';
    button.textContent = 'Read Less';
  } else {
    moreInfo.style.display = 'none';
    button.textContent = 'Read More';
  }
}

function toggleRecipe(recipeId) {
  const allRecipes = document.querySelectorAll(".recipe-details");
  allRecipes.forEach(recipe => {
    if (recipe.id === recipeId) {
      recipe.style.display = recipe.style.display === "block" ? "none" : "block";
    } else {
      recipe.style.display = "none";
    }
  });
}