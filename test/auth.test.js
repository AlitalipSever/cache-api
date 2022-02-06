const request = require('supertest')
const app = require('../server')
const User = require("../models/User")


test("should register for user", async ()=>{
    await User.deleteMany({})

    await request(app).post("/api/v1/auth/register")
        .send({
            username:"user1.username",
            email:"user1.email",
            password:"user1.password"
        })
        .expect(201)
})

test("should login for user", async ()=>{

    await request(app).post("/api/v1/auth/login")
        .send({
            username:"user1.username",
            password:"user1.password"
        })
        .expect(200)
})


test("should NOT login for user", async ()=>{

    await request(app).post("/api/v1/auth/login")
        .send({
            username:"user1.XXXXXX",
            password:"user1.XXXXXX"
        })
        .expect(401)
})

