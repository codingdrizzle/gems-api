const ApiResponse = require('../../../helpers/api-responses')
const {createComplaint} = require('../services')

module.exports = async (req, res) => {
    try {
        const complaint = await createComplaint(req.body)
        return ApiResponse.SuccessResponseWithData(res, 'Complaint created successfully', complaint)
    } catch (error) {
        if (error.code === 11000) return ApiResponse.ErrorResponse(res, 409, 'Complaint already exists')
        return ApiResponse.ErrorResponse(res, error.code, error.message)
    }
}