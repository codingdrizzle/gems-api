const ApiResponse = require('../../../helpers/api-responses')
const {findComplaints} = require('../services')

module.exports = async (req, res) => {
    try {
        if (req.params?.id) {
            const complaints = await findComplaints({complainant: req.params?.id});
            return res.status(200).json(complaints)
        }
    } catch (error) {
        return ApiResponse.ErrorResponse(res, error.code, error.message)
    }
}