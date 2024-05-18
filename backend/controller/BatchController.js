const { BatchModel } = require("../model/BatchModel");




const createBatch = async (req, res) => {
    let data = req.body
    try {
        const batch = await BatchModel(data);
        await batch.save()
        res.status(201).json(batch);
    } catch (error) {
        res.status(500).json(error.message);
    }
};


const getAllBatchesOfSpecificCourse = async (req, res) => {
    // let id = req.body.InstituteId
    let id = req.params.course_id
    console.log("dssdsd", id)
    try {
        const batches = await BatchModel.find({ course: id });
        res.status(200).json(batches);
    } catch (error) {
        res.status(500).json(error.message);
    }
};


const getBatchById = async (req, res) => {
    let id = req.params.id
    try {
        const batch = await BatchModel.findById({ _id: id });
        if (!batch) {
            return res.status(404).json({ message: 'Batch not found' });
        }
        res.status(200).json(batch);
    } catch (error) {
        res.status(500).json(error.message);
    }
};



const updateBatchById = async (req, res) => {
    let id = req.params.id
    let data = req.body
     console.log(data)
    try {
        const batch = await BatchModel.findByIdAndUpdate({ _id: id }, data);
        if (!batch) {
            return res.status(404).json({ message: 'Batch not found' });
        }
        res.status(200).json({ msg: "data updated successfully","data":batch });
    } catch (error) {
        res.status(500).json(error.message);
    }
};


module.exports = {
    createBatch, getAllBatchesOfSpecificCourse, getBatchById, updateBatchById
}