import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const baseUrl = 'http://localhost:3001/auth';
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        console.log(formData);
        axios
            .post(`${baseUrl}/login`, {
                email: formData.email,
                password: formData.password,
            })
            .then((response) => {
                console.log(response);
                navigate('/TodoHomepage');
            })
            .catch((error) => {
                console.error('Login failed:', error);
            });
        emailRef.current.value = '';
        passwordRef.current.value = '';
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" ref={emailRef} id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" ref={passwordRef} id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
