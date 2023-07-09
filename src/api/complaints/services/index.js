const createComplaint = require('./create-complaint')
const findComplaint = require('./find-complaint')
const findComplaints = require('./find-complaints')
const updateComplaint = require('./update-complaint')
const deleteComplaint = require('./delete-complaint')

module.exports = {
    createComplaint,
    findComplaint,
    findComplaints,
    updateComplaint,
    deleteComplaint
}