const { CourseModel } = require("../model/CourseModel")




const createCourse = async (req, res) => {
    const data = req.body
    console.log(data)
    try {
        let newCourse = new CourseModel(data)
        await newCourse.save()
        res.status(200).send({ "msg": "Course created successfully" });
    } catch (error) {
        res.status(500).send(error.message);
    }
}


const getOrgCourse = async (req, res) => {
    let id = req.body.InstituteId
    try {
        let data = await CourseModel.find({ InstituteId: id })
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }

}



const getCourseById = async (req, res) => {
    let id=req.params.id
    try {
        const course = await CourseModel.findById({_id:id});
        if (!course) {
            return res.status(404).json({ success: false, message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({  error: error.message });
    }
};


const updateCourseById = async (req, res) => {
    let id=req.params.id
    let data=req.body
    try {
        const course = await CourseModel.findByIdAndUpdate({_id:id},data);
        if (!course) {
            return res.status(404).json({ success: false, message: 'Course not found' });
        }
        res.status(200).json({msg:"Data updated successfully" });
    } catch (error) {
        res.status(500).json({  error: error.message });
    }
};



module.exports = {
    createCourse,
    getOrgCourse,
    getCourseById,
    updateCourseById
}
