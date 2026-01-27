import React, { useState } from 'react';
import { Mail, Lock, User, TrendingUp, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);

            // Check for admin credentials
            if (formData.email === 'admin@venkatesh.com' && formData.password === 'admin123') {
                login({
                    id: 'admin',
                    name: 'Admin',
                    email: formData.email,
                    role: 'admin'
                });
            } else {
                // Regular user login
                login({
                    id: 'user-' + Date.now(),
                    name: 'Valued Client',
                    email: formData.email,
                    role: 'user'
                });
            }
        }, 1500);
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-header">
                    <div className="login-logo">
                        <TrendingUp size={32} />
                        <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>Shri Venkatesh Stock Broker</span>
                    </div>
                    <h2 className="login-title">Welcome Back</h2>
                    <p className="login-subtitle">Secure access to your portfolio</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email Address</label>
                        <div className="form-input-wrapper">
                            <Mail className="form-input-icon" size={20} />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password</label>
                        <div className="form-input-wrapper">
                            <Lock className="form-input-icon" size={20} />
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                className="form-input"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                className="form-input-icon"
                                style={{ left: 'auto', right: '1rem', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <div className="form-options">
                        <label className="remember-me">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                            />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="forgot-password">Forgot Password?</a>
                    </div>

                    <button type="submit" className="btn btn-primary login-btn" disabled={isLoading}>
                        {isLoading ? 'Authenticating...' : (
                            <>
                                Sign In <ArrowRight size={20} />
                            </>
                        )}
                    </button>
                </form>

                <div className="login-divider">
                    <span>or continue with</span>
                </div>

                {/* Optional: Social Login Mockups if needed, but for now simple divider is enough for design */}

                <p className="signup-link">
                    Don't have an account?
                    <Link to="/signup">Apply for Account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
