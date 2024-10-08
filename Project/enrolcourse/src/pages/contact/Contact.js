// Contact.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (name && emailPattern.test(email) && message) {
            setSuccess(true);
            setError('');
            setName('');
            setEmail('');
            setPhone('');
            setSubject('');
            setMessage('');
        } else {
            setError('Please fill in all fields correctly.');
            setSuccess(false);
        }
    };

    return (
        <>
            <h1 className="text-center mb-4">Contact Us</h1>
                <Container style={{ marginTop: '50px',marginBottom:'40px' }}>
                    
                    {success && <Alert variant="success">Your message has been sent successfully!</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-dark" style={{color:'white'}}>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter the subject"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Your message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Send Message
                        </Button>
                    </Form>
                </Container>
        </>
    );
}

export default Contact;



// SlidingText.js


// import React from 'react';
// import './SlidingText.css'; // Import the CSS file

// function SlidingText() {
//     return (
//         <div className="sliding-text-container">
//             <div className="sliding-text">
//                 <span>Welcome to our Course Enrollment!</span>
//                 <span>Join our community and earn certificates!</span>
//                 <span>Start learning today!</span>
//             </div>
//         </div>
//     );
// }

// export default SlidingText;
