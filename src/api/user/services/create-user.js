const User = require('../schema')

module.exports = async (user_data) => await User.create(user_data)