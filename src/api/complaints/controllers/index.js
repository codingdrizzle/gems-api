const newComplaint = require('./new-complaint')
const findComplaints = require('./find-complaints')
const removeComplaint = require('./remove-complaint')
const updateComplaint = require('./update-complaint')

module.exports = {
    newComplaint,
    findComplaints,
    removeComplaint,
    updateComplaint,
}