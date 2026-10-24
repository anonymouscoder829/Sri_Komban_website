'use client';

import React from 'react';
import Link from 'next/link';
import OfferCTA from '../../components/OfferCTA';
import { testimonialsList } from '../../lib/testimonialsData';

export default function TestimonialsPage() {
  return (
    <div className="tourist-page-wrap">
      {/* Subpage Hero */}
      <section className="tourist-sub-hero">
        <div className="tourist-container text-center">
          <div className="tourist-breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Testimonials</span>
          </div>
          <span className="tourist-subpill">AUTHENTIC TRAVELER STORIES</span>
          <h1 className="tourist-page-title">What Our Travelers Say</h1>
          <p className="tourist-page-subtitle">
            Real feedback from over 1,200+ families, honeymooners, and pilgrims who explored Tamil Nadu and South India with Sri Komban Travels.
          </p>

          {/* Overall Rating Snapshot Card */}
          <div className="rating-overview-card">
            <div className="rating-big-num">
              <strong>4.9</strong>
              <div className="stars-row">★★★★★</div>
              <span>Average Rating</span>
            </div>
            <div className="rating-stats-divider" />
            <div className="rating-stat-pill">
              <strong>1,200+</strong>
              <span>Tours Completed</span>
            </div>
            <div className="rating-stats-divider" />
            <div className="rating-stat-pill">
              <strong>100%</strong>
              <span>Company Owned Fleet</span>
            </div>
            <div className="rating-stats-divider" />
            <div className="rating-stat-pill">
              <strong>24/7</strong>
              <span>Local On-Route Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Cards Grid */}
      <section className="tourist-section" style={{ background: '#ffffff' }}>
        <div className="tourist-container">
          <div className="reviews-page-grid">
            {testimonialsList.map((r) => (
              <div key={r.id} className="review-page-card">
                <div className="review-header-flex">
                  <div className="review-author-wrap">
                    <img 
                      src={r.avatar} 
                      alt={r.name} 
                      className="review-author-avatar" 
                      loading="lazy" 
                      decoding="async"
                    />
                    <div>
                      <h4 className="review-author-name">{r.name}</h4>
                      <span className="review-author-loc">📍 {r.location} • {r.date}</span>
                    </div>
                  </div>
                  <div className="review-stars-badge">
                    {'★'.repeat(r.rating)}
                  </div>
                </div>

                <div className="review-trip-tag">
                  <span>🚗 {r.trip}</span>
                  <span className="review-verified-badge">✓ Verified Traveler</span>
                </div>

                <p className="review-quote-text">"{r.quote}"</p>
              </div>
            ))}
          </div>

          <OfferCTA 
            badge="OVER 1,200+ HAPPY TRAVELERS"
            title="Wherever You Want to Go, We Can Do That at the Best Offer!"
            desc="Ready to experience 5-star travel hospitality? Book your next pilgrimage, outstation family holiday, or hill station getaway with Madurai's most trusted travel team."
            waText="Hi Sri Komban Travels, I'm ready to plan my trip at the best offer!"
            secondaryBtnText="Book Private Cab →"
            secondaryBtnHref="/vehicles"
          />
        </div>
      </section>
    </div>
  );
}
