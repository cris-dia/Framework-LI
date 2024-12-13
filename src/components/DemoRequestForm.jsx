import React, { useState } from 'react';
import api from '../api'; 

const DemoRequestForm = () => {
    const [company, setCompany] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await api.post('/demo-requests', {
                company_name: company, 
                contact_number: contact, 
            });
            setMessage('Demo request submitted successfully!');
            setError('');
            setCompany('');
            setContact('');
        } catch (err) {
            if (err.response) {
                console.error(err.response.data);
                setError(err.response.data.errors || 'Failed to submit demo request.');
            } else {
                setError('An unexpected error occurred.');
            }
        }
    };
    

    return (
        <div className="p-4 bg-light rounded shadow-sm">
            <h3>Request a Demo</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="company" className="form-label">Company Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="company"
                        placeholder="Your Company Name"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="contact" className="form-label">Contact Number:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="contact"
                        placeholder="Your Contact Number"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {message && <p className="mt-3 alert alert-success">{message}</p>}
            {error && <p className="mt-3 alert alert-danger">{error}</p>}
        </div>
    );
};

export default DemoRequestForm;
