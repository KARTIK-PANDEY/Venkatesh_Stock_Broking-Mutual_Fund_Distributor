// src/components/SIPCalculator.jsx
import React, { useState, useEffect } from 'react';
import './SIPCalculator.css';

const SIPCalculator = () => {
    const [investment, setInvestment] = useState(5000);
    const [rate, setRate] = useState(12);
    const [years, setYears] = useState(10);
    const [result, setResult] = useState({ invested: 0, returns: 0, total: 0 });

    useEffect(() => {
        const monthlyRate = rate / 12 / 100;
        const months = years * 12;
        const totalValue = investment * (Math.pow(1 + monthlyRate, months) - 1) * (1 + monthlyRate) / monthlyRate;
        const investedAmount = investment * months;
        const returnsAmount = totalValue - investedAmount;

        setResult({
            invested: Math.round(investedAmount),
            returns: Math.round(returnsAmount),
            total: Math.round(totalValue)
        });
    }, [investment, rate, years]);

    return (
        <section className="calculator-section" id="calculators">
            <div className="container">
                <h2 className="section-title">SIP Calculator</h2>
                <div className="calculator-wrapper">
                    <div className="calculator-inputs">
                        <div className="input-group">
                            <label>Monthly Investment (₹)</label>
                            <input
                                type="range" min="500" max="100000" step="500"
                                value={investment} onChange={(e) => setInvestment(Number(e.target.value))}
                            />
                            <div className="input-value">₹ {investment.toLocaleString()}</div>
                        </div>
                        <div className="input-group">
                            <label>Expected Return Rate (p.a) %</label>
                            <input
                                type="range" min="1" max="30" step="0.5"
                                value={rate} onChange={(e) => setRate(Number(e.target.value))}
                            />
                            <div className="input-value">{rate} %</div>
                        </div>
                        <div className="input-group">
                            <label>Time Period (Years)</label>
                            <input
                                type="range" min="1" max="40" step="1"
                                value={years} onChange={(e) => setYears(Number(e.target.value))}
                            />
                            <div className="input-value">{years} Years</div>
                        </div>
                    </div>
                    <div className="calculator-results">
                        <div className="result-item">
                            <span>Invested Amount</span>
                            <h3>₹ {result.invested.toLocaleString()}</h3>
                        </div>
                        <div className="result-item">
                            <span>Est. Returns</span>
                            <h3>₹ {result.returns.toLocaleString()}</h3>
                        </div>
                        <div className="result-item total">
                            <span>Total Value</span>
                            <h3>₹ {result.total.toLocaleString()}</h3>
                        </div>
                        <a href="#contact" className="btn btn-primary btn-block">Start Investing Now</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SIPCalculator;
