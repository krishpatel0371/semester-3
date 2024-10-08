import React, { useEffect, useState } from 'react';

function Course() {
    const [courses, setCourses] = useState([]);
    const [currentCourse, setCurrentCourse] = useState(null);
    const [modalContent, setModalContent] = useState(null);
    
    const fetchCourses = async () => {
        const response = await fetch('http://localhost:4001/courses');
        const data = await response.json();
        setCourses(data);
    };

    const handleDelete = async (courseId) => {
        await fetch(`http://localhost:4001/courses/${courseId}`, {
            method: 'DELETE',
        });
        setCourses(courses.filter(course => course._id !== courseId));
    };

    const handleSubmit = async (courseData) => {
        let response;
        if (currentCourse) {
            // Update course
            response = await fetch(`http://localhost:4001/courses/${currentCourse._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(courseData),
            });
        } else {
            // Add new course
            response = await fetch('http://localhost:4001/courses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(courseData),
            });
        }
        const updatedCourse = await response.json();
        if (currentCourse) {
            setCourses(courses.map(course => (course._id === updatedCourse._id ? updatedCourse : course)));
        } else {
            setCourses([...courses, updatedCourse]);
        }
        resetForm();
    };

    const resetForm = () => {
        setCurrentCourse(null);
    };

    const handleEdit = (course) => {
        setCurrentCourse(course);
    };

    const handleReadMore = (course) => {
        setModalContent(course);
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <div style={{ maxWidth: '1200px', margin: 'auto', padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Manage Courses</h2>

            <CourseForm onSubmit={handleSubmit} currentCourse={currentCourse} resetForm={resetForm} />

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {courses.map((course) => (
                    <div key={course._id} style={{ width: '30%', marginBottom: '20px' }}>
                        <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
                            <img src={course.courseImage} alt={course.courseName} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: '15px' }}>
                                <h5 style={{ margin: '0 0 10px' }}>{course.courseName}</h5>
                                <p style={{ margin: '0 0 15px' }}>{course.courseInfo}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <button 
                                        onClick={() => handleEdit(course)} 
                                        style={{ padding: '5px 10px', backgroundColor: '#17a2b8', color: '#fff', border: 'none', borderRadius: '5px' }}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(course._id)} 
                                        style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px' }}
                                    >
                                        Delete
                                    </button>
                                    <button 
                                        onClick={() => handleReadMore(course)} 
                                        style={{ padding: '5px 10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px' }}
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {modalContent && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', width: '400px' }}>
                        <h4>{modalContent.courseName}</h4>
                        <p>{modalContent.courseInfo}</p>
                        <button onClick={() => setModalContent(null)} style={{ padding: '10px 15px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px' }}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

const CourseForm = ({ onSubmit, currentCourse, resetForm }) => {
    const [courseData, setCourseData] = useState({ courseId: '', courseName: '', courseImage: '', courseInfo: '' });

    useEffect(() => {
        if (currentCourse) {
            setCourseData(currentCourse);
        } else {
            setCourseData({ courseId: '', courseName: '', courseImage: '', courseInfo: '' });
        }
    }, [currentCourse]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData({ ...courseData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(courseData);
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <h4>{currentCourse ? 'Edit Course' : 'Add Course'}</h4>
            <input
                name="courseName"
                type="text"
                placeholder="Course Name"
                style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                value={courseData.courseName}
                onChange={handleChange}
            />
            <input
                name="courseImage"
                type="text"
                placeholder="Course Image URL"
                style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                value={courseData.courseImage}
                onChange={handleChange}
            />
            <textarea
                name="courseInfo"
                placeholder="Course Info"
                style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                value={courseData.courseInfo}
                onChange={handleChange}
            />
            <button type="submit" style={{ padding: '10px 15px', backgroundColor: currentCourse ? '#28a745' : '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>
                {currentCourse ? 'Update Course' : 'Add Course'}
            </button>
            {currentCourse && (
                <button type="button" onClick={resetForm} style={{ padding: '10px 15px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', marginLeft: '10px' }}>
                    Cancel
                </button>
            )}
        </form>
    );
};

export default Course;
