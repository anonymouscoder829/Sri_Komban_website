'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import OfferCTA from '../../components/OfferCTA';
import { southIndiaDestinations } from '../../lib/destinationsData';
import { siteConfig, getWhatsAppUrl } from '../../lib/siteConfig';

export default function PlacesPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredPlaces = selectedFilter === 'all' 
    ? southIndiaDestinations 
    : southIndiaDestinations.filter((p) => p.category === selectedFilter);

  const handleWhatsApp = (placeTitle) => {
    const msg = `Hi ${siteConfig.shortName}, I'm interested in planning a trip / hiring a cab for "${placeTitle}". Please share the detailed itinerary and quote!`;
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="tourist-page-wrap">
      {/* Page Hero */}
      <section className="tourist-sub-hero">
        <div className="tourist-container text-center">
          <div className="tourist-breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Destinations</span>
          </div>
          <span className="tourist-subpill">SOUTH INDIA TOURIST DESTINATIONS</span>
          <h1 className="tourist-page-title">Top Places in Tamil Nadu &amp; Kerala</h1>
          <p className="tourist-page-subtitle">
            From ancient temple towns and historic coastal monuments to misty hill stations and tranquil Kerala backwaters.
          </p>

          {/* Filter Pills */}
          <div className="tourist-filter-bar">
            <button 
              className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('all')}
            >
              All Destinations ({southIndiaDestinations.length})
            </button>
            <button 
              className={`filter-btn ${selectedFilter === 'Tamil Nadu' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('Tamil Nadu')}
            >
              Tamil Nadu (10)
            </button>
            <button 
              className={`filter-btn ${selectedFilter === 'Kerala' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('Kerala')}
            >
              Kerala (5)
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
                  <img 
                    src={place.image} 
                    alt={`${place.name} - ${place.tag}`} 
                    className="place-page-img" 
                    loading="lazy" 
                    decoding="async" 
                  />
                  <span className="place-tag">{place.tag}</span>
                  <span className="place-loc-pill">📍 {place.country}</span>
                </div>
                <div className="place-page-body">
                  <h3 className="place-page-title" style={{ marginBottom: '10px' }}>{place.name}</h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.90rem', lineHeight: 1.6, marginBottom: '20px', flexGrow: 1 }}>
                    {place.highlight}
                  </p>

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
            desc="Planning a custom family holiday, temple pilgrimage, or hill station tour? Tell us where and when you want to travel — our Madurai team will craft the most affordable, transparent quote with zero hidden charges."
            waText="Hi Sri Komban Travels, I want to explore custom places at the best offer!"
            secondaryBtnText="Plan Custom Itinerary →"
            secondaryBtnHref="/contact"
          />
        </div>
      </section>
    </div>
  );
}
