
const express = require(`express`)
const { createCourse, getOrgCourse, getCourseById, updateCourseById } = require("../controller/CourseController")
const { authMiddleware } = require("../middleware/auth.middleware")
const CourseRouter = express.Router()


CourseRouter.post("/",authMiddleware, createCourse)
CourseRouter.get("/",authMiddleware,getOrgCourse)
CourseRouter.get("/:id",authMiddleware,getCourseById)
CourseRouter.patch("/:id",authMiddleware,updateCourseById)


module.exports = {
    CourseRouter
}