const mongoose = require('mongoose')
const {Schema} = mongoose

const AdminSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        enum: ['Staff', 'Manager', 'Senior Inpector'],
        default: 'Staff'
    },
    contact: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'Admin'
    },
    isFirstTime: {
        type: Boolean,
        default: true
    },
    affiliate: {
        type: String,
        enum: ["Ghana Police Service", "Ghana Fire Service", "Ghana Ambulance Service", "Electricity Company of Ghana (ECG)", "Local Assembly"],
        default: "Ghana Police Service"
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Admin', AdminSchema)