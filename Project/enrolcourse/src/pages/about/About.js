// About.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
    return (
        <Container style={{ marginTop: '50px' }}>
            <h1 className="text-center mb-4">About Our Courses</h1>
            <Row>
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Our Mission</Card.Title>
                            <Card.Text>
                                Our mission is to provide high-quality education to all students. We believe in empowering individuals through knowledge and skills that prepare them for success in their careers.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Course Offerings</Card.Title>
                            <Card.Text>
                                We offer a variety of courses in multiple fields including technology, business, arts, and sciences. Our courses are designed to be practical and engaging, ensuring you gain real-world skills.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Enrollment Process</Card.Title>
                            <Card.Text>
                                Enrolling in our courses is easy! Simply create an account, log in, and choose the course you wish to enroll in. If you have any questions, our support team is here to help.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Why Choose Us?</Card.Title>
                            <Card.Text>
                                We are committed to providing an exceptional learning experience. With experienced instructors, a supportive community, and flexible online courses, you can learn at your own pace.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Our Community</Card.Title>
                            <Card.Text>
                                Join a vibrant community of learners who are passionate about education. We offer various certificates upon course completion, recognizing your achievements and enhancing your career prospects. 
                                Our community is here to support you every step of the way, providing networking opportunities and fostering collaboration.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
