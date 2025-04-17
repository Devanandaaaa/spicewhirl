// Complete Indian Recipe Data
const recipes = [
  {
      id: 1,
      title: "Butter Chicken",
      description: "Creamy tomato-based curry with tender chicken pieces",
      image: "https://t3.ftcdn.net/jpg/06/01/41/68/360_F_601416862_AfYdeefqT1kGqWTx1DZCsJZVzYIDFzPR.jpg",
      time: "50 mins",
      servings: 4,
      category: "Non-Vegetarian",
      ingredients: [
          "500g chicken thighs (boneless)",
          "1 cup yogurt",
          "2 tbsp butter",
          "1 onion (pureed)",
          "1 tbsp ginger-garlic paste",
          "1 cup tomato puree",
          "1 tsp turmeric",
          "2 tsp garam masala",
          "1 tsp chili powder",
          "1/2 cup heavy cream",
          "Salt to taste"
      ],
      instructions: [
          "Marinate chicken in yogurt and spices for 30 mins",
          "Grill chicken until slightly charred",
          "In a pan, melt butter and sauté onion puree",
          "Add ginger-garlic paste and cook for 2 mins",
          "Add tomato puree and spices, cook for 10 mins",
          "Add grilled chicken and simmer for 15 mins",
          "Finish with heavy cream and serve hot"
      ],
      nutrition: {
          calories: 420,
          protein: "32g",
          carbs: "12g",
          fat: "28g",
          fiber: "2g"
      },
      comments: [
          {
              author: "Rahul",
              text: "The best butter chicken recipe I've tried!"
          }
      ]
  },
  {
      id: 2,
      title: "Palak Paneer",
      description: "Creamy spinach curry with Indian cottage cheese",
      image: "https://s3.amazonaws.com/images.chefinyou.com/main/opos-palak-paneer-recipe/main-img4.JPG",
      time: "40 mins",
      servings: 4,
      category: "Vegetarian",
      ingredients: [
          "250g paneer (cubed)",
          "500g spinach (blanched & pureed)",
          "1 onion (finely chopped)",
          "2 tomatoes (pureed)",
          "1 tbsp ginger-garlic paste",
          "1 tsp cumin seeds",
          "1 tsp coriander powder",
          "1/2 tsp turmeric",
          "1 tsp garam masala",
          "2 tbsp cream",
          "Salt to taste"
      ],
      instructions: [
          "Blanch spinach in boiling water for 2 mins, then puree",
          "Heat oil, add cumin seeds and let them splutter",
          "Add onions and sauté until golden",
          "Add ginger-garlic paste and cook for 1 min",
          "Add tomato puree and spices, cook for 5 mins",
          "Add spinach puree and simmer for 10 mins",
          "Add paneer cubes and cook for 5 more mins",
          "Finish with cream and serve with naan"
      ],
      nutrition: {
          calories: 280,
          protein: "14g",
          carbs: "10g",
          fat: "22g",
          fiber: "4g"
      },
      comments: []
  },
  {
      id: 3,
      title: "Masala Dosa",
      description: "Crispy rice crepe with spiced potato filling",
      image: "https://images.herzindagi.info/image/2024/May/easy-mysore-masala-dosa.jpg",
      time: "24 hrs (fermentation) + 30 mins",
      servings: 6,
      category: "Vegan",
      ingredients: [
          "2 cups rice",
          "1/2 cup urad dal",
          "1/2 tsp fenugreek seeds",
          "Salt to taste",
          "Oil for cooking",
          "For filling:",
          "3 potatoes (boiled & mashed)",
          "1 onion (sliced)",
          "1 tsp mustard seeds",
          "1 tsp turmeric",
          "2 green chilies",
          "Curry leaves"
      ],
      instructions: [
          "Soak rice and dal separately for 6 hours",
          "Grind to smooth batter and ferment overnight",
          "For filling: heat oil, add mustard seeds",
          "Add onions, chilies and curry leaves",
          "Add spices and mashed potatoes, cook for 5 mins",
          "Spread dosa batter on hot griddle",
          "Add potato filling and fold when crispy",
          "Serve with coconut chutney and sambar"
      ],
      nutrition: {
          calories: 320,
          protein: "8g",
          carbs: "58g",
          fat: "6g",
          fiber: "5g"
      },
      comments: []
  },
  {
      id: 4,
      title: "Chole Bhature",
      description: "Spiced chickpeas with fried bread",
      image: "https://amritsr.com/wp-content/uploads/2021/04/cholle-bhature.jpeg",
      time: "8 hrs (soaking) + 1 hr",
      servings: 4,
      category: "Vegetarian",
      ingredients: [
          "2 cups chickpeas (soaked overnight)",
          "2 tea bags (for color)",
          "1 onion (chopped)",
          "2 tomatoes (pureed)",
          "1 tbsp chole masala",
          "1 tsp amchur powder",
          "1 tsp ginger-garlic paste",
          "For bhature:",
          "2 cups maida (all-purpose flour)",
          "1/2 cup yogurt",
          "1 tsp sugar",
          "Oil for frying"
      ],
      instructions: [
          "Pressure cook chickpeas with tea bags for 5 whistles",
          "Heat oil, sauté onions until golden",
          "Add ginger-garlic paste and cook for 1 min",
          "Add tomato puree and spices, cook for 5 mins",
          "Add cooked chickpeas and simmer for 15 mins",
          "For bhature: knead dough with all ingredients",
          "Rest for 2 hours, then roll and deep fry",
          "Serve hot with chopped onions and lemon"
      ],
      nutrition: {
          calories: 550,
          protein: "18g",
          carbs: "78g",
          fat: "22g",
          fiber: "12g"
      },
      comments: []
  },
  {
      id: 5,
      title: "Biryani",
      description: "Fragrant rice dish with layers of meat and spices",
      image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe-500x500.jpg",
      time: "1.5 hrs",
      servings: 6,
      category: "Non-Vegetarian",
      ingredients: [
          "500g basmati rice",
          "750g chicken (with bone)",
          "2 onions (sliced)",
          "1 cup yogurt",
          "2 tbsp ginger-garlic paste",
          "1 tsp turmeric",
          "2 tbsp biryani masala",
          "1/2 cup mint leaves",
          "1/2 cup coriander leaves",
          "Saffron strands in milk",
          "Ghee for cooking"
      ],
      instructions: [
          "Marinate chicken in yogurt and spices for 1 hour",
          "Parboil rice with whole spices until 70% cooked",
          "In heavy pot, layer marinated chicken",
          "Add layer of partially cooked rice",
          "Top with fried onions, herbs and saffron milk",
          "Seal with dough or foil, cook on low heat for 30 mins",
          "Let rest for 10 mins before serving with raita"
      ],
      nutrition: {
          calories: 620,
          protein: "38g",
          carbs: "72g",
          fat: "24g",
          fiber: "3g"
      },
      comments: []
  },
  {
    
      id: 6,
      title: "Filter Coffee",
      description: "Aromatic South Indian coffee brewed in a traditional filter and mixed with milk",
      image: "https://b.zmtcdn.com/data/pictures/6/21487046/c285405af7205beeaa2dce9252314d7a_featured_v2.jpg",
      time: "15 mins",
      servings: 2,
      category: "Vegetarian",
      ingredients: [
          "3 tbsp South Indian coffee powder",
          "1/2 cup water",
          "1 cup full-fat milk",
          "Sugar to taste"
      ],
      instructions: [
          "Add coffee powder to the upper chamber of a coffee filter",
          "Pour hot water and allow the decoction to drip for 10-12 mins",
          "Boil milk and add sugar to taste",
          "Mix hot milk and decoction in a 1:1 ratio (or adjust to preference)",
          "Pour back and forth between two tumblers to froth and serve hot"
      ],
      nutrition: {
          calories: 120,
          protein: "4g",
          carbs: "10g",
          fat: "7g",
          fiber: "0g"
      },
      comments: []
  },
  {
    id: 7,
    title: "South Indian Chicken Curry",
    description: "Spicy and flavorful chicken curry with coconut and curry leaves",
    image: "https://t4.ftcdn.net/jpg/04/35/23/95/360_F_435239569_iTa3kLtV6PtlOBchUV4w7J1Tm0oSCx1l.jpg",
    time: "1 hr",
    servings: 4,
    category: "Non-Vegetarian",
    ingredients: [
        "500g chicken (bone-in pieces)",
        "2 onions (finely chopped)",
        "2 tomatoes (pureed)",
        "1/2 cup grated coconut (fresh or frozen)",
        "2 tbsp oil",
        "1 tsp mustard seeds",
        "1 sprig curry leaves",
        "1 tbsp ginger-garlic paste",
        "1 tsp red chili powder",
        "1 tsp coriander powder",
        "1/2 tsp turmeric",
        "1 tsp garam masala",
        "Salt to taste",
        "Coriander leaves for garnish"
    ],
    instructions: [
        "Heat oil in a pan, add mustard seeds and curry leaves",
        "Add onions and sauté until golden brown",
        "Add ginger-garlic paste and fry for 1 minute",
        "Add tomato puree and cook until oil separates",
        "Add chili powder, turmeric, coriander powder and salt",
        "Add chicken pieces and coat well with masala",
        "Roast grated coconut separately and grind to a paste",
        "Add the coconut paste to the curry with water to adjust consistency",
        "Cover and cook for 25–30 mins until chicken is tender",
        "Sprinkle garam masala and garnish with coriander leaves before serving"
    ],
    nutrition: {
        calories: 480,
        protein: "34g",
        carbs: "10g",
        fat: "32g",
        fiber: "4g"
    },
    comments: []
},
{
  id: 8,
  title: "Kerala Fish Curry",
  description: "Tangy and spicy fish curry cooked with kokum and coconut oil",
  image: "https://img.freepik.com/premium-photo/fish-curry-seer-fish-curry-traditional-indian-fish-curry-kerala-special-dish-arranged-white-bowl-garnished-with-curry-leaves-white-background_527904-2012.jpg",
  time: "45 mins",
  servings: 4,
  category: "Non-Vegetarian",
  ingredients: [
      "500g fish (seer fish or pomfret, cut into pieces)",
      "2 tbsp coconut oil",
      "1 tsp mustard seeds",
      "1 sprig curry leaves",
      "1 onion (sliced)",
      "1 tbsp ginger-garlic paste",
      "2 green chilies (slit)",
      "2 tsp red chili powder",
      "1 tsp turmeric",
      "1 tbsp coriander powder",
      "3-4 pieces kokum (or 1 tbsp tamarind pulp)",
      "1.5 cups water",
      "Salt to taste"
  ],
  instructions: [
      "Heat coconut oil in a clay or heavy-bottomed pot",
      "Add mustard seeds, let them splutter, then add curry leaves",
      "Add sliced onions and green chilies, sauté until translucent",
      "Add ginger-garlic paste and cook for 2 mins",
      "Add chili powder, turmeric, and coriander powder, mix well",
      "Add kokum and water, bring to a boil",
      "Add fish pieces gently, cover and simmer for 15–20 mins",
      "Once fish is cooked and gravy thickens, switch off heat",
      "Let the curry rest for 10–15 mins before serving to enhance flavor"
  ],
  nutrition: {
      calories: 350,
      protein: "32g",
      carbs: "6g",
      fat: "22g",
      fiber: "2g"
  },
  comments: []
}

  
  
  
];

