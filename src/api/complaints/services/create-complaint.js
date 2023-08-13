const Complaint = require('../schema')

module.exports = async (data) => await Complaint.create(data)