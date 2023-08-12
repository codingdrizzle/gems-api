const Complaint = require('../schema')

module.exports = async (data) => {
    console.log(data)
    await Complaint.create(data)
}