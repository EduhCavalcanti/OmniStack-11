//Vai usar o crypto para gerar uma chave aleatoria pra criação da tabela id
const crypto = require('crypto');

module.exports = function generateUniqueId() {
  return crypto.randomBytes(4).toString('HEX');
}