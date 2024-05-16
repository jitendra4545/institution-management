const { OrganizationModel } = require("../model/OrganizationModel")
const { uploadOnCloudinary } = require("../utils/Cloudinary.upload")
const nodemailer = require('nodemailer')
const twilio = require('twilio');
const jwt = require(`jsonwebtoken`)
require('dotenv').config()





const RegisterOrganization = async (req, res) => {
    const data = req.body
    const adhaarPic_localpath = req.files?.adhaarPic[0]?.path
    const signature_localpath = req.files?.signature[0]?.path
    console.log(data, adhaarPic_localpath, signature_localpath)

    try {
        if (!adhaarPic_localpath || !signature_localpath) {
            res.send("Please choose any file")
        }

        const token = jwt.sign({ email: data.email }, process.env.JWT_SECRET);

        const adhaarPicUrl = await uploadOnCloudinary(adhaarPic_localpath)
        const signatureUrl = await uploadOnCloudinary(signature_localpath)

        let newOrg = new OrganizationModel({ ...data, adhaarPic: adhaarPicUrl?.url, signature: signatureUrl?.url, resetToken: token })
        await newOrg.save()

        const resetPasswordLink = `enter your frontend url here for password reset`

        const transporter = nodemailer.createTransport({

            service: 'Gmail',
            auth: {
                user: process.env.gmail_id,
                pass: process.env.password
            }
        });


        const mailOptions = {
            from: process.env.gmail_id,
            to: data.email,
            subject: 'Registration Successful',
            text: '',
            html: `<p>Congratulations! You have successfully registered your organization.Please click on the following link to reset your password:</p>      <a href="${resetPasswordLink}"><h3>CLICK HERE FOR PASSWORD RESET</h3></a>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            console.log(mailOptions)
            if (error) {
                console.error('Error occurred while sending email:', error.message);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        // const twilioClient = twilio(process.env.twilio_SID, process.env.twilio_auth_token);
        // const message = await twilioClient.messages.create({
        //     body: 'Congratulations! You have successfully registered your organization.',
        //     from: process.env.twilio_phone_no, // Your Twilio phone number
        //     to: data.phone// Recipient's phone number
        // });

        // console.log('SMS sent:', message.sid);


        //   console.log(adhaarPicUrl,signatureUrl)
        res.status(200).send({ "msg": "Organization Registered Successfully" });
    } catch (error) {
        res.status(500).send(error.message);
    }

}


const resetPassword = async (req, res) => {
    let token = req.params.token
    let { password } = req.body
    console.log(token, password)
    try {
        let decodeToken = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decodeToken)
        let data = await OrganizationModel.find({ email: decodeToken.email, resetToken: token })
        console.log(data)
        if (data.length > 0) {
            await OrganizationModel.findOneAndUpdate({ email: data[0]?.email }, { password: password, resetToken: null })
        }
        res.status(200).send({ "msg": "Password reset successfully" });
    } catch (error) {
        res.status(500).send(error.message);
    }
}








const getAllOrganization = async (req, res) => {

    try {
        let allOrg = await OrganizationModel.find()
        res.status(200).send(allOrg);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


const getSingleOrganization = async (req, res) => {
    let id = req.params.id
    console.log(id)
    try {
        let allOrg = await OrganizationModel.find({ _id: id })
        res.status(200).send(allOrg);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const updateOrganization = async (req, res) => {
    let id = req.params.id
    let data = req.body
    console.log(id, data)

    try {
        let allOrg = await OrganizationModel.findOneAndUpdate({ _id: id }, data)
        res.send(allOrg)
        // res.status(200).send({msg:"Organization updated successfully"});
    } catch (error) {
        res.status(500).send(error.message);
    }
}


const deleteOrganization = async (req, res) => {
    let id = req.params.id
    try {
        let allOrg = await OrganizationModel.findByIdAndDelete({ _id: id })
        res.status(200).send({ msg: "Organization deleted successfully" });
    } catch (error) {
        res.status(500).send(error.message);
    }
}
















module.exports = {
    RegisterOrganization,
    getAllOrganization,
    getSingleOrganization,
    deleteOrganization,
    updateOrganization,
    resetPassword
}
