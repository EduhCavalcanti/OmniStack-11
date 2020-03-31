const express = require('express');
const OngController = require('./controller/ongController');
const IncidentsController = require('./controller/incidentController');
const router = express.Router();

router.post('/ongs', OngController.create);
router.get('/ongs', OngController.list);

router.post('/incidents', IncidentsController.create);
router.get('/incidents', IncidentsController.list);
router.delete('/incidents/:id', IncidentsController.delete);

module.exports = router;