'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '../lib/siteConfig';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const headerClass = `shanti-top-nav ${isScrolled ? 'scrolled' : (isHome ? 'on-hero' : 'scrolled')}`;

  return (
    <>
      <header className={headerClass} id="header">
        <div className="shanti-nav-container">
          {/* Brand Logo */}
          <Link href="/" className="shanti-nav-brand" aria-label="Sri Komban Travels Homepage">
            <img 
              src="/images/sri-komban-logo.png?v=2" 
              alt={siteConfig.name} 
              className="sri-komban-nav-logo" 
              width={165}
              height={50}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="shanti-links-wrap" id="mainNav" aria-label="Main Navigation">
            {siteConfig.navLinks.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className={`shanti-nav-item ${pathname === item.href ? 'active' : ''}`}
              >
                <span>{item.label}</span>
                {pathname === item.href && <span className="active-nav-line" />}
              </Link>
            ))}
          </nav>

          {/* Right Action Elements */}
          <div className="shanti-nav-right">
            <a 
              href={`tel:${siteConfig.contact.phoneTel}`} 
              className="shanti-nav-phone-pill" 
              title={`Call ${siteConfig.shortName}`}
              aria-label={`Call ${siteConfig.shortName} at ${siteConfig.contact.phoneDisplay}`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="phone-icon-svg" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="phone-number-text">{siteConfig.contact.phoneDisplay}</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="shanti-mobile-toggle" 
              onClick={() => setIsMobileOpen(true)} 
              aria-label="Toggle navigation"
            >
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
              src="/images/sri-komban-logo.png?v=2" 
              alt={siteConfig.name} 
              className="sri-komban-nav-logo mobile" 
            />
          </Link>
          <button className="mobile-menu-close" onClick={() => setIsMobileOpen(false)} aria-label="Close menu">&times;</button>
        </div>
        <div className="mobile-menu-links">
          {siteConfig.navLinks.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className="mobile-item" 
              onClick={() => setIsMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mobile-menu-footer">
          <a href={`tel:${siteConfig.contact.phoneTel}`} className="mobile-call-btn">
            Call {siteConfig.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}
