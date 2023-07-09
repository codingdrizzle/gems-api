const ApiResponse = require('../../../helpers/api-responses')
const { updateComplaint } = require('../services')

module.exports = async (req, res) => {
    try {
        const complaint = await updateComplaint(req.params?.id, req.body)
        return ApiResponse.SuccessResponseWithData(res, 'Complaint details updated successfully', complaint)
    } catch (error) {
        return ApiResponse.ErrorResponse(res, error.code, error.message)
    }
}