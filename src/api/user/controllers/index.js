const newUser = require('./new-user')
const findUsers = require('./find-users')
const findStaffs = require('./find-staffs')
const findComplainants = require('./find-complainants')
const removeUser = require('./remove-user')
const updateUser = require('./update-user')

module.exports = {
    newUser,
    findUsers,
    removeUser,
    updateUser,
    findStaffs,
    findComplainants
}