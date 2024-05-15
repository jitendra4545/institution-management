const express=require('express')
const { RegisterOrganization, getAllOrganization, getSingleOrganization, updateOrganization, deleteOrganization } = require('../controller/OrganizationController')
const upload = require('../middleware/multer.middleware')
const OrganizationRouter=express.Router()

OrganizationRouter.post("/",upload.fields([
   {
    name:"adhaarPic",
    maxCount:1
   } ,
   {
    name:"signature",
    maxCount:1
   }
]),RegisterOrganization) 

OrganizationRouter.get("/",getAllOrganization)
OrganizationRouter.get("/:id",getSingleOrganization)
OrganizationRouter.patch("/:id",updateOrganization)
OrganizationRouter.delete("/:id",deleteOrganization)
module.exports={
    OrganizationRouter
}