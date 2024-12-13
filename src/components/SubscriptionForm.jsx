import React, { useState } from 'react';

const SubscriptionForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('Subscription successful!');
    };

    return (
        <div className="p-4 bg-light rounded shadow-sm">
            <h3>Subscribe to Notifications</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
            {message && <p className="mt-3 alert alert-success">{message}</p>}
        </div>
    );
};

export default SubscriptionForm;
