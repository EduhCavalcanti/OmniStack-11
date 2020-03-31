const connection = require('../database/connection');

//Controller de login
//Vai verificar se a ong realmente existe
module.exports = {
  async create(req, res) {
    const { id } = req.body;

    const ongs = await connection('ongs')
      .where('id', id)
      .select('nome')//Vai selecionar apenas o nome para enviar para o front
      .first()//Como ta buscando por id vai retornar uma unica ong

    if (!ongs) {
      return res.status(400).json({ Error: "Não existe ONG com esse id" })
    }
    return res.json(ongs);
  },
};