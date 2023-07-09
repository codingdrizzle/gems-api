const ApiResponse = require('../../../helpers/api-responses')
const { deleteUser } = require('../services')

module.exports = async (req, res) => {
    try {
        await deleteUser(req.params?.id)
        return ApiResponse.SuccessResponse(res, 'User removed successfully')
    } catch (error) {
        return ApiResponse.ErrorResponse(res, error.code, error.message)
    }
}