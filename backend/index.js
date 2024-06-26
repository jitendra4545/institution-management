require('dotenv').config()
const cors = require('cors')
const express = require(`express`)
const { connection } = require('./config/db')
const { OrganizationRouter } = require('./routes/OrganizationRoute')
const { StudentRouter } = require('./routes/StudentRoute')
const { CourseRouter } = require('./routes/CourseRoute')
const { BatchRoute } = require('./routes/BatchRoute')
const app = express()
app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hi welcome to institute management app")
})

app.use("/organizations", OrganizationRouter)
app.use("/student", StudentRouter)
app.use("/course", CourseRouter)
app.use("/batch", BatchRoute)




app.listen(process.env.PORT, async () => {
    // console.log("hi")
    try {
        await connection
        console.log("DB connected successfully")
    } catch (error) {
        console.log("Unable to connect with DB", error)
    }
    console.log(`Server running on ${process.env.PORT}`)
})