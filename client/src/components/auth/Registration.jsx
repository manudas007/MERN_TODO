import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css'
import axios from 'axios'

const SignUp = () => {
    const navigate = useNavigate();
    const baseUrl = "http://localhost:3001/auth"
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        console.log(formData);
        axios.post(`${baseUrl}/register`, {
            name: formData.name,
            email: formData.email,
            password: formData.password
        }).then((response) => {
            console.log(response);
            navigate('/TodoHomepage')

        }).catch((error) => {
            console.error('Registration failed:', error);
        });
        nameRef.current.value = '';
        emailRef.current.value = '';
        passwordRef.current.value = '';
    };

    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" ref={nameRef} id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" ref={emailRef} id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" ref={passwordRef} id="password" name="password" required />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
