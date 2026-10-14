'use client';

import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <section className="newsletter-section">
      <div className="section-container">
        <div className="newsletter-card">
          <div className="newsletter-info">
            <div className="newsletter-icon-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </div>
            <div>
              <h3>Subscribe to Our Newsletter</h3>
              <p>Get the best travel deals, secret packages and seasonal offers straight to your inbox.</p>
            </div>
          </div>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address" 
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-submit-btn">
              {subscribed ? 'Subscribed! ✔' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
