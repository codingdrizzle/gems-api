const ApiResponse = require('../../../helpers/api-responses')
const { findUsers } = require('../services')

module.exports = async (req, res) => {
    try {
        const complainants = await findUsers({ role: 'complainant'});
        return ApiResponse.SuccessResponseWithData(res, 'Successful', complainants);
    } catch (error) {
        return ApiResponse.ErrorResponse(res, error.code, error.message)
    }
}