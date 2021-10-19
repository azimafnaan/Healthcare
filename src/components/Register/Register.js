import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import useAuth from '../hook/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'
    const handleGoogleSingUp = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleRegistration = e => {
        console.log(email, password)
        e.preventDefault();
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    return (

        <div>
            <Header></Header>
            <h3>Please Register Account</h3>
            <Form onSubmit={handleRegistration} className="form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmailChange} type="email" required placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control required onBlur={handlePasswordChange} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <button onClick={handleGoogleSingUp} className="btn btn-primary">Register With Google</button>
            <p>Have Any Account? <Link to="/login">Login Account</Link> </p>
        </div>
    );
};

export default Register;