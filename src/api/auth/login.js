const bcrypt = require('bcrypt')
const {findUser} = require('../user/services');
const ApiResponses = require("../../utilities/api-responses");
const {generateToken} = require("../../utilities/token-actions");

const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        const user = await findUser({email});
        if (!user) return ApiResponses.notFoundResponse(res, 'Not Found', 'User account not found');

        if (!password) return ApiResponses.errorResponse(res, 'Cannot process request due to undefined password', 'No password provided');

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (isPasswordMatch && user) return res.status(200).json({message: 'Login Successful', token:generateToken({user})});
        else return ApiResponses.errorResponse(res, 'Login not successful', 'Email or password incorrect');

    } catch (error) {
        return next(error);
    }
}

module.exports = {login};