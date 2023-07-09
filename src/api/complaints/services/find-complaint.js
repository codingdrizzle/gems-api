const Complaint = require('../schema');

module.exports = async (query) => await Complaint.findOne(query);