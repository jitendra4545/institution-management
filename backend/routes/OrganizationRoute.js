const express=require('express')
const { RegisterOrganization, getAllOrganization, getSingleOrganization, updateOrganization, deleteOrganization, resetPassword, loginOrganization } = require('../controller/OrganizationController')
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
OrganizationRouter.patch("/reset_password/:token",resetPassword)
OrganizationRouter.post("/org_login",loginOrganization)
module.exports={
    OrganizationRouter
}