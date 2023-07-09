const User = require('../schema');

module.exports = async (query) => await User.find(query && query);