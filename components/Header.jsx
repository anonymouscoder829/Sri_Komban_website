'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const headerClass = `site-header ${isScrolled || !isHome ? 'scrolled header-solid' : ''}`;

  return (
    <>
      <header className={headerClass} id="header">
        <div className="header-container">
          <Link href="/" className="brand-logo" aria-label="Sri Komban Travels Homepage">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-name">Sri Komban</span>
              <span className="logo-sub">TRAVELS & TOURISM</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="main-nav" id="mainNav">
            <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About Us</Link>
            <Link href="/vehicles" className={`nav-link ${pathname === '/vehicles' ? 'active' : ''}`}>Our Vehicles</Link>
            <Link href="/packages" className={`nav-link ${pathname === '/packages' ? 'active' : ''}`}>Packages</Link>
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <a href="tel:+919876543210" className="header-phone-plain" id="headerPhoneLink" title="Call Sri Komban Travels">
              <svg viewBox="0 0 24 24" fill="currentColor" className="icon-phone-plain" aria-hidden="true">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.28.37-.67.25-1.02A11.36 11.36 0 0 1 8.5 4.31c0-.55-.45-1-1-1H4.11c-.55 0-1 .45-1 1C3.11 13.9 10.1 20.89 19.89 20.89c.55 0 1-.45 1-1v-3.39c0-.55-.45-1-1-1.12z"/>
              </svg>
              <span className="phone-number-text">+91 98765 43210</span>
            </a>

            <Link href="/contact" className="nav-contact-btn" id="headerContactBtn">
              <span>Contact Us</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="contact-arrow-icon" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>

            <button className="menu-toggle" onClick={() => setIsMobileOpen(true)} aria-label="Toggle navigation">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav ${isMobileOpen ? 'open' : ''}`} id="mobileNav">
        <div className="mobile-nav-header">
          <span className="logo-name">Sri Komban Travels</span>
          <button className="mobile-close" onClick={() => setIsMobileOpen(false)}>&times;</button>
        </div>
        <div className="mobile-links">
          <Link href="/" className={`mobile-link ${pathname === '/' ? 'active' : ''}`} onClick={() => setIsMobileOpen(false)}>Home</Link>
          <Link href="/about" className={`mobile-link ${pathname === '/about' ? 'active' : ''}`} onClick={() => setIsMobileOpen(false)}>About Us</Link>
          <Link href="/vehicles" className={`mobile-link ${pathname === '/vehicles' ? 'active' : ''}`} onClick={() => setIsMobileOpen(false)}>Our Vehicles</Link>
          <Link href="/packages" className={`mobile-link ${pathname === '/packages' ? 'active' : ''}`} onClick={() => setIsMobileOpen(false)}>Tour Packages</Link>
          <Link href="/contact" className={`mobile-link ${pathname === '/contact' ? 'active' : ''}`} onClick={() => setIsMobileOpen(false)}>Contact Us</Link>
        </div>
        <div className="mobile-nav-footer">
          <a href="tel:+919876543210" className="btn btn-primary btn-block">📞 Call +91 98765 43210</a>
        </div>
      </div>
    </>
  );
}
