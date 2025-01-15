import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../Logregi/Login.css'; // External CSS file for additional styles

export default function Loginn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State to manage error messages
    const navigate = useNavigate();

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Admin credentials
        const adminUsername = "admin";
        const adminPassword = "admin123";

        if (username === adminUsername && password === adminPassword) {
            localStorage.setItem('username', adminUsername);
            setErrorMessage('Admin login successful!');
            navigate('/admindashboard');
            return; // Exit the function to avoid further API calls
        }

        axios
            .get(`http://localhost:8080/api/user/login?username=${username}&password=${password}`)
            .then((response) => {
                if (response.data !== "Invalid username or password") {
                    const responseMessage = response.data;
                    const userId = responseMessage.replace(/[^0-9]/g, '');

                    if (userId) {
                        localStorage.setItem('username', username);
                        localStorage.setItem('userId', userId);
                        alert('Login successful! User ID: ' + userId);
                        navigate('/dashboard');
                    }
                } else {
                    setErrorMessage('Invalid username or password. Please try again.');
                }
            })
            .catch((error) => {
                console.error('Login error:', error);
                setErrorMessage('An error occurred while logging in. Please try again later.');
            });
    };

    return (
        <div>
            <br /><br />
            <div className="login-page-alt d-flex align-items-center justify-content-center">
                <div className="login-card p-4 shadow-lg">
                    <h2 className="text-center mb-3">Log In</h2>
                    <p className="text-center text-muted">Enter your credentials to continue</p>
                    {errorMessage && <div className="alert alert-danger text-center">{errorMessage}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={handleUsernameChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-gradient w-100">Login</button>
                        <p className="mt-3 text-center">
                            Don't have an account? <Link to="/register" className="text-decoration-none">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
