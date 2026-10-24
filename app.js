/**
 * Sri Komban Travels & Tourism — Client Application Logic
 * Multi-page support: Search, Package Modal, URL Query Filtering, Vehicle Booking, and WhatsApp API
 */

// Package details repository from content.txt
const PACKAGE_DATA = {
  andaman: {
    title: "Andaman Escape",
    destination: "Andaman Islands 🏝️",
    duration: "4 Nights / 5 Days",
    price: "₹18,999",
    oldPrice: "₹24,000",
    discount: "20% OFF",
    image: "images/andaman.jpg",
    bestFor: "Couples • Families • Beach Lovers",
    overview: "Clear waters, peaceful beaches and beautiful island landscapes make Andaman an ideal choice when you want to slow down and reconnect.",
    highlights: [
      "Havelock Island & Radhanagar Beach sunset walk",
      "Cellular Jail light & sound historic show in Port Blair",
      "Complimentary snorkeling session at Elephant Beach",
      "Private air-conditioned island transfers & ferry tickets",
      "Beachfront resort accommodation with daily breakfast"
    ],
    inclusions: ["4-Star Beach Resort", "Ferry & Cab Transfers", "Daily Breakfast", "Sightseeing & Entry Permits"]
  },
  goa: {
    title: "Goa Beach Holiday",
    destination: "Goa 🏖️",
    duration: "4 Nights / 5 Days",
    price: "₹12,999",
    oldPrice: "₹16,000",
    discount: "15% OFF",
    image: "images/goa.jpg",
    bestFor: "Friends • Couples • Families • Weekend Getaways",
    overview: "Beach mornings, sunset evenings, authentic coastal seafood and relaxed moments on a refreshing getaway where every day feels different.",
    highlights: [
      "North Goa famous beaches (Baga, Calangute, Anjuna)",
      "South Goa peaceful heritage churches & Old Goa walk",
      "Sunset Mandovi River cruise with live Goan music",
      "Water sports package (Parasailing, Jet Ski, Banana ride)",
      "Deluxe boutique stay near beach with swimming pool"
    ],
    inclusions: ["Deluxe Hotel / Resort", "Airport / Station Transfers", "Daily Breakfast", "Mandovi River Cruise Pass"]
  },
  'madurai-rameswaram': {
    title: "Madurai - Rameswaram - Kanyakumari Pilgrimage",
    destination: "Tamil Nadu Heritage 🛕",
    duration: "3 Nights / 4 Days",
    price: "₹11,499",
    oldPrice: "₹14,500",
    discount: "20% OFF",
    image: "images/destinations/rameswaram_bridge.jpg",
    bestFor: "Pilgrimage • Family • Seniors",
    overview: "Experience the spiritual heart of South India with sacred darshans, ocean drives, and historic Dravidian temple architecture.",
    highlights: [
      "Meenakshi Amman Temple & Nayakar Mahal guided tour",
      "Scenic drive over historical Pamban sea bridge",
      "Rameswaram temple darshan & bath in 22 sacred theerthams",
      "Visit Dhanushkodi ghost town & Arichal Munai tip",
      "Kanyakumari sunrise, sunset & Vivekananda Rock memorial ferry"
    ],
    inclusions: ["Deluxe AC Hotels", "Dedicated AC Fleet Cab", "Daily Breakfast", "Tolls & Driver Bata"]
  },
  'ooty-kodaikanal': {
    title: "Queen of Hills: Ooty & Kodaikanal",
    destination: "Nilgiris & Western Ghats 🌲",
    duration: "4 Nights / 5 Days",
    price: "₹13,999",
    oldPrice: "₹17,500",
    discount: "20% OFF",
    image: "images/destinations/ooty_toy_train.jpg",
    bestFor: "Honeymoon • Couples • Family",
    overview: "Escape into the cool clouds of Tamil Nadu's premier hill stations with panoramic tea estate overlooks, waterfalls, and peaceful mountain lakes.",
    highlights: [
      "Nilgiri Mountain Railway UNESCO toy train joy ride",
      "Ooty Botanical Garden & Doddabetta highest peak",
      "Kodaikanal Lake pedal boating & Coakers Walk misty view",
      "Pillar Rocks, Pine Forest & Silver Cascade Waterfall",
      "Comfortable private hill-expert chauffeur drive"
    ],
    inclusions: ["Scenic Hill Resorts", "Private AC Vehicle Throughout", "Daily Breakfast", "Sightseeing Transfers"]
  },
  'chola-heritage': {
    title: "Grand Chola: Thanjavur & Trichy Heritage",
    destination: "Chola Temples Circuit 🏛️",
    duration: "2 Nights / 3 Days",
    price: "₹8,999",
    oldPrice: "₹11,500",
    discount: "Special Deal",
    image: "images/destinations/thanjavur_temple.jpg",
    bestFor: "Temple Architecture • History • Family",
    overview: "A world-heritage journey through the architectural masterworks of the Chola and Nayaka empires.",
    highlights: [
      "UNESCO Brihadisvara Big Temple architectural tour",
      "Thanjavur Maratha Palace & Art Gallery bronzes",
      "Tiruchirappalli Rockfort temple 437-step panoramic view",
      "Srirangam Ranganathaswamy Temple massive 21-gopuram complex",
      "Experienced chauffeur with deep knowledge of temple timings"
    ],
    inclusions: ["Heritage Stays", "Private AC Cab from Madurai", "Temple Guide Assistance", "Daily Breakfast"]
  },
  kerala: {
    title: "Kerala Backwaters & Hills",
    destination: "Kerala 🛶",
    duration: "4 Nights / 5 Days",
    price: "₹14,999",
    oldPrice: "₹18,000",
    discount: "16% OFF",
    image: "images/kerala.jpg",
    bestFor: "Families • Couples • Nature Lovers",
    overview: "Scenic backwaters, serene houseboat cruises, lush green tea hills in Munnar and coastal spice plantations.",
    highlights: [
      "Munnar misty tea gardens, Mattupetty dam & Echo Point",
      "Overnight stay on a traditional Alleppey deluxe houseboat",
      "All meals included during houseboat cruise (authentic Kerala feast)",
      "Convenient pickup and drop from Madurai or Cochin",
      "Private air-conditioned vehicle throughout the journey"
    ],
    inclusions: ["Munnar Hill Resort", "Houseboat with All Meals", "Private AC Cab from Madurai", "Sightseeing"]
  }
};

