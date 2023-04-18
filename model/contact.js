const mongoose = require('mongoose')

const Contact = mongoose.model('Contact', {
    nameContact: {
        type: String,
        require: true,
    },
    numberPhone: {
        type: String,
        require: true,
    },
    email: {
        type: String
    }
})

module.exports = Contact