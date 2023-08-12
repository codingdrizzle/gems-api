const dotenv = require('dotenv');
dotenv.config();

const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

if (!secret) {
    throw new Error('JWT secret is not defined.');
}

const generateToken = (data) => jwt.sign(data, secret, { expiresIn: 43200 });

const verifyToken = (token) => {
    return jwt.verify(token, secret, (error, results) => {
        if (error) throw new Error(error)
        return results;
    });
}

const getUserIdFromToken = (tokenheader) => {
    const bearer = tokenheader.split(' ')[1];
    return verifyToken(bearer);
};


module.exports = { getUserIdFromToken, generateToken, verifyToken };