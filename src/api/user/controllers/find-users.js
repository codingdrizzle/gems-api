const ApiResponse = require('../../../helpers/api-responses')
const { findUser, findUsers } = require('../services')

module.exports = async (req, res) => {
    try {
        if(req.params?.id){
            const user = await findUser({ _id: req.params?.id });
            return ApiResponse.SuccessResponseWithData(res, 'Successful', user);
        }else{
            const users = await findUsers();
            return ApiResponse.SuccessResponseWithData(res, 'Successful', users);
        }
    } catch (error) {
        return ApiResponse.ErrorResponse(res, error.code, error.message)
    }
}