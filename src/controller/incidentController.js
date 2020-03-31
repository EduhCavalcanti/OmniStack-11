const connection = require('../database/connection');

module.exports = {
  async create(req, res) {
    const { title, description, value } = req.body;

    //Vai buscar o id da ong logada
    const ong_id = req.headers.autorization;

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    });
    return res.json({ id })
  },

  async list(req, res) {
    //Paginação
    const { page = 1 } = req.query;
    //Vai retornar a quantidade total de casos para o front
    const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')//Vai relacionar dados das duas tabelas trazendo informações da tabela ong
      .limit(5)//Vai lmimitar pra 5 registro(incidentes)
      .offset((page - 1) * 5)//Vai pular 5 registros por pagina
      .select([
        'incidents.*',
        'ongs.nome',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf']);

    //Vai passar o total de incidentes pelo headers da pagina 
    res.header('X-Total-Count', count['count(*)']);

    return res.json(incidents)
  },

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.autorization;

    //Vai verificar se o incidente é da mesma ong que foi criada para deletar posteriomente
    const incident = await connection('incidents')
      .where('id', id)//Vai buscar o id na tabela que for igual ao id especificado nos params
      .select('ong_id')//Vai selecionar apenas a coluna ong_id
      .first()//Vai retornar apenas um resultado

    //Vai verificar se o ong_id selecionado for diferente ao passado no hearders 
    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ Erro: "Operação não permitida" })
    }
    //Se passar da verificação vai deletar o incidente
    await connection('incidents').where('id', id).delete();//Where vai buscar onde o id for igual ao id passado e vai excluir o mesmo

    return res.status(204).send();
  },
};