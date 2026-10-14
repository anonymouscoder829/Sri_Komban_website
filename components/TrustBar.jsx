'use client';

import React from 'react';

export default function TrustBar() {
  return (
    <section className="trust-bar-section">
      <div className="section-container">
        <div className="trust-bar-grid">
          <div className="trust-item">
            <div className="trust-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div className="trust-text">
              <h4>100+ Destinations</h4>
              <p>Handcrafted Itineraries</p>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div className="trust-text">
              <h4>Transparent Pricing</h4>
              <p>No Hidden Costs Guaranteed</p>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <div className="trust-text">
              <h4>1,200+ Happy Families</h4>
              <p>Verified 4.9★ Google Reviews</p>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            <div className="trust-text">
              <h4>24/7 Human Concierge</h4>
              <p>Direct Assistance on Trip</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
