const createRestaurant = (name) => {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  };
};

const addMenuItem = (restaurant, item) => {
  if (!restaurant.menus[item.type].includes(item)) {
    restaurant.menus[item.type].push(item);
  }

  return restaurant.menus[item.type];
};

const removeMenuItem = (restaurant, itemName, type) => {
  let returnStatement;

  if (restaurant.menus[type].length) {
    restaurant.menus[type].forEach((item, index) => {
      if (item.name === itemName) {
        returnStatement = `No one is eating our ${item.name} - it has been removed from the ${item.type} menu!`;
        restaurant.menus[type].splice(index, 1);
      } else {
        returnStatement = `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
      }
    });
  } else {
    returnStatement = `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
  }

  return returnStatement;
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
};