const bcrypt = require('bcrypt')
const { findUser } = require('../user/services');
const ApiResponses = require("../../utilities/api-responses");
const { generateToken } = require("../../utilities/token-actions");

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const isUser = await findUser({ email });
        if (!isUser) return ApiResponses.notFoundResponse(res, 'Not Found', 'User account not found');

        if (!password) return ApiResponses.errorResponse(res, 'Cannot process request due to undefined password', 'No password provided');

        const isPasswordMatch = await bcrypt.compare(password, isUser.password);

        const loggedInResponse = {
            logged_in_as: email,
            access_token: generateToken({ id: isUser._id, email, role: isUser.role }),
            logged_in_at: new Date(Date.now())
        }
        if (isPasswordMatch && isUser) return ApiResponses.successResponseWithData(res, 'Login successful', loggedInResponse);
        else return ApiResponses.errorResponse(res, 'Login not successful', 'Email or password incorrect');

    } catch (error) {
        return next(error);
    }
}

module.exports = { login };