const express = require('express');
const asyncHandler = require('express-async-handler');
const {
  getCars,
  UpdateStatus,
  deleteVehicle,
  addVehicle,
} = require('../model/cars.js');

const router = express.Router();

// Route zum Holen aller Informationen über die Autos in cars.json.
router.get(
  '/cars',
  asyncHandler(async (req, res) => {
    const result = await getCars();
    res.json(result);
  }),
);

// Route zum Ändern des Status eines Autos. Zum Beispiel von available auf reserved oder sold.
router.patch(
  '/cars/:id',
  asyncHandler(async (req, res) => {
    const result = await UpdateStatus(Number(req.params.id), req.query.status);
    res.json(result);
  }),
);

// Route zum Löschen eines Autos.
router.delete(
  '/cars/:id',
  asyncHandler(async (req, res) =>
    res.status(200).json(deleteVehicle(Number(req.params.id))),
  ),
);

// Route zum Einfügen eines neuen Autos. Daten:
router.post(
  '/cars',
  asyncHandler(async (req, res) => {
    const result = await addVehicle(req.body);
    res.json(result);
  }),
);

module.exports = router;
