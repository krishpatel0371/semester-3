const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Course = require('./User'); // Your Course model
const Signin = require('./Signin'); // Your Signin model
const Login = require('./Login'); // Your new Login model

const connectionString = 'mongodb+srv://krishpatel0371:Krish281979_@cluster0.6bfvz.mongodb.net/Courses';

mongoose.connect(connectionString)
    .then(() => {
        console.log("Connected to MongoDB");

        const app = express();

        // Middleware
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(cors());

        // Create course
        app.post('/courses', async (req, res) => {
            try {
                const course = new Course(req.body);
                const savedCourse = await course.save();
                res.status(201).json(savedCourse);
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        });

        // Get all courses
        app.get('/courses', async (req, res) => {
            try {
                const courses = await Course.find();
                res.json(courses);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });

        // Update course
        app.patch('/courses/:courseId', async (req, res) => {
            try {
                const updatedCourse = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
                if (!updatedCourse) {
                    return res.status(404).json({ error: "Course not found" });
                }
                res.json(updatedCourse);
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        });

        // Delete course
        app.delete('/courses/:courseId', async (req, res) => {
            try {
                const deletedCourse = await Course.findByIdAndDelete(req.params.courseId);
                if (!deletedCourse) {
                    return res.status(404).json({ error: "Course not found" });
                }
                res.status(204).send();
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });

        // User registration
        app.post('/register', async (req, res) => {
            try {
                const user = new Signin(req.body);
                const savedUser = await user.save();
                res.status(201).json(savedUser);
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        });

        // User login
        app.post('/login', async (req, res) => {
            try {
                const { email, password } = req.body;
                const user = await Login.findOne({ email });

                if (!user || user.password !== password) { // Use a secure way to compare passwords in production
                    return res.status(401).json({ error: 'Invalid credentials' });
                }

                res.status(200).json({ message: 'Login successful', user });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });

        app.listen(4001, () => {
            console.log("Server is running on port 4001");
        });

    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });
