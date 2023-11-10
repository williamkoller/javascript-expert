const faker = require('faker');
const Car = require('../src/Car');
const CarCategory = require('../src/CarCategory');
const Customer = require('../src/Customer');

const { join } = require('path');
const { writeFile } = require('fs/promises');

const seedBaseFolder = join(__dirname, '../', 'database');

const ITEMS_AMOUNT = 2;

const carCategory = new CarCategory({
  id: faker.random.uuid(),
  name: faker.vehicle.type(),
  carIds: [],
  price: faker.finance.amount(20, 100),
});

const cars = [];
const customers = [];

for (let index = 0; index <= ITEMS_AMOUNT; index++) {
  const car = new Car({
    id: faker.random.uuid(),
    name: faker.vehicle.model(),
    available: true,
    gasAvailable: true,
    releaseYear: faker.date.past().getFullYear(),
  });

  carCategory.carIds.push(car.id);
  cars.push(car);

  const customer = new Customer({
    id: faker.random.uuid(),
    name: faker.name.firstName(),
    age: faker.random.number({ min: 18, max: 50 }),
  });

  customers.push(customer);
}

const write = (filename, data) =>
  writeFile(join(seedBaseFolder, filename), JSON.stringify(data));

// IIFE
(async () => {
  await write('Cars.json', cars);
  await write('Customer.json', customers);
  await write('CarCategory.json', [carCategory]);

  console.log('Cars', cars);
  console.log('Customer', customers);
  console.log('CarCategory', carCategory);
})();
