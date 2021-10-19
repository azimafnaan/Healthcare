import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import './Login.css';
const Login = () => {
    return (
        <div>
            <Header></Header>
            <h3>Please Log in Your Account</h3>
            <Form className="form">
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <button className="btn btn-primary">Login With Google</button>
            <p>Don't Have Any Account? <Link to="/register">Register Account</Link> </p>
        </div>
    );
};

export default Login;