import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { siteConfig } from '../lib/siteConfig';

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.shortName}`
  },
  description: siteConfig.description,
  keywords: [
    'Sri Komban Travels',
    'Madurai Travel Agency',
    'Tour Packages Madurai',
    'Rameswaram Tour Package',
    'Ooty Kodaikanal Holiday',
    'Kerala Munnar',
    'Innova Crysta Rental',
    'Urbania Van Madurai',
    'Force Traveller Madurai',
    'Madurai Outstation Cabs'
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  icons: {
    icon: '/images/sri-komban-logo.png',
    apple: '/images/sri-komban-logo.png'
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.shortName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: '/images/sri-komban-logo.png',
        width: 800,
        height: 600,
        alt: siteConfig.name
      }
    ]
  }
};

export const viewport = {
  themeColor: '#008080',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
