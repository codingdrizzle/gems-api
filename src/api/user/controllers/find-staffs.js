const ApiResponse = require('../../../helpers/api-responses')
const { findUsers } = require('../services')

module.exports = async (req, res) => {
    try {
        const staffs = await findUsers({role: 'staff'});
        return ApiResponse.SuccessResponseWithData(res, 'Successful', staffs);
    } catch (error) {
        return ApiResponse.ErrorResponse(res, error.code, error.message)
    }
}