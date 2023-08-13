const { newUser, findUsers, removeUser, updateUser, findStaffs, findComplainants, numberOfUsers } = require('../api/user/controllers');
const { adminAccess, adminStaffAccess } = require('../middleware');

module.exports = (router) => {
    router.post('/user/new', newUser);
    router.get('/user/:id', findUsers);
    router.get('/users', findUsers);
    router.patch('/user/:id', updateUser);
    router.delete('/user/:id', removeUser);
    
    router.get('/users/staffs',findStaffs);
    router.get('/users/complainants', findComplainants);

    router.get('/users/count/:role', numberOfUsers);
}