const express=require('express')
const { enrollStudent, getallStudent } = require('../controller/StudentController')
const upload = require('../middleware/multer.middleware')
const StudentRouter=express.Router()



StudentRouter.post("/",upload.fields([
    {
     name:"adhaar",
     maxCount:1
    } ,
    {
     name:"certificate",
     maxCount:1
    },{
        name:"profilePhoto",
        maxCount:1
    }
 ]),enrollStudent)
StudentRouter.get("/",getallStudent)

 module.exports={
    StudentRouter
 }