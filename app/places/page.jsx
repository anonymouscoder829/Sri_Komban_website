'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import OfferCTA from '../../components/OfferCTA';

export default function PlacesPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const places = [
    {
      id: 'thailand',
      name: 'Thailand Exotic Holiday',
      category: 'international',
      location: 'Bangkok, Pattaya & Phuket',
      duration: '5 Days / 4 Nights',
      price: '₹21,999',
      image: '/images/thailand.jpg',
      highlights: ['Coral Island Speedboat Tour', 'Bangkok City Temple Tour', 'Alcazar Cabaret Show', 'Airport Transfers'],
      tag: 'International Bestseller'
    },
    {
      id: 'bali',
      name: 'Bali Tropical Paradise',
      category: 'international',
      location: 'Ubud, Kuta & Nusa Penida',
      duration: '5 Days / 4 Nights',
      price: '₹24,999',
      image: '/images/bali.jpg',
      highlights: ['Ubud Waterfalls & Rice Terraces', 'Tanah Lot Sunset Temple', 'Nusa Penida Island Tour', 'Private Pool Villa Stay'],
      tag: 'Honeymoon Favorite'
    },
    {
      id: 'malaysia',
      name: 'Malaysia City & Hills',
      category: 'international',
      location: 'Kuala Lumpur & Genting',
      duration: '4 Days / 3 Nights',
      price: '₹19,999',
      image: '/images/malaysia.jpg',
      highlights: ['Petronas Twin Towers & Skybridge', 'Batu Caves Excursion', 'Genting Cable Car Ride', 'Daily Breakfast & Chauffeur'],
      tag: 'Popular Choice'
    },
    {
      id: 'kerala',
      name: 'Kerala & Munnar Hills',
      category: 'domestic',
      location: 'Munnar, Thekkady & Alleppey',
      duration: '4 Days / 3 Nights',
      price: '₹11,999',
      image: '/images/kerala.jpg',
      highlights: ['Misty Tea Gardens & Mattupetty Dam', 'Spice Plantation Safari', 'Alleppey Private Houseboat Cruise', 'Dedicated AC Cab'],
      tag: 'Nature & Hills'
    },
    {
      id: 'andaman',
      name: 'Andaman Island Bliss',
      category: 'domestic',
      location: 'Port Blair & Havelock Island',
      duration: '5 Days / 4 Nights',
      price: '₹18,999',
      image: '/images/andaman.jpg',
      highlights: ['Radhanagar Blue Beach', 'Cellular Jail Light & Sound', 'Elephant Beach Snorkeling', 'Inter-Island Catamaran Cruise'],
      tag: 'Island Special'
    },
    {
      id: 'madurai',
      name: 'Madurai & Rameswaram Circuit',
      category: 'pilgrimage',
      location: 'Madurai, Rameswaram & Dhanushkodi',
      duration: '3 Days / 2 Nights',
      price: '₹6,999',
      image: '/images/madurai-heritage.jpg',
      highlights: ['Meenakshi Amman Darshan', 'Ramanathaswamy Temple Wells', 'Pamban Sea Bridge & Dhanushkodi', 'Brand New Innova Crysta'],
      tag: 'Spiritual Circuit'
    },
    {
      id: 'goa',
      name: 'Goa Coastal Getaway',
      category: 'domestic',
      location: 'North & South Goa',
      duration: '4 Days / 3 Nights',
      price: '₹13,999',
      image: '/images/goa.jpg',
      highlights: ['Baga & Calangute Beaches', 'Aguada Fort & Portuguese Villas', 'Mandovi River Sunset Cruise', 'Airport Pick & Drop'],
      tag: 'Beach Fun'
    }
  ];

  const filteredPlaces = selectedFilter === 'all' 
    ? places 
    : places.filter((p) => p.category === selectedFilter);

  const handleWhatsApp = (placeTitle) => {
    const msg = `Hi Sri Komban Travels, I'm interested in the "${placeTitle}" place package. Please share the detailed itinerary and quote!`;
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
            <span>Places &amp; Destinations</span>
          </div>
          <span className="tourist-subpill">CURATED TOUR DESTINATIONS</span>
          <h1 className="tourist-page-title">Top Places &amp; Tour Packages</h1>
          <p className="tourist-page-subtitle">
            From tropical beaches across Southeast Asia to serene hill stations and sacred South India heritage circuits.
          </p>

          {/* Filter Pills */}
          <div className="tourist-filter-bar">
            <button 
              className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('all')}
            >
              All Destinations
            </button>
            <button 
              className={`filter-btn ${selectedFilter === 'international' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('international')}
            >
              International
            </button>
            <button 
              className={`filter-btn ${selectedFilter === 'domestic' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('domestic')}
            >
              Domestic &amp; Hills
            </button>
            <button 
              className={`filter-btn ${selectedFilter === 'pilgrimage' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('pilgrimage')}
            >
              Spiritual &amp; Temple
            </button>
          </div>
        </div>
      </section>

      {/* Places Cards Grid */}
      <section className="tourist-section" style={{ background: '#ffffff' }}>
        <div className="tourist-container">
          <div className="places-page-grid">
            {filteredPlaces.map((place) => (
              <div key={place.id} className="place-page-card">
                <div className="place-page-img-wrap">
                  <img src={place.image} alt={place.name} className="place-page-img" />
                  <span className="place-tag">{place.tag}</span>
                  <span className="place-loc-pill">📍 {place.location}</span>
                </div>
                <div className="place-page-body">
                  <div className="place-page-meta">
                    <span className="place-duration">⏱ {place.duration}</span>
                    <span className="place-price-tag">Starting from <strong>{place.price}</strong></span>
                  </div>
                  <h3 className="place-page-title">{place.name}</h3>

                  <ul className="place-highlights-list">
                    {place.highlights.map((h, i) => (
                      <li key={i}>✓ {h}</li>
                    ))}
                  </ul>

                  <div className="place-page-actions">
                    <button 
                      onClick={() => handleWhatsApp(place.name)} 
                      className="btn-tourist-primary btn-block text-center"
                    >
                      Enquire on WhatsApp →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <OfferCTA 
            badge="EXPLORE CUSTOM DESTINATIONS"
            title="Wherever You Want to Go, We Can Do That at the Best Offer!"
            desc="Planning a custom family holiday or group excursion? Tell us where and when you want to travel — our Madurai team will craft the most affordable, transparent quote with zero hidden charges."
            waText="Hi Sri Komban Travels, I want to explore custom places at the best offer!"
            secondaryBtnText="Plan Custom Itinerary →"
            secondaryBtnHref="/contact"
          />
        </div>
      </section>
    </div>
  );
}
