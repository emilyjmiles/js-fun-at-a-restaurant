const nameMenuItem = (type) => {
  return `Delicious ${type}`;
};

const createMenuItem = (name, price, type) => {
  return {
    name: name,
    price: price,
    type: type,
  };
};

const addIngredients = (addItem, list) => {
  if (!list.includes(addItem)) {
    list.push(addItem);
  }

  return list.length;
};

const formatPrice = (amount) => {
  return `$${amount}`;
};

const decreasePrice = (amount) => {
  return amount * 0.9;
};

const createRecipe = (name, ingredients, type) => {
  return {
    title: name,
    ingredients: ingredients,
    type: type,
  };
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


