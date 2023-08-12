const newComplaint = require('./new-complaint')
const findComplaints = require('./find-complaints')
const findUserComplaints = require('./find-user-complaints')
const removeComplaint = require('./remove-complaint')
const updateComplaint = require('./update-complaint')

module.exports = {
    newComplaint,
    findComplaints,
    removeComplaint,
    updateComplaint,
    findUserComplaints
}