// Initialize after DOM loads
document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileDrawer();
  initSearchTabs();
  initPackageFilters();
  initReviewsCarousel();
  initFaqAccordion();
  checkUrlParams();
});

/* ==================== HEADER SCROLL ==================== */
function initNavbarScroll() {
  const header = document.getElementById('header');
  if (!header || header.classList.contains('header-solid')) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ==================== MOBILE DRAWER ==================== */
function initMobileDrawer() {
  const toggle = document.getElementById('menuToggle');
  const drawer = document.getElementById('mobileNav');
  const closeBtn = document.getElementById('mobileClose');
  const links = document.querySelectorAll('.mobile-link');

  if (toggle && drawer) {
    toggle.addEventListener('click', () => drawer.classList.add('open'));
  }
  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => drawer.classList.remove('open'));
  }
  links.forEach(link => {
    link.addEventListener('click', () => drawer.classList.remove('open'));
  });
}

/* ==================== SEARCH TABS ==================== */
function initSearchTabs() {
  const tabs = document.querySelectorAll('.search-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const tabName = tab.getAttribute('data-tab');
      showToast(`Switched view to ${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`);
    });
  });
}

// Hero Search form action
window.handleSearchSubmit = function() {
  const dest = document.getElementById('destinationSelect')?.value;
  if (dest) {
    window.location.href = `packages.html?dest=${encodeURIComponent(dest)}`;
  } else {
    window.location.href = 'packages.html';
  }
};

/* ==================== PACKAGE FILTERS ==================== */
function initPackageFilters() {
  const buttons = document.querySelectorAll('.pkg-filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-category');
      applyPackageFilter(category);
    });
  });
}

