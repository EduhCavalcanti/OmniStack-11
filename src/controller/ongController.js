const generateUniqueID = require('../utils/generateUniqueId');
//Conexão com o banco de dados
const connection = require('../database/connection');

module.exports = {
  async create(req, res) {
    const { nome, email, whatsapp, city, uf } = req.body;
    const id = generateUniqueID();

    //Inserindo dados na tabela SQLlite
    await connection('ongs').insert({
      id,
      nome,
      email,
      whatsapp,
      city,
      uf
    });
    return res.json({ id })
  },

  async list(req, res) {
    const dados = await connection('ongs').select('*');

    return res.json(dados);
  }

};