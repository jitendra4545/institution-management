const cloudinary = require('cloudinary').v2;

// import { response } from 'express';
const fs = require('fs')
require('dotenv').config()
cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
});



const uploadOnCloudinary = async (localfilepath) => {
    console.log("function call",localfilepath)
    try {
        if (!localfilepath) {
            return null
        }
        const res = await cloudinary.uploader.upload(localfilepath, {
            resource_type: 'auto'
        })
        console.log("File is uploaded in cloudinary", res.url)
        fs.unlinkSync(localfilepath)
        return res
       
    } catch (error) {
        fs.unlinkSync(localfilepath)
        console.log(error.message)
        return null
    }

}

module.exports={
    uploadOnCloudinary
  }