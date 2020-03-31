//Conexão com banco de dados
const knex = require('knex');
const configuration = require('../../knexfile');

//Criando a conexão
const connection = knex(configuration.development);

module.exports = connection;