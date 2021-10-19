import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Register = () => {
    return (

        <div>
            <Header></Header>

            <h3>Please Register Account</h3>
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
            <button className="btn btn-primary">Register With Google</button>
            <p>Have Any Account? <Link to="/login">Login Account</Link> </p>
        </div>
    );
};

export default Register;