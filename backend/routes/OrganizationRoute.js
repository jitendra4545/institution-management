const express=require('express')
const { RegisterOrganization } = require('../controller/OrganizationController')
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



module.exports={
    OrganizationRouter
}