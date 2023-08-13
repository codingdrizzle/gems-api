const {Schema, model} = require('mongoose');

const userSchema = new Schema({
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        contact: {
            type: Number,
            required: true
        },
        role: {
            type: String,
            required: true,
            enum: ['complainant', 'admin', 'staff'],
            default: 'complainant'
        },
        affiliate: {
            type: String,
            enum: ["Ghana Police Service", "Ghana Fire Service", "Ghana Ambulance Service", "Electricity Company of Ghana", "Local Assembly", "Citizen"],
            default: 'Citizen'
        },
        rank: {
            type: String,
            // enum: ['Staff', 'Manager', 'Senior Inspector'],
            // default: 'Staff'
        },
        isFirstTime: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
)

const User = model('User', userSchema);

module.exports = User;