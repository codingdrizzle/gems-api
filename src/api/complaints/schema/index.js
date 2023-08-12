const {Schema, models, model} = require('mongoose')


const complaintSchema = Schema({
    category: {
        type: String,
        enum: ["Ghana Police Service", "Ghana Fire Service", "Ghana Ambulance Service", "Electricity Company of Ghana (ECG)", "Local Assembly"],
        required: true
    },
    type: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    geoLocation: {
        type: Object,
        required: true
    },
    descLocation: {
        type: String,
        required: true
    },
    resolved: {
        type: Boolean,
        required: true
    },
    attendant: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    complainant: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    }
}, {timestamps: true})

const Complaint = model('Complaint', complaintSchema)

module.exports = Complaint;