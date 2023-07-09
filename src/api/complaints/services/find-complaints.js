const Complaint = require('../schema');

module.exports = async (query) => await Complaint.find(query && query);