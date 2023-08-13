const ApiResponse = require('../../../helpers/api-responses')
const { findComplaint, findComplaints } = require('../services')

module.exports = async (req, res) => {
    try {
        if(req.params?.id){
            const complaint = await findComplaint({ _id: req.params?.id });
            return ApiResponse.SuccessResponseWithData(res, 'Successful', complaint);
        }
        else{
            const complaints = await findComplaints();
            return ApiResponse.SuccessResponseWithData(res, 'Successful', complaints);
        }
    } catch (error) {
        return ApiResponse.ErrorResponse(res, error.code, error.message)
    }
}