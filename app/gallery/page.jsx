'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import OfferCTA from '../../components/OfferCTA';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [modalImage, setModalImage] = useState(null);

  const galleryItems = [
    {
      title: 'Tropical Waters & Longtail Boats',
      category: 'international',
      loc: 'Coral Island, Thailand',
      img: '/images/thailand.jpg'
    },
    {
      title: 'Ancient Water Temple',
      category: 'international',
      loc: 'Ulun Danu, Bali',
      img: '/images/bali.jpg'
    },
    {
      title: 'Misty Mountain Tea Plantations',
      category: 'domestic',
      loc: 'Munnar, Kerala',
      img: '/images/kerala.jpg'
    },
    {
      title: 'Radhanagar White Sand Beach',
      category: 'domestic',
      loc: 'Havelock Island, Andaman',
      img: '/images/andaman.jpg'
    },
    {
      title: 'Historic Gopuram Towers',
      category: 'heritage',
      loc: 'Meenakshi Temple, Madurai',
      img: '/images/madurai-heritage.jpg'
    },
    {
      title: 'Petronas Twin Towers at Dusk',
      category: 'international',
      loc: 'Kuala Lumpur, Malaysia',
      img: '/images/malaysia.jpg'
    },
    {
      title: 'Sunset Waves & Palm Trees',
      category: 'domestic',
      loc: 'Calangute, Goa',
      img: '/images/goa.jpg'
    },
    {
      title: 'Mahindra XUV 3XO (TN 58 BS 3075)',
      category: 'fleet',
      loc: 'Company Fleet, Madurai',
      img: '/images/vehicles/mahindra-xuv3xo.jpg'
    },
    {
      title: 'Toyota Innova Crysta (TN 64 AE 6333)',
      category: 'fleet',
      loc: 'Outstation Luxury Cab',
      img: '/images/vehicles/toyota-innova-crysta.jpg'
    },
    {
      title: 'Force Urbania Luxury Van (TN 58 CU 4516)',
      category: 'fleet',
      loc: 'Executive Group Cruiser',
      img: '/images/vehicles/force-urbania.jpg'
    },
    {
      title: 'Scenic Hill Station Highway Drive',
      category: 'fleet',
      loc: 'Kodaikanal Ghat Road',
      img: '/images/vehicles/vehicle-1/IMG_1610.JPG.jpeg'
    },
    {
      title: 'Urbania Aircraft-Cabin Chauffeur Drive',
      category: 'fleet',
      loc: 'Group Pilgrimage Tour',
      img: '/images/vehicles/vehicle-3/IMG_1648.JPG.jpeg'
    }
  ];

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
              className={`filter-btn ${activeTab === 'international' ? 'active' : ''}`}
              onClick={() => setActiveTab('international')}
            >
              International
            </button>
            <button 
              className={`filter-btn ${activeTab === 'domestic' ? 'active' : ''}`}
              onClick={() => setActiveTab('domestic')}
            >
              Domestic &amp; Islands
            </button>
            <button 
              className={`filter-btn ${activeTab === 'fleet' ? 'active' : ''}`}
              onClick={() => setActiveTab('fleet')}
            >
              Our Real Fleet
            </button>
            <button 
              className={`filter-btn ${activeTab === 'heritage' ? 'active' : ''}`}
              onClick={() => setActiveTab('heritage')}
            >
              Heritage &amp; Temple
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
                <img src={item.img} alt={item.title} className="gallery-img-large" loading="lazy" />
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
