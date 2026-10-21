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
            <a href="tel:+919876543210" className="shanti-nav-phone-pill" title="Call Sri Komban Travels">
              <svg viewBox="0 0 24 24" fill="currentColor" className="phone-icon-svg">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.28.37-.67.25-1.02A11.36 11.36 0 0 1 8.5 4.31c0-.55-.45-1-1-1H4.11c-.55 0-1 .45-1 1C3.11 13.9 10.1 20.89 19.89 20.89c.55 0 1-.45 1-1v-3.39c0-.55-.45-1-1-1.12z" />
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
