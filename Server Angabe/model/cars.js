// JSON einlesen // cars ist jetzt ein Array
const cars = require('./cars.json');

// Route zum Holen aller Informationen über die Autos in cars.json.
function getCar() {
  return cars;
}
// Route zum Ändern des Status eines Autos. Zum Beispiel von available auf reserved oder sold.
function UpdateStatus(id, status) {
    if (status == available || status == sold || status == reserved) {
        let car = cars.find((el) => el.id === id)
        car.status = status,
    }
}
// Route zum Löschen eines Autos.
function deleteVehicle(id) {
    
}
// Route zum Einfügen eines neuen Autos. Daten:

module.exports = {
  getCar,
};

/*
{
    "id": 8,
    "title": "Fair Price",
    "status": "available",
    "price": "102.100 $",
    "image": "http://localhost:3000/images/car8.png",
    "miles": 112921,
    "yearOfMake": 2016,
    "owner": {
      "firstName": "Victor",
      "lastName": "Pawlek"
    },
    "description": "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat."
}
  */
