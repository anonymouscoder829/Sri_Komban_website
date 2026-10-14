'use client';

import React from 'react';
import Link from 'next/link';
import TrustBar from '../../components/TrustBar';
import Newsletter from '../../components/Newsletter';

export default function AboutPage() {
  return (
    <>
      {/* ==================== PAGE HERO ==================== */}
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
          <span className="subheading-pill-light">ABOUT SRI KOMBAN TRAVELS & TOURISM</span>
          <h1>We Don't Just Plan Trips.<br />We Help Create Stories.</h1>
          <p>Every traveller has a different reason to go. Your destination is the beginning. Your experience is the story.</p>
        </div>
      </section>

      {/* ==================== WHO WE ARE ==================== */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="section-container">
          <div className="why-choose-grid">
            <div>
              <span className="subheading-pill">WHO WE ARE</span>
              <h2 className="section-title">Your Travel Idea. Our Planning. One Memorable Journey.</h2>
              <p className="section-description">
                We believe travel planning should be more than simply choosing a destination and a package.
              </p>
              <p style={{ marginTop: '16px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Based in <strong>Madurai, Tamil Nadu</strong>, we help individuals, couples, families and groups explore travel opportunities that match their plans, preferences and travel style.
              </p>
              <p style={{ marginTop: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                From Indian getaways like Andaman, Goa, and Kerala to international destinations such as Thailand, Malaysia, and Bali, we're here to help turn your travel idea into a journey.
              </p>
              <div style={{ display: 'flex', gap: '14px', marginTop: '28px' }}>
                <Link href="/packages" className="btn btn-primary">Explore Our Destinations →</Link>
                <Link href="/contact" className="btn btn-outline-teal">Talk to an Expert</Link>
              </div>
            </div>

            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img src="/images/madurai-heritage.jpg" alt="Madurai Meenakshi Temple and Cultural Roots" style={{ width: '100%', height: '380px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== OUR APPROACH ==================== */}
      <section className="section" style={{ background: 'var(--bg-subtle)' }}>
        <div className="section-container">
          <div className="text-center max-w-750">
            <span className="subheading-pill">OUR METHODOLOGY</span>
            <h2 className="section-title">Understand. Plan. Personalize. Experience.</h2>
            <p className="section-description">
              We don't hand you cookie-cutter brochures. Our 4-stage process guarantees a vacation designed around your comfort, pacing, and budget.
            </p>
          </div>

          <div className="approach-steps-grid" style={{ marginTop: '40px' }}>
            <div className="step-card" style={{ background: '#fff' }}>
              <span className="step-num">01</span>
              <h4>💬 Understand</h4>
              <p>We listen to what you want from your trip, who you are traveling with, your ideal dates, and budget parameters.</p>
            </div>
            <div className="step-card" style={{ background: '#fff' }}>
              <span className="step-num">02</span>
              <h4>🗺️ Plan</h4>
              <p>We help shape your destination route, book flights from Madurai/Chennai, arrange local transfers and handpick certified hotels.</p>
            </div>
            <div className="step-card" style={{ background: '#fff' }}>
              <span className="step-num">03</span>
              <h4>✨ Personalize</h4>
              <p>Because your journey shouldn't always feel like everyone else's. Add romantic candlelit dinners, island hopping or cultural heritage walks.</p>
            </div>
            <div className="step-card" style={{ background: '#fff' }}>
              <span className="step-num">04</span>
              <h4>🌍 Experience</h4>
              <p>The goal is simple — create an effortless, unforgettable journey from pickup to safe return home that stays in your memories for years.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE SRI KOMBAN ==================== */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="section-container">
          <div className="why-choose-banner" style={{ marginTop: 0 }}>
            <div className="why-choose-grid">
              <div className="why-choose-left">
                <span className="subheading-pill-light">🌟 WHY CHOOSE SRI KOMBAN?</span>
                <h2>Because Your Journey Deserves a Personal Touch.</h2>
                <p>Choosing a travel company isn't only about choosing a destination. It's about having the right support while turning your travel plans into a real journey.</p>
                <div className="punchline-box">
                  <p><strong>"You bring the destination dream. We help turn it into a journey."</strong></p>
                  <span>Sri Komban Travels & Tourism • Madurai, Tamil Nadu</span>
                </div>
                <Link href="/contact" className="btn btn-primary mt-20">Start Planning My Trip →</Link>
              </div>

              <div className="why-choose-right">
                <div className="why-item">
                  <span className="why-icon">📍</span>
                  <div>
                    <h4>Madurai-Based Travel Support</h4>
                    <p>Plan your journey with a dedicated local agency in Madurai that understands Tamil Nadu travelers' dietary, language, and route preferences.</p>
                  </div>
                </div>

                <div className="why-item">
                  <span className="why-icon">🌍</span>
                  <div>
                    <h4>Domestic & International Options</h4>
                    <p>Explore curated tours across India (Goa, Andaman, Kerala, Himachal) and overseas destinations (Thailand, Malaysia, Bali, Singapore).</p>
                  </div>
                </div>

                <div className="why-item">
                  <span className="why-icon">🧳</span>
                  <div>
                    <h4>Customized Travel Planning</h4>
                    <p>Discuss your schedule, preferences, and interests to explore a holiday suited directly to your group.</p>
                  </div>
                </div>

                <div className="why-item">
                  <span className="why-icon">🤝</span>
                  <div>
                    <h4>Personal 24/7 Human Assistance</h4>
                    <p>Have questions before and during your tour? Get instant human support across flights, cabs, stays, and emergency advice.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== READY TO START CTA ==================== */}
      <section className="section" style={{ background: 'var(--bg-subtle)' }}>
        <div className="section-container text-center max-w-750">
          <span className="subheading-pill">READY TO START YOUR JOURNEY?</span>
          <h2 className="section-title">Where Will Your Story Take You Next?</h2>
          <p className="section-description">
            Thailand? Malaysia? Bali? Andaman? Goa? Or somewhere completely different? Tell us where you want to go. Let's start planning.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '30px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Plan My Trip →</Link>
            <Link href="/packages" className="btn btn-outline-teal btn-lg">Explore Tour Packages →</Link>
          </div>
        </div>
      </section>

      <TrustBar />
      <Newsletter />
    </>
  );
}
