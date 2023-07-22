const User = require('../schema');

module.exports = async (query) => await User.count(query)