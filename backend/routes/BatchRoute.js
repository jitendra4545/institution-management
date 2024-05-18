


const express=require("express")
const { authMiddleware } = require("../middleware/auth.middleware")
const { createBatch, getBatchById, getAllBatchesOfSpecificCourse, updateBatchById } = require("../controller/BatchController")
const BatchRoute=express.Router()


BatchRoute.post("/",authMiddleware,createBatch)
BatchRoute.get("/single/:id",authMiddleware,getBatchById)
BatchRoute.get("/:course_id",authMiddleware,getAllBatchesOfSpecificCourse)
BatchRoute.patch("/:id",authMiddleware,updateBatchById)


module.exports={
    BatchRoute
}