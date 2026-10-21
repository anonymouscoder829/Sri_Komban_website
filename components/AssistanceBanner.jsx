'use client';

import React from 'react';
import Link from 'next/link';

export default function AssistanceBanner() {
  const handleWhatsAppHelp = () => {
    const msg = "Hi Shanti Travels! I need assistance planning my holiday package. Please connect me with a tour expert.";
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="section assistance-banner-section">
      <div className="section-container">
        <div 
          className="assistance-banner" 
          style={{ backgroundImage: "linear-gradient(rgba(1, 48, 63, 0.88), rgba(0, 109, 119, 0.88)), url('/images/assistance-banner.jpg')" }}
        >
          <div className="assistance-content">
            <span className="assistance-sub">LOCAL MADURAI TRAVEL ADVISORS</span>
            <h2 className="assistance-title">Planning a Trip? Talk to a Human Specialist</h2>
            <p className="assistance-desc">
              Skip the complicated planning. Speak directly with our destination coordinators in Madurai for personalized itineraries, flight tickets, visa guidance, and transparent quotes.
            </p>
            
            <div className="assistance-btns">
              <button onClick={handleWhatsAppHelp} className="btn btn-whatsapp">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '16px', height: '16px', marginRight: '6px' }}>
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 16.79c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.136 8.136 0 0 1-1.25-4.33c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.41 3.61 2.41 5.8-.01 4.52-3.69 8.19-8.17 8.19zm4.49-6.14c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.72 4.31 3.81.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1 1.08-.07 1.47-.74 1.47-1.26 0-.27-.08-.43-.33-.55z"/>
                </svg>
                <span>WhatsApp Quick Chat</span>
              </button>
              <a href="tel:+919876543210" className="btn btn-glass-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="btn-icon-call">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.28.37-.67.25-1.02A11.36 11.36 0 0 1 8.5 4.31c0-.55-.45-1-1-1H4.11c-.55 0-1 .45-1 1C3.11 13.9 10.1 20.89 19.89 20.89c.55 0 1-.45 1-1v-3.39c0-.55-.45-1-1-1.12z"/>
                </svg>
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>

          <div className="assistance-features">
            <div className="assistance-feature-item">
              <div className="feat-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div className="feat-info">
                <h4>Direct Quotations</h4>
                <p>Tailored within 15 mins</p>
              </div>
            </div>

            <div className="assistance-feature-item">
              <div className="feat-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div className="feat-info">
                <h4>24/7 On-Trip Call</h4>
                <p>Emergency assistance anytime</p>
              </div>
            </div>

            <div className="assistance-feature-item">
              <div className="feat-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <div className="feat-info">
                <h4>Verified Stays</h4>
                <p>4★/5★ Handpicked Resorts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
