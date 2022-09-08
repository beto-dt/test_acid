const request = require('supertest');
const app = require('../app');
describe('Create Item with Post', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/v1/users')
      .send({
        name: "Maria Elena",
        lastname: "Duran Herrera",
        email: "test@gmail.com",
        password: "123456",
        phone: "0992835146",
        ci: "1600689567",
        status: 1
      })
    expect(res.statusCode).toEqual(200)
  })

  it('should create a new purchase', async () => {
    const res = await request(app)
      .post('/api/v1/purchases')
      .send({
        products_id: 4,
        user_id: 1,
        status: 1
      })
    expect(res.statusCode).toEqual(200)
  })

  it('should create a new product', async () => {
    const res = await request(app)
      .post('/api/v1/products')
      .send({
        name: "Papas Fritas",
        description: "Ricas papas",
        price: 2,
        status: 1
      })
    expect(res.statusCode).toEqual(200)
  })
})
