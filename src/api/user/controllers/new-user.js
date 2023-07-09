const bcrypt = require('bcrypt')
const ApiResponse = require('../../../helpers/api-responses')
const { createUser } = require('../services')

module.exports = async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const newUser = await createUser(req.body)
        return ApiResponse.SuccessResponseWithData(res, 'User created successfully', newUser)
    } catch (error) {
        if (error.code === 11000) return ApiResponse.ErrorResponse(res, 409, 'User already exists')
        return ApiResponse.ErrorResponse(res, error.code, error.message)
    }
}