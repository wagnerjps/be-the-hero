const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        //rollback e latest são responsáveis por zerar e criar o banco a cada teste
        await connection.migrate.rollback();
        await connection.migrate.latest();
      });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        //Ser for necessário adicionar algum header, usar .set('NOME_HEADER': 'VALOR_HEADER')
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "UPA Caraguá",
                email: "contato@upacaragua.com",
                whatsapp: "12912345678",
                city: "Garaguá",
                uf: "SP"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});