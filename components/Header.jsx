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
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    if (pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isHome = pathname === '/';
  const headerClass = `shanti-top-nav ${isScrolled ? 'scrolled' : (isHome ? 'on-hero' : 'scrolled')}`;

  return (
    <>
      <header className={headerClass} id="header">
        <div className="shanti-nav-container">
          {/* Brand Logo */}
          <Link href="/" className="shanti-nav-brand" aria-label="Sri Komban Travels Homepage">
            <img 
              src="/images/sri-komban-logo.png" 
              alt="Sri Komban Travels" 
              className="sri-komban-nav-logo" 
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="shanti-links-wrap" id="mainNav" aria-label="Main Navigation">
            <Link 
              href="/" 
              className={`shanti-nav-item ${pathname === '/' ? 'active' : ''}`}
            >
              <span>Home</span>
              {pathname === '/' && <span className="active-nav-line" />}
            </Link>

            <Link 
              href="/about" 
              className={`shanti-nav-item ${pathname === '/about' ? 'active' : ''}`}
            >
              <span>About Us</span>
              {pathname === '/about' && <span className="active-nav-line" />}
            </Link>

            <Link 
              href="/packages" 
              className={`shanti-nav-item ${pathname === '/packages' ? 'active' : ''}`}
            >
              <span>Tour Packages</span>
              {pathname === '/packages' && <span className="active-nav-line" />}
            </Link>

            <Link 
              href="/vehicles" 
              className={`shanti-nav-item ${pathname === '/vehicles' ? 'active' : ''}`}
            >
              <span>Vehicles</span>
              {pathname === '/vehicles' && <span className="active-nav-line" />}
            </Link>

            <Link 
              href="/contact" 
              className={`shanti-nav-item ${pathname === '/contact' ? 'active' : ''}`}
            >
              <span>Plan Your Trip</span>
              {pathname === '/contact' && <span className="active-nav-line" />}
            </Link>
          </nav>

          {/* Right Action Elements */}
          <div className="shanti-nav-right">
            <a 
              href="tel:+919876543210" 
              className="shanti-nav-phone-pill" 
              title="Call Sri Komban Travels"
              aria-label="Call Sri Komban Travels at +91 98765 43210"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="phone-icon-svg" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="phone-number-text">+91 98765 43210</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button className="shanti-mobile-toggle" onClick={() => setIsMobileOpen(true)} aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`shanti-mobile-menu ${isMobileOpen ? 'open' : ''}`} id="mobileNav">
        <div className="mobile-menu-header">
          <Link href="/" className="shanti-nav-brand" onClick={() => setIsMobileOpen(false)}>
            <img 
              src="/images/sri-komban-logo.png" 
              alt="Sri Komban Travels" 
              className="sri-komban-nav-logo mobile" 
            />
          </Link>
          <button className="mobile-menu-close" onClick={() => setIsMobileOpen(false)} aria-label="Close menu">&times;</button>
        </div>
        <div className="mobile-menu-links">
          <Link href="/" className="mobile-item" onClick={() => setIsMobileOpen(false)}>Home</Link>
          <Link href="/about" className="mobile-item" onClick={() => setIsMobileOpen(false)}>About Us</Link>
          <Link href="/packages" className="mobile-item" onClick={() => setIsMobileOpen(false)}>Tour Packages</Link>
          <Link href="/vehicles" className="mobile-item" onClick={() => setIsMobileOpen(false)}>Vehicles</Link>
          <Link href="/contact" className="mobile-item" onClick={() => setIsMobileOpen(false)}>Plan Your Trip</Link>
        </div>
        <div className="mobile-menu-footer">
          <a href="tel:+919876543210" className="mobile-call-btn">Call +91 98765 43210</a>
        </div>
      </div>
    </>
  );
}
