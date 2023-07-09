const Complaint = require('../schema');

module.exports = async = (id) => Complaint.findOneAndDelete({ _id: id });