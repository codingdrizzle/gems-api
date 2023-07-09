const { findUser } = require('./api/user/services');
const ApiResponse = require('./utilities/api-responses');
const { getUserIdFromToken } = require('./utilities/token-actions');

require('dotenv').config();

const adminAccess = async (req, res, next) => {
    if (!req.headers['authorization']) return res.status(401).json({ message: 'No authorization headers' })
    
    const tokenData = getUserIdFromToken(req.headers['authorization']);
    const checkUser = await findUser({ _id: tokenData });
    if (!checkUser) return next({ code: 401, msg: 'Unauthorised. Permission denied' });
    return ['admin'].includes(checkUser.role) ? next() : res.status(401).json({message: 'Unauthorised. Permission denied' });
};

const complainantAccess = async (req, res, next) => {
    if (!req.headers['authorization']) return res.status(401).json({ message: 'No authorization headers' })
    const tokenData = getUserIdFromToken(req.headers['authorization']);
    
    const checkUser = await findUser({ _id: tokenData });
    if (!checkUser) return next({ code: 401, msg: 'Unauthorised. Permission denied' });
    
    return ['complainant'].includes(checkUser.role) ? next() : res.status(401).json({ message: 'Unauthorised. Permission denied' });
};

const staffAccess = async (req, res, next) => {
    if (!req.headers['authorization']) return res.status(401).json({ message: 'No authorization headers' })
    const tokenData = getUserIdFromToken(req.headers['authorization']);
    
    const checkUser = await findUser({ _id: tokenData });
    if (!checkUser) return next({ code: 401, msg: 'Unauthorised. Permission denied' });
    
    return ['staff'].includes(checkUser.role) ? next() : res.status(401).json({ message: 'Unauthorised. Permission denied' });
};

const adminStaffAccess = async (req, res, next) => {
    if (!req.headers['authorization']) return res.status(401).json({ message: 'No authorization headers' })
    const tokenData = getUserIdFromToken(req.headers['authorization']);
    
    const checkUser = await findUser({ _id: tokenData });
    if (!checkUser) return next({ code: 401, msg: 'Unauthorised. Permission denied' });
    
    return ['admin','staff'].includes(checkUser.role) ? next() : res.status(401).json({ message: 'Unauthorised. Permission denied' });
};

const generalAccess = async (req, res, next) => {
    if (!req.headers['authorization']) return res.status(401).json({ message: 'No authorization headers' })
    try {
        if (!req.headers['authorization']) return ApiResponse.errorResponse(res, 'Unauthorized Request Headers', 'Provide request authorization')
        const userId = getUserIdFromToken(req.headers['authorization']);

        if (typeof (userId) !== 'string') return ApiResponse.errorResponse(res, 'Token expired', 'Token expired')
        const currentUser = await findUser({ _id: userId });

        if (!currentUser) return next({ code: 401, msg: 'Unauthorised. Permission denied' });
        return ['admin', 'complainant', 'staff'].includes(currentUser.role) ? next() : res.status(401).json({ message: 'Unauthorised. Permission denied' });
    } catch (error) {
        const error_message = error.message
        const match = error_message.match(/msg: '(.+?)'/)
        match ? match[1] : null;

        return res.status(401).json({ message: match })
    }

};

module.exports = { adminAccess, complainantAccess, staffAccess, adminStaffAccess, generalAccess };
