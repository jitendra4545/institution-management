require('dotenv').config()
const express = require(`express`)
const { connection } = require('./config/db')
const app = express()






app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log("DB connected successfully")
    } catch (error) {
        console.log("Unable to connect with DB")
    }
    console.log(`Server running on ${process.env.PORT}`)
})