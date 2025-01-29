const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },  
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Contact', contactSchema);