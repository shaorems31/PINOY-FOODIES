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

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const consent = document.getElementById("consent").checked;

  if (!name || !email || !consent) {
    alert("Please fill out all fields and give consent.");
    return false;
  }
  alert("Thank you for subscribing!");
  return true;
}