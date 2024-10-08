const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseId: Number,
    courseName: String,
    courseImage: String,
    courseInfo: String
});

module.exports = mongoose.model('Course', courseSchema); // Changed to 'Course' for clarity
