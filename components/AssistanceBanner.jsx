'use client';

import React from 'react';
import Link from 'next/link';

export default function AssistanceBanner() {
  const handleWhatsAppHelp = () => {
    const msg = "Hi Sri Komban Travels! I need assistance planning my holiday package from Madurai. Please connect me with a tour expert.";
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
            <span className="assistance-sub">💬 LOCAL MADURAI TRAVEL ADVISORS</span>
            <h2 className="assistance-title">Planning a Trip? Talk to a Human Specialist</h2>
            <p className="assistance-desc">
              Skip the complicated planning. Speak directly with our destination coordinators in Madurai for personalized itineraries, flight tickets, visa guidance, and transparent quotes.
            </p>
            
            <div className="assistance-btns">
              <button onClick={handleWhatsAppHelp} className="btn btn-whatsapp">
                <span>💬 WhatsApp Quick Chat</span>
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
