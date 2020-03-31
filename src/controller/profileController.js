const connection = require('../database/connection');

//Vai retornar incidentes especifico de cada ong
module.exports = {
  async list(req, res) {

    const ong_id = req.headers.autorization;

    const incidents = await connection('incidents').where('ong_id', ong_id).select('*');

    return res.json(incidents);
  }
}