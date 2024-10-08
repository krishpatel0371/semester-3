const mongoose = require("mongoose");

const signSchema = new mongoose.Schema({
    userName: String,
    email: String,
    phoneNumber: Number,
    collegeName: String,
    semester: Number,
    fieldOfStudy: String,
    passwaord: String
});

module.exports = mongoose.model('Signin', signSchema); // Changed to 'Course' for clarity
