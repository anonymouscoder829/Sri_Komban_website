'use client';

import React from 'react';
import Link from 'next/link';
import OfferCTA from '../../components/OfferCTA';

export default function AboutPage() {
  return (
    <div className="tourist-page-wrap">
      {/* ==================== PAGE HERO ==================== */}
      <section className="tourist-sub-hero">
        <div className="tourist-container text-center">
          <div className="tourist-breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
          <h1 className="tourist-page-title">We Don't Just Plan Trips. We Help Create Stories.</h1>
          <p className="tourist-page-subtitle">
            Every traveller has a different reason to go. A family holiday. A romantic escape. A trip with friends. A sacred temple pilgrimage or mountain getaway. Whatever your reason, your journey should feel personal.
          </p>
          <div className="section-cta-center" style={{ marginTop: '20px' }}>
            <Link href="/contact" className="btn-tourist-primary">
              Start Planning My Journey →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== WHO WE ARE ==================== */}
      <section className="tourist-section" style={{ background: '#ffffff' }}>
        <div className="tourist-container">
          <div className="contact-card-grid">
            <div>
              <h2 className="tourist-sec-title">Who We Are</h2>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-blue-dark)', marginBottom: '14px' }}>
                Your Travel Idea. Our Planning. One Memorable Journey.
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '14px' }}>
                We believe travel planning should be more than simply choosing a destination and a package.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '14px' }}>
                Based in Madurai, Tamil Nadu, we help individuals, couples, families and groups explore travel opportunities that match their plans, preferences and travel style.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px' }}>
                From sacred temple circuits in Madurai, Rameswaram, and Thanjavur to misty hill stations like Ooty, Kodaikanal, and Munnar backwaters, we're here to help turn your travel idea into a memorable journey.
              </p>
              <Link href="/destinations" className="btn-tourist-primary">
                Explore Our Destinations →
              </Link>
            </div>

            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(15, 23, 42, 0.08)' }}>
              <img 
                src="/images/madurai-heritage.jpg" 
                alt="Madurai Heritage and Sri Komban Travels" 
                style={{ width: '100%', height: '100%', minHeight: '320px', objectFit: 'cover' }} 
              />
            </div>
          </div>
        </div>
      </section>


      {/* ==================== WHY CHOOSE SRI KOMBAN? ==================== */}
      <section className="tourist-section" style={{ background: '#ffffff' }}>
        <div className="tourist-container">
          <div className="section-head-center">
            <h2 className="tourist-sec-title">Why Choose Sri Komban?</h2>
            <p className="tourist-sec-desc">Because Your Journey Deserves a Personal Touch.</p>
          </div>

          <div className="why-choose-grid">
            <div className="why-card">
              <h3 className="why-title">Madurai-Based Travel Support</h3>
              <p className="why-desc">Plan your journey with a travel company based in Madurai.</p>
            </div>

            <div className="why-card">
              <h3 className="why-title">Tamil Nadu &amp; South India Tours</h3>
              <p className="why-desc">Explore tailored travel packages and sanitized fleet rentals across Tamil Nadu, Kerala, and beyond.</p>
            </div>

            <div className="why-card">
              <h3 className="why-title">Customized Travel Planning</h3>
              <p className="why-desc">Discuss your requirements and explore a journey suited to your plans.</p>
            </div>

            <div className="why-card">
              <h3 className="why-title">Personal Assistance</h3>
              <p className="why-desc">Get support while planning your destination, package and travel requirements.</p>
            </div>
          </div>

          <OfferCTA 
            badge="BEST VALUE TRAVEL PARTNER"
            title="Wherever You Want to Go, We Can Do That at the Best Offer!"
            desc="Whether planning a hill station honeymoon, a sacred temple pilgrimage, or a family holiday from Madurai, enjoy personalized itineraries and our best price guarantee."
            waText="Hi Sri Komban Travels, I'm interested in planning a trip at the best offer!"
            secondaryBtnText="Explore Tour Packages →"
            secondaryBtnHref="/packages"
          />
        </div>
      </section>
    </div>
  );
}
