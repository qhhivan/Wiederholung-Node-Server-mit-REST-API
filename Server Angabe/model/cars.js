// JSON einlesen // cars ist jetzt ein Array
const cars = require('./cars.json');

// Route zum Holen aller Informationen über die Autos in cars.json.
function getCars() {
  return cars;
}

// Route zum Ändern des Status eines Autos. Zum Beispiel von available auf reserved oder sold.
function UpdateStatus(id, status) {
  if (status === 'available' || status === 'sold' || status === 'reserved') {
    const car = cars.find((el) => el.id === id);
    car.status = status;
    return car;
  }
}

// Route zum Löschen eines Autos.
function deleteVehicle(id) {
  return cars.filter((el) => el.id !== id);
}

// Route zum Einfügen eines neuen Autos.
function addVehicle({
  title,
  status,
  price,
  image,
  miles,
  yearOfMake,
  owner,
  description,
}) {
  const newID = cars[cars.length - 1].id + 1;

  const newCar = {
    newID,
    title,
    status,
    price,
    image,
    miles,
    yearOfMake,
    owner,
    description,
  };
  // If does not exist push
  if (cars.indexOf(newCar) === -1) cars.push(newCar);
  else console.log('This item already exists');
  console.log(newCar);
}

module.exports = {
  getCars,
  UpdateStatus,
  deleteVehicle,
  addVehicle,
};
