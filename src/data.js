// =============================================================
// Supergreen menu data — source: Nutritional PDF (Jan 2026)
// Update this file when the official menu changes.
// Calorie values for Signature Bowls exclude base & dressing per the menu disclaimer.
// =============================================================

export const MINIMUMS = { bases: 2, toppings: 4, proteins: 1, dressings: 1 };

export const DATA = {
  signatureBowls: [
    { name: 'Grilled Salmon Bowl', serving: 400, cal: 487, carbs: 18, fat: 28, protein: 38, allergens: ['Gluten','Egg','Fish','Sesame','Soy'], emoji: '🐟' },
    { name: 'Yakiniku Beef Bowl', serving: 385, cal: 599, carbs: 25, fat: 33, protein: 49, allergens: ['Gluten','Egg','Sesame','Soy','Nuts','Allium'], emoji: '🥩' },
    { name: 'Teriyaki Chicken Bowl', serving: 455, cal: 381, carbs: 29, fat: 16, protein: 30, allergens: ['Gluten','Egg','Soy','Allium'], emoji: '🍗' },
    { name: 'Lean Chicken Bowl', serving: 420, cal: 389, carbs: 13, fat: 17, protein: 46, allergens: ['Gluten','Egg','Soy','Allium'], emoji: '🥗' },
    { name: 'Mala Prawn Bowl', serving: 340, cal: 322, carbs: 36, fat: 9, protein: 24, allergens: ['Gluten','Egg','Sesame','Shellfish','Soy','Allium'], emoji: '🦐' },
    { name: 'Smoked Duck Bowl', serving: 395, cal: 404, carbs: 17, fat: 24, protein: 30, allergens: ['Gluten','Egg','Sesame','Shellfish','Soy','Allium'], emoji: '🦆' },
    { name: 'Vegan Power Bowl', serving: 370, cal: 354, carbs: 53, fat: 9, protein: 15, allergens: ['Allium'], emoji: '🌿' },
  ],
  bases: [
    { name: 'Romaine Lettuce', serving: 45, cal: 8, carbs: 1, fat: 0, protein: 1, allergens: [] },
    { name: 'Brown Rice', serving: 130, cal: 250, carbs: 53, fat: 2, protein: 5, allergens: [] },
    { name: 'Fusilli Pasta', serving: 100, cal: 179, carbs: 37, fat: 1, protein: 6, allergens: ['Gluten'] },
    { name: 'Soba Noodle', serving: 100, cal: 117, carbs: 23, fat: 1, protein: 5, allergens: ['Gluten'] },
  ],
  proteins: [
    { name: 'Sichuan Mala Prawn', serving: 80, cal: 111, carbs: 2, fat: 3, protein: 19, allergens: ['Gluten','Sesame','Shellfish','Soy'], emoji: '🦐' },
    { name: 'Teriyaki Chicken', serving: 100, cal: 111, carbs: 5, fat: 2, protein: 18, allergens: ['Gluten','Soy'], emoji: '🍗' },
    { name: 'Smoked Duck', serving: 80, cal: 158, carbs: 2, fat: 10, protein: 15, allergens: ['Gluten'], emoji: '🦆' },
    { name: 'Rosemary Sous-Vide Chicken', serving: 80, cal: 106, carbs: 3, fat: 1, protein: 22, allergens: ['Allium'], emoji: '🍗' },
    { name: 'Yakiniku Beef', serving: 80, cal: 178, carbs: 0, fat: 10, protein: 22, allergens: ['Gluten','Soy','Allium'], emoji: '🥩' },
    { name: 'Oven-Baked Salmon', serving: 100, cal: 210, carbs: 0, fat: 13, protein: 23, allergens: ['Fish'], emoji: '🐟' },
    { name: 'Black Pepper Chicken', serving: 100, cal: 282, carbs: 12, fat: 15, protein: 26, allergens: ['Gluten','Soy'], emoji: '🍗' },
  ],
  hotToppings: [
    { name: 'Roasted Baby Corn', serving: 60, cal: 30, carbs: 3, fat: 2, protein: 0, allergens: [] },
    { name: 'Roasted Sweet Potato', serving: 80, cal: 95, carbs: 17, fat: 3, protein: 0, allergens: [] },
    { name: 'Chickpea Relish', serving: 60, cal: 54, carbs: 2, fat: 3, protein: 8, allergens: ['Allium'] },
    { name: 'Oven-Baked Broccoli', serving: 90, cal: 64, carbs: 3, fat: 5, protein: 3, allergens: [] },
    { name: 'Sesame Tofu', serving: 90, cal: 177, carbs: 7, fat: 11, protein: 12, allergens: ['Gluten','Egg','Sesame','Soy'] },
    { name: 'Roasted Pumpkin', serving: 80, cal: 63, carbs: 6, fat: 4, protein: 1, allergens: [] },
  ],
  coldToppings: [
    { name: 'Achar', serving: 55, cal: 85, carbs: 13, fat: 4, protein: 2, allergens: ['Sesame','Soy','Nuts','Allium'] },
    { name: 'Jalapeños', serving: 40, cal: 12, carbs: 3, fat: 0, protein: 0, allergens: ['Allium'] },
    { name: 'Japanese Cucumber', serving: 45, cal: 10, carbs: 2, fat: 0, protein: 1, allergens: [] },
    { name: 'Sweet Corn', serving: 45, cal: 33, carbs: 6, fat: 1, protein: 1, allergens: [] },
    { name: 'Edamame', serving: 45, cal: 58, carbs: 4, fat: 2, protein: 5, allergens: [] },
    { name: 'Kimchi', serving: 50, cal: 13, carbs: 2, fat: 0, protein: 1, allergens: ['Gluten','Shellfish','Allium'] },
    { name: 'Japanese Seaweed', serving: 50, cal: 32, carbs: 4, fat: 1, protein: 0, allergens: ['Gluten'] },
    { name: 'Cherry Tomato', serving: 55, cal: 17, carbs: 3, fat: 0, protein: 1, allergens: [] },
    { name: 'Raisin', serving: 25, cal: 87, carbs: 21, fat: 0, protein: 1, allergens: [] },
    { name: 'Purple Cabbage', serving: 25, cal: 11, carbs: 2, fat: 0, protein: 0, allergens: [] },
    { name: 'Hard Boiled Egg', serving: 55, cal: 85, carbs: 0, fat: 6, protein: 7, allergens: ['Egg'] },
    { name: 'Sous Vide Egg', serving: 55, cal: 85, carbs: 0, fat: 6, protein: 7, allergens: ['Egg'] },
  ],
  dressings: [
    { name: 'Mint Jalapeño', serving: 40, cal: 132, carbs: 2, fat: 14, protein: 0, allergens: ['Allium'] },
    { name: 'Japanese Roasted Sesame', serving: 40, cal: 136, carbs: 2, fat: 14, protein: 0, allergens: ['Gluten','Egg','Sesame','Soy'] },
    { name: 'Honey Mustard', serving: 40, cal: 100, carbs: 10, fat: 7, protein: 1, allergens: ['Gluten','Egg','Soy'] },
    { name: 'Ginger Soy', serving: 40, cal: 135, carbs: 6, fat: 12, protein: 0, allergens: ['Gluten','Soy','Allium'] },
    { name: 'Honey Lime', serving: 40, cal: 171, carbs: 11, fat: 14, protein: 0, allergens: ['Gluten'] },
    { name: 'Spicy Mayo', serving: 40, cal: 197, carbs: 6, fat: 19, protein: 0, allergens: ['Gluten','Egg','Soy','Allium'] },
    { name: 'Balsamic Vinaigrette', serving: 40, cal: 204, carbs: 6, fat: 20, protein: 0, allergens: [] },
    { name: 'Extra Virgin Olive Oil', serving: 40, cal: 360, carbs: 0, fat: 40, protein: 0, allergens: [] },
  ],
};
