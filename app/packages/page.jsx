'use client';

import React from 'react';
import Link from 'next/link';
import OfferCTA from '../../components/OfferCTA';

export default function PackagesPage() {
  const packages = [
    {
      title: 'Thailand Escape',
      duration: '4 Nights / 5 Days',
      price: 'Starting from ₹21,999 / Person',
      image: '/images/thailand.jpg',
      desc: 'Beaches, island experiences, city adventures and vibrant Thai culture — everything you need for an exciting international getaway.',
      bestFor: 'Couples • Friends • Adventure'
    },
    {
      title: 'Malaysia Getaway',
      duration: '4 Nights / 5 Days',
      price: 'Starting from ₹19,999 / Person',
      image: '/images/malaysia.jpg',
      desc: 'Discover modern cities, cultural experiences, shopping spots and scenic escapes on a memorable Malaysian holiday.',
      bestFor: 'Families • Couples • Groups'
    },
    {
      title: 'Andaman Escape',
      duration: '4 Nights / 5 Days',
      price: 'Starting from ₹18,999 / Person',
      image: '/images/andaman.jpg',
      desc: 'Beautiful beaches, peaceful islands, nature and exciting experiences make Andaman a perfect escape from everyday life.',
      bestFor: 'Couples • Families • Beach Lovers'
    },
    {
      title: 'Bali Escape',
      duration: '4 Nights / 5 Days',
      price: 'Starting from ₹24,999 / Person',
      image: '/images/bali.jpg',
      desc: 'Tropical beaches, beautiful landscapes, local culture and romantic experiences come together for an unforgettable Bali getaway.',
      bestFor: 'Honeymoon • Couples • Friends'
    },
    {
      title: 'Goa Getaway',
      duration: '4 Nights / 5 Days',
      price: 'Starting from ₹13,999 / Person',
      image: '/images/goa.jpg',
      desc: 'Enjoy beach days, beautiful sunsets, local experiences and relaxed moments on a refreshing Goa getaway.',
      bestFor: 'Friends • Couples • Families'
    }
  ];

  const handleInquiry = (pkgTitle) => {
    const msg = `Hi Sri Komban Travels, I'm interested in the "${pkgTitle}" package. Please share details and itinerary!`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="tourist-page-wrap">
      {/* Page Hero */}
      <section className="tourist-sub-hero">
        <div className="tourist-container text-center">
          <div className="tourist-breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Tour Packages</span>
          </div>
          <h1 className="tourist-page-title">Don't Just Pick a Package. Pick Your Kind of Journey.</h1>
          <p className="tourist-page-subtitle">
            Every trip starts with a reason — a relaxing beach escape, a romantic getaway, a family holiday, or an adventure with friends. At Sri Komban Travels &amp; Tourism, explore carefully planned tour packages from Madurai to Thailand, Malaysia, Bali, Andaman and Goa.
          </p>
          <div className="section-cta-center" style={{ marginTop: '20px' }}>
            <Link href="/contact" className="btn-tourist-primary">
              Plan Your Trip →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Packages Grid */}
      <section className="tourist-section" style={{ background: '#ffffff' }}>
        <div className="tourist-container">
          <div className="section-head-center">
            <h2 className="tourist-sec-title">Featured Tour Packages</h2>
            <p className="tourist-sec-desc">
              Your destination. Your people. Your journey.
            </p>
          </div>

          <div className="places-page-grid">
            {packages.map((pkg, idx) => (
              <div key={idx} className="place-page-card">
                <div className="place-page-img-wrap">
                  <img src={pkg.image} alt={pkg.title} className="place-page-img" />
                </div>
                <div className="place-page-body">
                  <h3 className="place-page-title" style={{ marginBottom: '10px' }}>{pkg.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.90rem', lineHeight: 1.55, marginBottom: '16px', flexGrow: 1 }}>
                    {pkg.desc}
                  </p>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-dark)', marginBottom: '18px' }}>
                    <strong>Best For:</strong> {pkg.bestFor}
                  </div>
                  <button onClick={() => handleInquiry(pkg.title)} className="btn-feat-pkg-wa">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="wa-btn-icon">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span>Enquire on WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <OfferCTA 
            badge="CUSTOM HOLIDAY PACKAGES"
            title="Wherever You Want to Go, We Can Do That at the Best Offer!"
            desc="Don't see your dream destination listed? Tell us your travel dates, group size, and interests. We customize flight tickets, hotels, sightseeing, and local transfers at the best rates."
            waText="Hi Sri Komban Travels, I want a custom package quote for my upcoming holiday!"
            secondaryBtnText="Plan Custom Itinerary →"
            secondaryBtnHref="/contact"
          />
        </div>
      </section>
    </div>
  );
}
