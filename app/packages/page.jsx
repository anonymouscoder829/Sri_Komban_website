'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { PACKAGES_DATA } from '../../lib/packagesData';
import PackageModal from '../../components/PackageModal';
import AssistanceBanner from '../../components/AssistanceBanner';
import TrustBar from '../../components/TrustBar';

function PackagesContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPkg, setSelectedPkg] = useState(null);

  useEffect(() => {
    const dest = searchParams.get('dest');
    const cat = searchParams.get('cat');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const allPackages = Object.values(PACKAGES_DATA);
  const destQuery = searchParams.get('dest')?.toLowerCase();

  const filteredPackages = allPackages.filter((pkg) => {
    if (destQuery) {
      return pkg.destination.toLowerCase().includes(destQuery) || pkg.title.toLowerCase().includes(destQuery);
    }
    if (selectedCategory === 'all') return true;
    return pkg.categories.includes(selectedCategory);
  });

  return (
    <>
      {/* ==================== PAGE HERO ==================== */}
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Tour Packages</span>
          </div>
          <span className="subheading-pill-light">✈️ CURATED ITINERARIES</span>
          <h1>Your Kind of Journey.<br />Your Kind of Package.</h1>
          <p>From relaxing beach escapes and romantic honeymoons to family holidays, group adventures and international experiences from Madurai.</p>
        </div>
      </section>

      {/* ==================== PACKAGES DIRECTORY ==================== */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="section-container">
          <div className="section-header-flex">
            <div className="section-title-wrap">
              <h2 className="section-title">
                Tour Packages from Madurai
                <span className="wavy-decoration">
                  <svg viewBox="0 0 55 10" fill="none">
                    <path d="M1 5C5 1 9 9 13 5C17 1 21 9 25 5C29 1 33 9 37 5C41 1 45 9 49 5C51 3 53 4 54 5" stroke="#00A896" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>
              <p className="section-subtitle">
                Don't Just Pick a Package. Pick Your Kind of Journey. Filter by your travel style below to find the ideal match.
              </p>
            </div>
          </div>

          {/* Filter tabs for packages */}
          <div className="package-filters" id="packageFilterTabs">
            <button 
              className={`pkg-filter-btn ${selectedCategory === 'all' && !destQuery ? 'active' : ''}`}
              onClick={() => { setSelectedCategory('all'); window.history.replaceState({}, '', '/packages'); }}
            >
              All Packages
            </button>
            <button 
              className={`pkg-filter-btn ${selectedCategory === 'international' ? 'active' : ''}`}
              onClick={() => { setSelectedCategory('international'); window.history.replaceState({}, '', '/packages?cat=international'); }}
            >
              🌴 International Escapes
            </button>
            <button 
              className={`pkg-filter-btn ${selectedCategory === 'romantic' ? 'active' : ''}`}
              onClick={() => { setSelectedCategory('romantic'); window.history.replaceState({}, '', '/packages?cat=romantic'); }}
            >
              ❤️ Romantic & Couples
            </button>
            <button 
              className={`pkg-filter-btn ${selectedCategory === 'family' ? 'active' : ''}`}
              onClick={() => { setSelectedCategory('family'); window.history.replaceState({}, '', '/packages?cat=family'); }}
            >
              👨‍👩‍👧 Family Holidays
            </button>
            <button 
              className={`pkg-filter-btn ${selectedCategory === 'group' ? 'active' : ''}`}
              onClick={() => { setSelectedCategory('group'); window.history.replaceState({}, '', '/packages?cat=group'); }}
            >
              🥳 Group & Friends
            </button>
            <button 
              className={`pkg-filter-btn ${selectedCategory === 'beach' ? 'active' : ''}`}
              onClick={() => { setSelectedCategory('beach'); window.history.replaceState({}, '', '/packages?cat=beach'); }}
            >
              🏝️ Beach & Island
            </button>
            <button 
              className={`pkg-filter-btn ${selectedCategory === 'heritage' ? 'active' : ''}`}
              onClick={() => { setSelectedCategory('heritage'); window.history.replaceState({}, '', '/packages?cat=heritage'); }}
            >
              🛕 South India Heritage
            </button>
          </div>

          {/* Packages Grid */}
          <div className="packages-grid">
            {filteredPackages.map((pkg) => (
              <article key={pkg.id} className="package-card">
                <div className="pkg-img-wrap">
                  <img src={pkg.image} alt={pkg.title} />
                  <span className="pkg-badge badge-red">{pkg.discount}</span>
                </div>
                <div className="pkg-body">
                  <h3 className="pkg-title">{pkg.title}</h3>
                  <p className="pkg-bestfor">{pkg.bestFor}</p>
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
                  <button className="btn btn-outline-teal btn-block" onClick={() => setSelectedPkg(pkg)}>
                    View Package Details →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Custom Package Planner Box */}
          <div className="packages-footer-box">
            <div className="box-copy">
              <h4>Want a Different Trip? Don't see exactly what you're looking for?</h4>
              <p>Tell us your destination, travel dates, number of travellers and preferences. We'll help you plan a customized journey around your interests, hotel star ratings and pace.</p>
              <p className="price-disclaimer">* Prices shown are starting prices per person and may vary based on travel dates, seasonal flight fares, and room availability.</p>
            </div>
            <div className="box-cta">
              <Link href="/contact" className="btn btn-primary btn-lg">Plan My Custom Trip →</Link>
            </div>
          </div>
        </div>
      </section>

      <AssistanceBanner />
      <TrustBar />

      {/* Package Modal */}
      {selectedPkg && (
        <PackageModal pkg={selectedPkg} onClose={() => setSelectedPkg(null)} />
      )}
    </>
  );
}

export default function PackagesPage() {
  return (
    <Suspense fallback={<div style={{ padding: '100px 0', textAlign: 'center' }}>Loading packages...</div>}>
      <PackagesContent />
    </Suspense>
  );
}
