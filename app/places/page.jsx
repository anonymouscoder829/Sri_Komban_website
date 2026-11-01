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
                      onClick={() => handleVehicleWhatsAppInquiry(veh.name)} 
                      className="btn-feat-pkg-wa"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="wa-btn-icon">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      <span>Enquire on WhatsApp</span>
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