// DOM Elements
const recipesContainer = document.getElementById('recipes-container');
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const yearSpan = document.getElementById('year');

// Display recipes on homepage
function displayRecipes(recipesToDisplay) {
  recipesContainer.innerHTML = '';
  
  if (recipesToDisplay.length === 0) {
      recipesContainer.innerHTML = '<p class="no-results">No recipes found. Try a different search.</p>';
      return;
  }

  recipesToDisplay.forEach(recipe => {
      const recipeCard = document.createElement('div');
      recipeCard.className = 'recipe-card';
      recipeCard.innerHTML = `
          <img src="${recipe.image}" alt="${recipe.title}" class="recipe-img">
          <div class="recipe-info">
              <h2>${recipe.title}</h2>
              <p>${recipe.description}</p>
              <div class="time">
                  <i class="far fa-clock"></i> ${recipe.time}
                  <span class="category ${recipe.category.toLowerCase()}">${recipe.category}</span>
              </div>
          </div>
      `;
      
      recipeCard.addEventListener('click', () => {
          displayRecipeDetail(recipe.id);
      });
      
      recipesContainer.appendChild(recipeCard);
  });
}

// Display single recipe detail
function displayRecipeDetail(recipeId) {
  const recipe = recipes.find(r => r.id === recipeId);
  if (!recipe) return;

  document.body.innerHTML = `
      <header class="header">
          <div class="container">
              <h1 class="logo">Spice<span>Whirl</span></h1>
          </div>
      </header>

      <main class="main">
          <div class="recipe-detail">
              <img src="${recipe.image}" alt="${recipe.title}" class="detail-img">
              <h1>${recipe.title}</h1>
              <div class="recipe-meta">
                  <span><i class="far fa-clock"></i> ${recipe.time}</span>
                  <span><i class="fas fa-utensils"></i> ${recipe.servings} servings</span>
                  <span class="category ${recipe.category.toLowerCase()}">${recipe.category}</span>
              </div>

              <h2 class="section-title"><i class="fas fa-utensils"></i> Ingredients</h2>
              <ul class="ingredients">
                  ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
              </ul>

              <h2 class="section-title"><i class="fas fa-list-ol"></i> Instructions</h2>
              <ol class="instructions">
                  ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
              </ol>

              <h2 class="section-title"><i class="fas fa-chart-pie"></i> Nutritional Information</h2>
              <div class="nutrition-grid">
                  <div class="nutrition-item">
                      <span class="nutrition-value">${recipe.nutrition.calories}</span>
                      <span class="nutrition-label">Calories</span>
                  </div>
                  <div class="nutrition-item">
                      <span class="nutrition-value">${recipe.nutrition.protein}</span>
                      <span class="nutrition-label">Protein</span>
                  </div>
                  <div class="nutrition-item">
                      <span class="nutrition-value">${recipe.nutrition.carbs}</span>
                      <span class="nutrition-label">Carbs</span>
                  </div>
                  <div class="nutrition-item">
                      <span class="nutrition-value">${recipe.nutrition.fat}</span>
                      <span class="nutrition-label">Fat</span>
                  </div>
                  <div class="nutrition-item">
                      <span class="nutrition-value">${recipe.nutrition.fiber}</span>
                      <span class="nutrition-label">Fiber</span>
                  </div>
              </div>

              <h2 class="section-title"><i class="fas fa-comments"></i> Comments</h2>
              <div class="comments">
                  ${recipe.comments.length > 0 ? 
                      recipe.comments.map(comment => `
                          <div class="comment">
                              <p>"${comment.text}"</p>
                              <small>- ${comment.author}</small>
                          </div>
                      `).join('') : 
                      '<p>No comments yet. Be the first to review!</p>'
                  }
                  <form class="comment-form">
                      <textarea placeholder="Leave your review..." required></textarea>
                      <button type="submit"><i class="fas fa-paper-plane"></i> Post Comment</button>
                  </form>
              </div>

              <a href="index.html" class="back-btn"><i class="fas fa-arrow-left"></i> Back to Recipes</a>
          </div>
      </main>

      <footer class="footer">
          <div class="container">
              <p>&copy; ${new Date().getFullYear()} SpiceWhirl. All rights reserved.</p>
          </div>
      </footer>
  `;

  // Add comment functionality
  const commentForm = document.querySelector('.comment-form');
  if (commentForm) {
      commentForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const textarea = commentForm.querySelector('textarea');
          if (textarea.value.trim()) {
              recipe.comments.push({
                  author: "Anonymous",
                  text: textarea.value.trim()
              });
              displayRecipeDetail(recipeId);
          }
      });
  }
}

// Search functionality
function setupSearch() {
  function performSearch() {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredRecipes = recipes.filter(recipe => 
          recipe.title.toLowerCase().includes(searchTerm) || 
          recipe.description.toLowerCase().includes(searchTerm)
      );
      displayRecipes(filteredRecipes);
  }

  searchInput.addEventListener('input', performSearch);
  searchBtn.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') performSearch();
  });
}

// Initialize the page
function init() {
  yearSpan.textContent = new Date().getFullYear();
  displayRecipes(recipes);
  setupSearch();
}

document.addEventListener('DOMContentLoaded', init);
  