import React from 'react';

const Header = () => (
    <header className="bg-dark text-white text-center py-5">
        <div className="container">
            <img src="/logo.png" alt="OptiTools Logo" className="mb-4" style={{ width: '150px' }} />
            <h1 className="display-4">OptiTools</h1>
            <p className="lead">Enhancing BGP Route Optimization for Next-Level Network Performance</p>
        </div>
    </header>
);

export default Header;
