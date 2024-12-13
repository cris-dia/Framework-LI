import React, { useState, useEffect } from 'react';
import {  Routes, Route, Link, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';
import DemoRequestPage from './pages/DemoRequestPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
       
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        setIsAuthenticated(!!token); // True dacă token-ul există
        setIsAdmin(role === 'admin'); // True dacă rolul este admin
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setIsAuthenticated(false);
        setIsAdmin(false);
        setRefresh(!refresh);
        navigate('/login');
    };


    return (
        
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/">OptiTools</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            {!isAuthenticated && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </li>
                                </>
                            )}
                            {isAuthenticated && isAdmin && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/admin">Admin</Link>
                                </li>
                            )}
                            {isAuthenticated && (
                                <li className="nav-item">
                                    <button className="btn btn-danger nav-link" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    {isAuthenticated && isAdmin && <Route path="/admin" element={<AdminPage />} />}
                    <Route path="/demo-request" element={<DemoRequestPage />} />
                    <Route path="*" element={<h2>404 - Page Not Found</h2>} />
                </Routes>
            </div>
        </div>
   
    );
};

export default App;
