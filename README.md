<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recipe Selector</title>
    <link rel="stylesheet" href="style.css">

</head>
<body>
<h1>Dank Ass Meal Planner</h1>
<div id="meal-selector">
    <label for="breakfast">Choose Breakfast:</label>
    <select id="breakfast" onchange="updateMeals('breakfast')"></select>

    <select id="breakfast" onchange="updateMeals('breakfast')"></select>

    <select id="breakfast" onchange="updateMeals('breakfast')"></select>
<h2> <label for="lunch">Choose Lunch:</label>
    <select id="lunch" onchange="updateMeals('lunch')"></select>
    <select id="lunch" onchange="updateMeals('lunch')"></select>
    <select id="lunch" onchange="updateMeals('lunch')"></select>
</h2>

<h3>
    <label for="dinner">Choose Dinner:</label>
    <select id="dinner" onchange="updateMeals('dinner')"></select>
    <select id="dinner" onchange="updateMeals('dinner')"></select>
    <select id="dinner" onchange="updateMeals('dinner')"></select>
</h3>

</div>

<button onclick="generateGroceryList()">Generate Grocery List</button>
<h4>Grocery List</h4>
<ul id="grocery-list"></ul>

<script src="app.js"></script>
</body>
</html>

