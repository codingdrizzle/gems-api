const Complaint = require('../schema');

module.exports = async (query) =>
    await Complaint.find(query && query)
        .populate({path: 'complainant', select: 'firstname lastname contact'})
        .populate({path: 'attendant', select: 'firstname lastname contact'});