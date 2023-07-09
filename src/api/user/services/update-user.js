const User = require('../schema');

module.exports = async = (id, data) => User.findOneAndUpdate({ _id: id }, { $set: { ...data } }, { new: true, runValidators: true });