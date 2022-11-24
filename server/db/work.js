const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    name: String,
    PhoneNumber: String,
    Age: String,
    Pincode: String,
    AadharNo: String
});
module.exports = mongoose.model('works', workSchema);
