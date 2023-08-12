const { newUser, findUsers, removeUser, updateUser, findStaffs, findComplainants, numberOfUsers } = require('../api/user/controllers');
const { adminAccess, adminStaffAccess } = require('../middleware');

module.exports = (router) => {
    router.post('/user/new', newUser);
    router.get('/user/:id', adminAccess, findUsers);
    router.get('/users', adminAccess, findUsers);
    router.patch('/user/:id', updateUser);
    router.delete('/user/:id', removeUser);
    
    router.get('/users/staffs', adminAccess,findStaffs);
    router.get('/users/complainants', adminStaffAccess, findComplainants);

    router.get('/users/count/:role', adminStaffAccess, numberOfUsers);
}