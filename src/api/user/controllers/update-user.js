const ApiResponse = require('../../../helpers/api-responses')
const { updateUser } = require('../services')

module.exports = async (req, res) => {
    console.log('here')
    try {
        const user = await updateUser(req.params?.id, req.body)
        return ApiResponse.SuccessResponseWithData(res, 'User details updated successfully', user)
    } catch (error) {
        return ApiResponse.ErrorResponse(res, error.code, error.message)
    }
}