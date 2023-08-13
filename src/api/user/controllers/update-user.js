const ApiResponse = require('../../../helpers/api-responses')
const {updateUser} = require('../services')
const bcyrpt = require('bcrypt')

module.exports = async (req, res) => {
    try {
        if (req.body.password) {
            const password = await bcyrpt.hash(req.body.password, 10)
            req.body.password = password
        }
        const user = await updateUser(req.params?.id, req.body)
        return ApiResponse.SuccessResponseWithData(res, 'User details updated successfully', user)
    } catch (error) {
        return ApiResponse.ErrorResponse(res, error.code, error.message)
    }
}