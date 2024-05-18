

const mongoose = require('mongoose')


const CourseSchema = mongoose.Schema({
    InstituteId: { type: String, required: true },
    title: { type: String, required: true ,unique:true},
    description: { type: String, required: true },
    instructors: { type: [String], default: [] }, // Assuming instructors are represented as an array of strings
    fees: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    duration: { type: Number, required: true }, // Duration in weeks, months, etc.
    category: { type: String, required: true }, // E.g., Math, Science, History
    batches: [{ type: mongoose.Schema.Types.ObjectId, ref: 'batch' }],
    isActive: { type: Boolean, required: true }
}, {
    versionKey: false,
    timestamps: true
})


const CourseModel = mongoose.model("course", CourseSchema)


module.exports = {
    CourseModel
}

