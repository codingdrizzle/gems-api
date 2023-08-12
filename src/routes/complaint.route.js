const { newComplaint, findComplaints, removeComplaint, updateComplaint, findUserComplaints} = require('../api/complaints/controllers');
// const { adminAccess, adminStaffAccess,complainantAccess, generalAccess } = require('../middleware');

module.exports = (router) => {
    router.post('/complaint/new', newComplaint);
    router.get('/complaint/:id', findComplaints);
    router.get('/complaints/:id', findUserComplaints);
    router.get('/complaints', findComplaints);
    router.put('/complaint/:id', updateComplaint);
    router.delete('/complaint/:id', removeComplaint);
}