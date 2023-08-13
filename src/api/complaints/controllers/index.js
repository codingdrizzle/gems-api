const newComplaint = require('./new-complaint')
const findComplaints = require('./find-complaints')
const findUserComplaints = require('./find-user-complaints')
const findComplaintsCategory = require('./find-complaints-for-category')
const removeComplaint = require('./remove-complaint')
const updateComplaint = require('./update-complaint')

module.exports = {
    newComplaint,
    findComplaints,
    removeComplaint,
    updateComplaint,
    findUserComplaints,
    findComplaintsCategory
}