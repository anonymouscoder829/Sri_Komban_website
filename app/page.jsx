'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HeroSection from '../components/HeroSection';
import OfferCTA from '../components/OfferCTA';
import { southIndiaDestinations, topFiveDestinations } from '../lib/destinationsData';
import { vehiclesFleet } from '../lib/vehiclesData';
import { homeGalleryItems } from '../lib/galleryData';
import { homeTestimonials } from '../lib/testimonialsData';
import { siteConfig, getWhatsAppUrl } from '../lib/siteConfig';

export default function HomePage() {
  const [activeHomeVehImages, setActiveHomeVehImages] = useState({});

  const handleWhatsAppInquiry = (planName) => {
    const message = `Hi ${siteConfig.shortName}, I'm interested in planning a trip / hiring a cab for ${planName}. Please share details!`;
    window.open(getWhatsAppUrl(message), '_blank');
  };

  const handleVehicleWhatsAppInquiry = (vehicleName) => {
    const message = `Hi ${siteConfig.shortName}, I'm interested in booking / hiring the ${vehicleName} from Madurai. Please share availability and tariff quote!`;
    window.open(getWhatsAppUrl(message), '_blank');
  };

  const handleGeneralWhatsApp = () => {
    const message = `Hi ${siteConfig.shortName}, I'm planning a trip from Madurai and would like to get package options and a tariff quote. Please assist me!`;
    window.open(getWhatsAppUrl(message), '_blank');
  };

  return (
    <div className="tourist-landing-wrapper">
      {/* ========================================================
          SECTION 1 — HERO
          ======================================================== */}
      <HeroSection />

      {/* ========================================================
          SECTION 2 — TOP DESTINATIONS (TOP 5 PLACES ONLY)
          ======================================================== */}
      <section className="tourist-section top-dest-section" id="destinations">
        <div className="tourist-container">
          <div className="top-dest-head-wrap dest-header-flex">
            <div>
              <span className="dest-subpill-tag">TOP 5 HANDPICKED HIGHLIGHTS</span>
              <h2 className="top-dest-main-title">Top Destinations</h2>
              <p className="top-dest-main-desc">
                From ancient temple gopurams to misty hill stations — experience the premier highlights of South India.
              </p>
            </div>

            <Link href="/destinations" className="btn-explore-all-pill" id="exploreAllDestinationsHeaderBtn">
              <span>Explore all destinations</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="explore-all-arrow">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Cards Grid — Best 5 Places */}
          <div className="top-dest-cards-grid top-5-dest-grid">
            {topFiveDestinations.map((dest) => (
              <div 
                key={dest.id} 
                className="top-dest-card" 
                onClick={() => handleWhatsAppInquiry(dest.name)}
                title={`Enquire for ${dest.name} Tour & Cab`}
              >
                <div className="dest-card-media">
                  <img 
                    src={dest.image} 
                    alt={`${dest.name} - ${dest.tag}`} 
                    className="dest-card-img" 
                    loading="lazy" 
                    decoding="async" 
                  />
                  <span className="dest-card-badge">{dest.tag}</span>
                </div>
                <div className="dest-card-meta">
                  <h3 className="dest-card-title">{dest.name}</h3>
                  <p className="dest-card-country">{dest.country}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Explore all destinations footer banner */}
          <div className="top-dest-explore-footer">
            <p className="top-dest-explore-note">
              Looking for Mahabalipuram, Thanjavur, Kanyakumari, Alleppey backwaters, or Wayanad?
            </p>
            <Link href="/destinations" className="btn-tourist-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span>Explore All {southIndiaDestinations.length} Destinations</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '18px', height: '18px' }}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3 — OUR VERIFIED VEHICLES & FLEET
          ======================================================== */}
      <section className="tourist-section top-dest-section" id="vehicles">
        <div className="tourist-container">
          <div className="top-dest-head-wrap dest-filter-bar">
            <div>
              <h2 className="top-dest-main-title">Our Verified Fleet</h2>
              <p className="top-dest-main-desc">
                Company-owned, sanitized, and chauffeur-driven rides for comfortable journeys from Madurai.
              </p>
            </div>
            <Link href="/vehicles" className="btn-explore-all-pill">
              <span>View all vehicles</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="explore-all-arrow">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="home-vehicles-grid">
            {vehiclesFleet.map((veh) => {
              const currentImg = activeHomeVehImages[veh.id] || veh.mainImage;

              return (
                <div key={veh.name} className="home-vehicle-card">
                  <div className="home-vehicle-media">
                    <img 
                      src={currentImg} 
                      alt={veh.name} 
                      className="home-vehicle-img" 
                      style={{ objectPosition: veh.imgPosition || 'center center' }}
                      loading="lazy" 
                      decoding="async" 
                    />
                    <span className="home-vehicle-badge">{veh.category}</span>
                  </div>
                  {veh.thumbs && veh.thumbs.length > 0 && (
                    <div className="home-vehicle-thumbs">
                      {veh.thumbs.map((thumb, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className={`home-veh-thumb-btn ${currentImg === thumb.url ? 'active' : ''}`}
                          onClick={() => setActiveHomeVehImages(prev => ({ ...prev, [veh.id]: thumb.url }))}
                          title={thumb.label}
                          aria-label={`${veh.name} ${thumb.label}`}
                        >
                          <img src={thumb.url} alt={thumb.label} loading="lazy" />
                        </button>
                      ))}
                    </div>
                  )}
                  <div className="home-vehicle-body">
                    <h3 className="home-vehicle-title">{veh.name}</h3>
                    <div className="home-vehicle-specs">{veh.shortSpecs || veh.specs}</div>
                    <p className="home-vehicle-desc">{veh.desc}</p>
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
              );
            })}
          </div>

          <OfferCTA 
            badge="BEST PRICE GUARANTEE"
            title="Wherever You Want to Go, We Can Do That at the Best Offer!"
            desc="Planning an outstation trip, family pilgrimage, or airport transfer? Tell us your pickup point and destination — we provide the best competitive tariff with verified chauffeur service."
            waText="Hi Sri Komban Travels, I want to book a vehicle at the best offer!"
            secondaryBtnText="View Fleet Details →"
            secondaryBtnHref="/vehicles"
          />
        </div>
      </section>

      {/* ========================================================
          SECTION 4 — VISUAL TRAVEL GALLERY
          ======================================================== */}
      <section className="tourist-section tourist-section-tinted" id="gallery">
        <div className="tourist-container">
          <div className="top-dest-head-wrap dest-filter-bar">
            <div>
              <h2 className="top-dest-main-title">Captured Travel Moments</h2>
              <p className="top-dest-main-desc">
                Real glimpses of scenic destinations, happy travelers, and our verified fleet.
              </p>
            </div>
            <Link href="/gallery" className="btn-explore-all-pill">
              <span>View full gallery</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="explore-all-arrow">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="gallery-masonry-grid" style={{ marginTop: '28px' }}>
            {homeGalleryItems.map((item, idx) => (
              <div key={idx} className="gallery-card">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="gallery-img" 
                  loading="lazy" 
                  decoding="async" 
                />
                <div className="gallery-card-overlay">
                  <span className="gallery-item-loc">📍 {item.loc}</span>
                  <h4 className="gallery-item-title">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5 — TESTIMONIALS
          ======================================================== */}
      <section className="tourist-section" id="testimonials">
        <div className="tourist-container">
          <div className="top-dest-head-wrap dest-filter-bar">
            <div>
              <h2 className="top-dest-main-title">What Our Travelers Say</h2>
              <p className="top-dest-main-desc">
                Genuine stories and experiences from families, couples, and groups who travelled with us.
              </p>
            </div>
            <Link href="/testimonials" className="btn-explore-all-pill">
              <span>Read all reviews</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="explore-all-arrow">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="testimonials-grid" style={{ marginTop: '28px' }}>
            {homeTestimonials.map((t) => (
              <div key={t.id} className="testimonial-box">
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">"{t.quote}"</p>
                <div className="testi-author-row">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="testi-avatar" 
                    loading="lazy" 
                    decoding="async" 
                  />
                  <div>
                    <h4 className="testi-author-name">{t.name}</h4>
                    <span className="testi-trip-tag">{t.trip} • {t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6 — CONTACT US / PLAN YOUR TRIP
          ======================================================== */}
      <section className="tourist-section tourist-section-tinted" id="plan-trip">
        <div className="tourist-container">
          <div className="section-head-center">
            <h2 className="tourist-sec-title">Tell Us Where You Want to Go.</h2>
            <p className="tourist-sec-desc">
              Your next journey could be a relaxing hill station getaway, an ancient temple pilgrimage, or a peaceful Kerala backwater escape.
              <br />
              Madurai? Ooty? Kodaikanal? Rameswaram? Munnar? Alleppey? Or a custom circuit across South India?
              <br />
              Tell us what you're planning. Our team will help you explore the right travel options for your journey.
              <br />
              Let's turn your travel idea into a plan.
            </p>
          </div>

          <div className="contact-card-grid">
            {/* Left Col: Contact Info & Support */}
            <div className="contact-details-box">
              <span className="contact-badge-label">OFFICE &amp; DIRECT REACH</span>
              <h3 className="contact-box-title">{siteConfig.name}</h3>
              <p className="contact-box-desc">
                Planning a trip from Madurai? You don't need to have the entire trip figured out before contacting us. Tell us your budget, travel dates, who you're travelling with and the kind of experience you want. We'll help you explore the possibilities.
              </p>

              <div className="contact-info-list">
                <div className="contact-info-row">
                  <div className="contact-icon-circle">📍</div>
                  <div>
                    <strong>Location</strong>
                    <p>{siteConfig.contact.locationFull}</p>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-icon-circle">📞</div>
                  <div>
                    <strong>Phone &amp; 24/7 Helpline</strong>
                    <p><a href={`tel:${siteConfig.contact.phoneTel}`}>{siteConfig.contact.phoneDisplay}</a></p>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-icon-circle">✉️</div>
                  <div>
                    <strong>Email Address</strong>
                    <p><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></p>
                  </div>
                </div>
              </div>

              <div className="contact-wa-action">
                <p>Your Next Story Could Start With One Message.</p>
                <button onClick={handleGeneralWhatsApp} className="btn-tourist-wa-lg">
                  Send Your Enquiry on WhatsApp →
                </button>
              </div>
            </div>

            {/* Right Col: Why Plan With Us & Quick Actions */}
            <div className="contact-details-box">
              <span className="contact-badge-label">SEAMLESS TRIP PLANNING</span>
              <h3 className="contact-box-title">Why Plan Your Journey With Us?</h3>
              <p className="contact-box-desc">
                From luxury outstation cabs to all-inclusive holidays, we tailor every detail to your schedule, preferences, and comfort.
              </p>

              <div className="contact-info-list">
                <div className="contact-info-row">
                  <div className="contact-icon-circle">🗺️</div>
                  <div>
                    <strong>Customized Tour Itineraries</strong>
                    <p>Personalized day-wise plans for couples, families, and group getaways with complete schedule flexibility.</p>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-icon-circle">🚗</div>
                  <div>
                    <strong>Verified Private Fleet</strong>
                    <p>Company-owned, sanitized Innova Crysta, XUV 3XO, and Force Urbania driven by verified local chauffeurs.</p>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-icon-circle">💳</div>
                  <div>
                    <strong>Honest &amp; Transparent Tariff</strong>
                    <p>Clear all-inclusive quotes with driver allowance, toll, and parking clearly explained upfront.</p>
                  </div>
                </div>
              </div>

              <div className="contact-wa-action" style={{ background: '#f8fafc', borderColor: '#e2e8f0' }}>
                <p>Ready to discuss your itinerary or get an instant quote?</p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a 
                    href={`tel:${siteConfig.contact.phoneTel}`} 
                    className="btn-tourist-primary-lg"
                    style={{ textAlign: 'center', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    Call Us Now
                  </a>
                  <Link 
                    href="/packages" 
                    className="btn-tourist-wa-sub"
                    style={{ textAlign: 'center', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}
                  >
                    Explore Packages →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
