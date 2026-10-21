'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HeroSection from '../components/HeroSection';
import OfferCTA from '../components/OfferCTA';

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: 'Thailand',
    travelDate: '',
    travelers: '2 Adults',
    tripType: 'Honeymoon / Couple',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const [destCategory, setDestCategory] = useState('Popular');

  const destinationsList = [
    {
      name: 'Phuket & Phi Phi Islands',
      country: 'Thailand',
      tag: 'Adventure & Beaches',
      image: '/images/thailand.jpg',
      category: 'Thailand'
    },
    {
      name: 'Ubud & Kuta Escapes',
      country: 'Bali, Indonesia',
      tag: 'Tropical & Cultural',
      image: '/images/bali.jpg',
      category: 'Bali'
    },
    {
      name: 'Kuala Lumpur & Langkawi',
      country: 'Malaysia',
      tag: 'City & Islands',
      image: '/images/malaysia.jpg',
      category: 'Malaysia'
    },
    {
      name: 'Havelock & Neil Island',
      country: 'Andaman Islands',
      tag: 'Beaches & Coral',
      image: '/images/andaman.jpg',
      category: 'Andaman'
    },
    {
      name: 'North & South Coastal Goa',
      country: 'Goa, India',
      tag: 'Sunsets & Leisure',
      image: '/images/goa.jpg',
      category: 'Goa'
    }
  ];

  const homeVehiclesList = [
    {
      name: 'Mahindra XUV 3XO',
      category: 'Compact Luxury SUV',
      specs: '4-5 Seats • Dual-Zone AC • Skyroof',
      image: '/images/vehicles/mahindra-xuv3xo.jpg',
      desc: 'High-safety luxury compact SUV with plush seating and smooth highway performance for outstation trips and airport rides.',
    },
    {
      name: 'Toyota Innova Crysta',
      category: 'Premium MPV',
      specs: '6-7 Seats • Captain Chairs • Dual AC',
      image: '/images/vehicles/toyota-innova-crysta.jpg',
      desc: 'The benchmark of highway comfort with spacious legroom, reclining captain seats, and generous luggage space for family travel.',
    },
    {
      name: 'Force Urbania',
      category: 'Executive Luxury Van',
      specs: '12-16 Seats • Reclining Seats • Panoramic Glass',
      image: '/images/vehicles/force-urbania.jpg',
      desc: 'World-class group travel with plush reclining seats, individual AC vents, and massive sealed panoramic windows.',
    }
  ];

  const homeGalleryItems = [
    {
      title: 'Coral Island & Longtail Boats',
      loc: 'Phuket, Thailand',
      img: '/images/thailand.jpg'
    },
    {
      title: 'Ulun Danu Water Temple',
      loc: 'Bali, Indonesia',
      img: '/images/bali.jpg'
    },
    {
      title: 'Misty Tea Hills',
      loc: 'Munnar, Kerala',
      img: '/images/kerala.jpg'
    },
    {
      title: 'Radhanagar White Sands',
      loc: 'Havelock, Andaman',
      img: '/images/andaman.jpg'
    },
    {
      title: 'Historic Gopuram Heritage',
      loc: 'Meenakshi Temple, Madurai',
      img: '/images/madurai-heritage.jpg'
    },
    {
      title: 'Petronas Skyline at Dusk',
      loc: 'Kuala Lumpur, Malaysia',
      img: '/images/malaysia.jpg'
    },
    {
      title: 'Sunset Waves & Coastline',
      loc: 'Calangute, Goa',
      img: '/images/goa.jpg'
    },
    {
      title: 'Executive Luxury Van',
      loc: 'Force Urbania Fleet',
      img: '/images/vehicles/force-urbania.jpg'
    }
  ];

  const homeTestimonials = [
    {
      id: 1,
      name: 'Priya & Vikram',
      location: 'Chennai',
      trip: 'Bali Luxury Honeymoon',
      avatar: '/images/avatar1.jpg',
      quote: 'Amazing experience with Sri Komban Travels! Our private pool villa in Ubud, sunset dinner cruise, and transfers were coordinated seamlessly. Best vacation we have ever had!'
    },
    {
      id: 2,
      name: 'Dr. Senthil Nathan & Family',
      location: 'Madurai',
      trip: 'Temple Pilgrimage Circuit',
      avatar: '/images/avatar2.jpg',
      quote: 'We booked the Toyota Innova Crysta for our parents’ pilgrimage. The chauffeur was extremely polite, arrived early, and drove with great care. Clean car and honest billing.'
    },
    {
      id: 3,
      name: 'Rajesh Kumar & Friends',
      location: 'Coimbatore',
      trip: 'Kodaikanal Weekend Hills',
      avatar: '/images/avatar3.jpg',
      quote: 'Took the Mahindra XUV 3XO for our Kodaikanal ghat trip. Chilled dual AC, skyroof for mountain views, and punchy performance. Will always book with Sri Komban Travels!'
    }
  ];

  const visibleDestinations = destCategory === 'Popular' 
    ? destinationsList 
    : destinationsList.filter(d => d.category === destCategory);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  const handleWhatsAppInquiry = (planName) => {
    const message = `Hi Sri Komban Travels, I'm interested in planning a trip for ${planName}. Please share details!`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleVehicleWhatsAppInquiry = (vehicleName) => {
    const message = `Hi Sri Komban Travels, I'm interested in booking / hiring the ${vehicleName} from Madurai. Please share availability and tariff quote!`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleFormWhatsApp = () => {
    const message = `*Trip Enquiry — Sri Komban Travels*\n\n` +
      `*Name:* ${formData.name || 'Traveler'}\n` +
      `*Phone:* ${formData.phone || 'N/A'}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Destination:* ${formData.destination}\n` +
      `*Travel Date:* ${formData.travelDate || 'Flexible'}\n` +
      `*Travellers:* ${formData.travelers}\n` +
      `*Trip Type:* ${formData.tripType}\n` +
      `*Notes:* ${formData.notes || 'Looking for trip options.'}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="tourist-landing-wrapper">
      {/* ========================================================
          SECTION 1 — HERO
          ======================================================== */}
      <HeroSection />

      {/* ========================================================
          SECTION 2 — TOP DESTINATIONS
          ======================================================== */}
      <section className="tourist-section top-dest-section" id="destinations">
        <div className="tourist-container">
          {/* Section Heading & Subtitle aligned with button */}
          <div className="top-dest-head-wrap dest-filter-bar">
            <div>
              <h2 className="top-dest-main-title">Top Destinations</h2>
              <p className="top-dest-main-desc">
                What If Your Next Favourite Memory Is Waiting Somewhere Else?
              </p>
            </div>
            <Link href="/destinations" className="btn-explore-all-pill">
              <span>Explore all destinations</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="explore-all-arrow">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Vertical Destination Cards Grid */}
          <div className="top-dest-cards-grid">
            {visibleDestinations.map((dest) => (
              <div 
                key={dest.name} 
                className="top-dest-card" 
                onClick={() => handleWhatsAppInquiry(dest.name)}
                title={`Enquire for ${dest.name}`}
              >
                <div className="dest-card-media">
                  <img src={dest.image} alt={dest.name} className="dest-card-img" />
                  <span className="dest-card-badge">{dest.tag}</span>
                </div>
                <div className="dest-card-meta">
                  <h3 className="dest-card-title">{dest.name}</h3>
                  <p className="dest-card-country">{dest.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3 — OUR VERIFIED VEHICLES & FLEET
          ======================================================== */}
      <section className="tourist-section top-dest-section" id="vehicles">
        <div className="tourist-container">
          {/* Section Heading & Subtitle aligned horizontally with button */}
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

          {/* Compact 4-Column Vehicles Grid */}
          <div className="home-vehicles-grid">
            {homeVehiclesList.map((veh) => (
              <div key={veh.name} className="home-vehicle-card">
                <div className="home-vehicle-media">
                  <img src={veh.image} alt={veh.name} className="home-vehicle-img" />
                  <span className="home-vehicle-badge">{veh.category}</span>
                </div>
                <div className="home-vehicle-body">
                  <h3 className="home-vehicle-title">{veh.name}</h3>
                  <div className="home-vehicle-specs">{veh.specs}</div>
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
            ))}
          </div>

          {/* Wherever You Want to Go CTA Banner */}
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
          {/* Section Heading & Subtitle aligned horizontally with button */}
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

          {/* 8-Photo Masonry Grid */}
          <div className="gallery-masonry-grid" style={{ marginTop: '28px' }}>
            {homeGalleryItems.map((item, idx) => (
              <div key={idx} className="gallery-card">
                <img src={item.img} alt={item.title} className="gallery-img" loading="lazy" />
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
          {/* Section Heading & Subtitle aligned horizontally with button */}
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

          {/* 3-Column Testimonials Grid */}
          <div className="testimonials-grid" style={{ marginTop: '28px' }}>
            {homeTestimonials.map((t) => (
              <div key={t.id} className="testimonial-box">
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">"{t.quote}"</p>
                <div className="testi-author-row">
                  <img src={t.avatar} alt={t.name} className="testi-avatar" />
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
          SECTION 7 — CONTACT US / PLAN YOUR TRIP
          ======================================================== */}
      <section className="tourist-section tourist-section-tinted" id="plan-trip">
        <div className="tourist-container">
          <div className="section-head-center">
            <h2 className="tourist-sec-title">Tell Us Where You Want to Go.</h2>
            <p className="tourist-sec-desc">
              Your next journey could be a relaxing beach escape, a romantic honeymoon, a family holiday or an international adventure.
              <br />
              Thailand? Malaysia? Bali? Andaman? Goa? Or somewhere completely different?
              <br />
              Tell us what you're planning. Our team will help you explore the right travel options for your journey.
              <br />
              Let's turn your travel idea into a plan.
            </p>
          </div>

          <div className="contact-card-grid">
            {/* Left Col: Contact Info & Support */}
            <div className="contact-details-box">
              <h3 className="contact-box-title">Sri Komban Travels &amp; Tourism</h3>
              <p className="contact-box-desc">
                Planning a trip from Madurai? You don't need to have the entire trip figured out before contacting us. Tell us your budget, travel dates, who you're travelling with and the kind of experience you want. We'll help you explore the possibilities.
              </p>

              <div className="contact-info-list">
                <div className="contact-info-row">
                  <div>
                    <strong>Location</strong>
                    <p>Madurai, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div>
                    <strong>Phone</strong>
                    <p><a href="tel:+919876543210">+91 98765 43210</a></p>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:info@srikombantravels.com">info@srikombantravels.com</a></p>
                  </div>
                </div>
              </div>

              <div className="contact-wa-action">
                <p>Your Next Story Could Start With One Message.</p>
                <button onClick={handleFormWhatsApp} className="btn-tourist-wa-lg">
                  Send Your Enquiry on WhatsApp →
                </button>
              </div>
            </div>

            {/* Right Col: Plan Your Trip Form */}
            <div className="contact-form-box">
              <h3 className="contact-box-title">Plan Your Trip</h3>
              <p className="contact-box-desc">
                Tell us a little about your journey. Fill in the form below and share your travel requirements. The more we know, the better we can understand what you're looking for.
              </p>

              {submitted && (
                <div className="contact-success-notice">
                  Thank you, {formData.name}! Your enquiry has been received. Our Madurai team will get in touch with you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="tourist-form">
                <div className="form-row-2">
                  <div className="form-field">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Enter your name" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-field">
                    <label>Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="Enter your phone number" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-field">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-field">
                    <label>Where Do You Want to Go? *</label>
                    <select 
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="form-input"
                    >
                      <option value="Thailand">Thailand</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Bali">Bali</option>
                      <option value="Andaman">Andaman</option>
                      <option value="Goa">Goa</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-field">
                    <label>Preferred Travel Date</label>
                    <input 
                      type="date" 
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-field">
                    <label>Number of Travellers</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 2 Adults, 1 Child" 
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label>What Kind of Trip Are You Planning?</label>
                  <select 
                    value={formData.tripType}
                    onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                    className="form-input"
                  >
                    <option value="Honeymoon / Couple">Honeymoon / Couple</option>
                    <option value="Family Holiday">Family Holiday</option>
                    <option value="Friends / Group">Friends / Group</option>
                    <option value="International Trip">International Trip</option>
                    <option value="Beach Holiday">Beach Holiday</option>
                    <option value="Customized Trip">Customized Trip</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Tell Us About Your Trip</label>
                  <textarea 
                    rows="3" 
                    placeholder="Share your requirements, preferences or anything you'd like us to know..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="btn-tourist-primary-lg">
                    Start Planning My Trip →
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
