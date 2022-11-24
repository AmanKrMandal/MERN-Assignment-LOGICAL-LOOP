const mongoose = require('mongoose');

const regisSchema = new mongoose.Schema({
    PhoneNumber: String,
    password: String,
});
module.exports = mongoose.model('registrations', regisSchema);
