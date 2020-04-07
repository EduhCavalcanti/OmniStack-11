//TEste de integração de toda aplicação 

const superTest = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');


describe('ong', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });
  afterAll(async () => {
    await connection.destroy();
  });
  it('Deveria criar uma nova ong', async () => {
    const response = await superTest(app).post('/ongs').send({
      nome: "Crianca Esperanca",
      email: "crianca@crianca.com.br",
      whatsapp: "81999885544",
      city: "Recife",
      uf: "SP"
    });
    //Expect= espera que algo aconteça de modo que...
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});