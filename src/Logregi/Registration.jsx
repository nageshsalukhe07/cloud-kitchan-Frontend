import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../Logregi/Registration.css'; // Link to the updated CSS

export default function Registration() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [mobileno, setMobileNo] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [cpwd, setCpwd] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== cpwd) {
            alert('Passwords do not match!');
            return;
        }

        const userData = { name, address, email, mobileno, username, password,cpwd};

        axios.post("http://localhost:8080/api/user/register", userData)
            .then((response) => {
                alert(`Registration Successful!\nWelcome, ${name}!`);
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
                alert('Registration failed. Please try again.');
            });
    };

    return (
        <div>
            <br /><br /><br /><br />
        <div className="registration-container">
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className="registration-card">
                <h2>Sign Up</h2>
                <p className="text-muted">Create your account to get started</p>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Address" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        required 
                    />
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Mobile No" 
                        value={mobileno} 
                        onChange={(e) => setMobileNo(e.target.value)} 
                        required 
                    />
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUserName(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Confirm Password" 
                        value={cpwd} 
                        onChange={(e) => setCpwd(e.target.value)} 
                        required 
                    />
                    <button type="submit" className="btn btn-gradient w-100">Register</button>
                </form>
                <p className="mt-3 text-center">
                    Already have an account? <Link to="/" className="text-decoration-none">Sign in now</Link>
                </p>
            </div>
        </div>
        </div>
    );
}
