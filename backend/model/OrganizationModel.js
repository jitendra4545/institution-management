
const mongoose = require('mongoose');

const OrganizationSchema = mongoose.Schema({
  isActive: { type: Boolean, required: true,default:true },
  organizationName: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  postalCode: { type: String, required: true },
  OrganizationStartDate: { type: String },
  adminName: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  nationality: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  adhaarPic: { type: String, required: true }, // Assuming URL to the image
  signature: { type: String, required: true },
  referalBonus: { type: Number, default: 0 },
  resetToken:{type:String,required:true},
  password:{type:String},
  isLogin:{type:Boolean,default:false} // Assuming URL to the image
}, {
  versionKey: false,
  timestamps: true
});


const OrganizationModel = mongoose.model("organization", OrganizationSchema)

module.exports = {
  OrganizationModel
}

