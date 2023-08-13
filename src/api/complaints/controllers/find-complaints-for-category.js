const ApiResponse = require('../../../helpers/api-responses')
const {  findComplaints } = require('../services')

module.exports = async (req, res) => {
    // console.log('here')
    // let filter = ''
    // switch (req.params.filter){
    //     case 'police': filter = 'Ghana Police Service'
    //         break;
    //     default: filter = ''
    // }

    // console.log(filter)
    try {
        if(req.params?.filter){
            const complaints = await findComplaints({ category : req.params?.filter });
            return ApiResponse.SuccessResponseWithData(res, 'Successful', complaints);
        }
    } catch (error) {
        return ApiResponse.ErrorResponse(res, error.code, error.message)
    }
}