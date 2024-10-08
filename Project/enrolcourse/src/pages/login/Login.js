import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [identifier, setIdentifier] = useState(''); // State for email or username
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Hook to navigate programmatically

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrorMessage('');
    
        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (identifier.includes('@') && !emailPattern.test(identifier)) {
            setErrorMessage('Please enter a valid email address.');
            setLoading(false);
            return;
        }
    
        try {
            const response = await fetch('http://localhost:4001/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: identifier.includes('@') ? identifier : undefined,
                    userName: !identifier.includes('@') ? identifier : undefined,
                    password,
                }),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                // Use a default error message if none is provided
                throw new Error(errorData.message || 'Invalid credentials. Please try again.');
            }
    
            const data = await response.json();
    
            // Handle successful login
            console.log('Login successful:', data); // Remove this in production
            alert('Login successful!'); // Replace with a more user-friendly notification
            navigate('/home'); // Navigate to the desired route on successful login
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
        <Container style={{ marginBottom: '100px' }}>
            <Row className="justify-content-md-center mt-5" style={{ width: '1000px' }}>
                <Col xs={12} md={6}>
                    <h2 className="text-center mb-4">Login</h2>
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                    <Form onSubmit={handleSubmit} className="p-4 border rounded shadow">
                        <Form.Group className="mb-3" controlId="formBasicIdentifier">
                            <Form.Label>Email or Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter email or username"
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                                required
                            />
                        </Form.Group>

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
                            {loading ? (
                                <>
                                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                    Logging in...
                                </>
                            ) : (
                                'Login'
                            )}
                        </Button>
                        
                        <div className="text-center">
                            <span>Don't have an account? </span>
                            <Link to="/sign-in">Sign up</Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
