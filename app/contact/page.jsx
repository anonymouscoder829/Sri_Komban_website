'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function ContactContent() {
  const searchParams = useSearchParams();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [travellers, setTravellers] = useState('');
  const [tripType, setTripType] = useState('Honeymoon / Couple');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);

  useEffect(() => {
    const pkg = searchParams.get('package');
    const dest = searchParams.get('dest');
    if (dest) setDestination(dest);
    if (pkg) setNotes(`I am interested in booking the "${pkg}" package. Please provide the itinerary and pricing.`);
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('Please enter your Name and Phone Number.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const handleSendWhatsApp = () => {
    const message = `*New Trip Enquiry — Sri Komban Travels*\n\n` +
      `*Name:* ${fullName || 'Traveler'}\n` +
      `*Phone:* ${phone || 'N/A'}\n` +
      `*Destination:* ${destination || 'Not selected'}\n` +
      `*Travel Date:* ${travelDate || 'Flexible'}\n` +
      `*Travellers:* ${travellers || '2 Adults'}\n` +
      `*Trip Type:* ${tripType}\n` +
      `*Notes:* ${notes || 'Looking for best package options.'}\n\n` +
      `_Sent from Sri Komban Travels Next.js Website_`;

    const waUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  const faqs = [
    {
      q: "How far in advance should I book international packages from Madurai?",
      a: "For destinations like Thailand, Malaysia, and Bali, we recommend booking at least 3 to 4 weeks in advance to secure the lowest flight fares from Madurai/Trichy/Chennai and confirmed 4-star beach resort rooms."
    },
    {
      q: "Do you provide Visa on Arrival and E-Visa assistance?",
      a: "Yes! Sri Komban Travels provides end-to-end visa documentation assistance, flight itineraries, hotel confirmation vouchers, and travel insurance for all international journeys."
    },
    {
      q: "Can we hire cabs only without booking full tour packages?",
      a: "Absolutely. Our dedicated vehicle fleet (Sedans, Innova Crysta, Tempo Travellers, and AC Buses) is available on simple per-kilometer or daily rental packages for local Madurai trips and outstation routes."
    },
    {
      q: "What payment options are available?",
      a: "We accept UPI (GPay, PhonePe, Paytm), Net Banking, NEFT/RTGS, and all major Credit/Debit Cards. Trips can typically be confirmed with a nominal token advance, with the balance payable in convenient stages."
    }
  ];

  return (
    <>
      {/* ==================== PAGE HERO ==================== */}
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </div>
          <span className="subheading-pill-light">🌍 GET IN TOUCH</span>
          <h1>Tell Us Where You Want to Go.</h1>
          <p>Your next journey could be a relaxing beach escape, a romantic honeymoon, a family holiday or an international adventure. Let's turn your travel idea into a plan.</p>
        </div>
      </section>

      {/* ==================== CONTACT FORM & DETAILS ==================== */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="section-container">
          <div className="contact-layout-grid">
            
            {/* Left Col: Office Info & Consultation */}
            <div className="contact-info-card">
              <div>
                <span className="subheading-pill">📍 LET'S CONNECT</span>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: '1.7rem', fontWeight: 800, color: 'var(--text-dark)', margin: '8px 0 12px' }}>
                  Sri Komban Travels & Tourism
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Visit our Madurai travel lounge to discuss itineraries over coffee, or connect directly through phone and WhatsApp.
                </p>
              </div>

              <div className="contact-info-block">
                <div className="contact-info-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                </div>
                <div className="contact-info-details">
                  <h4>Office Location</h4>
                  <p>123, Travel Street, Opp. Railway Junction & Meenakshi Temple, Madurai, Tamil Nadu, India - 625001</p>
                </div>
              </div>

              <div className="contact-info-block">
                <div className="contact-info-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.28.37-.67.25-1.02A11.36 11.36 0 0 1 8.5 4.31c0-.55-.45-1-1-1H4.11c-.55 0-1 .45-1 1C3.11 13.9 10.1 20.89 19.89 20.89c.55 0 1-.45 1-1v-3.39c0-.55-.45-1-1-1.12z"/></svg>
                </div>
                <div className="contact-info-details">
                  <h4>Direct Phone Lines</h4>
                  <p><a href="tel:+919876543210" style={{ color: 'var(--primary-teal)', fontWeight: 700 }}>+91 98765 43210</a> (Customer Support)</p>
                  <p><a href="tel:+919876543211" style={{ color: 'var(--text-muted)' }}>+91 98765 43211</a> (Fleet & Cab Dispatch)</p>
                </div>
              </div>

              <div className="contact-info-block">
                <div className="contact-info-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div className="contact-info-details">
                  <h4>Email Inquiries</h4>
                  <p><a href="mailto:info@srikombantravels.com" style={{ color: 'var(--primary-teal)' }}>info@srikombantravels.com</a></p>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Average response time: Under 30 minutes</p>
                </div>
              </div>

              <div className="contact-info-block">
                <div className="contact-info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div className="contact-info-details">
                  <h4>Operating Hours</h4>
                  <p>Monday - Sunday: 8:00 AM – 10:00 PM</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--primary-teal)', fontWeight: 700 }}>24/7 On-Road Emergency Support</p>
                </div>
              </div>

              <div className="contact-map-box">
                <h4 style={{ color: 'var(--text-dark)', marginBottom: '6px', fontWeight: 800 }}>Not Sure Where to Go?</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '14px' }}>That's okay. Tell us your budget and travel style — our destination specialists will help you choose!</p>
                <a href="https://wa.me/919876543210?text=Hello%20Sri%20Komban%20Travels,%20I%20need%20help%20choosing%20a%20destination!" className="btn btn-whatsapp btn-block">Quick Chat on WhatsApp</a>
              </div>
            </div>

            {/* Right Col: Interactive Booking Form */}
            <div className="plan-trip-card">
              <div className="plan-trip-header">
                <span className="subheading-pill">🧳 PLAN YOUR TRIP</span>
                <h2>Tell Us A Little About Your Journey</h2>
                <p>Fill in the form below and share your travel requirements. The more we know, the better we can craft the perfect holiday.</p>
              </div>

              {submitted && (
                <div style={{ background: '#e6f6f5', border: '1px solid #00A896', color: '#006666', padding: '16px', borderRadius: '12px', marginBottom: '20px', fontWeight: 600 }}>
                  ✔ Thank you, {fullName}! Your travel enquiry for {destination || 'your dream vacation'} has been received. Our Madurai team will call you shortly.
                </div>
              )}

              <form className="trip-form" onSubmit={handleSubmit}>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name" 
                      className="form-control" 
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210" 
                      className="form-control" 
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address" 
                      className="form-control" 
                    />
                  </div>

                  <div className="form-group">
                    <label>Where Do You Want to Go? *</label>
                    <select 
                      required 
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="form-control"
                    >
                      <option value="">Select your destination</option>
                      <option value="Thailand">Thailand 🇹🇭</option>
                      <option value="Malaysia">Malaysia 🇲🇾</option>
                      <option value="Bali">Bali 🌴</option>
                      <option value="Andaman">Andaman 🏝️</option>
                      <option value="Goa">Goa 🏖️</option>
                      <option value="Kerala">Kerala 🛶</option>
                      <option value="Madurai Pilgrimage">South India / Madurai Special</option>
                      <option value="Other">Other / Not Sure Yet</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Preferred Travel Date</label>
                    <input 
                      type="date" 
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="form-control" 
                    />
                  </div>

                  <div className="form-group">
                    <label>Number of Travellers</label>
                    <input 
                      type="text" 
                      value={travellers}
                      onChange={(e) => setTravellers(e.target.value)}
                      placeholder="e.g. 2 Adults, 1 Child" 
                      className="form-control" 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>What Kind of Trip Are You Planning?</label>
                  <div className="trip-type-chips">
                    {[
                      'Honeymoon / Couple',
                      'Family Holiday',
                      'Friends / Group',
                      'International Trip',
                      'Beach Holiday',
                      'Customized Trip',
                      'Other'
                    ].map((type) => (
                      <label key={type} className="chip-label">
                        <input 
                          type="radio" 
                          name="tripType" 
                          value={type} 
                          checked={tripType === type}
                          onChange={(e) => setTripType(e.target.value)}
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Tell Us About Your Trip</label>
                  <textarea 
                    rows="3" 
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="form-control" 
                    placeholder="Share your budget, preferences, hotel star preferences, or anything you'd like us to know..."
                  ></textarea>
                </div>

                <div className="form-actions-flex">
                  <button type="submit" className="btn btn-primary btn-lg" id="submitContactBtn">
                    <span>Start Planning My Trip →</span>
                  </button>
                  
                  <button type="button" className="btn btn-whatsapp btn-lg" onClick={handleSendWhatsApp}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="wa-icon"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 16.79c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.136 8.136 0 0 1-1.25-4.33c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.41 3.61 2.41 5.8-.01 4.52-3.69 8.19-8.17 8.19zm4.49-6.14c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.72 4.31 3.81.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1 1.08-.07 1.47-.74 1.47-1.26 0-.27-.08-.43-.33-.55z"/></svg>
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="section faq-section" style={{ background: 'var(--bg-subtle)' }}>
        <div className="section-container">
          <div className="text-center max-w-750">
            <span className="subheading-pill">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-title">Everything You Need To Know</h2>
            <p className="section-description">Clear answers to common questions about bookings, flights, cabs, and payments.</p>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <div 
                  className="faq-question" 
                  onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}
                  style={{ cursor: 'pointer' }}
                >
                  <span>{faq.q}</span>
                  <strong>{faqOpen === i ? '−' : '+'}</strong>
                </div>
                {faqOpen === i && (
                  <div className="faq-answer">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div style={{ padding: '100px 0', textAlign: 'center' }}>Loading contact form...</div>}>
      <ContactContent />
    </Suspense>
  );
}
