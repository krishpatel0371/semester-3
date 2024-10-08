import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [college, setCollege] = useState('');
    const [semester, setSemester] = useState('');
    const [field, setField] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // State for password visibility
    const navigate = useNavigate(); // Hook to navigate programmatically

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrorMessage('');

        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setErrorMessage('Please enter a valid email address.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:4001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName: username,
                    email,
                    phoneNumber: phone,
                    collegeName: college,
                    semester,
                    fieldOfStudy: field,
                    password,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to register. Please try again.');
            }

            const data = await response.json();

            console.log('Login successful:', data); // Remove this in production


            // Reset form fields
            setUsername('');
            setEmail('');
            setPhone('');
            setCollege('');
            setSemester('');
            setField('');
            setPassword('');

            // Provide feedback
            alert('Registration successful! You can now log in.'); // Replace with a more user-friendly notification
            navigate('/Log in'); // Redirect to login page after successful registration
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container style={{ marginBottom: '50px' }}>
            <Row className="justify-content-md-center mt-2" style={{ width: '1000px' }}>
                <Col xs={12} md={6}>
                    <h2 className="text-center mb-4">Sign In</h2>
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                    <Form onSubmit={handleSubmit} className="p-4 border rounded shadow">
                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="formBasicUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="formBasicPhone">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        placeholder="Enter phone number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicCollege">
                                    <Form.Label>College Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter college name"
                                        value={college}
                                        onChange={(e) => setCollege(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="formBasicSemester">
                                    <Form.Label>Semester</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter semester"
                                        value={semester}
                                        onChange={(e) => setSemester(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicField">
                                    <Form.Label>Field of Study</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter field of study"
                                        value={field}
                                        onChange={(e) => setField(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <div className="input-group">
                                <Form.Control
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <Button 
                                    variant="outline-secondary" 
                                    onClick={togglePasswordVisibility} 
                                    type="button"
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </Button>
                            </div>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mb-3" disabled={loading}>
                            {loading ? 'Signing In...' : 'Sign In'}
                        </Button>

                        <div className="text-center">
                            <span>Already have an account? </span>
                            <Link to="/Log in">Log in</Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default SignIn;
