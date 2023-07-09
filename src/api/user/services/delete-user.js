const User = require('../schema');

module.exports = async = (id) => User.findOneAndDelete({ _id: id });