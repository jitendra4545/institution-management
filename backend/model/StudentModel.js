const mongoose = require('mongoose')


const StudentSchema = mongoose.Schema({
    InstituteId: { type: String, required: true },
    IsActive: { type: Boolean, default: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'teacher'], default: 'student' },
    dateOfBirth: { type: Date, required: true },
    studentId: { type: String, required: true,unique:true },
    street: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    zipCode: { type: String },
    fatherName: String,
    motherName: String,
    qualification: String,
    certificate: String,
    adhaar: String,
    profilePhoto: String, 
    phone: String,
    emergencyContact: String,
    batches: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Batch' }],
    coursesEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
}, {
    versionKey: false,
    timestamps: true
})


const StudentModel = mongoose.model("student", StudentSchema)

module.exports = {
    StudentModel
}

