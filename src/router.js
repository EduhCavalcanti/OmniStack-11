const express = require('express');
const OngController = require('./controller/ongController');
const IncidentsController = require('./controller/incidentController');
const ProfileController = require('./controller/profileController');
const SessionController = require('./controller/sessionController');

const router = express.Router();

//Rota de login das ongs
router.post('/session', SessionController.create);

router.post('/ongs', OngController.create);
router.get('/ongs', OngController.list);

//Vai listar os incidentes especificos de cada ong
router.get('/profile', ProfileController.list)

router.post('/incidents', IncidentsController.create);
router.get('/incidents', IncidentsController.list);
router.delete('/incidents/:id', IncidentsController.delete);

module.exports = router;