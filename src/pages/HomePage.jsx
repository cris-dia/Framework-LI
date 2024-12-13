import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/custom.css";
const HomePage = () => (
    <div>
       
        <section className="bg-dark text-white text-center py-5" style={{ backgroundImage: 'url("/hero-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container">
                <h1 className="display-3 fw-bold">Welcome to OptiTools</h1>
                <p className="lead">Revolutionizing BGP Route Optimization for Maximum Network Efficiency</p>
                <Link to="/demo-request" className="btn btn-primary btn-lg mt-4">Request a Demo</Link>
            </div>
        </section>

       
        <section className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src="/about-image.png" alt="About OptiTools" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-6">
                        <h2>About OptiTools</h2>
                        <p>
                            OptiTools is a cutting-edge solution designed to optimize Border Gateway Protocol (BGP) routing, ensuring enhanced performance and cost efficiency for your network.
                        </p>
                        <p>
                            With advanced algorithms and intuitive analytics, OptiTools empowers network administrators to make data-driven decisions, streamline traffic, and minimize downtime.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Features Section */}
        <section className="bg-light py-5">
    <div className="container-fluid text-center">
        <h2 className="mb-4">Key Features</h2>
        <div className="row">
            <div className="col-md-4">
                <img
                    src="/feature1.png"
                    alt="Feature 1"
                    className="img-fluid mb-3"
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <h4>Advanced BGP Analytics</h4>
                <p>Gain unparalleled insights into network traffic with detailed analytics and reports.</p>
            </div>
            <div className="col-md-4">
                <img
                    src="/feature2.jpg"
                    alt="Feature 2"
                    className="img-fluid mb-3"
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <h4>Real-Time Optimization</h4>
                <p>Automatically adjust routing in real time to maximize network efficiency.</p>
            </div>
            <div className="col-md-4">
                <img
                    src="/feature3.jpg"
                    alt="Feature 3"
                    className="img-fluid mb-3"
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <h4>Cost Management</h4>
                <p>Reduce bandwidth costs while maintaining high performance and reliability.</p>
            </div>
        </div>
    </div>
</section>



        {/* Call to Action Section */}
        <section className="py-5 text-center bg-primary text-white">
    <div className="container-fluid">
        <h2>Experience the Future of BGP Optimization</h2>
        <p className="lead">Start optimizing your network today with OptiTools.</p>
        <Link to="/register" className="btn btn-light btn-lg">Get Started</Link>
    </div>
</section>


        {/* Documentation Section */}
        <section className="documentation-section">
    <div className="container">
        <h2 className="text-center">Documentation</h2>
        <ul className="list-unstyled text-center">
            <li className="mb-3">
                <a href="/technical-requirements.pdf" target="_blank">Technical Requirements</a>
            </li>
            <li className="mb-3">
                <a href="/complete-documentation.pdf" target="_blank">Complete Documentation</a>
            </li>
            <li>
                <a href="/faq.pdf" target="_blank">FAQ</a>
            </li>
        </ul>
    </div>
</section>

    </div>
);

export default HomePage;
