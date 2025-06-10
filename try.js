function loadCategoryMenu(category, type) {
  const recipeList = document.getElementById('recipeList');
  const displayType = type === 'popular' ? 'Popular' : 'All';

  recipeList.innerHTML = `<div class="recipe">Loading ${displayType} ${category} recipes...</div>`;

  setTimeout(() => {
    let nameSuffix = type === 'popular' ? 'Popular' : 'Recipe';

    if (category === 'breakfast' && type === 'popular') {
      recipeList.innerHTML = `
        <div class="recipe-card">
          <a href="https://www.seriouseats.com/pandesal-filipino-rolls-recipe-5189763" target="_blank">
            <img src="images/breakfast-1.jpg" alt="Pandesal" />
            <h3>Pandesal (Filipino Rolls)</h3>
          </a>
        </div>
      `;
    } else {
      recipeList.innerHTML = `
        <div class="recipe-card">
          <a href="sample.html" target="_blank">
            <img src="images/${category}-1.jpg" alt="${category} 1" />
            <h3>${category} ${nameSuffix} 1</h3>
          </a>
        </div>
        <div class="recipe-card">
          <a href="recipes/${category}2.html" target="_blank">
            <img src="images/${category}-2.jpg" alt="${category} 2" />
            <h3>${category} ${nameSuffix} 2</h3>
          </a>
        </div>
        <div class="recipe-card">
          <a href="recipes/${category}3.html" target="_blank">
            <img src="images/${category}-3.jpg" alt="${category} 3" />
            <h3>${category} ${nameSuffix} 3</h3>
          </a>
        </div>
      `;
    }
  }, 1000);
}