function applyPackageFilter(category) {
  const cards = document.querySelectorAll('.package-card');
  cards.forEach(card => {
    const cardCats = card.getAttribute('data-category') || '';
    if (category === 'all' || cardCats.includes(category)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

function checkUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const dest = urlParams.get('dest');
  const cat = urlParams.get('cat');

  if (dest) {
    const cards = document.querySelectorAll('.package-card');
    cards.forEach(card => {
      const cardDest = (card.getAttribute('data-dest') || '').toLowerCase();
      if (cardDest.includes(dest.toLowerCase())) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
    showToast(`Showing packages for ${dest.toUpperCase()}`);
  } else if (cat) {
    const targetBtn = document.querySelector(`.pkg-filter-btn[data-category="${cat}"]`);
    if (targetBtn) {
      document.querySelectorAll('.pkg-filter-btn').forEach(b => b.classList.remove('active'));
      targetBtn.classList.add('active');
      applyPackageFilter(cat);
      showToast(`Showing ${cat.toUpperCase()} packages`);
    }
  }
}

/* ==================== VEHICLE BOOKING ==================== */
window.bookVehicle = function(vehicleName) {
  const message = `*Ride Enquiry — Sri Komban Travels*\n\n` +
    `*Vehicle:* ${vehicleName}\n` +
    `*Pickup City:* Madurai\n` +
    `*Destination / Route:* (Please mention your destination)\n` +
    `*Date:* \n\n` +
    `Please share the best tariff quote.`;

  window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
};

/* Switch Vehicle Image via Thumbnails */
window.switchVehicleImage = function(btn, newSrc) {
  const card = btn.closest('.vehicle-card');
  if (!card) return;
  const mainImg = card.querySelector('.vehicle-img-wrap img');
  if (mainImg) {
    mainImg.style.opacity = '0.6';
    mainImg.src = newSrc;
    setTimeout(() => {
      mainImg.style.opacity = '1';
    }, 150);
  }
  const thumbs = card.querySelectorAll('.vehicle-thumb-btn');
  thumbs.forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
};

/* ==================== FAQ ACCORDION ==================== */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const q = item.querySelector('.faq-question');
    const a = item.querySelector('.faq-answer');
    if (!q || !a) return;

    a.style.display = 'none';
    q.addEventListener('click', () => {
      const isOpen = a.style.display === 'block';
      items.forEach(i => {
        const otherA = i.querySelector('.faq-answer');
        const otherIcon = i.querySelector('.faq-question strong');
        if (otherA) otherA.style.display = 'none';
        if (otherIcon) otherIcon.textContent = '+';
      });

      if (!isOpen) {
        a.style.display = 'block';
        q.querySelector('strong').textContent = '−';
      }
    });
  });

  // Open first by default if exists
  if (items.length > 0) {
    const firstA = items[0].querySelector('.faq-answer');
    const firstIcon = items[0].querySelector('.faq-question strong');
    if (firstA) firstA.style.display = 'block';
    if (firstIcon) firstIcon.textContent = '−';
  }
}

/* ==================== PACKAGE MODAL ==================== */
window.openPackageModal = function(pkgKey) {
  const data = PACKAGE_DATA[pkgKey];
  if (!data) return;

  const modal = document.getElementById('packageModal');
  const body = document.getElementById('modalContentBody');
  if (!modal || !body) return;

  const highlightsHtml = data.highlights.map(h => `<li><span style="color:#00A896; margin-right:8px;">✔</span> ${h}</li>`).join('');
  const inclusionsHtml = data.inclusions.map(inc => `<span style="display:inline-block; background:#e6f6f5; color:#006666; font-size:0.8rem; font-weight:700; padding:4px 10px; border-radius:12px; margin-right:6px; margin-bottom:6px;">${inc}</span>`).join('');

  body.innerHTML = `
    <div style="position:relative; height:240px; overflow:hidden;">
      <img src="${data.image}" alt="${data.title}" style="width:100%; height:100%; object-fit:cover;">
      <span style="position:absolute; top:16px; left:16px; background:#ff334b; color:#fff; font-size:0.8rem; font-weight:800; padding:4px 12px; border-radius:20px;">${data.discount}</span>
    </div>
    <div style="padding:26px 28px;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">
        <h2 style="font-family:'Outfit',sans-serif; font-size:1.6rem; font-weight:800; color:#1e293b;">${data.title}</h2>
        <div style="text-align:right;">
          <span style="font-size:1.5rem; font-weight:800; color:#008080;">${data.price}</span>
          <span style="font-size:0.85rem; color:#94a3b8; text-decoration:line-through; margin-left:6px;">${data.oldPrice}</span>
        </div>
      </div>
      <p style="font-size:0.85rem; color:#008080; font-weight:700; margin-bottom:12px;">${data.duration} • ${data.destination}</p>
      <p style="font-size:0.92rem; color:#64748b; line-height:1.6; margin-bottom:18px;">${data.overview}</p>

      <h4 style="font-size:0.95rem; font-weight:800; color:#1e293b; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.04em;">Tour Highlights:</h4>
      <ul style="list-style:none; padding:0; margin-bottom:18px; font-size:0.9rem; color:#475569; line-height:1.7;">
        ${highlightsHtml}
      </ul>

      <h4 style="font-size:0.95rem; font-weight:800; color:#1e293b; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.04em;">Included in Package:</h4>
      <div style="margin-bottom:24px;">
        ${inclusionsHtml}
      </div>

      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" style="flex:1;" onclick="window.bookThisPackage('${data.title}', '${data.destination}')">Book This Trip →</button>
        <button class="btn btn-whatsapp" onclick="window.whatsappPackage('${data.title}')">WhatsApp Us</button>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closePackageModalDirect = function() {
  const modal = document.getElementById('packageModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
};

window.closePackageModal = function(e) {
  if (e.target && e.target.id === 'packageModal') {
    window.closePackageModalDirect();
  }
};

window.bookThisPackage = function(pkgTitle, dest) {
  window.closePackageModalDirect();
  window.location.href = `contact.html?package=${encodeURIComponent(pkgTitle)}&dest=${encodeURIComponent(dest)}`;
};

window.whatsappPackage = function(pkgTitle) {
  const text = encodeURIComponent(`Hello Sri Komban Travels, I am interested in booking the "${pkgTitle}" package. Please share the complete itinerary and best price!`);
  window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
};

/* ==================== REVIEWS CAROUSEL ==================== */
function initReviewsCarousel() {
  const track = document.getElementById('reviewsTrack');
  const prevBtn = document.getElementById('reviewPrev');
  const nextBtn = document.getElementById('reviewNext');

  if (!track || !prevBtn || !nextBtn) return;

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -320, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: 320, behavior: 'smooth' });
  });
}

/* ==================== FORM SUBMISSION ==================== */
window.handleFormSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('formFullName')?.value.trim();
  const phone = document.getElementById('formPhone')?.value.trim();
  const dest = document.getElementById('formDestination')?.value;

  if (!name || !phone) {
    alert('Please enter your Name and Phone Number.');
    return;
  }

  showToast(`Thank you, ${name}! Your enquiry for ${dest || 'your journey'} has been received. Our Madurai team will call you shortly.`);
  e.target.reset();
};

window.sendToWhatsApp = function() {
  const name = document.getElementById('formFullName')?.value.trim() || 'Traveler';
  const phone = document.getElementById('formPhone')?.value.trim() || 'N/A';
  const dest = document.getElementById('formDestination')?.value || 'Not selected';
  const date = document.getElementById('formTravelDate')?.value || 'Flexible';
  const trav = document.getElementById('formTravellers')?.value || '2 Adults';
  const tripType = document.querySelector('input[name="tripType"]:checked')?.value || 'Vacation';
  const notes = document.getElementById('formNotes')?.value.trim() || 'Looking for best package options.';

  const message = `*New Trip Enquiry — Sri Komban Travels*\n\n` +
    `*Name:* ${name}\n` +
    `*Phone:* ${phone}\n` +
    `*Destination:* ${dest}\n` +
    `*Travel Date:* ${date}\n` +
    `*Travellers:* ${trav}\n` +
    `*Trip Type:* ${tripType}\n` +
    `*Notes:* ${notes}\n\n` +
    `_Sent from Sri Komban Travels Website_`;

  const waUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
};

window.handleNewsletterSubmit = function(e) {
  e.preventDefault();
  const emailInput = document.getElementById('newsletterEmail');
  if (emailInput && emailInput.value) {
    showToast(`Subscribed! Special travel discounts will be sent to ${emailInput.value}`);
    emailInput.value = '';
  }
};

/* ==================== TOAST MESSAGES ==================== */
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7ef1e4" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}
