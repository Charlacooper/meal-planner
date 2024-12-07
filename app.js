let recipes = [];

// Fetch the recipe data from the external JSON file
fetch('recipes.json')
  .then(response => response.json())
  .then(data => {
    recipes = data;  // Store the fetched recipes in the 'recipes' array
    initializeMealPlanner();  // Initialize the meal planner after loading the data
  })
  .catch(error => console.error('Error loading recipes:', error));

// Populate dropdown menus for breakfast, lunch, and dinner
function populateDropdown(mealType) {
  const dropdown = document.getElementById(mealType);
  const options = recipes.filter(recipe => recipe.mealType === mealType)
    .map(recipe => `<option value="${recipe.name}">${recipe.name}</option>`);
  dropdown.innerHTML = `<option value="">Select ${mealType}</option>` + options.join("");
}

// Update selected meals and display shared ingredients
let selectedMeals = { breakfast: null, lunch: null, dinner: null };

function updateMeals(mealType) {
  const dropdown = document.getElementById(mealType);
  const selectedName = dropdown.value;
  selectedMeals[mealType] = recipes.find(recipe => recipe.name === selectedName) || null;
  updateAnnotations();
}

function updateAnnotations() {
  const selectedIngredients = Object.values(selectedMeals)
    .filter(meal => meal)
    .flatMap(meal => meal.ingredients);

  ["lunch", "dinner"].forEach(mealType => {
    const dropdown = document.getElementById(mealType);
    Array.from(dropdown.options).forEach(option => {
      const recipe = recipes.find(r => r.name === option.value);
      if (recipe && recipe.ingredients.some(ingredient => selectedIngredients.includes(ingredient))) {
        option.textContent = `${option.value} (shared ingredients)`;
      } else if (recipe) {
        option.textContent = recipe.name;
      }
    });
  });
 }

function generateGroceryList() {
  const groceryList = document.getElementById("grocery-list");
  const allIngredients = Object.values(selectedMeals)
    .filter(meal => meal)
    .flatMap(meal => meal.ingredients);

  const uniqueIngredients = [...new Set(allIngredients)];
  groceryList.innerHTML = uniqueIngredients.map(item => `<li>${item}</li>`).join("");
}

// Initialize dropdowns when recipes are loaded
function initializeMealPlanner() {
  ["breakfast", "lunch", "dinner"].forEach(mealType => populateDropdown(mealType));
}
