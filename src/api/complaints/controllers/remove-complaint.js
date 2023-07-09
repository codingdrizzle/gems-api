const ApiResponse = require('../../../helpers/api-responses')
const { deleteComplaint } = require('../services')

module.exports = async (req, res) => {
    try {
        await deleteComplaint(req.params?.id)
        return ApiResponse.SuccessResponse(res, 'Complaint removed successfully')
    } catch (error) {
        return ApiResponse.ErrorResponse(res, error.code, error.message)
    }
}