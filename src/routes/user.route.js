const { newUser, findUsers, removeUser, updateUser, findStaffs, findComplainants } = require('../api/user/controllers');
const { adminAccess, adminStaffAccess } = require('../middleware');

module.exports = (router) => {
    router.post('/user/new', newUser);
    router.get('/user/:id', adminAccess, findUsers);
    router.get('/users', adminAccess, findUsers);
    router.put('/user', updateUser);
    router.delete('/user', removeUser);
    
    router.get('/users/staffs', adminAccess,findStaffs);
    router.get('/users/complainants', adminStaffAccess,findComplainants);
}