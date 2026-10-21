'use client';

import React from 'react';
import Link from 'next/link';
import OfferCTA from '../../components/OfferCTA';

export default function TestimonialsPage() {
  const reviews = [
    {
      id: 1,
      name: 'Priya & Vikram',
      location: 'Chennai',
      trip: 'Bali Luxury Honeymoon (5N/6D)',
      rating: 5,
      date: 'October 2026',
      avatar: '/images/avatar1.jpg',
      quote: 'Amazing experience with Sri Komban Travels! Our private pool villa in Ubud, sunset dinner cruise, and airport transfers were coordinated seamlessly. Our chauffeur was courteous and we never had to worry about a single logistics item. Best vacation we have ever had!'
    },
    {
      id: 2,
      name: 'Dr. Senthil Nathan & Family',
      location: 'Madurai',
      trip: 'Madurai & Rameswaram Temple Circuit',
      rating: 5,
      date: 'September 2026',
      avatar: '/images/avatar2.jpg',
      quote: 'We booked the Toyota Innova Crysta for our elderly parents’ pilgrimage to Madurai Meenakshi Temple, Rameswaram, and Dhanushkodi. The chauffeur was extremely polite, arrived 15 minutes before time, and drove with great care. Clean car and honest per-km billing.'
    },
    {
      id: 3,
      name: 'Rajesh Kumar & Friends',
      location: 'Coimbatore',
      trip: 'Kodaikanal Weekend Hills',
      rating: 5,
      date: 'August 2026',
      avatar: '/images/avatar3.jpg',
      quote: 'Took the Mahindra XUV 3XO for our Kodaikanal ghat trip. Chilled dual AC, skyroof for mountain views, and punchy performance. The driver knew all the scenic viewpoints off the beaten path. Will always book with Sri Komban Travels!'
    },
    {
      id: 4,
      name: 'Anjali Mehta & Group',
      location: 'Bengaluru',
      trip: 'Andaman Island Bliss (5N/6D)',
      rating: 5,
      date: 'July 2026',
      avatar: '/images/avatar4.jpg',
      quote: 'Outstanding coordination for our group trip to Andaman. Ferry tickets to Havelock, beach resort check-ins, and water sports at Elephant Beach were organized ahead of time. Their 24/7 WhatsApp concierge was very reassuring.'
    },
    {
      id: 5,
      name: 'K. Ramachandran & Relatives',
      location: 'Tirunelveli',
      trip: 'South India Group Pilgrimage (15 Persons)',
      rating: 5,
      date: 'June 2026',
      avatar: '/images/avatar2.jpg',
      quote: 'We hired the 17-seater Force Urbania Luxury Van for our family wedding and temple tour. The aircraft-style pushback seats and individual AC vents kept all 15 of us comfortable throughout the 4-day tour. Truly an executive vehicle.'
    },
    {
      id: 6,
      name: 'Karthik & Sneha',
      location: 'Madurai',
      trip: 'Amazing Thailand Holiday (Bangkok & Pattaya)',
      rating: 5,
      date: 'May 2026',
      avatar: '/images/avatar1.jpg',
      quote: 'First time traveling abroad and Sri Komban Travels made it effortlessly easy! Visa guidance, flight bookings, Coral Island speedboats, and Indian food arrangements were top notch. Transparent pricing with zero hidden fees.'
    }
  ];

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
            Real feedback from over 1,200+ families, honeymooners, and pilgrims who explored the world with Sri Komban Travels.
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
            {reviews.map((r) => (
              <div key={r.id} className="review-page-card">
                <div className="review-header-flex">
                  <div className="review-author-wrap">
                    <img src={r.avatar} alt={r.name} className="review-author-avatar" />
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
                  <span>✈️ {r.trip}</span>
                  <span className="review-verified-badge">✓ Verified Traveler</span>
                </div>

                <p className="review-quote-text">"{r.quote}"</p>
              </div>
            ))}
          </div>

          <OfferCTA 
            badge="OVER 1,200+ HAPPY TRAVELERS"
            title="Wherever You Want to Go, We Can Do That at the Best Offer!"
            desc="Ready to experience 5-star travel hospitality? Book your next pilgrimage, outstation family holiday, or overseas getaway with Madurai's most trusted travel team."
            waText="Hi Sri Komban Travels, I'm ready to plan my trip at the best offer!"
            secondaryBtnText="Book Private Cab →"
            secondaryBtnHref="/vehicles"
          />
        </div>
      </section>
    </div>
  );
}
