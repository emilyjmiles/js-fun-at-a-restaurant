class Chef {
  constructor (chefName, restaurantDetails) {
    this.name = chefName;
    this.restaurant = restaurantDetails;
  };

  greetCustomer = (customerName, condition) => {
    if (condition === false || condition === undefined) {
      return `Hello, ${customerName}!`;
    }
    return `Good morning, ${customerName}!`;
  };

  checkForFood = (item) => {
    let returnStatement;

    if (this.restaurant.menus[item.type].length) {
      this.restaurant.menus[item.type].forEach(element => {
        if (element.name === item.name) {
          returnStatement = `Yes, we're serving ${item.name} today!`;
        }
      });
    } else {
      returnStatement = `Sorry, we aren't serving ${item.name} today.`;
    }

    return returnStatement;
  };
};

module.exports = Chef;