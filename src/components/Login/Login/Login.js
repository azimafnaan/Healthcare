import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Header from '../../Header/Header';
import useAuth from '../../hook/useAuth';
import './Login.css';
const Login = (props) => {
    const { handleEmailChange, handlePasswordChange } = props;
    const { signInUsingGoogle } = useAuth();
    const auth = getAuth();
    const [isLogin, setIsLogin] = useState(false)
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }




    return (
        <div>
            <Header></Header>
            <h3>Please Log in Your Account</h3>
            <Form className="form">
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <button onClick={handleGoogleLogin} className="btn btn-primary">Login With Google</button>
            <p>Don't Have Any Account? <Link to="/register">Register Account</Link> </p>
        </div>
    );
};

export default Login;