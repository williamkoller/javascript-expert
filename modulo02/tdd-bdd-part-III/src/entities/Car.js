const Base = require('./base/Base');

class Car extends Base {
  constructor({ id, name, releaseYear, available, gasAvailable }) {
    super({ id, name });
    this.releaseYear = releaseYear;
    this.available = available;
    this.gasAvailable = gasAvailable;
  }
}

module.exports = Car;
