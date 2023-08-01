const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    state: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Hospitals', hospitalSchema)