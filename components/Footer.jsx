'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '../lib/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Col 1: About & Logo */}
          <div className="footer-col footer-col-about">
            <div className="footer-logo">
              <img 
                src="/images/sri-komban-logo.png?v=2" 
                alt={siteConfig.name} 
                className="sri-komban-foot-logo" 
                width={165}
                height={50}
              />
            </div>
            <p className="foot-desc">
              Sri Komban Travels &amp; Tourism is your trusted Madurai travel partner. Specializing in South India holiday packages, sacred temple pilgrimages, hill station getaways, sanitized private AC fleet transfers, and customized tour circuits across Tamil Nadu &amp; Kerala.
            </p>
            <div className="foot-socials">
              <a href={siteConfig.socials.facebook} aria-label="Facebook" className="social-circle">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href={siteConfig.socials.instagram} aria-label="Instagram" className="social-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href={siteConfig.socials.youtube} aria-label="YouTube" className="social-circle">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z"/></svg>
              </a>
              <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} aria-label="WhatsApp" className="social-circle">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 16.79c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.136 8.136 0 0 1-1.25-4.33c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.41 3.61 2.41 5.8-.01 4.52-3.69 8.19-8.17 8.19zm4.49-6.14c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.72 4.31 3.81.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1 1.08-.07 1.47-.74 1.47-1.26 0-.27-.08-.43-.33-.55z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Pages */}
          <div className="footer-col">
            <h4 className="foot-col-title">Our Pages</h4>
            <ul className="foot-links-list">
              {siteConfig.navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="footer-col">
            <h4 className="foot-col-title">Services</h4>
            <ul className="foot-links-list">
              {siteConfig.footerServices.map((service, idx) => (
                <li key={idx}>
                  <Link href={service.href}>{service.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Top Destinations */}
          <div className="footer-col">
            <h4 className="foot-col-title">Top Destinations</h4>
            <ul className="foot-links-list">
              {siteConfig.footerDestinations.map((dest, idx) => (
                <li key={idx}>
                  <Link href={dest.href}>{dest.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Us */}
          <div className="footer-col">
            <h4 className="foot-col-title">Travel Lounge</h4>
            <ul className="foot-contact-list">
              <li>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.28.37-.67.25-1.02A11.36 11.36 0 0 1 8.5 4.31c0-.55-.45-1-1-1H4.11c-.55 0-1 .45-1 1C3.11 13.9 10.1 20.89 19.89 20.89c.55 0 1-.45 1-1v-3.39c0-.55-.45-1-1-1.12z"/></svg>
                <a href={`tel:${siteConfig.contact.phoneTel}`}>{siteConfig.contact.phoneDisplay}</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                <span>{siteConfig.contact.locationFull}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} {siteConfig.name}. All Rights Reserved.</p>
          <div className="footer-legal">
            <Link href="/about">About Us</Link>
            <span>|</span>
            <Link href="/contact">Contact Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
