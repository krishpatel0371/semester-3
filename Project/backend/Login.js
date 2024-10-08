const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true } // Fixed typo in 'password'
});

module.exports = mongoose.model('Login', loginSchema);
