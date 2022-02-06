const express = require("express")
const app = express()
const dotenv = require("dotenv")

const connectDB = require("./database/setup")
const cacheApiRoute = require("./routes/cache-api")
const authRoute = require("./routes/auth")


dotenv.config()

app.use(express.json())
app.use("/api/v1/cache", cacheApiRoute)
app.use("/api/v1/auth", authRoute)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(process.env.PORT || 5001, ()=>{
            console.log(`Server is running at ${process.env.PORT}...`);
        })
    }catch (e) {
        console.log(e);
    }
}

start().catch(console.error)

module.exports = app