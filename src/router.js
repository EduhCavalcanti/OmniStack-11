const express = require('express');
//para fazer validação de dados de entrada
const { celebrate, Joi, Segments } = require('celebrate');

const OngController = require('./controller/ongController');
const IncidentsController = require('./controller/incidentController');
const ProfileController = require('./controller/profileController');
const SessionController = require('./controller/sessionController');

const router = express.Router();

//Rota de login das ongs
router.post('/session', SessionController.create);


router.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    nome: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.number().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), OngController.create);


router.get('/ongs', OngController.list);


//Vai listar os incidentes especificos de cada ong
router.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    autorization: Joi.string().required(),
  }).unknown()
}), ProfileController.list)


router.post('/incidents', IncidentsController.create);

router.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number().required()
  })
}), IncidentsController.list);


router.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}), IncidentsController.delete);

module.exports = router;