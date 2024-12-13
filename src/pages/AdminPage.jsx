import React, { useEffect, useState } from 'react';
import api from '../api';

const AdminPage = () => {
    const [demoRequests, setDemoRequests] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchDemoRequests = async () => {
            try {
                const response = await api.get('/demo-requests', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setDemoRequests(response.data);
            } catch (error) {
                setError('Eroare la încărcarea cererilor demo.');
            }
        };

        fetchDemoRequests();
    }, []);
    
    const handleApprove = async (id) => {
        try {
            await api.put(
                `/demo-requests/${id}`,
                { status: 'approved' },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            setDemoRequests((prev) =>
                prev.map((request) =>
                    request.id === id ? { ...request, status: 'approved' } : request
                )
            );
        } catch (error) {
            alert('Eroare la aprobarea cererii.');
        }
    };
    
    const handleReject = async (id) => {
        try {
            await api.put(
                `/demo-requests/${id}`,
                { status: 'rejected' },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            setDemoRequests((prev) =>
                prev.map((request) =>
                    request.id === id ? { ...request, status: 'rejected' } : request
                )
            );
        } catch (error) {
            alert('Eroare la respingerea cererii.');
        }
    };
    

    return (
        <div>
            <h2>Panou Administrativ</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <h3>Cereri Demo</h3>
            <ul>
                {demoRequests.map((request) => (
                    <li key={request.id}>
                        <p>
                            <strong>Companie:</strong> {request.company_name}
                        </p>
                        <p>
                            <strong>Număr de contact:</strong> {request.contact_number}
                        </p>
                        <p>
                            <strong>Status:</strong> {request.status}
                        </p>
                        <button onClick={() => handleApprove(request.id)}>Aprobă</button>
                        <button onClick={() => handleReject(request.id)}>Respinge</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPage;
