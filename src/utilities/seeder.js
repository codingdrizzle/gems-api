const User = require('../api/user/schema'); 
const adminUsers = require('./admin-users')
const bcrypt = require('bcrypt')

const seedAdminUsers = async () => {
    try {
        await User.deleteMany({role: 'admin'});

        for (const adminUser of adminUsers) {
            const hashedPassword = await bcrypt.hash(adminUser.password, 10);

            const user = new User({
                firstname: adminUser.firstname,
                lastname: adminUser.lastname,
                email: adminUser.email,
                username: adminUser.username,
                password: hashedPassword,
                contact: adminUser.contact,
                role: adminUser.role,
                affiliate: adminUser.affiliate,
            });
            await user.save();
        }

        console.log('Admin users seeded successfully.');
    } catch (error) {
        console.error('Error seeding admin users:', error);
    }
}

module.exports = seedAdminUsers;