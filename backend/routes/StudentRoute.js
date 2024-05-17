const express=require('express')
const { enrollStudent, getallStudent, getSpecificOrgStudent, updateStudent } = require('../controller/StudentController')
const upload = require('../middleware/multer.middleware')
const { authMiddleware } = require('../middleware/auth.middleware')
const StudentRouter=express.Router()


const middlewareforregstudent = [
    upload.fields([
        { name: "adhaar", maxCount: 1 },
        { name: "certificate", maxCount: 1 },
        { name: "profilePhoto", maxCount: 1 }
    ]),
    authMiddleware // Add your middleware here
]
StudentRouter.post("/",middlewareforregstudent,enrollStudent)
StudentRouter.get("/all",authMiddleware,getallStudent)
StudentRouter.get("/",authMiddleware,getSpecificOrgStudent)
StudentRouter.patch("/:id",authMiddleware,updateStudent)
 module.exports={
    StudentRouter
 }