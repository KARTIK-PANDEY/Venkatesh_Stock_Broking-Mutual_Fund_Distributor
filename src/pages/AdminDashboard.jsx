import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Trash2, Search, Download } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [requests, setRequests] = useState([]);
    const [investmentRequests, setInvestmentRequests] = useState([]);
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Load records from localStorage
        const loadedRequests = JSON.parse(localStorage.getItem('contactRequests') || '[]');
        setRequests(loadedRequests);

        const loadedInvestments = JSON.parse(localStorage.getItem('investmentRequests') || '[]');
        setInvestmentRequests(loadedInvestments);
    }, []);

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            logout();
        }
    };

    const handleDelete = (id, type) => {
        if (window.confirm('Delete this record?')) {
            if (type === 'contact') {
                const updatedRequests = requests.filter(req => req.id !== id);
                setRequests(updatedRequests);
                localStorage.setItem('contactRequests', JSON.stringify(updatedRequests));
            } else {
                const updatedInvestments = investmentRequests.filter(req => req.id !== id);
                setInvestmentRequests(updatedInvestments);
                localStorage.setItem('investmentRequests', JSON.stringify(updatedInvestments));
            }
        }
    };

    const handleClearAll = (type) => {
        if (window.confirm(`Are you sure you want to delete ALL ${type} records?`)) {
            if (type === 'contact') {
                setRequests([]);
                localStorage.removeItem('contactRequests');
            } else {
                setInvestmentRequests([]);
                localStorage.removeItem('investmentRequests');
            }
        }
    };

    return (
        <div className="admin-dashboard">
            <header className="admin-header">
                <div className="container header-content">
                    <h1>Admin Dashboard</h1>
                    <div className="header-actions">
                        <button className="btn btn-outline" onClick={handleLogout}>
                            <LogOut size={18} /> Logout
                        </button>
                    </div>
                </div>
            </header>

            <main className="container admin-content">
                <div className="dashboard-stats">
                    <div className="stat-card">
                        <h3>Total Inquiries</h3>
                        <p className="stat-number">{requests.length}</p>
                    </div>
                    <div className="stat-card">
                        <h3>Investment Interests</h3>
                        <p className="stat-number" style={{ color: '#10b981' }}>{investmentRequests.length}</p>
                    </div>
                </div>

                {/* Investment Requests Section */}
                <div className="records-section" style={{ marginBottom: '2rem' }}>
                    <div className="section-header">
                        <h2>SIP Investment Interests</h2>
                        {investmentRequests.length > 0 && (
                            <button className="btn-text delete-all" onClick={() => handleClearAll('investment')}>
                                <Trash2 size={16} /> Clear All
                            </button>
                        )}
                    </div>

                    {investmentRequests.length === 0 ? (
                        <div className="empty-state">
                            <p>No investment interests recorded yet.</p>
                        </div>
                    ) : (
                        <div className="table-responsive">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>Contact</th>
                                        <th>Planned Investment</th>
                                        <th>Goal</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {investmentRequests.map((req) => (
                                        <tr key={req.id}>
                                            <td>{req.date}</td>
                                            <td><strong>{req.name}</strong></td>
                                            <td>
                                                <div>{req.email}</div>
                                                <small>{req.phone}</small>
                                            </td>
                                            <td>
                                                <div style={{ color: '#10b981', fontWeight: 'bold' }}>₹ {req.investmentDetails.monthlyInvestment.toLocaleString()}/mo</div>
                                                <small>{req.investmentDetails.timePeriod} Years @ {req.investmentDetails.expectedRate}%</small>
                                            </td>
                                            <td>
                                                Target: ₹ {req.investmentDetails.projectedTotal.toLocaleString()}
                                            </td>
                                            <td>
                                                <button
                                                    className="action-btn delete"
                                                    onClick={() => handleDelete(req.id, 'investment')}
                                                    title="Delete"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Contact Requests Section */}
                <div className="records-section">
                    <div className="section-header">
                        <h2>General Inquiries</h2>
                        {requests.length > 0 && (
                            <button className="btn-text delete-all" onClick={() => handleClearAll('contact')}>
                                <Trash2 size={16} /> Clear All
                            </button>
                        )}
                    </div>

                    {requests.length === 0 ? (
                        <div className="empty-state">
                            <p>No contact requests found yet.</p>
                        </div>
                    ) : (
                        <div className="table-responsive">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Message</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {requests.map((req) => (
                                        <tr key={req.id}>
                                            <td>{req.date}</td>
                                            <td><strong>{req.name}</strong></td>
                                            <td>{req.email}</td>
                                            <td>{req.phone}</td>
                                            <td className="msg-cell" title={req.message}>{req.message}</td>
                                            <td>
                                                <button
                                                    className="action-btn delete"
                                                    onClick={() => handleDelete(req.id, 'contact')}
                                                    title="Delete"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
