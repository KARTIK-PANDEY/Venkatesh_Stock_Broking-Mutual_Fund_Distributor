// src/components/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>We're here to help you grow.</h3>
                        <p>Have questions about Mutual Funds or need expert financial advice? Reach out to us today.</p>

                        <div className="info-item">
                            <i className="fas fa-map-marker-alt" style={{ fontStyle: 'normal' }}>📍</i>
                            <div>
                                <h4>Head Office</h4>
                                <p>C- 21/22, Shyam Market, Pandri, Raipur, Chhattisgarh - 492001</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-phone" style={{ fontStyle: 'normal' }}>📞</i>
                            <div>
                                <h4>Call Us</h4>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-envelope" style={{ fontStyle: 'normal' }}>✉️</i>
                            <div>
                                <h4>Email Us</h4>
                                <p>kartik0pandey00@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <input type="tel" placeholder="Your Phone" required />
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
