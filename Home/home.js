function filterCategory(category) {
    const recipeList = document.getElementById('recipeList');
    recipeList.innerHTML = `<div class="recipe">Loading ${category} recipes...</div>`;
  

    setTimeout(() => {
      recipeList.innerHTML = `
        <div class="recipe-card">
          <img src="images/${category.toLowerCase().replace(/\s+/g, '-')}-1.jpg" alt="${category} 1" />
          <h3>${category} Recipe 1</h3>
        </div>
        <div class="recipe-card">
          <img src="images/${category.toLowerCase().replace(/\s+/g, '-')}-2.jpg" alt="${category} 2" />
          <h3>${category} Recipe 2</h3>
        </div>
        <div class="recipe-card">
          <img src="images/${category.toLowerCase().replace(/\s+/g, '-')}-3.jpg" alt="${category} 3" />
          <h3>${category} Recipe 3</h3>
        </div>
      `;
    }, 1000);
  }

  function hideAllSections() {
    const sections = ['breakfastIntro', 'lunchIntro', 'dinnerIntro', 'dessertIntro',
                      'breakfastDishes', 'lunchDishes', 'dinnerDishes', 'dessertDishes'];
    sections.forEach(id => {
      document.getElementById(id).style.display = 'none';
    });
  }
  
  function showBreakfastIntro() {
    hideAllSections()
    const intro = document.getElementById('breakfastIntro');
    const dishes = document.getElementById('breakfastDishes');
  
    intro.style.display = 'block';
    intro.scrollIntoView({ behavior: 'smooth' });
  
    const breakfastItems = [
      {
        name: "Tapsilog",
        image: "tapsilog.jpg",
        description: "A classic Filipino breakfast with tapa (cured beef), sinangag (garlic rice), and itlog (egg).",
        id: "tapsilogRecipe",
        details: `
          <p><strong>Intro:</strong> Tapsilog is a classic Filipino breakfast combining savory beef tapa, garlic fried rice (sinangag), and a sunny-side-up egg (itlog).</p>
          <h4>Ingredients:</h4>
          <ul>
            <li>1 lb beef sirloin, thinly sliced</li>
            <li>1/4 cup soy sauce</li>
            <li>1 tbsp calamansi juice or lemon juice</li>
            <li>4 cloves garlic, minced</li>
            <li>1 tbsp sugar</li>
            <li>1/2 tsp ground black pepper</li>
            <li>Cooked garlic fried rice (sinangag)</li>
            <li>Fried eggs (1 per serving)</li>
            <li>Cooking oil</li>
          </ul>
          <h4>Instructions:</h4>
          <ol>
            <li>Marinate the beef in soy sauce, calamansi juice, garlic, sugar, and pepper for at least 4 hours or overnight.</li>
            <li>Heat oil in a pan and pan-fry the marinated beef until browned and cooked through.</li>
            <li>In a separate pan, prepare garlic fried rice by sautéing minced garlic until golden, then add cooked rice and stir-fry.</li>
            <li>Serve the tapa with garlic rice and fried egg. Enjoy your Tapsilog!</li>
          </ol>
        `
      },
      {
        name: "Tocilog",
        image: "tocilog.jpg",
        description: "Sweet cured pork (tocino) served with garlic rice and a sunny-side-up egg.",
        id: "tocilogRecipe",
        details: `
          <p><strong>Intro:</strong> Tocilog is a beloved Filipino breakfast dish consisting of tocino (sweet cured pork), sinangag (garlic rice), and itlog (fried egg).</p>
          <h4>Ingredients:</h4>
          <ul>
            <li>1 lb tocino (store-bought or homemade)</li>
            <li>Cooked garlic fried rice (sinangag)</li>
            <li>Fried eggs (1 per serving)</li>
            <li>Water (for cooking tocino)</li>
            <li>Cooking oil</li>
          </ul>
          <h4>Instructions:</h4>
          <ol>
            <li>Place tocino in a pan with a bit of water and cook until water evaporates.</li>
            <li>Once dry, add oil and pan-fry the tocino until caramelized.</li>
            <li>Prepare garlic rice and fry eggs.</li>
            <li>Serve together on a plate and enjoy!</li>
          </ol>
        `
      },
      {
        name: "Pandesal",
        image: "pandesal.jpg",
        description: "Soft and slightly sweet bread rolls, perfect with coffee or cheese spread.",
        id: "pandesalRecipe",
        details: `
          <p><strong>Intro:</strong> Pandesal is the quintessential Filipino bread roll—soft, slightly sweet, and coated with breadcrumbs.</p>
          <h4>Ingredients:</h4>
          <ul>
            <li>4 cups all-purpose flour</li>
            <li>2¼ tsp active dry yeast</li>
            <li>1 cup warm milk</li>
            <li>¼ cup sugar</li>
            <li>1 tsp salt</li>
            <li>¼ cup vegetable oil or butter</li>
            <li>Breadcrumbs for coating</li>
          </ul>
          <h4>Instructions:</h4>
          <ol>
            <li>Dissolve yeast in warm milk with a pinch of sugar. Let it foam (5-10 mins).</li>
            <li>Combine all ingredients into a dough and knead until smooth.</li>
            <li>Let the dough rise for 1–1.5 hours until doubled.</li>
            <li>Shape into small rolls, coat in breadcrumbs, and let rise again (30 mins).</li>
            <li>Bake at 350°F (175°C) for 15–20 minutes until golden brown.</li>
          </ol>
        `
      }
    ];
    
    
    dishes.innerHTML = breakfastItems.map(item => `
      <div class="recipe-card">
        <img src="${item.image}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <button class="toggle-btn" onclick="toggleRecipe('${item.id}')">View Recipe</button>
        <div class="recipe-details" id="${item.id}" style="display: none; margin-top: 10px;">
          ${item.details}
        </div>
      </div>
    `).join('');    
  
    dishes.style.display = 'flex';
  }
  
  function showLunchIntro() {
    hideAllSections()
    const intro = document.getElementById('lunchIntro');
    const dishes = document.getElementById('lunchDishes');
  
    intro.style.display = 'block';
    intro.scrollIntoView({ behavior: 'smooth' });
  
    const lunchItems = [
      {
        name: "Adobo",
        image: "adobo.jpg",
        description: "Tender chicken or pork stewed in vinegar, soy sauce, and garlic.",
        id: "adoboRecipe",
        details: `
          <p><strong>Intro:</strong> Adobo is a quintessential Filipino dish made by stewing meat in vinegar, soy sauce, garlic, and spices.</p>
          <h4>Ingredients:</h4>
          <ul>
            <li>1 kg chicken or pork, cut into pieces</li>
            <li>1/2 cup soy sauce</li>
            <li>1/2 cup vinegar</li>
            <li>6 cloves garlic, crushed</li>
            <li>2 bay leaves</li>
            <li>1 tsp whole peppercorns</li>
            <li>1 cup water</li>
          </ul>
          <h4>Instructions:</h4>
          <ol>
            <li>Combine all ingredients in a pot. Let sit for 30 minutes to marinate.</li>
            <li>Bring to a boil, then reduce to simmer and cook for 40–60 minutes until meat is tender.</li>
            <li>Optional: Fry meat briefly to brown, then return to sauce.</li>
          </ol>
        `
      },
      {
        name: "Kare-Kare",
        image: "kare-kare.jpg",
        description: "Rich peanut stew with oxtail and vegetables, served with bagoong.",
        id: "karekareRecipe",
        details: `
          <p><strong>Intro:</strong> Kare-Kare is a rich Filipino stew made with oxtail, vegetables, and a savory peanut sauce.</p>
          <h4>Ingredients:</h4>
          <ul>
            <li>1 kg oxtail or beef tripe</li>
            <li>1/2 cup peanut butter</li>
            <li>1/4 cup ground toasted rice</li>
            <li>1 eggplant, sliced</li>
            <li>1 banana heart, sliced</li>
            <li>1 bunch sitaw (long beans), cut</li>
            <li>Water, fish sauce, annatto seeds, garlic, onion</li>
          </ul>
          <h4>Instructions:</h4>
          <ol>
            <li>Boil oxtail until tender (about 2–3 hours).</li>
            <li>Sauté annatto seeds in oil, remove seeds.</li>
            <li>Add garlic, onion, peanut butter, rice, and broth. Simmer.</li>
            <li>Add oxtail and vegetables. Serve with bagoong on the side.</li>
          </ol>
        `
      },
      {
        name: "Sinigang",
        image: "sinigang.jpg",
        description: "A sour tamarind soup with pork, shrimp, or fish and fresh vegetables.",
        id: "sinigangRecipe",
        details: `
          <p><strong>Intro:</strong> Sinigang is a sour soup known for its refreshing tamarind-based broth and mix of meat and vegetables.</p>
          <h4>Ingredients:</h4>
          <ul>
            <li>1 kg pork belly or spare ribs</li>
            <li>1 packet tamarind soup base (or fresh tamarind)</li>
            <li>1 tomato, quartered</li>
            <li>1 onion, sliced</li>
            <li>1 radish, sliced</li>
            <li>1 eggplant, sliced</li>
            <li>1 bunch kangkong (water spinach)</li>
          </ul>
          <h4>Instructions:</h4>
          <ol>
            <li>Boil pork with tomatoes and onions for 45 minutes.</li>
            <li>Add vegetables in order of cooking time.</li>
            <li>Add tamarind base and adjust to preferred sourness.</li>
          </ol>
        `
      }
    ];
  
    dishes.innerHTML = lunchItems.map(item => `
      <div class="recipe-card">
        <img src="${item.image}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <button class="toggle-btn" onclick="toggleRecipe('${item.id}')">View Recipe</button>
        <div class="recipe-details" id="${item.id}" style="display: none; margin-top: 10px;">
          ${item.details}
        </div>
      </div>
    `).join('');
  
    dishes.style.display = 'flex';
  }
  
  
  
  function showDinnerIntro() {
    hideAllSections()
    const intro = document.getElementById('dinnerIntro');
    const dishes = document.getElementById('dinnerDishes');
  
    intro.style.display = 'block';
    intro.scrollIntoView({ behavior: 'smooth' });
  
    const dinnerItems = [
      {
        name: "Lechon Kawali",
        image: "lechonkawali.jpg",
        description: "Crispy deep-fried pork belly served with lechon sauce.",
        id: "lechonKawaliRecipe",
        details: `
          <p><strong>Intro:</strong> Lechon Kawali is a Filipino favorite made by boiling and deep-frying pork belly until crispy.</p>
          <h4>Ingredients:</h4>
          <ul>
            <li>1 kg pork belly</li>
            <li>Salt and pepper</li>
            <li>Water</li>
            <li>Cooking oil (for deep frying)</li>
          </ul>
          <h4>Instructions:</h4>
          <ol>
            <li>Boil pork belly in water with salt and pepper until tender (about 1 hour).</li>
            <li>Let it cool and dry completely (refrigerate for crispier skin).</li>
            <li>Deep fry until golden and crispy. Slice and serve with lechon sauce.</li>
          </ol>
        `
      },
      {
        name: "Bistek Tagalog",
        image: "bistekt.jpg",
        description: "Filipino beef steak marinated in soy sauce and calamansi with onions.",
        id: "bistekTagalogRecipe",
        details: `
          <p><strong>Intro:</strong> Bistek Tagalog is a savory-sour Filipino beef steak dish with onions and citrus marinade.</p>
          <h4>Ingredients:</h4>
          <ul>
            <li>500g beef sirloin, sliced thinly</li>
            <li>1/4 cup soy sauce</li>
            <li>1/4 cup calamansi or lemon juice</li>
            <li>1 onion, sliced into rings</li>
            <li>3 cloves garlic, minced</li>
            <li>Salt and pepper</li>
          </ul>
          <h4>Instructions:</h4>
          <ol>
            <li>Marinate beef in soy sauce, calamansi, and garlic for at least 1 hour.</li>
            <li>Pan-fry beef slices until browned, then set aside.</li>
            <li>Sauté onions in same pan. Return beef and simmer in marinade for 5–10 minutes.</li>
          </ol>
        `
      },
      {
        name: "Inihaw na Liempo",
        image: "inihaw na liempo.jpg",
        description: "Grilled marinated pork belly with a smoky flavor.",
        id: "inihawLiempoRecipe",
        details: `
          <p><strong>Intro:</strong> Inihaw na Liempo is grilled pork belly marinated in savory and tangy Filipino-style seasonings.</p>
          <h4>Ingredients:</h4>
          <ul>
            <li>1 kg pork belly, sliced for grilling</li>
            <li>1/2 cup soy sauce</li>
            <li>1/4 cup vinegar</li>
            <li>1 tbsp calamansi or lemon juice</li>
            <li>4 cloves garlic, minced</li>
            <li>1 tsp sugar</li>
            <li>Salt and pepper</li>
          </ul>
          <h4>Instructions:</h4>
          <ol>
            <li>Marinate pork in soy sauce, vinegar, calamansi, garlic, and sugar for 3 hours or overnight.</li>
            <li>Grill over hot charcoal until well cooked and slightly charred on edges.</li>
            <li>Slice and serve with dipping sauce of vinegar, soy sauce, and chili.</li>
          </ol>
        `
      }
    ];
  
    dishes.innerHTML = dinnerItems.map(item => `
      <div class="recipe-card">
        <img src="${item.image}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <button class="toggle-btn" onclick="toggleRecipe('${item.id}')">View Recipe</button>
        <div class="recipe-details" id="${item.id}" style="display: none; margin-top: 10px;">
          ${item.details}
        </div>
      </div>
    `).join('');
  
    dishes.style.display = 'flex';
  }
  
  
  function showDessertIntro() {
    hideAllSections();
    const intro = document.getElementById('dessertIntro');
    const dishes = document.getElementById('dessertDishes');
  
    intro.style.display = 'block';
    intro.scrollIntoView({ behavior: 'smooth' });
  
    const dessertItems = [
      {
        name: "Halo-Halo",
        image: "halo-halo.jpg",
        description: "A colorful mix of shaved ice, milk, sweet beans, jellies, and fruits.",
        id: "haloHaloRecipe",
        details: `
          <p><strong>Intro:</strong> Halo-Halo is a popular Filipino dessert made of layered sweets, shaved ice, and milk, topped with leche flan or ice cream.</p>
          <h4>Ingredients:</h4>
          <ul>
            <li>Shaved ice</li>
            <li>Evaporated milk</li>
            <li>Sweetened red beans</li>
            <li>Sweetened white beans</li>
            <li>Sweetened jackfruit</li>
            <li>Sweetened banana (saba)</li>
            <li>Nata de coco</li>
            <li>Kaong (sugar palm fruit)</li>
            <li>Leche flan or ube halaya (for topping)</li>
            <li>Ube or vanilla ice cream (optional)</li>
          </ul>
          <h4>Instructions:</h4>
          <ol>
            <li>Layer sweet ingredients in a tall glass (start with beans, jackfruit, nata, kaong, banana).</li>
            <li>Fill with shaved ice.</li>
            <li>Pour evaporated milk over the ice.</li>
            <li>Top with leche flan, ube, and optional ice cream. Mix before eating!</li>
          </ol>
        `
      },
      {
        name: "Leche Flan",
        image: "leche-flan.jpg",
        description: "Rich and creamy caramel custard dessert.",
        id: "lecheFlanRecipe",
        details: `
          <p><strong>Intro:</strong> Leche Flan is a creamy Filipino custard made with egg yolks, milk, and caramelized sugar.</p>
          <h4>Ingredients:</h4>
          <ul>
            <li>10 egg yolks</li>
            <li>1 can (14 oz) condensed milk</li>
            <li>1 can (12 oz) evaporated milk</li>
            <li>1 tsp vanilla extract</li>
            <li>1 cup sugar (for caramel)</li>
          </ul>
          <h4>Instructions:</h4>
          <ol>
            <li>In a pan, melt sugar over low heat until golden brown and caramelized. Pour into llanera or baking dish.</li>
            <li>Mix egg yolks, condensed milk, evaporated milk, and vanilla. Strain to remove bubbles.</li>
            <li>Pour mixture into caramel-lined mold. Cover with foil.</li>
            <li>Steam for 30–40 minutes or bake in a water bath at 350°F (175°C) until set.</li>
            <li>Cool, then refrigerate. Invert onto a plate to serve.</li>
          </ol>
        `
      },
      {
        name: "Bibingka",
        image: "bibingka.jpg",
        description: "Soft rice cake traditionally baked in clay pots with banana leaves.",
        id: "bibingkaRecipe",
        details: `
          <p><strong>Intro:</strong> Bibingka is a beloved Filipino rice cake made with rice flour and coconut milk, often topped with cheese and salted egg.</p>
          <h4>Ingredients:</h4>
          <ul>
            <li>1 cup rice flour</li>
            <li>1/2 cup sugar</li>
            <li>1 cup coconut milk</li>
            <li>1 tsp baking powder</li>
            <li>1/4 cup butter, melted</li>
            <li>2 eggs</li>
            <li>Banana leaves (optional)</li>
            <li>Salted egg slices and grated cheese (for topping)</li>
          </ul>
          <h4>Instructions:</h4>
          <ol>
            <li>Preheat oven to 350°F (175°C). Line baking pan with banana leaves if available.</li>
            <li>Mix rice flour, sugar, baking powder, eggs, coconut milk, and butter into a smooth batter.</li>
            <li>Pour into pan, top with salted egg and cheese.</li>
            <li>Bake for 25–30 minutes or until a toothpick comes out clean.</li>
          </ol>
        `
      }
    ];
  
    dishes.innerHTML = dessertItems.map(item => `
      <div class="recipe-card">
        <img src="${item.image}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <button class="toggle-btn" onclick="toggleRecipe('${item.id}')">View Recipe</button>
        <div class="recipe-details" id="${item.id}" style="display: none; margin-top: 10px;">
          ${item.details}
        </div>
      </div>
    `).join('');
  
    dishes.style.display = 'flex';
  }
  
  
  const recipes = {
  };
  
  const dishContainer = document.getElementById("dishContainer");
  const dishButtons = document.getElementById("dishButtons");
  const dishTitle = document.getElementById("dishTitle");
  const recipeBox = document.getElementById("recipeBox");
  
  function createDishButtons(category) {
    const dishes = recipes[category];
    dishTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1) + " Dishes";
    dishButtons.innerHTML = "";
  
    dishes.forEach(dish => {
      const btn = document.createElement("button");
      btn.className = "dish-btn";
      btn.innerHTML = `<img src="${dish.img}" alt="${dish.name}"><span>${dish.name}</span>`;
      btn.onclick = () => showRecipe(category, dish.id);
      dishButtons.appendChild(btn);
    });
  
    dishContainer.style.display = "block";
    recipeBox.style.display = "none";
  }
  
  function showRecipe(category, dishId) {
    const dish = recipes[category].find(d => d.id === dishId);
    recipeBox.innerHTML = `
      <h4>${dish.name}</h4>
      <strong>Ingredients:</strong>
      <ul>${dish.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
      <strong>Procedure:</strong>
      <ul>${dish.procedure.map(p => `<li>${p}</li>`).join("")}</ul>
    `;
    recipeBox.style.display = "block";
  }
  
  Object.keys(recipes).forEach(category => {
    const catElement = document.getElementById(`${category}Category`);
    if (catElement) {
      catElement.addEventListener("click", e => {
        e.preventDefault();
        createDishButtons(category);
      });
    }
  });
  

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

  function toggleRecipe(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'block' : 'none';
  }
  
  const allRecipes = [

    {
      name: "Tapsilog",
      image: "tapsilog.jpg",
      description: "A classic Filipino breakfast with tapa (cured beef), sinangag (garlic rice), and itlog (egg).",
      id: "tapsilogRecipe",
      category: "Breakfast",
      details: `...` 
    },
    {
      name: "Tocilog",
      image: "tocilog.jpg",
      description: "Sweet cured pork (tocino) served with garlic rice and a sunny-side-up egg.",
      id: "tocilogRecipe",
      category: "Breakfast",
      details: `...`
    },

  ];
  