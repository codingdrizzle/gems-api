const { newComplaint, findComplaints, removeComplaint, updateComplaint, findUserComplaints, findComplaintsCategory} = require('../api/complaints/controllers');
const {login} = require("../api/auth/login");
// const { adminAccess, adminStaffAccess,complainantAccess, generalAccess } = require('../middleware');

module.exports = (router) => {
    router.post('/complaint/new', newComplaint);
    router.get('/complaint/:id', findComplaints);
    router.get('/complaints/filter/:filter', findComplaintsCategory);
    router.get('/complaints/:id', findUserComplaints);
    router.get('/complaints', findComplaints);
    router.patch('/complaint/:id', updateComplaint);
    router.delete('/complaint/:id', removeComplaint);
}