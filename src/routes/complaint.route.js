const { newComplaint, findComplaints, removeComplaint, updateComplaint } = require('../api/complaints/controllers');
const { adminAccess, adminStaffAccess,complainantAccess, generalAccess } = require('../middleware');

module.exports = (router) => {
    router.post('/complaint/new', complainantAccess, newComplaint);
    router.get('/complaint/:id', generalAccess, findComplaints);
    router.get('/complaints', generalAccess, findComplaints);
    router.put('/complaint/:id', adminStaffAccess, updateComplaint);
    router.delete('/complaint/:id', adminAccess, removeComplaint);
}