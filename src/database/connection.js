//Conexão com banco de dados
const knex = require('knex');
const configuration = require('../../knexfile');

//Criando variável ambiente para conexão de teste
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

//Criando a conexão de desenvolvimento
const connection = knex(config);

module.exports = connection;