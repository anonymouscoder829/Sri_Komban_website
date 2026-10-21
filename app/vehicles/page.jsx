'use client';

import React from 'react';
import Link from 'next/link';

export default function VehiclesPage() {
  const [xuvImg, setXuvImg] = React.useState('/images/vehicles/mahindra-xuv3xo.jpg');
  const [innovaImg, setInnovaImg] = React.useState('/images/vehicles/toyota-innova-crysta.jpg');
  const [urbaniaImg, setUrbaniaImg] = React.useState('/images/vehicles/force-urbania.jpg');

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
          <p>Choose from our meticulously maintained fleet of Mahindra XUV 3XO SUVs, Luxury Toyota Innova Crysta, Force Urbania Luxury Vans, and AC Tourist Coaches with veteran chauffeurs.</p>
        </div>
      </section>

      {/* ==================== FLEET CARDS ==================== */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="section-container">
          <div className="text-center max-w-750">
            <span className="subheading-pill">OUR VERIFIED FLEET</span>
            <h2 className="section-title">The Perfect Ride For Every Group Size</h2>
            <p className="section-description">
              Experience our 100% verified, company-owned vehicles with authentic photos below. Whether it's a Madurai Airport transfer, Rameswaram pilgrimage, or hill excursion to Kodaikanal and Munnar, travel in supreme comfort.
            </p>
          </div>

          <div className="fleet-grid">
            {/* Vehicle 1: Mahindra XUV 3XO */}
            <div className="vehicle-card">
              <div className="vehicle-img-wrap">
                <img src={xuvImg} alt="Mahindra XUV 3XO Compact Luxury SUV" />
                <span className="vehicle-badge">Compact Luxury SUV</span>
              </div>
              <div className="vehicle-thumbs">
                <button
                  className={`vehicle-thumb-btn ${xuvImg === '/images/vehicles/mahindra-xuv3xo.jpg' ? 'active' : ''}`}
                  onClick={() => setXuvImg('/images/vehicles/mahindra-xuv3xo.jpg')}
                  title="Front Angle"
                >
                  <img src="/images/vehicles/mahindra-xuv3xo.jpg" alt="XUV 3XO Front" />
                </button>
                <button
                  className={`vehicle-thumb-btn ${xuvImg === '/images/vehicles/mahindra-xuv3xo-rear.jpg' ? 'active' : ''}`}
                  onClick={() => setXuvImg('/images/vehicles/mahindra-xuv3xo-rear.jpg')}
                  title="Rear View"
                >
                  <img src="/images/vehicles/mahindra-xuv3xo-rear.jpg" alt="XUV 3XO Rear" />
                </button>
                <button
                  className={`vehicle-thumb-btn ${xuvImg === '/images/vehicles/vehicle-1/IMG_1610.JPG.jpeg' ? 'active' : ''}`}
                  onClick={() => setXuvImg('/images/vehicles/vehicle-1/IMG_1610.JPG.jpeg')}
                  title="Street View"
                >
                  <img src="/images/vehicles/vehicle-1/IMG_1610.JPG.jpeg" alt="XUV 3XO Street" />
                </button>
                <button
                  className={`vehicle-thumb-btn ${xuvImg === '/images/vehicles/vehicle-1/IMG_1613.JPG.jpeg' ? 'active' : ''}`}
                  onClick={() => setXuvImg('/images/vehicles/vehicle-1/IMG_1613.JPG.jpeg')}
                  title="Front Profile"
                >
                  <img src="/images/vehicles/vehicle-1/IMG_1613.JPG.jpeg" alt="XUV 3XO Profile" />
                </button>
              </div>
              <div className="vehicle-body">
                <h3 className="vehicle-title">Mahindra XUV 3XO</h3>
                <p className="vehicle-models">5-Seater • Dual-Zone Climate Control • Skyroof</p>

                <p className="vehicle-desc">
                  Sri Komban's latest high-safety compact luxury SUV. High ground clearance, plush leatherette seating, and punchy turbo performance make it ideal for Madurai temple visits, airport transfers, and hill getaways.
                </p>

                <button className="btn-feat-pkg-wa" onClick={() => handleBookVehicle('Mahindra XUV 3XO')}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="wa-btn-icon">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>Book Now</span>
                </button>
              </div>
            </div>

            {/* Vehicle 2: SUV Innova Crysta */}
            <div className="vehicle-card">
              <div className="vehicle-img-wrap">
                <img src={innovaImg} alt="Toyota Innova Crysta Luxury SUV" />
                <span className="vehicle-badge">Most Popular SUV</span>
              </div>
              <div className="vehicle-thumbs">
                <button
                  className={`vehicle-thumb-btn ${innovaImg === '/images/vehicles/toyota-innova-crysta.jpg' ? 'active' : ''}`}
                  onClick={() => setInnovaImg('/images/vehicles/toyota-innova-crysta.jpg')}
                  title="Mountain View"
                >
                  <img src="/images/vehicles/toyota-innova-crysta.jpg" alt="Innova Crysta Munnar" />
                </button>
                <button
                  className={`vehicle-thumb-btn ${innovaImg === '/images/vehicles/toyota-innova-crysta-side.jpg' ? 'active' : ''}`}
                  onClick={() => setInnovaImg('/images/vehicles/toyota-innova-crysta-side.jpg')}
                  title="Lakeside Profile"
                >
                  <img src="/images/vehicles/toyota-innova-crysta-side.jpg" alt="Innova Crysta Lakeside" />
                </button>
                <button
                  className={`vehicle-thumb-btn ${innovaImg === '/images/vehicles/toyota-innova-crysta-beach.jpg' ? 'active' : ''}`}
                  onClick={() => setInnovaImg('/images/vehicles/toyota-innova-crysta-beach.jpg')}
                  title="Ocean Beach"
                >
                  <img src="/images/vehicles/toyota-innova-crysta-beach.jpg" alt="Innova Crysta Beach" />
                </button>
                <button
                  className={`vehicle-thumb-btn ${innovaImg === '/images/vehicles/vehicle-3/WhatsApp Image 2026-10-17 at 9.25.17 PM.jpeg' ? 'active' : ''}`}
                  onClick={() => setInnovaImg('/images/vehicles/vehicle-3/WhatsApp Image 2026-10-17 at 9.25.17 PM.jpeg')}
                  title="Front Hill"
                >
                  <img src="/images/vehicles/vehicle-3/WhatsApp Image 2026-10-17 at 9.25.17 PM.jpeg" alt="Innova Crysta Front" />
                </button>
              </div>
              <div className="vehicle-body">
                <h3 className="vehicle-title">Toyota Innova Crysta</h3>
                <p className="vehicle-models">6-7 Seater • Reclining Captain Seats • Dual AC</p>

                <p className="vehicle-desc">
                  The gold standard in Indian road travel. Exceptional suspension and hill-climbing prowess make this vehicle the unmatched choice for Kodaikanal, Munnar, Ooty, Rameswaram, and long-distance family tours.
                </p>

                <button className="btn-feat-pkg-wa" onClick={() => handleBookVehicle('Toyota Innova Crysta')}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="wa-btn-icon">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>Book Now</span>
                </button>
              </div>
            </div>

            {/* Vehicle 3: Force Urbania */}
            <div className="vehicle-card">
              <div className="vehicle-img-wrap">
                <img src={urbaniaImg} alt="Force Urbania Luxury Van Komban Edition" />
                <span className="vehicle-badge">Komban Signature Van</span>
              </div>
              <div className="vehicle-thumbs">
                <button
                  className={`vehicle-thumb-btn ${urbaniaImg === '/images/vehicles/force-urbania.jpg' ? 'active' : ''}`}
                  onClick={() => setUrbaniaImg('/images/vehicles/force-urbania.jpg')}
                  title="Resort View"
                >
                  <img src="/images/vehicles/force-urbania.jpg" alt="Force Urbania Resort" />
                </button>
                <button
                  className={`vehicle-thumb-btn ${urbaniaImg === '/images/vehicles/force-urbania-airport.jpg' ? 'active' : ''}`}
                  onClick={() => setUrbaniaImg('/images/vehicles/force-urbania-airport.jpg')}
                  title="Airport View"
                >
                  <img src="/images/vehicles/force-urbania-airport.jpg" alt="Force Urbania Airport" />
                </button>
                <button
                  className={`vehicle-thumb-btn ${urbaniaImg === '/images/vehicles/vehicle-2/WhatsApp Image 2026-10-17 at 9.25.17 PM (2).jpeg' ? 'active' : ''}`}
                  onClick={() => setUrbaniaImg('/images/vehicles/vehicle-2/WhatsApp Image 2026-10-17 at 9.25.17 PM (2).jpeg')}
                  title="Exterior View"
                >
                  <img src="/images/vehicles/vehicle-2/WhatsApp Image 2026-10-17 at 9.25.17 PM (2).jpeg" alt="Force Urbania Exterior" />
                </button>
                <button
                  className={`vehicle-thumb-btn ${urbaniaImg === '/images/vehicles/vehicle-2/WhatsApp Image 2026-10-17 at 9.25.17 PM (3).jpeg' ? 'active' : ''}`}
                  onClick={() => setUrbaniaImg('/images/vehicles/vehicle-2/WhatsApp Image 2026-10-17 at 9.25.17 PM (3).jpeg')}
                  title="Front Look"
                >
                  <img src="/images/vehicles/vehicle-2/WhatsApp Image 2026-10-17 at 9.25.17 PM (3).jpeg" alt="Force Urbania Front" />
                </button>
              </div>
              <div className="vehicle-body">
                <h3 className="vehicle-title">Force Urbania Luxury Van</h3>
                <p className="vehicle-models">12-17 Seater • Aircraft Style AC • Pushback Recliners</p>

                <p className="vehicle-desc">
                  Sri Komban Travels' flagship luxury executive van. Aircraft-inspired interior with individual AC vents, reading lamps, USB charging points, and wide panoramic windows for group pilgrimages and wedding travels.
                </p>

                <button className="btn-feat-pkg-wa" onClick={() => handleBookVehicle('Force Urbania Luxury Van')}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="wa-btn-icon">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>Book Now</span>
                </button>
              </div>
            </div>

          </div>

          {/* Wherever You Want to Go CTA Banner */}
          <div className="vehicle-cta-banner">
            <div className="vehicle-cta-content">
              <span className="vehicle-cta-badge">UNBEATABLE BEST PRICE GUARANTEE</span>
              <h3 className="vehicle-cta-title">
                Wherever You Want to Go, We Can Do That at the Best Offer!
              </h3>
              <p className="vehicle-cta-desc">
                Have a custom route, temple pilgrimage, airport transfer, or holiday circuit in mind? Share your travel plans with us and get an instant custom quote with our best rates and transparent billing.
              </p>
            </div>
            <div className="vehicle-cta-actions">
              <a
                href="https://wa.me/919876543210?text=Hi%20Sri%20Komban%20Travels,%20I%20want%20to%20get%20the%20best%20offer%20for%20my%20upcoming%20ride!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-feat-pkg-wa"
                style={{ width: 'auto', padding: '14px 26px', fontSize: '0.98rem' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="wa-btn-icon" style={{ width: '20px', height: '20px' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Get Best Offer on WhatsApp</span>
              </a>
              <Link href="/contact" className="btn-tourist-white" style={{ padding: '14px 26px', fontSize: '0.98rem', textDecoration: 'none' }}>
                Plan Custom Route →
              </Link>
            </div>
          </div>
        </div> 
      </section>


    </>
  );
}
