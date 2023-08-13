const User = require('../api/user/schema'); 
const {adminUsers} = require('./admin-users')

const seedAdminUsers = async () => {
    try {
        await User.deleteMany({role: 'admin'});

        await User.insertMany(adminUsers);

        console.log('Admin users seeded successfully.');
    } catch (error) {
        console.error('Error seeding admin users:', error);
    }
}

module.exports = seedAdminUsers;