const express = require('express');
// const asyncHandler = require('express-async-handler');

const router = express.Router();

// Route zum Holen aller Informationen über die Autos in cars.json.
// Route zum Ändern des Status eines Autos. Zum Beispiel von available auf reserved oder sold.
// Route zum Löschen eines Autos.
// Route zum Einfügen eines neuen Autos. Daten:

router.get('/hello', (req, res) => res.send('Hello'));

module.exports = router;
