'use client';

import React from 'react';
import Link from 'next/link';

export default function PackageModal({ pkg, onClose }) {
  if (!pkg) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hello Sri Komban Travels, I am interested in booking the "${pkg.title}" package. Please share the complete itinerary and best price!`);
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div className="modal-backdrop active" onClick={(e) => { if (e.target.className.includes('modal-backdrop')) onClose(); }}>
      <div className="modal-dialog">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div>
          <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
            <img src={pkg.image} alt={pkg.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <span style={{ position: 'absolute', top: '16px', left: '16px', background: '#ff334b', color: '#fff', fontSize: '0.8rem', fontWeight: 800, padding: '4px 12px', borderRadius: '20px' }}>
              {pkg.discount}
            </span>
          </div>

          <div style={{ padding: '26px 28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.6rem', fontWeight: 800, color: '#1e293b' }}>
                {pkg.title}
              </h2>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#008080' }}>{pkg.price}</span>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8', textDecoration: 'line-through', marginLeft: '6px' }}>{pkg.oldPrice}</span>
              </div>
            </div>
            
            <p style={{ fontSize: '0.85rem', color: '#008080', fontWeight: 700, marginBottom: '12px' }}>
              {pkg.duration} • {pkg.destination}
            </p>
            
            <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.6, marginBottom: '18px' }}>
              {pkg.overview}
            </p>

            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1e293b', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Tour Highlights:
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '18px', fontSize: '0.9rem', color: '#475569', lineHeight: 1.7 }}>
              {pkg.highlights.map((h, i) => (
                <li key={i}>
                  <span style={{ color: '#00A896', marginRight: '8px' }}>✔</span> {h}
                </li>
              ))}
            </ul>

            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1e293b', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Included in Package:
            </h4>
            <div style={{ marginBottom: '24px' }}>
              {pkg.inclusions.map((inc, i) => (
                <span key={i} style={{ display: 'inline-block', background: '#e6f6f5', color: '#006666', fontSize: '0.8rem', fontWeight: 700, padding: '4px 10px', borderRadius: '12px', marginRight: '6px', marginBottom: '6px' }}>
                  {inc}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <Link 
                href={`/contact?package=${encodeURIComponent(pkg.title)}&dest=${encodeURIComponent(pkg.destination)}`} 
                className="btn btn-primary" 
                style={{ flex: 1 }}
                onClick={onClose}
              >
                Book This Trip →
              </Link>
              <button className="btn btn-whatsapp" onClick={handleWhatsApp}>
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
