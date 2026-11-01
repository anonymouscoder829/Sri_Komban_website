/**
 * Sri Komban Travels & Tourism — Central Site Configuration
 * Single source of truth for branding, contact coordinates, WhatsApp URLs, and SEO metadata.
 */

export const siteConfig = {
  name: 'Sri Komban Travels & Tourism',
  shortName: 'Sri Komban Travels',
  tagline: 'Tour Packages & Outstation Cab Rentals Madurai',
  description: 'Explore top tourist places, customized holiday packages, and company-owned cab rentals (Innova Crysta, XUV 3XO, Force Urbania, Force Traveller Maharaja) with Sri Komban Travels & Tourism, Madurai.',
  url: 'https://srikombantravels.com',

  // Contact Coordinates
  contact: {
    phoneDisplay: '+91 93615 22422',
    phoneTel: '+91 93615 22422',
    whatsappNumber: '+91 93615 22422',
    // email: 'info@srikombantravels.com',
    locationShort: 'Madurai, Tamil Nadu, India',
    locationFull: '46A, V.P.sindhan nagar,Vedar puliyankulam, Thiru nagar, Madurai 625006',
    pincode: '625006'
  },

  // Social Links
  socials: {
    facebook: '#',
    instagram: '#',
    youtube: '#'
  },

  // Navigation Links
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Tour Packages', href: '/packages' },
    { label: 'Vehicles', href: '/vehicles' },
    { label: 'Plan Your Trip', href: '/contact' }
  ],

  // Footer Navigation
  footerServices: [
    { label: 'Cab & Outstation Rentals', href: '/vehicles' },
    { label: 'South India Holidays', href: '/packages' },
    { label: 'Temple Pilgrimage Tours', href: '/packages' },
    { label: 'Hill Station Getaways', href: '/packages' },
    { label: 'Custom Route Itineraries', href: '/contact' },
    { label: 'Airport Pick & Drop', href: '/vehicles' }
  ],

  footerDestinations: [
    { label: 'Madurai & Rameswaram', href: '/packages' },
    { label: 'Ooty & Nilgiris', href: '/packages' },
    { label: 'Kodaikanal Hill Station', href: '/packages' },
    { label: 'Munnar & Alleppey Backwaters', href: '/packages' },
    { label: 'Kanyakumari & Triveni Sangam', href: '/packages' },
    { label: 'Thanjavur & Chola Temples', href: '/packages' }
  ]
};

/**
 * Generate a pre-filled WhatsApp click-to-chat URL
 * @param {string} text - Message body to pre-fill
 * @returns {string} Fully encoded WhatsApp URL
 */
export function getWhatsAppUrl(text = '') {
  const number = siteConfig.contact.whatsappNumber;
  if (!text) {
    return `https://wa.me/${number}`;
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
