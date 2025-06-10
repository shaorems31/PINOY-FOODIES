const recipes = {
  chicken: [
    {
      id: 'adobo',
      name: 'Chicken Adobo',
      img: 'adobo.jpg',
      ingredients: [
        '1 kg chicken', '1/2 cup soy sauce', '1/2 cup vinegar',
        '6 cloves garlic, crushed', '1 bay leaf', 'Salt and pepper to taste'
      ],
      procedure: [
        'Combine chicken, soy sauce, garlic, and bay leaf in a pot. Marinate for 30 minutes.',
        'Bring to a boil, add vinegar, and simmer for 40 minutes.',
        'Adjust seasoning. Serve hot with rice.'
      ]
    },
    {
      id: 'afritada',
      name: 'Chicken Afritada',
      img: 'afritada.jpg',
      ingredients: [
        '1 kg chicken', '2 potatoes, cubed', '1 carrot, sliced',
        '1 bell pepper, chopped', '1 cup tomato sauce',
        '1 onion, chopped', '2 cloves garlic, minced'
      ],
      procedure: [
        'Sauté garlic and onion, then add chicken until lightly browned.',
        'Add tomato sauce, simmer for 20 minutes.',
        'Add vegetables, simmer until tender. Serve warm.'
      ]
    }
  ],
  pork: [
    {
      id: 'menudo',
      name: 'Pork Menudo',
      img: 'menudo.jpg',
      ingredients: [
        '500g pork', '1/2 cup tomato sauce', '1 potato, cubed',
        '1 carrot, cubed', '1 red bell pepper', '1 onion', 'Garlic'
      ],
      procedure: [
        'Sauté garlic and onion, add pork and cook until brown.',
        'Add tomato sauce, carrots, potatoes, simmer until cooked.',
        'Add bell pepper, cook 5 more minutes.'
      ]
    },
    {
      id: 'tocino',
      name: 'Pork Tocino',
      img: 'tocino.jpg',
      ingredients: [
        '500g pork', '1/2 cup pineapple juice', '3 tbsp sugar',
        '2 tbsp soy sauce', 'Salt, pepper, garlic'
      ],
      procedure: [
        'Marinate pork in mixture overnight.',
        'Cook in pan until caramelized.',
        'Serve with garlic rice.'
      ]
    }
  ],
  beef: [
    {
      id: 'caldereta',
      name: 'Beef Caldereta',
      img: 'caldereta.jpg',
      ingredients: [
        '1 kg beef', '1 cup liver spread', '2 potatoes', '1 carrot',
        '1 bell pepper', '1 cup tomato sauce', 'Garlic and onion'
      ],
      procedure: [
        'Sauté garlic and onion, add beef until brown.',
        'Add tomato sauce and liver spread, simmer until tender.',
        'Add vegetables, simmer until cooked.'
      ]
    },
    {
      id: 'tapa',
      name: 'Beef Tapa',
      img: 'tapa.jpg',
      ingredients: [
        '500g beef', '1/4 cup soy sauce', '3 tbsp vinegar',
        '3 tbsp sugar', 'Garlic, pepper'
      ],
      procedure: [
        'Marinate beef overnight.',
        'Fry until cooked and slightly crisp.',
        'Serve with egg and rice.'
      ]
    }
  ],
  fish: [
    {
      id: 'paksiw',
      name: 'Paksiw na Isda',
      img: 'paksiw.jpg',
      ingredients: [
        'Fish of choice', '1/2 cup vinegar', 'Garlic, onion, ginger',
        'Salt, pepper, eggplant'
      ],
      procedure: [
        'Combine ingredients in pot.',
        'Simmer until fish is cooked and sauce thickens.'
      ]
    },
    {
      id: 'escabeche',
      name: 'Fish Escabeche',
      img: 'escabeche.jpg',
      ingredients: [
        'Fried fish', '1/2 cup vinegar', '1/2 cup sugar',
        'Bell pepper, onion, garlic'
      ],
      procedure: [
        'Fry fish and set aside.',
        'Sauté vegetables, add vinegar and sugar.',
        'Pour over fish and serve.'
      ]
    }
  ],
  dessert: [
    {
      id: 'lecheflan',
      name: 'Leche Flan',
      img: 'leche.jpg',
      ingredients: [
        '10 egg yolks', '1 can condensed milk', '1 can evaporated milk', '1 tsp vanilla', '1/2 cup sugar (for caramel)'
      ],
      procedure: [
        'Caramelize sugar in llanera.',
        'Mix other ingredients and pour into llanera.',
        'Steam for 30-40 minutes.'
      ]
    },
    {
      id: 'halo',
      name: 'Halo-Halo',
      img: 'halohalo.jpg',
      ingredients: [
        'Crushed ice', 'Leche flan', 'Sweetened banana, beans, nata', 'Evaporated milk', 'Ube ice cream'
      ],
      procedure: [
        'Layer ingredients in a glass.',
        'Top with ice, milk, flan, and ice cream.',
        'Serve chilled.'
      ]
    }
  ],
  vegetable: [
    {
      id: 'pinakbet',
      name: 'Pinakbet',
      img: 'pakbet.jpg',
      ingredients: [
        'Eggplant', 'okra', 'bitter melon', 'squash', 'string beans','tomatoes','shrimp paste'
      ],
      procedure: [
        'Sauté garlic, onion, tomato.',
        'Add vegetables and bagoong.',
        'Simmer until vegetables are tender.'
      ]
    },
    {
      id: 'laing',
      name: 'Laing',
      img: 'laing.jpg',
      ingredients: [
        'Dried taro leaves', 'Coconut milk', 'Bagoong', 'Ginger, chili'
      ],
      procedure: [
        'Simmer coconut milk with seasonings.',
        'Add taro leaves and cook until tender.'
      ]
    }
  ],
  pasta: [
    {
      id: 'spaghetti',
      name: 'Filipino Spaghetti',
      img: 'spag.jpg',
      ingredients: [
        'Spaghetti pasta', 'Sweet-style sauce', 'Hotdog, ground pork', 'Cheese'
      ],
      procedure: [
        'Cook pasta. Sauté meat and hotdog.',
        'Add sauce and mix with pasta.',
        'Top with cheese.'
      ]
    },
    {
      id: 'carbonara',
      name: 'Pinoy Carbonara',
      img: 'carbo.jpg',
      ingredients: [
        'Fettuccine pasta', 'Cream, cheese, bacon', 'Garlic, onion'
      ],
      procedure: [
        'Cook pasta. Sauté bacon, garlic, onion.',
        'Add cream and cheese, mix with pasta.'
      ]
    }
  ],
  health: [
    {
      id: 'salad',
      name: 'Mango Salad',
      img: 'salad.jpg',
      ingredients: [
        'Green mango', 'Tomato, onion', 'Bagoong or vinaigrette'
      ],
      procedure: [
        'Mix all ingredients and serve fresh.'
      ]
    },
    {
      id: 'malunggay',
      name: 'Malunggay Soup',
      img: 'soup.jpg',
      ingredients: [
        'Malunggay leaves', 'Garlic, onion, ginger', 'Chicken or fish broth'
      ],
      procedure: [
        'Boil broth and add ingredients.',
        'Simmer until leaves are soft.'
      ]
    }
  ]
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
  catElement.addEventListener("click", e => {
    e.preventDefault();
    createDishButtons(category);
  });
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
