const Base = require('./base/Base');

class CarCategory extends Base {
  constructor({ id, name, carIds, price }) {
    super({ id, name });
    this.carIds = carIds;
    this.price = price;
  }
}

module.exports = CarCategory;
