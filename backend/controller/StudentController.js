const { StudentModel } = require("../model/StudentModel")
const { uploadOnCloudinary } = require("../utils/Cloudinary.upload")



const enrollStudent = async (req, res) => {
    const data = req.body
    const { InstituteId } = data
    const adhhar_localpath = req.files?.adhaar[0]?.path
    const certificate_localpath = req.files?.certificate[0]?.path
    const profilePhoto_localpath = req.files?.profilePhoto[0]?.path

    console.log("dsdsfdsfdfs", InstituteId, data, adhhar_localpath, certificate_localpath, profilePhoto_localpath)

    try {
        if (!adhhar_localpath || !certificate_localpath || !profilePhoto_localpath) {
            res.send("Please choose any file")
        }
        const adhaarUrl = await uploadOnCloudinary(adhhar_localpath)
        const certificateUrl = await uploadOnCloudinary(certificate_localpath)
        const profileUrl = await uploadOnCloudinary(profilePhoto_localpath)

        let newStudent = new StudentModel({ ...data, adhaar: adhaarUrl?.url, profilePhoto: profileUrl?.url, certificate: certificateUrl?.url, InstituteId: InstituteId })
        await newStudent.save()

        res.status(200).send({ "msg": "Student Registered Successfully" });

    } catch (error) {
        res.status(500).send(error.message);
    }
}


const getSpecificOrgStudent = async (req, res) => {
    let id = req.body.InstituteId
    try {
        let students = await StudentModel.find({ InstituteId:id})
        res.status(200).send(students);
    } catch (error) {
        res.status(500).send(error.message);
    }

}

const getallStudent=async(req,res)=>{
    try {
        let students = await StudentModel.find()
        res.status(200).send(students);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


const updateStudent=async(req,res)=>{
      const data=req.body
     const id=req.params.id
     console.log(data,id)
      try {
          await StudentModel.findByIdAndUpdate({_id:id},data)
      res.send({msg:"Data updated"})
        } catch (error) {
            res.status(500).send(error.message);         
      }
}



module.exports = {
    enrollStudent,
    getallStudent,
    getSpecificOrgStudent,
    updateStudent
}