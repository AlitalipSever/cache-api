const request = require('supertest')
const app = require('../server')


test("CANT delete because not auth, need token", async ()=>{

    await request(app).delete("/api/v1/cache/all")
        .send({
        })
        .expect(401)
})
