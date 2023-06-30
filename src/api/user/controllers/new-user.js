const ApiResponse = require('../../../helpers/api-responses')
const { createUser } = require('../services')

module.exports = async (req, res, next) => {
    try {
        const newUser = await createUser(req.body)
        return ApiResponse.SuccessResponseWithData(res, 'User created successfully', newUser)
    } catch (error) {
        return ApiResponse.ErrorResponse(res, error.code, error.message)
    }
}