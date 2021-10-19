import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useLocation, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import useAuth from '../hook/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    const auth = getAuth()
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
    const [error, setError] = useState('');
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password)
        if (password.length < 6) {
            setError("Password Must Be At Least 6 Characters")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                setError(error.message)
            })


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
                <div className="mb-3 text-danger">{error}</div>
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