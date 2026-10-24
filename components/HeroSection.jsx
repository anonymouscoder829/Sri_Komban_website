'use client';

import React from 'react';

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="globe-hero-section" id="home">
      {/* Subtle World Map Watermark Background */}
      <div className="globe-hero-map-bg" aria-hidden="true">
        <svg viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="world-map-svg">
          <path
            d="M210 140 C 230 110, 270 95, 320 100 C 370 105, 410 130, 420 160 C 430 190, 410 240, 370 260 C 330 280, 290 260, 260 270 C 230 280, 200 240, 195 200 Z"
            fill="currentColor"
          />
          <path
            d="M480 90 C 530 80, 580 95, 620 125 C 660 155, 670 190, 650 220 C 630 250, 590 260, 560 250 C 530 240, 490 250, 470 220 C 450 190, 440 150, 460 110 Z"
            fill="currentColor"
          />
          <path
            d="M680 110 C 740 90, 830 100, 890 140 C 950 180, 970 240, 940 290 C 910 340, 840 370, 780 350 C 720 330, 680 270, 670 210 C 660 150, 670 120, 680 110 Z"
            fill="currentColor"
          />
          <path
            d="M520 280 C 570 275, 620 310, 630 360 C 640 410, 610 470, 560 490 C 510 510, 470 470, 460 420 C 450 370, 480 320, 520 280 Z"
            fill="currentColor"
          />
          <path
            d="M770 380 C 820 370, 880 395, 910 435 C 930 465, 910 510, 870 530 C 830 550, 780 530, 750 490 C 730 450, 740 400, 770 380 Z"
            fill="currentColor"
          />
          <path
            d="M260 320 C 300 310, 340 340, 350 390 C 360 440, 330 500, 290 520 C 250 540, 220 500, 210 450 C 200 400, 220 340, 260 320 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="globe-hero-container">
        {/* LEFT COLUMN: Modern Typography & CTAs */}
        <div className="globe-hero-left">
          <h1 className="globe-hero-title">
            Dream It. Plan It.{' '}
            <span className="globe-title-accent">
              Travel It.
              <svg className="accent-swoosh" viewBox="0 0 220 18" fill="none" preserveAspectRatio="none">
                <path d="M4 12C65 4 155 4 216 12" stroke="#0284c7" strokeWidth="4.5" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="globe-hero-lead">
            From Madurai across South India — let’s turn your travel dreams into unforgettable journeys.
          </p>

          <p className="globe-hero-desc">
            Discover breathtaking hill stations, sacred heritage temple circuits, serene backwaters, and verified cab rentals with Sri Komban Travels &amp; Tourism. From Madurai, Rameswaram, and Kodaikanal to Ooty, Munnar, and Kanyakumari, we plan your domestic journey your way.
          </p>

          {/* Action Buttons */}
          <div className="globe-hero-actions">
            <button 
              onClick={() => scrollTo('destinations')} 
              className="btn-globe-primary"
            >
              <span>Explore Destinations</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="btn-globe-arrow">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <button 
              onClick={() => scrollTo('plan-trip')} 
              className="btn-globe-secondary"
            >
              <span>Plan My Trip</span>
            </button>
          </div>

          {/* Dotted Flight Loop with Mini Airplane */}
          <div className="globe-flight-trail" aria-hidden="true">
            <svg viewBox="0 0 340 70" fill="none" className="trail-svg">
              <path
                d="M10 45 C 70 65, 120 15, 185 38 C 230 52, 275 25, 305 18"
                stroke="#0284c7"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
            <div className="mini-airplane">
              <svg viewBox="0 0 24 24" fill="#0284c7">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Asymmetric 3-Image Collage (Matching Reference) */}
        <div className="globe-hero-right">
          <div className="globe-collage-wrapper">
            {/* Background Decorative Flight Path & Stamp */}
            <div className="collage-decor-route" aria-hidden="true">
              <svg viewBox="0 0 200 200" fill="none" className="collage-arc-svg">
                <path
                  d="M20 180 C 40 80, 140 40, 180 20"
                  stroke="#0284c7"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  opacity="0.4"
                />
              </svg>
              <div className="collage-stamp-badge">
                <svg viewBox="0 0 60 60" fill="none" className="stamp-svg">
                  <circle cx="30" cy="30" r="26" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                  <circle cx="30" cy="30" r="20" stroke="#0284c7" strokeWidth="1" opacity="0.4" />
                  <path d="M30 16 L30 44 M16 30 L44 30" stroke="#0284c7" strokeWidth="1.2" opacity="0.5" />
                  <polygon points="30,22 33,30 30,28 27,30" fill="#0284c7" opacity="0.7" />
                </svg>
              </div>
            </div>

            {/* Left Tall Arched/Rounded Image */}
            <div className="collage-card card-tall">
              <img 
                src="/images/destinations/munnar.jpg" 
                alt="Munnar Tea Hills and Kerala Backwaters" 
                className="collage-img"
              />
              <div className="card-subtle-caption">
                <span>Munnar &amp; Kerala</span>
              </div>
            </div>

            {/* Right Column (Stacked Top & Bottom Cards) */}
            <div className="collage-stack-right">
              {/* Top-Right Card */}
              <div className="collage-card card-top-right">
                <img 
                  src="/images/destinations/ooty.jpg" 
                  alt="Ooty Nilgiri Mountain Railway" 
                  className="collage-img"
                />
                <div className="card-subtle-caption">
                  <span>Ooty &amp; Nilgiris</span>
                </div>
              </div>

              {/* Bottom-Right Card */}
              <div className="collage-card card-bottom-right">
                <img 
                  src="/images/madurai-heritage.jpg" 
                  alt="Madurai &amp; Heritage Wonders" 
                  className="collage-img"
                />
                <div className="card-subtle-caption">
                  <span>From Madurai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
