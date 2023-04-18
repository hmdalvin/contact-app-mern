const mongoose = require('mongoose');

// url database connection
mongoose.connect('mongodb://127.0.0.1:27017/contact-app-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});