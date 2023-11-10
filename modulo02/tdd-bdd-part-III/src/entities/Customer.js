const Base = require('./base/Base');

class Customer extends Base {
  constructor({ id, name, age }) {
    super({ id, name });
    this.age = age;
  }
}

module.exports = Customer;
