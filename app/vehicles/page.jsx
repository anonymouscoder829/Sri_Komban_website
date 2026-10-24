'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import OfferCTA from '../../components/OfferCTA';
import { vehiclesFleet } from '../../lib/vehiclesData';
import { siteConfig, getWhatsAppUrl } from '../../lib/siteConfig';

export default function VehiclesPage() {
  const [activeImages, setActiveImages] = useState({
    'mahindra-xuv3xo': vehiclesFleet[0].mainImage,
    'toyota-innova-crysta': vehiclesFleet[1].mainImage,
    'force-urbania': vehiclesFleet[2].mainImage
  });

  const handleSelectThumb = (vehicleId, thumbUrl) => {
    setActiveImages((prev) => ({
      ...prev,
      [vehicleId]: thumbUrl
    }));
  };

  const handleBookVehicle = (vehicleName) => {
    const message = `*Ride Enquiry — ${siteConfig.shortName}*\n\n` +
      `*Vehicle:* ${vehicleName}\n` +
      `*Pickup City:* Madurai\n` +
      `*Destination / Route:* \n` +
      `*Travel Date:* \n\n` +
      `Please share the best tariff quote.`;

    window.open(getWhatsAppUrl(message), '_blank');
  };

  return (
    <div className="tourist-page-wrap">
      {/* ==================== PAGE HERO ==================== */}
      <section className="tourist-sub-hero">
        <div className="tourist-container text-center">
          <div className="tourist-breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Our Vehicles</span>
          </div>
          <span className="tourist-pill" style={{ color: '#fef08a', borderColor: 'rgba(254, 240, 138, 0.4)', background: 'rgba(255, 255, 255, 0.1)' }}>
            PREMIUM FLEET &amp; CAB RENTALS
          </span>
          <h1 className="tourist-page-title">Comfortable, Reliable &amp; Safe Rides<br />From Madurai</h1>
          <p className="tourist-page-subtitle">
            Choose from our meticulously maintained fleet of Mahindra XUV 3XO SUVs, Luxury Toyota Innova Crysta, Force Urbania Luxury Vans, and AC Tourist Coaches with veteran chauffeurs.
          </p>
          <div className="section-cta-center" style={{ marginTop: '20px' }}>
            <Link href="/contact" className="btn-tourist-primary">
              Book Your Ride Now →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== FLEET CARDS ==================== */}
      <section className="tourist-section" style={{ background: '#ffffff' }}>
        <div className="tourist-container">
          <div className="section-head-center">
            <span className="tourist-pill">OUR VERIFIED FLEET</span>
            <h2 className="tourist-sec-title">The Perfect Ride For Every Group Size</h2>
            <p className="tourist-sec-desc">
              Experience our 100% verified, company-owned vehicles with authentic photos below. Whether it's a Madurai Airport transfer, Rameswaram pilgrimage, or hill excursion to Kodaikanal and Munnar, travel in supreme comfort.
            </p>
          </div>

          <div className="fleet-grid">
            {vehiclesFleet.map((veh) => {
              const currentImg = activeImages[veh.id] || veh.mainImage;

              return (
                <div key={veh.id} className="vehicle-card">
                  <div className="vehicle-img-wrap">
                    <img 
                      src={currentImg} 
                      alt={`${veh.name} ${veh.category}`}
                      style={{ objectPosition: veh.imgPosition || 'center center' }} 
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="vehicle-badge">{veh.category}</span>
                  </div>
                  <div className="vehicle-thumbs">
                    {veh.thumbs.map((thumb, idx) => (
                      <button
                        key={idx}
                        className={`vehicle-thumb-btn ${currentImg === thumb.url ? 'active' : ''}`}
                        onClick={() => handleSelectThumb(veh.id, thumb.url)}
                        title={thumb.label}
                      >
                        <img 
                          src={thumb.url} 
                          alt={`${veh.name} ${thumb.label}`} 
                          loading="lazy"
                          decoding="async"
                        />
                      </button>
                    ))}
                  </div>
                  <div className="vehicle-body">
                    <h3 className="vehicle-title">{veh.name}</h3>
                    <p className="vehicle-models">{veh.specs}</p>
                    <p className="vehicle-desc">{veh.desc}</p>
                    <button className="btn-feat-pkg-wa" onClick={() => handleBookVehicle(veh.name)}>
                      <svg viewBox="0 0 24 24" fill="currentColor" className="wa-btn-icon">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Offer CTA Banner */}
          <OfferCTA 
            badge="UNBEATABLE BEST PRICE GUARANTEE"
            title="Wherever You Want to Go, We Can Do That at the Best Offer!"
            desc="Have a custom route, temple pilgrimage, airport transfer, or holiday circuit in mind? Share your travel plans with us and get an instant custom quote with our best rates and transparent billing."
            waText="Hi Sri Komban Travels, I want to get the best offer for my upcoming ride!"
            secondaryBtnText="Plan Custom Route →"
            secondaryBtnHref="/contact"
          />
        </div> 
      </section>
    </div>
  );
}
