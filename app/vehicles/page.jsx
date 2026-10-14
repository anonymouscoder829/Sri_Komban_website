'use client';

import React from 'react';
import Link from 'next/link';

export default function VehiclesPage() {
  const handleBookVehicle = (vehicleName) => {
    const message = `*Ride Enquiry — Sri Komban Travels*\n\n` +
      `*Vehicle:* ${vehicleName}\n` +
      `*Pickup City:* Madurai\n` +
      `*Destination / Route:* \n` +
      `*Travel Date:* \n\n` +
      `Please share the best tariff quote.`;

    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      {/* ==================== PAGE HERO ==================== */}
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Our Vehicles</span>
          </div>
          <span className="subheading-pill-light">PREMIUM FLEET & RENTALS</span>
          <h1>Comfortable, Reliable & Safe Rides<br />From Madurai</h1>
          <p>Choose from our meticulously maintained fleet of Sedans, Luxury Innova Crysta SUVs, Force Tempo Travellers, and AC Tourist Coaches with veteran chauffeurs.</p>
        </div>
      </section>

      {/* ==================== FLEET CARDS ==================== */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="section-container">
          <div className="text-center max-w-750">
            <span className="subheading-pill">OUR VEHICLE CATEGORIES</span>
            <h2 className="section-title">The Perfect Ride For Every Group Size</h2>
            <p className="section-description">
              Whether it's an early morning Madurai Airport drop, a spiritual pilgrimage to Rameswaram, or a 5-day hill excursion to Kodaikanal and Munnar, our fleet is fully equipped for maximum comfort.
            </p>
          </div>

          <div className="fleet-grid">
            {/* Vehicle 1: Sedan */}
            <div className="vehicle-card">
              <div className="vehicle-img-wrap">
                <img src="/images/sedan.jpg" alt="Executive Sedan Swift Dzire / Etios" />
                <span className="vehicle-badge">Economy & Executive</span>
              </div>
              <div className="vehicle-body">
                <h3 className="vehicle-title">Compact & Executive Sedan</h3>
                <p className="vehicle-models">Maruti Swift Dzire • Toyota Etios • Hyundai Aura</p>
                
                <div className="vehicle-specs-list">
                  <div className="spec-item">
                    <span>Capacity</span>
                    <strong>4 Passengers</strong>
                  </div>
                  <div className="spec-item">
                    <span>Luggage</span>
                    <strong>2-3 Bags</strong>
                  </div>
                  <div className="spec-item">
                    <span>Air Con</span>
                    <strong>Chilled AC</strong>
                  </div>
                </div>

                <p className="vehicle-desc">
                  Smooth riding, highly fuel efficient, and ultra comfortable for Madurai city sightseeing, temple circuits, airport transfers, and couple weekend getaways.
                </p>

                <div className="vehicle-pricing-bar">
                  <div className="price-tag-wrap">
                    <span>Outstation Rate</span>
                    <strong>₹12 / km</strong>
                  </div>
                  <button className="btn btn-primary" onClick={() => handleBookVehicle('Sedan (Dzire / Etios)')}>
                    Book Ride →
                  </button>
                </div>
              </div>
            </div>

            {/* Vehicle 2: SUV Innova Crysta */}
            <div className="vehicle-card">
              <div className="vehicle-img-wrap">
                <img src="/images/innova.jpg" alt="Toyota Innova Crysta Luxury SUV" />
                <span className="vehicle-badge">Most Popular SUV</span>
              </div>
              <div className="vehicle-body">
                <h3 className="vehicle-title">Premium SUV (Innova Crysta)</h3>
                <p className="vehicle-models">Toyota Innova Crysta • Maruti Ertiga</p>
                
                <div className="vehicle-specs-list">
                  <div className="spec-item">
                    <span>Capacity</span>
                    <strong>6-7 Passengers</strong>
                  </div>
                  <div className="spec-item">
                    <span>Luggage</span>
                    <strong>4-5 Bags</strong>
                  </div>
                  <div className="spec-item">
                    <span>Comfort</span>
                    <strong>Captain Seats</strong>
                  </div>
                </div>

                <p className="vehicle-desc">
                  The gold standard in Indian road trips. Exceptional suspension and hill-climbing power make this the top choice for Kodaikanal, Munnar, Ooty, and family outstation tours.
                </p>

                <div className="vehicle-pricing-bar">
                  <div className="price-tag-wrap">
                    <span>Outstation Rate</span>
                    <strong>₹18 / km</strong>
                  </div>
                  <button className="btn btn-primary" onClick={() => handleBookVehicle('Toyota Innova Crysta')}>
                    Book Ride →
                  </button>
                </div>
              </div>
            </div>

            {/* Vehicle 3: Tempo Traveller */}
            <div className="vehicle-card">
              <div className="vehicle-img-wrap">
                <img src="/images/tempo.jpg" alt="Luxury Force Tempo Traveller" />
                <span className="vehicle-badge">Large Family & Group Special</span>
              </div>
              <div className="vehicle-body">
                <h3 className="vehicle-title">Luxury Tempo Traveller</h3>
                <p className="vehicle-models">Force Tempo Traveller (12 / 14 / 18 / 20 Seater AC)</p>
                
                <div className="vehicle-specs-list">
                  <div className="spec-item">
                    <span>Capacity</span>
                    <strong>12 - 20 Passengers</strong>
                  </div>
                  <div className="spec-item">
                    <span>Seating</span>
                    <strong>2x1 Pushback</strong>
                  </div>
                  <div className="spec-item">
                    <span>Entertainment</span>
                    <strong>LED TV + Music</strong>
                  </div>
                </div>

                <p className="vehicle-desc">
                  Individual AC vents, spacious pushback leather seats, and generous boot space. The ultimate ride for South India pilgrimage tours (Rameswaram - Kanyakumari - Madurai).
                </p>

                <div className="vehicle-pricing-bar">
                  <div className="price-tag-wrap">
                    <span>Outstation Rate</span>
                    <strong>₹24 / km</strong>
                  </div>
                  <button className="btn btn-primary" onClick={() => handleBookVehicle('Force Tempo Traveller (12-20 Seater)')}>
                    Book Ride →
                  </button>
                </div>
              </div>
            </div>

            {/* Vehicle 4: Tourist Coach */}
            <div className="vehicle-card">
              <div className="vehicle-img-wrap">
                <img src="/images/coach.jpg" alt="Luxury Tourist AC Coach Bus" />
                <span className="vehicle-badge">Corporate & Large Tours</span>
              </div>
              <div className="vehicle-body">
                <h3 className="vehicle-title">Luxury AC Tourist Coach</h3>
                <p className="vehicle-models">21, 26, 32, 45-Seater Air Suspended Coaches</p>
                
                <div className="vehicle-specs-list">
                  <div className="spec-item">
                    <span>Capacity</span>
                    <strong>21 - 45 Passengers</strong>
                  </div>
                  <div className="spec-item">
                    <span>Suspension</span>
                    <strong>Air Suspended</strong>
                  </div>
                  <div className="spec-item">
                    <span>Features</span>
                    <strong>Mic + Sound + AC</strong>
                  </div>
                </div>

                <p className="vehicle-desc">
                  Ideal for college industrial tours, wedding guest transfers, and corporate group holidays across Tamil Nadu, Kerala, and Karnataka.
                </p>

                <div className="vehicle-pricing-bar">
                  <div className="price-tag-wrap">
                    <span>Custom Quote</span>
                    <strong>From ₹34 / km</strong>
                  </div>
                  <button className="btn btn-primary" onClick={() => handleBookVehicle('Tourist Coach / Bus')}>
                    Get Quote →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Outstation Routes Table */}
          <div className="routes-table-card">
            <div className="section-title-wrap">
              <span className="subheading-pill">POPULAR ROUTES</span>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-dark)' }}>
                Popular Outstation Cab Routes From Madurai
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Estimated distance and typical travel duration. Call or WhatsApp for exact door-to-door tariff.</p>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Destination Route</th>
                    <th>One-Way Distance</th>
                    <th>Typical Drive Time</th>
                    <th>Recommended Vehicle</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Madurai to Rameswaram</strong></td>
                    <td>175 km</td>
                    <td>3.5 - 4 Hours</td>
                    <td>Sedan / Innova / Tempo</td>
                    <td><a href="https://wa.me/919876543210?text=I%20want%20to%20book%20a%20cab%20from%20Madurai%20to%20Rameswaram" className="btn btn-outline-teal" style={{ padding: '6px 14px', fontSize: '0.8rem' }}>Enquire</a></td>
                  </tr>
                  <tr>
                    <td><strong>Madurai to Kodaikanal</strong></td>
                    <td>120 km</td>
                    <td>3.5 Hours</td>
                    <td>Innova Crysta / Tempo</td>
                    <td><a href="https://wa.me/919876543210?text=I%20want%20to%20book%20a%20cab%20from%20Madurai%20to%20Kodaikanal" className="btn btn-outline-teal" style={{ padding: '6px 14px', fontSize: '0.8rem' }}>Enquire</a></td>
                  </tr>
                  <tr>
                    <td><strong>Madurai to Munnar (Kerala)</strong></td>
                    <td>160 km</td>
                    <td>4.5 Hours</td>
                    <td>Innova Crysta / SUV</td>
                    <td><a href="https://wa.me/919876543210?text=I%20want%20to%20book%20a%20cab%20from%20Madurai%20to%20Munnar" className="btn btn-outline-teal" style={{ padding: '6px 14px', fontSize: '0.8rem' }}>Enquire</a></td>
                  </tr>
                  <tr>
                    <td><strong>Madurai to Kanyakumari</strong></td>
                    <td>245 km</td>
                    <td>4.5 - 5 Hours</td>
                    <td>Innova / Sedan / Tempo</td>
                    <td><a href="https://wa.me/919876543210?text=I%20want%20to%20book%20a%20cab%20from%20Madurai%20to%20Kanyakumari" className="btn btn-outline-teal" style={{ padding: '6px 14px', fontSize: '0.8rem' }}>Enquire</a></td>
                  </tr>
                  <tr>
                    <td><strong>Madurai to Thekkady (Periyar)</strong></td>
                    <td>140 km</td>
                    <td>3.5 Hours</td>
                    <td>Innova / Sedan</td>
                    <td><a href="https://wa.me/919876543210?text=I%20want%20to%20book%20a%20cab%20from%20Madurai%20to%20Thekkady" className="btn btn-outline-teal" style={{ padding: '6px 14px', fontSize: '0.8rem' }}>Enquire</a></td>
                  </tr>
                  <tr>
                    <td><strong>Madurai City Local (8 Hrs / 80 Km)</strong></td>
                    <td>City Limits</td>
                    <td>Full Day Sightseeing</td>
                    <td>Dzire Sedan / Innova</td>
                    <td><a href="https://wa.me/919876543210?text=I%20want%20to%20book%20Madurai%20Local%20Sightseeing%20cab" className="btn btn-outline-teal" style={{ padding: '6px 14px', fontSize: '0.8rem' }}>Enquire</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Fleet Guarantee Badges */}
          <div className="fleet-features-grid">
            <div className="fleet-feat-box">
              <div className="icon">🧼</div>
              <h4>Sanitized & Pristine</h4>
              <p>Every vehicle is thoroughly vacuumed, washed, and disinfected before every journey.</p>
            </div>
            <div className="fleet-feat-box">
              <div className="icon">👨‍✈️</div>
              <h4>Verified Chauffeurs</h4>
              <p>Courteous, non-smoking, police-verified drivers with extensive hill and outstation experience.</p>
            </div>
            <div className="fleet-feat-box">
              <div className="icon">🧭</div>
              <h4>GPS Tracked & Safe</h4>
              <p>Real-time vehicle tracking with 24/7 on-road mechanical standby and emergency assistance.</p>
            </div>
            <div className="fleet-feat-box">
              <div className="icon">🏷️</div>
              <h4>Transparent Billing</h4>
              <p>Zero hidden charges. Transparent toll, parking, driver bata and fuel mileage accounting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Booking Banner */}
      <section className="section assistance-banner-section">
        <div className="section-container">
          <div className="assistance-banner" style={{ backgroundImage: "linear-gradient(rgba(1, 48, 63, 0.88), rgba(0, 109, 119, 0.88)), url('/images/assistance-banner.jpg')" }}>
            <div className="assistance-content">
              <span className="assistance-sub">NEED A CAB RIGHT NOW?</span>
              <h2 className="assistance-title">Instant Cab & Bus Booking</h2>
              <p className="assistance-desc">Planning an urgent trip or family function? Call our 24/7 dispatch desk in Madurai for instant confirmation.</p>
              
              <div className="assistance-btns">
                <Link href="/contact" className="btn btn-white">Book Online</Link>
                <a href="tel:+919876543210" className="btn btn-glass-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="btn-icon-call"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.28.37-.67.25-1.02A11.36 11.36 0 0 1 8.5 4.31c0-.55-.45-1-1-1H4.11c-.55 0-1 .45-1 1C3.11 13.9 10.1 20.89 19.89 20.89c.55 0 1-.45 1-1v-3.39c0-.55-.45-1-1-1.12z"/></svg>
                  <span>+91 98765 43210</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
