const { app: expressApp } = require('../build/src/server')
const request = require('supertest')

const mongoose = require('mongoose')

const urlEndpoint = '/api/career'

describe('Carrer MRC test', () => {
  beforeEach(async () => {
    try {
      await mongoose.connect(process.env.CDN_TEST_DB)

      // TODO: Drop careers collection;
      await mongoose.models.career.deleteMany({})

      await mongoose.models.career.insertMany([
        { name: 'Informatica' },
        { name: 'Telecomunicaciones' }
      ])
    } catch (error) {
      console.log(error)
      throw error
    }
    // TODO: seed some data carrer data
    // TODO: insert two careers
  })

  /* Closing database connection after each test. */
  afterEach(async () => {
    await mongoose.disconnect()
  })

  test('GET /api/career', async () => {
    const res = await request(expressApp).get(`${urlEndpoint}`)
    expect(res.statusCode).toBe(200)
    expect(res.body.data.length).toBe(2)
    expect(res.body.ok).toBe(true)
  })

  test('POST /api/carrer Bad Request', async () => {
    const resp = await request(expressApp).post(`${urlEndpoint}`)
    expect(resp.statusCode).toBe(400 || 500)
    expect(resp.body.data).toBe(null)
    expect(resp.body.ok).toBe(true)
  })

  test('POST /api/carrer 👌', async () => {
    const newCareer = {
      name: 'Otra Carrera'
    }

    const resp = await request(expressApp)
      .post(`${urlEndpoint}`)
      .send(newCareer)
    expect(resp.statusCode).toBe(201)
    expect(resp.body.data.name).toBe(newCareer.name)
    expect(typeof resp.body.data._id).toBeDefined()
    expect(resp.body.ok).toBe(true)
  })

  test('DELETE  /api/career/:id', async () => {
    //  Get the id of the first element
    const documents = await mongoose.models.career.find()
    const { _id } = documents[0]

    const resp = await request(expressApp).delete(`${urlEndpoint}/${_id}`)
    expect(resp.body.data._id).toBeDefined()
    expect(resp.body.ok).toBe(true)
    expect(_id.toString()).toBe(resp.body.data._id)
  })

  test('PUT  /api/career/:id', async () => {
    //  Get the id of the first element
    const documents = await mongoose.models.career.find()
    const { _id } = documents[0]

    const updatedData = { name: 'Random name' }

    const resp = await request(expressApp)
      .put(`${urlEndpoint}/${_id}`)
      .send(updatedData)

    const { ok, data } = resp.body
    expect(data._id).toBeDefined()
    expect(ok).toBe(true)
    expect(_id.toString()).toBe(data._id)
    expect(data.name).toBe(updatedData.name)
  })
})
