const takeOrder = (order, list) => {
  if (list.length < 3) {
    list.push(order);
  }

  return list;
};

const refundOrder = (orderNumber, list) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].orderNumber === orderNumber) {
      list.splice(i, 1);
    }
  }

  return list;
};

const listItems = (list) => {
  const itemNames = list.map(element => element.item);

  return itemNames.join(', ');
};

const searchOrder = (list, itemName) => {
  let orderPresent = false;

  list.forEach(element => {
    if (element.item === itemName) {
      orderPresent = true;
    }
  });

  return orderPresent;
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
};