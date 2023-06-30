const { Schema, model } = require('mongoose');

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
        required: true
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
    createdAt: {
        type: String,
        required: true,
        default: Date.now
    },
    verified: {
        type: Boolean,
        required: true,
        default: false
    },
    complaints: [{
        type: Schema.Types.ObjectId,
        ref: 'Complaints'
    }]
},
    { timestamps: true }
)

const User = model('User', userSchema);

module.exports = User;