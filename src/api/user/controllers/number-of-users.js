const ApiResponse = require('../../../helpers/api-responses')
const { countUsers } = require('../services')

module.exports = async (req, res) => {
    try {
        const number_of_users = await countUsers(req.params?.role);
        return ApiResponse.SuccessResponseWithData(res, 'Successful', number_of_users);
    } catch (error) {
        return ApiResponse.ErrorResponse(res, error.code, error.message)
    }
}