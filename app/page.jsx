'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PACKAGES_DATA } from '../lib/packagesData';
import PackageModal from '../components/PackageModal';
import AssistanceBanner from '../components/AssistanceBanner';
import TrustBar from '../components/TrustBar';
import Newsletter from '../components/Newsletter';

export default function HomePage() {
  const router = useRouter();
  const [selectedPkg, setSelectedPkg] = useState(null);
  const [searchTab, setSearchTab] = useState('places');
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [travelers, setTravelers] = useState('2 Adults, 0 Child');

  const destTrackRef = useRef(null);
  const pkgTrackRef = useRef(null);
  const reviewsTrackRef = useRef(null);

  const slideLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const slideRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  const handleQuickWhatsApp = (pkgTitle) => {
    const msg = `Hi Sri Komban Travels! I'm interested in the "${pkgTitle}" tour package. Please share details and pricing.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (destination) {
      router.push(`/packages?dest=${encodeURIComponent(destination)}`);
    } else {
      router.push('/packages');
    }
  };

  const featuredPackages = Object.values(PACKAGES_DATA).slice(0, 6);

  return (
    <>
      {/* ==================== SECTION 1 — HERO ==================== */}
      <section className="hero-section" id="home">
        <div className="hero-backdrop" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}></div>
        <div className="hero-overlay"></div>

        <div className="hero-content-wrapper">
          <div className="hero-human-badge">
            <span>📍 Handcrafted in Madurai • 12+ Years Trusted • 24/7 Ground Assistance</span>
          </div>

          <div className="hero-badge">
            <span>EXPLORE THE WORLD</span>
          </div>

          <h1 className="hero-title">
            Find our dream <br />
            <span className="hero-script">Trip</span> on Sri Komban Travels
          </h1>

          <p className="hero-subtitle-primary">
            Dream It. Plan It. Travel It. ✈️
          </p>

          <p className="hero-description">
            From Madurai to the world — let’s turn your travel dreams into unforgettable journeys. Discover exciting destinations, thoughtfully planned tour packages, and personalized travel experiences with Sri Komban Travels & Tourism. Whether you're dreaming of Thailand, Bali, Malaysia, Andaman, Goa, or a getaway closer to home, we're here to help you plan the journey your way.
          </p>

          <div className="hero-actions">
            <Link href="/packages" className="btn btn-primary" id="heroExploreBtn">
              <span>Explore Packages</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="btn-icon">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="/contact" className="btn btn-glass" id="heroPlanBtn">
              <svg viewBox="0 0 24 24" fill="currentColor" className="btn-icon-play">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span>Plan My Trip</span>
            </Link>
          </div>
        </div>

        {/* Right indicator dots */}
        <div className="hero-slider-indicators">
          <span className="indicator active"></span>
          <span className="indicator"></span>
          <span className="indicator"></span>
          <span className="indicator"></span>
        </div>

        {/* FLOATING SEARCH BAR */}
        <div className="search-card-container">
          <div className="search-card" id="searchWidget">
            <div className="search-tabs">
              <button 
                type="button"
                className={`search-tab ${searchTab === 'places' ? 'active' : ''}`}
                onClick={() => setSearchTab('places')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Places</span>
              </button>
              <button 
                type="button"
                className={`search-tab ${searchTab === 'activities' ? 'active' : ''}`}
                onClick={() => setSearchTab('activities')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"></path></svg>
                <span>Activities</span>
              </button>
              <button 
                type="button"
                className={`search-tab ${searchTab === 'packages' ? 'active' : ''}`}
                onClick={() => setSearchTab('packages')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <span>Packages</span>
              </button>
              <button 
                type="button"
                className={`search-tab ${searchTab === 'deals' ? 'active' : ''}`}
                onClick={() => setSearchTab('deals')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                <span>Deals</span>
              </button>
            </div>

            <form className="search-fields-grid" onSubmit={handleSearchSubmit}>
              <div className="search-field">
                <div className="field-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
                <div className="field-inputs">
                  <label>Where are you going?</label>
                  <select 
                    value={destination} 
                    onChange={(e) => setDestination(e.target.value)}
                    className="clean-select"
                  >
                    <option value="">Search destinations</option>
                    <option value="Thailand">Thailand 🇹🇭</option>
                    <option value="Bali">Bali 🌴</option>
                    <option value="Malaysia">Malaysia 🇲🇾</option>
                    <option value="Andaman">Andaman 🏝️</option>
                    <option value="Goa">Goa 🏖️</option>
                  </select>
                </div>
              </div>

              <div className="search-divider"></div>

              <div className="search-field">
                <div className="field-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <div className="field-inputs">
                  <label>Check In</label>
                  <input 
                    type="date" 
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="clean-input" 
                  />
                </div>
              </div>

              <div className="search-divider"></div>

              <div className="search-field">
                <div className="field-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <div className="field-inputs">
                  <label>Check Out</label>
                  <input 
                    type="date" 
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="clean-input" 
                  />
                </div>
              </div>

              <div className="search-divider"></div>

              <div className="search-field">
                <div className="field-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div className="field-inputs">
                  <label>Travelers</label>
                  <select 
                    value={travelers} 
                    onChange={(e) => setTravelers(e.target.value)}
                    className="clean-select"
                  >
                    <option value="2 Adults, 0 Child">2 Adults, 0 Child</option>
                    <option value="1 Adult">1 Adult</option>
                    <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
                    <option value="2 Adults, 2 Child">2 Adults, 2 Child</option>
                    <option value="Group (4+ Travelers)">Group (4+ Travelers)</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="search-submit-btn" id="searchSubmitBtn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <span>Search</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2 — POPULAR DESTINATIONS (BUTTER SLIDING UI) ==================== */}
      <section className="section popular-destinations-section" id="destinations">
        <div className="section-container">
          <div className="section-header-flex">
            <div className="section-title-wrap">
              <span className="subheading-pill">DESTINATION SPOTLIGHT</span>
              <h2 className="section-title">
                Popular Destinations
                <span className="wavy-decoration">
                  <svg viewBox="0 0 55 10" fill="none">
                    <path d="M1 5C5 1 9 9 13 5C17 1 21 9 25 5C29 1 33 9 37 5C41 1 45 9 49 5C51 3 53 4 54 5" stroke="#00A896" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>
              <p className="section-subtitle">
                A sunset in Bali. A beach morning in Andaman. A city adventure in Thailand. Slide to discover handcrafted holiday escapes with direct flight coordination from Madurai.
              </p>
            </div>
            
            <div className="section-header-actions">
              <div className="slider-nav-btns">
                <button className="slider-arrow-btn" onClick={() => slideLeft(destTrackRef)} aria-label="Slide Left">‹</button>
                <button className="slider-arrow-btn" onClick={() => slideRight(destTrackRef)} aria-label="Slide Right">›</button>
              </div>
              <Link href="/packages" className="view-all-link">
                <span>View all destinations</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

          <div className="butter-slider-track" ref={destTrackRef}>
            <div className="destination-card butter-dest-card" onClick={() => router.push('/packages?dest=Andaman')}>
              <img src="/images/andaman.jpg" alt="Andaman Island Escape" className="dest-card-img" />
              <div className="dest-glass-badge">
                <span className="dest-price-chip">From ₹21,999</span>
                <span className="dest-duration-chip">4N / 5D</span>
              </div>
              <div className="dest-card-overlay">
                <div className="dest-card-info">
                  <h3 className="dest-card-title">Andaman 🏝️</h3>
                  <p className="dest-card-sub">Havelock & Radhanagar Beach</p>
                </div>
                <div className="dest-pin-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                </div>
              </div>
            </div>

            <div className="destination-card butter-dest-card" onClick={() => router.push('/packages?dest=Thailand')}>
              <img src="/images/thailand.jpg" alt="Thailand Longtail Boat Bay" className="dest-card-img" />
              <div className="dest-glass-badge">
                <span className="dest-price-chip">From ₹28,499</span>
                <span className="dest-duration-chip">5N / 6D</span>
              </div>
              <div className="dest-card-overlay">
                <div className="dest-card-info">
                  <h3 className="dest-card-title">Thailand 🇹🇭</h3>
                  <p className="dest-card-sub">Bangkok & Coral Island Pattaya</p>
                </div>
                <div className="dest-pin-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                </div>
              </div>
            </div>

            <div className="destination-card butter-dest-card" onClick={() => router.push('/packages?dest=Bali')}>
              <img src="/images/bali.jpg" alt="Bali Water Temple" className="dest-card-img" />
              <div className="dest-glass-badge">
                <span className="dest-price-chip">From ₹34,999</span>
                <span className="dest-duration-chip">5N / 6D</span>
              </div>
              <div className="dest-card-overlay">
                <div className="dest-card-info">
                  <h3 className="dest-card-title">Bali 🌴</h3>
                  <p className="dest-card-sub">Ubud Waterfalls & Kuta Sunset</p>
                </div>
                <div className="dest-pin-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                </div>
              </div>
            </div>

            <div className="destination-card butter-dest-card" onClick={() => router.push('/packages?dest=Malaysia')}>
              <img src="/images/malaysia.jpg" alt="Malaysia Kuala Lumpur Twin Towers" className="dest-card-img" />
              <div className="dest-glass-badge">
                <span className="dest-price-chip">From ₹24,999</span>
                <span className="dest-duration-chip">4N / 5D</span>
              </div>
              <div className="dest-card-overlay">
                <div className="dest-card-info">
                  <h3 className="dest-card-title">Malaysia 🇲🇾</h3>
                  <p className="dest-card-sub">Twin Towers & Genting Highlands</p>
                </div>
                <div className="dest-pin-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                </div>
              </div>
            </div>

            <div className="destination-card butter-dest-card" onClick={() => router.push('/packages?dest=Goa')}>
              <img src="/images/goa.jpg" alt="Goa Sunset Beach" className="dest-card-img" />
              <div className="dest-glass-badge">
                <span className="dest-price-chip">From ₹14,499</span>
                <span className="dest-duration-chip">4N / 5D</span>
              </div>
              <div className="dest-card-overlay">
                <div className="dest-card-info">
                  <h3 className="dest-card-title">Goa 🏖️</h3>
                  <p className="dest-card-sub">Beaches, Nightlife & Cruise</p>
                </div>
                <div className="dest-pin-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3 — TRIP MOODS ==================== */}
      <section className="section trip-moods-section" id="trip-moods">
        <div className="section-container">
          <div className="text-center max-w-750">
            <span className="subheading-pill">FIND YOUR VIBE</span>
            <h2 className="section-title">Forget the Package. What Kind of Journey Are You Looking For?</h2>
            <p className="section-description">
              Not every traveller wants the same kind of holiday. Whether you're planning a relaxing beach escape, a romantic honeymoon, a family holiday, an adventure with friends, or your first international trip from Madurai — choose what feels right for you.
            </p>
          </div>

          <div className="mood-cards-grid">
            <div className="mood-card">
              <div className="mood-icon-wrapper">🌊</div>
              <h3 className="mood-title">I NEED A BREAK</h3>
              <p className="mood-tags">Beach • Relaxation • Nature</p>
              <p className="mood-desc">For travellers who want to slow down, switch off and enjoy beautiful beaches, peaceful stays and refreshing escapes.</p>
              <div className="mood-explore-tags">
                <span>Explore:</span>
                <Link href="/packages?dest=Andaman">Andaman</Link> • 
                <Link href="/packages?dest=Goa">Goa</Link> • 
                <Link href="/packages?dest=Bali">Bali</Link>
              </div>
              <Link href="/packages?cat=beach" className="mood-btn">Explore Relaxing Getaways →</Link>
            </div>

            <div className="mood-card mood-featured">
              <div className="featured-badge">Top Pick for Couples</div>
              <div className="mood-icon-wrapper">❤️</div>
              <h3 className="mood-title">I WANT SOMETHING ROMANTIC</h3>
              <p className="mood-tags">Couples • Honeymoon • Sunset</p>
              <p className="mood-desc">Planning a honeymoon or a romantic escape? Discover destinations made for couples, memorable experiences and time together.</p>
              <div className="mood-explore-tags">
                <span>Explore:</span>
                <Link href="/packages?dest=Bali">Bali</Link> • 
                <Link href="/packages?dest=Thailand">Thailand</Link> • 
                <Link href="/packages?dest=Andaman">Andaman</Link>
              </div>
              <Link href="/packages?cat=romantic" className="mood-btn">Explore Romantic Escapes →</Link>
            </div>

            <div className="mood-card">
              <div className="mood-icon-wrapper">👨‍👩‍👧</div>
              <h3 className="mood-title">I WANT FAMILY TIME</h3>
              <p className="mood-tags">Family • Fun • Memories</p>
              <p className="mood-desc">Because the best holidays are the ones everyone enjoys. Explore family-friendly destinations and thoughtfully planned holiday experiences.</p>
              <div className="mood-explore-tags">
                <span>Explore:</span>
                <Link href="/packages?dest=Goa">Goa</Link> • 
                <Link href="/packages?dest=Andaman">Andaman</Link> • 
                <Link href="/packages?dest=Malaysia">Malaysia</Link>
              </div>
              <Link href="/packages?cat=family" className="mood-btn">Find Family Getaways →</Link>
            </div>

            <div className="mood-card">
              <div className="mood-icon-wrapper">🥳</div>
              <h3 className="mood-title">I WANT AN ADVENTURE</h3>
              <p className="mood-tags">Friends • Experiences • Exploration</p>
              <p className="mood-desc">Travelling with your favourite people? Discover exciting destinations, new experiences and trips designed for unforgettable group memories.</p>
              <div className="mood-explore-tags">
                <span>Explore:</span>
                <Link href="/packages?dest=Thailand">Thailand</Link> • 
                <Link href="/packages?dest=Malaysia">Malaysia</Link> • 
                <Link href="/packages?dest=Goa">Goa</Link>
              </div>
              <Link href="/packages?cat=group" className="mood-btn">Find My Adventure →</Link>
            </div>

            <div className="mood-card">
              <div className="mood-icon-wrapper">🌍</div>
              <h3 className="mood-title">I WANT TO GO ABROAD</h3>
              <p className="mood-tags">International • New Places • New Experiences</p>
              <p className="mood-desc">Ready to travel beyond India? Explore international holiday destinations and start planning your next overseas journey from Madurai.</p>
              <div className="mood-explore-tags">
                <span>Explore:</span>
                <Link href="/packages?dest=Thailand">Thailand</Link> • 
                <Link href="/packages?dest=Malaysia">Malaysia</Link> • 
                <Link href="/packages?dest=Bali">Bali</Link>
              </div>
              <Link href="/packages?cat=international" className="mood-btn">Explore International Trips →</Link>
            </div>
          </div>

          <div className="mood-callout-banner">
            <div className="callout-text">
              <h3>Still Not Sure Where to Go?</h3>
              <p>Tell us your travel dates, budget, interests and who you're travelling with. We'll help you discover a journey that fits.</p>
            </div>
            <Link href="/contact" className="btn btn-primary">Find My Journey →</Link>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4 — FEATURED TOUR PACKAGES (BUTTER SLIDING UI) ==================== */}
      <section className="section tour-packages-section" id="packages">
        <div className="section-container">
          <div className="section-header-flex">
            <div className="section-title-wrap">
              <span className="subheading-pill">CURATED ITINERARIES</span>
              <h2 className="section-title">
                Featured Tour Packages
                <span className="wavy-decoration">
                  <svg viewBox="0 0 55 10" fill="none">
                    <path d="M1 5C5 1 9 9 13 5C17 1 21 9 25 5C29 1 33 9 37 5C41 1 45 9 49 5C51 3 53 4 54 5" stroke="#00A896" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>
              <p className="section-subtitle">
                Your Kind of Journey. Your Kind of Package. Handcrafted from Madurai with premium stays, private cab transfers, daily breakfast, and local concierge support.
              </p>
            </div>

            <div className="section-header-actions">
              <div className="slider-nav-btns">
                <button className="slider-arrow-btn" onClick={() => slideLeft(pkgTrackRef)} aria-label="Slide Left">‹</button>
                <button className="slider-arrow-btn" onClick={() => slideRight(pkgTrackRef)} aria-label="Slide Right">›</button>
              </div>
              <Link href="/packages" className="view-all-link">
                <span>View all packages</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

          <div className="butter-slider-track" ref={pkgTrackRef}>
            {featuredPackages.map((pkg) => (
              <article key={pkg.id} className="package-card butter-pkg-card">
                <div className="pkg-img-wrap">
                  <img src={pkg.image} alt={pkg.title} />
                  <span className="pkg-badge badge-red">{pkg.discount}</span>
                  <span className="pkg-rating-pill">★ 4.9 (120+ Reviews)</span>
                </div>
                <div className="pkg-body">
                  <h3 className="pkg-title">{pkg.title}</h3>
                  <p className="pkg-bestfor">{pkg.bestFor}</p>

                  <div className="pkg-inclusions-chips">
                    <span>✈️ Flights</span>
                    <span>🏨 4★ Resort</span>
                    <span>🚗 AC Cab</span>
                    <span>🍳 Breakfast</span>
                  </div>

                  <div className="pkg-meta">
                    <span className="pkg-duration">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      {pkg.duration}
                    </span>
                    <div className="pkg-price-wrap">
                      <span className="pkg-price">{pkg.price}</span>
                      <span className="pkg-old-price">{pkg.oldPrice}</span>
                    </div>
                  </div>
                  <p className="pkg-description">{pkg.overview}</p>

                  <div className="pkg-actions-group">
                    <button className="btn btn-outline-teal btn-pkg-action" onClick={() => setSelectedPkg(pkg)}>
                      View Details →
                    </button>
                    <button className="btn btn-whatsapp-mini" onClick={() => handleQuickWhatsApp(pkg.title)} title="Get WhatsApp Quote">
                      💬 WhatsApp
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-40">
            <Link href="/packages" className="btn btn-primary btn-lg">Browse All 15+ Tour Packages →</Link>
          </div>
        </div>
      </section>

      {/* ==================== FLEET TEASER ==================== */}
      <section className="section" style={{ background: '#ffffff', paddingTop: '40px' }}>
        <div className="section-container">
          <div className="section-header-flex">
            <div className="section-title-wrap">
              <span className="subheading-pill">TRAVEL FLEET</span>
              <h2 className="section-title">
                Our Travel Vehicles & Rental Fleet
                <span className="wavy-decoration">
                  <svg viewBox="0 0 55 10" fill="none"><path d="M1 5C5 1 9 9 13 5C17 1 21 9 25 5C29 1 33 9 37 5C41 1 45 9 49 5C51 3 53 4 54 5" stroke="#00A896" strokeWidth="2.5" strokeLinecap="round"/></svg>
                </span>
              </h2>
              <p className="section-subtitle">
                Heading on an outstation trip from Madurai to Rameswaram, Kodaikanal, Munnar or Kanyakumari? Travel in total comfort with our verified chauffeurs and premium AC vehicles.
              </p>
            </div>
            <Link href="/vehicles" className="view-all-link">
              <span>Explore full fleet & rates</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

          <div className="fleet-grid">
            <div className="vehicle-card">
              <div className="vehicle-img-wrap">
                <img src="/images/innova.jpg" alt="Toyota Innova Crysta" />
                <span className="vehicle-badge">Most Popular SUV</span>
              </div>
              <div className="vehicle-body">
                <h3 className="vehicle-title">Toyota Innova Crysta</h3>
                <p className="vehicle-models">6-7 Seater • Dual AC • Supreme Legroom</p>
                <p className="vehicle-desc">The #1 choice for family vacations and hill stations like Kodaikanal & Munnar. Premium bucket seats with high luggage capacity.</p>
                <div className="vehicle-pricing-bar">
                  <div className="price-tag-wrap">
                    <span>Starting from</span>
                    <strong>₹18 / km</strong>
                  </div>
                  <Link href="/vehicles" className="btn btn-outline-teal">View Details & Book →</Link>
                </div>
              </div>
            </div>

            <div className="vehicle-card">
              <div className="vehicle-img-wrap">
                <img src="/images/tempo.jpg" alt="Luxury Tempo Traveller" />
                <span className="vehicle-badge">Ideal for Groups</span>
              </div>
              <div className="vehicle-body">
                <h3 className="vehicle-title">Luxury Force Tempo Traveller</h3>
                <p className="vehicle-models">12 / 14 / 18 / 20 Seater AC</p>
                <p className="vehicle-desc">Pushback luxury leather seats, individual AC vents, and LED TV system. Perfect for pilgrimage circuits and family celebrations.</p>
                <div className="vehicle-pricing-bar">
                  <div className="price-tag-wrap">
                    <span>Starting from</span>
                    <strong>₹24 / km</strong>
                  </div>
                  <Link href="/vehicles" className="btn btn-outline-teal">View Details & Book →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ASSISTANCE BANNER ==================== */}
      <AssistanceBanner />

      {/* ==================== SERVICES & APPROACH ==================== */}
      <section className="section services-section" id="services">
        <div className="section-container">
          <div className="text-center max-w-750">
            <span className="subheading-pill">✨ WHAT WE OFFER</span>
            <h2 className="section-title">More Than a Trip. We Help You Put the Journey Together.</h2>
            <p className="section-description">
              Whether you're travelling with family, planning a honeymoon, travelling with friends, or heading abroad for the first time, Sri Komban Travels & Tourism helps make the planning process simpler.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-box">
              <div className="service-icon">🧭</div>
              <h3>Personalized Trip Planning</h3>
              <p>Your trip doesn't have to follow a standard template. We help plan journeys around your destination, travel preferences and requirements.</p>
            </div>
            <div className="service-box">
              <div className="service-icon">✈️</div>
              <h3>Domestic & International Travel</h3>
              <p>From Indian getaways to international destinations like Thailand, Malaysia, and Bali, explore travel options that match your plans.</p>
            </div>
            <div className="service-box">
              <div className="service-icon">🗺️</div>
              <h3>Customized Itineraries</h3>
              <p>Want a trip that feels different from a regular package? We help create customized travel plans around your interests and schedule.</p>
            </div>
            <div className="service-box">
              <div className="service-icon">👨‍👩‍👧</div>
              <h3>Family & Group Travel</h3>
              <p>Planning for family or travelling with a group? We help coordinate your trip around your group's travel needs and budget.</p>
            </div>
            <div className="service-box">
              <div className="service-icon">🏨</div>
              <h3>Travel Assistance</h3>
              <p>From trip planning to travel coordination, get support throughout the process so you can focus more on enjoying the journey.</p>
            </div>
            <div className="service-box">
              <div className="service-icon">💬</div>
              <h3>Travel Guidance</h3>
              <p>Not sure where to go or what type of trip suits you? Share your requirements and get guidance before you make your travel plans.</p>
            </div>
          </div>

          {/* 4-Step Approach */}
          <div className="approach-container">
            <div className="approach-header text-center">
              <span className="subheading-pill">OUR APPROACH</span>
              <h3 className="approach-title">Understand. Plan. Personalize. Experience.</h3>
            </div>
            <div className="approach-steps-grid">
              <div className="step-card">
                <span className="step-num">01</span>
                <h4>💬 Understand</h4>
                <p>We listen to what you want from your trip, your budget, and your preferences.</p>
              </div>
              <div className="step-card">
                <span className="step-num">02</span>
                <h4>🗺️ Plan</h4>
                <p>We help shape your destination, itinerary, flights, and travel requirements.</p>
              </div>
              <div className="step-card">
                <span className="step-num">03</span>
                <h4>✨ Personalize</h4>
                <p>Because your journey shouldn't always feel like everyone else's template.</p>
              </div>
              <div className="step-card">
                <span className="step-num">04</span>
                <h4>🌍 Experience</h4>
                <p>The goal is simple — create a seamless, unforgettable journey you'll remember for years.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7 — TESTIMONIALS (BUTTER SLIDING UI) ==================== */}
      <section className="section testimonials-section" id="reviews">
        <div className="section-container">
          <div className="section-header-flex">
            <div className="section-title-wrap">
              <span className="subheading-pill">REAL EXPERIENCES</span>
              <h2 className="section-title">
                What Our Travelers Say
                <span className="wavy-decoration">
                  <svg viewBox="0 0 55 10" fill="none">
                    <path d="M1 5C5 1 9 9 13 5C17 1 21 9 25 5C29 1 33 9 37 5C41 1 45 9 49 5C51 3 53 4 54 5" stroke="#00A896" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>
              <p className="section-subtitle">
                Over 1,200+ families and honeymooners from Madurai and across Tamil Nadu have trusted Sri Komban Travels for their dream getaways.
              </p>
            </div>
            
            <div className="slider-nav-btns">
              <button className="slider-arrow-btn" onClick={() => slideLeft(reviewsTrackRef)} aria-label="Slide Left">‹</button>
              <button className="slider-arrow-btn" onClick={() => slideRight(reviewsTrackRef)} aria-label="Slide Right">›</button>
            </div>
          </div>

          <div className="butter-slider-track" ref={reviewsTrackRef}>
            <div className="testimonial-card butter-review-card">
              <div className="reviewer-header">
                <img src="/images/avatar1.jpg" alt="Priya & Vikram" className="reviewer-avatar" />
                <div className="reviewer-meta">
                  <div className="reviewer-name-row">
                    <h4 className="reviewer-name">Priya & Vikram</h4>
                    <span className="reviewer-verified-tag">✓ Verified Traveler</span>
                  </div>
                  <span className="reviewer-origin">Madurai • Bali Honeymoon 5N/6D</span>
                  <div className="star-rating">★★★★★</div>
                </div>
              </div>
              <p className="reviewer-text">"Amazing experience with Sri Komban Travels! Everything was organized from Madurai to Bali. The beach resort, private pool villa, chauffeur, and custom itinerary were completely seamless."</p>
            </div>

            <div className="testimonial-card butter-review-card">
              <div className="reviewer-header">
                <img src="/images/avatar2.jpg" alt="Rohit Verma" className="reviewer-avatar" />
                <div className="reviewer-meta">
                  <div className="reviewer-name-row">
                    <h4 className="reviewer-name">Rohit Verma & Family</h4>
                    <span className="reviewer-verified-tag">✓ Verified Traveler</span>
                  </div>
                  <span className="reviewer-origin">Madurai • Thailand 5D/4N Package</span>
                  <div className="star-rating">★★★★★</div>
                </div>
              </div>
              <p className="reviewer-text">"The best vacation we ever had in Thailand. Great service and memorable moments. Having their team on 24/7 call gave our family immense confidence throughout the trip."</p>
            </div>

            <div className="testimonial-card butter-review-card">
              <div className="reviewer-header">
                <img src="/images/avatar3.jpg" alt="Anjali Mehta" className="reviewer-avatar" />
                <div className="reviewer-meta">
                  <div className="reviewer-name-row">
                    <h4 className="reviewer-name">Anjali Mehta</h4>
                    <span className="reviewer-verified-tag">✓ Verified Traveler</span>
                  </div>
                  <span className="reviewer-origin">Dindigul • Andaman Island Escape</span>
                  <div className="star-rating">★★★★★</div>
                </div>
              </div>
              <p className="reviewer-text">"Highly recommended! Will definitely book our next trip with them. Our Andaman trip was well curated, within our budget, and the beach resorts at Havelock were outstanding."</p>
            </div>

            <div className="testimonial-card butter-review-card">
              <div className="reviewer-header">
                <img src="/images/avatar4.jpg" alt="Karan Singh" className="reviewer-avatar" />
                <div className="reviewer-meta">
                  <div className="reviewer-name-row">
                    <h4 className="reviewer-name">Karan Singh & Friends</h4>
                    <span className="reviewer-verified-tag">✓ Verified Traveler</span>
                  </div>
                  <span className="reviewer-origin">Trichy • Goa Beach & Cruise Tour</span>
                  <div className="star-rating">★★★★★</div>
                </div>
              </div>
              <p className="reviewer-text">"Excellent support throughout the trip. Hassle-free and enjoyable. Our group of 6 travelled to Goa and everything from local cab to stays and Mandovi cruise was taken care of."</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRUST BAR ==================== */}
      <TrustBar />

      {/* ==================== NEWSLETTER ==================== */}
      <Newsletter />

      {/* Package Modal */}
      {selectedPkg && (
        <PackageModal pkg={selectedPkg} onClose={() => setSelectedPkg(null)} />
      )}
    </>
  );
}
