require('dotenv').config()
const jwt = require('jsonwebtoken')
const authMiddleware = async (req, res, next) => {

    const token = req.headers.authorization;
    console.log(token)
    try {
        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
                if (decoded) {
                    console.log("ghgghjg",decoded)
                    req.body.InstituteId = decoded.InstituteId
                    next()
                } else {
                    res.send({ "msg": "Token didn't match, Please Login First!" })
                }
            });

        } else {
            res.send({ "msg": "Please Login First!" })
        }
    } catch (error) {
        console.log(error.message)
    }

}

module.exports = {
    authMiddleware
}