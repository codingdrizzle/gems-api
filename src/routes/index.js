
const AuthRoutes = require('./auth.route');
const UserRoutes = require('./user.route');
const ComplaintRoutes = require('./complaint.route');

const router = require('express').Router();

AuthRoutes(router);
UserRoutes(router);
ComplaintRoutes(router);

module.exports = router