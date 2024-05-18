const mongoose = require('mongoose');

const batchSchema = mongoose.Schema({
    name: { type: String, required: true,unique:true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'course', },
    createdAt: { type: Date, default: Date.now }
}, {
    versionKey: false,
    timestamps: true
});

const BatchModel = mongoose.model('batch', batchSchema);

module.exports = {
    BatchModel
}