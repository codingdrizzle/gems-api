const Complaint = require('../schema');

module.exports = async = (id, data) => Complaint.findOneAndUpdate({ _id: id }, { $set: { ...data } }, { new: true, runValidators: true });