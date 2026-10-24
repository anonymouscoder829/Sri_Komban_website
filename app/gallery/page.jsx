'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import OfferCTA from '../../components/OfferCTA';
import { galleryItems } from '../../lib/galleryData';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [modalImage, setModalImage] = useState(null);

  const filteredItems = activeTab === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeTab);

  return (
    <div className="tourist-page-wrap">
      {/* Subpage Hero */}
      <section className="tourist-sub-hero">
        <div className="tourist-container text-center">
          <div className="tourist-breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Gallery</span>
          </div>
          <span className="tourist-subpill">TRAVEL MOMENTS &amp; FLEET</span>
          <h1 className="tourist-page-title">Visual Travel Gallery</h1>
          <p className="tourist-page-subtitle">
            Glimpses of real travel memories, stunning holiday spots, and our company-owned luxury vehicle fleet on the road.
          </p>

          {/* Filter Pills */}
          <div className="tourist-filter-bar">
            <button 
              className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Photos ({galleryItems.length})
            </button>
            <button 
              className={`filter-btn ${activeTab === 'heritage' ? 'active' : ''}`}
              onClick={() => setActiveTab('heritage')}
            >
              Heritage &amp; Temples
            </button>
            <button 
              className={`filter-btn ${activeTab === 'hills' ? 'active' : ''}`}
              onClick={() => setActiveTab('hills')}
            >
              Hill Stations &amp; Nature
            </button>
            <button 
              className={`filter-btn ${activeTab === 'fleet' ? 'active' : ''}`}
              onClick={() => setActiveTab('fleet')}
            >
              Our Verified Fleet
            </button>
            <button 
              className={`filter-btn ${activeTab === 'domestic' ? 'active' : ''}`}
              onClick={() => setActiveTab('domestic')}
            >
              Coastal &amp; Islands
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="tourist-section" style={{ background: '#ffffff' }}>
        <div className="tourist-container">
          <div className="gallery-masonry-grid-large">
            {filteredItems.map((item, index) => (
              <div 
                key={index} 
                className="gallery-card-item"
                onClick={() => setModalImage(item)}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="gallery-img-large" 
                  loading="lazy" 
                  decoding="async"
                />
                <div className="gallery-hover-info">
                  <span className="gallery-hover-loc">📍 {item.loc}</span>
                  <h4 className="gallery-hover-title">{item.title}</h4>
                  <span className="gallery-hover-zoom">Click to zoom 🔍</span>
                </div>
              </div>
            ))}
          </div>

          <OfferCTA 
            badge="MAKE IT REAL"
            title="Wherever You Want to Go, We Can Do That at the Best Offer!"
            desc="Love what you see? Turn these scenic photos into your own travel memories. Book verified private cabs, luxury vans, or complete holiday packages with direct chauffeur service from Madurai."
            waText="Hi Sri Komban Travels, I was viewing your gallery and want to book a trip at the best offer!"
            secondaryBtnText="Explore Tour Packages →"
            secondaryBtnHref="/packages"
          />
        </div>
      </section>

      {/* Modal Image Viewer */}
      {modalImage && (
        <div className="gallery-modal-backdrop" onClick={() => setModalImage(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={() => setModalImage(null)}>✕</button>
            <img src={modalImage.img} alt={modalImage.title} className="gallery-modal-img" />
            <div className="gallery-modal-caption">
              <h4>{modalImage.title}</h4>
              <p>📍 {modalImage.loc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
