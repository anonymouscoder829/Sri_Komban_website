'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { siteConfig, getWhatsAppUrl } from '../../lib/siteConfig';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: 'Madurai & Rameswaram',
    travelDate: '',
    travelers: '2 Adults',
    tripType: 'Honeymoon / Couple',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  const handleSendWhatsApp = () => {
    const message = `*Trip Enquiry — ${siteConfig.shortName}*\n\n` +
      `*Name:* ${formData.name || 'Traveler'}\n` +
      `*Phone:* ${formData.phone || 'N/A'}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Destination:* ${formData.destination}\n` +
      `*Travel Date:* ${formData.travelDate || 'Flexible'}\n` +
      `*Travellers:* ${formData.travelers}\n` +
      `*Trip Type:* ${formData.tripType}\n` +
      `*Notes:* ${formData.notes || 'Looking for trip options.'}`;

    window.open(getWhatsAppUrl(message), '_blank');
  };

  return (
    <div className="tourist-page-wrap">
      {/* Page Hero */}
      <section className="tourist-sub-hero">
        <div className="tourist-container text-center">
          <div className="tourist-breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </div>
          <h1 className="tourist-page-title">Tell Us Where You Want to Go.</h1>
          <p className="tourist-page-subtitle">
            Your next journey could be a relaxing hill station escape, a romantic honeymoon, a sacred temple pilgrimage, or a family holiday.
            <br />
            Madurai? Rameswaram? Kodaikanal? Ooty? Munnar? Kanyakumari? Or a custom South India route? Tell us what you're planning. Our team will help you explore the right travel options with verified AC fleet rentals and custom itineraries.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="tourist-section" style={{ background: '#ffffff' }}>
        <div className="tourist-container">
          <div className="contact-card-grid">
            {/* Left Col: Contact Information */}
            <div className="contact-details-box">
              <h2 className="contact-box-title">Let's Connect</h2>
              <p className="contact-box-desc">
                {siteConfig.name} is based in {siteConfig.contact.locationShort}. Connect with us directly to discuss your holiday plans.
              </p>

              <div className="contact-info-list">
                <div className="contact-info-row">
                  <div>
                    <strong>Location</strong>
                    <p>{siteConfig.contact.locationFull}</p>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div>
                    <strong>Phone Number</strong>
                    <p><a href={`tel:${siteConfig.contact.phoneTel}`}>{siteConfig.contact.phoneDisplay}</a></p>
                  </div>
                </div>

              </div>

              {/* Not Sure Where to Go? */}
              <div className="contact-wa-action" style={{ textAlign: 'left', marginTop: '24px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '6px' }}>
                  Not Sure Where to Go?
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
                  That's okay. We'll help you choose. You don't need to have the entire trip figured out before contacting us. Tell us your budget, travel dates, who you're travelling with and the kind of experience you want. We'll help you explore the possibilities.
                </p>
                <button onClick={handleSendWhatsApp} className="btn-tourist-wa-lg">
                  Help Me Choose on WhatsApp →
                </button>
              </div>
            </div>

            {/* Right Col: Plan Your Trip Form */}
            <div className="contact-form-box">
              <h2 className="contact-box-title">Plan Your Trip</h2>
              <p className="contact-box-desc">
                Tell us a little about your journey. Fill in the form below and share your travel requirements. The more we know, the better we can understand what you're looking for.
              </p>

              {submitted && (
                <div className="contact-success-notice">
                  Thank you, {formData.name}! Your enquiry has been received. Our Madurai team will call you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="tourist-form">
                <div className="form-row-2">
                  <div className="form-field">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Enter your name" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input" 
                    />
                  </div>

                  <div className="form-field">
                    <label>Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="Enter your phone number" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input" 
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-field">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input" 
                    />
                  </div>

                  <div className="form-field">
                    <label>Where Do You Want to Go? *</label>
                    <select 
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="form-input"
                    >
                      <option value="Madurai & Rameswaram">Madurai &amp; Rameswaram</option>
                      <option value="Kodaikanal Hill Station">Kodaikanal Hill Station</option>
                      <option value="Ooty & Nilgiris">Ooty &amp; Nilgiris</option>
                      <option value="Munnar & Kerala Backwaters">Munnar &amp; Kerala Backwaters</option>
                      <option value="Kanyakumari & Triveni Sangam">Kanyakumari &amp; Triveni Sangam</option>
                      <option value="Thanjavur & Chola Temples">Thanjavur &amp; Chola Temples</option>
                      <option value="Custom Outstation Route">Custom Outstation Route</option>
                      <option value="Other">Other South India Circuit</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-field">
                    <label>Preferred Travel Date</label>
                    <input 
                      type="date" 
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="form-input" 
                    />
                  </div>

                  <div className="form-field">
                    <label>Number of Travellers</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 2 Adults, 1 Child" 
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="form-input" 
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label>What Kind of Trip Are You Planning?</label>
                  <select 
                    value={formData.tripType}
                    onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                    className="form-input"
                  >
                    <option value="Temple Pilgrimage Circuit">Temple Pilgrimage Circuit</option>
                    <option value="Hill Station Getaway">Hill Station Getaway</option>
                    <option value="Family Holiday">Family Holiday</option>
                    <option value="Honeymoon / Couple">Honeymoon / Couple</option>
                    <option value="Friends / Group">Friends / Group</option>
                    <option value="Outstation Cab Rental">Outstation Cab Rental</option>
                    <option value="Customized Trip">Customized Trip</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Tell Us About Your Trip</label>
                  <textarea 
                    rows="3" 
                    placeholder="Share your requirements, preferences or anything you'd like us to know..." 
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="form-input" 
                  />
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="btn-tourist-primary-lg">
                    Start Planning My Trip →
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Final CTA */}
          <div className="tourist-custom-banner">
            <div>
              <h3>Your Next Story Could Start With One Message.</h3>
              <p>Ready to start planning? Send your enquiry or connect with us directly on WhatsApp.</p>
            </div>
            <button onClick={handleSendWhatsApp} className="btn-tourist-white">
              Send Your Enquiry on WhatsApp →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
