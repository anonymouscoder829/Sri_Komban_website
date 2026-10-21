import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export const metadata = {
  title: 'Sri Komban Travels | Tour Packages & Outstation Cab Rentals Madurai',
  description: 'Explore top tourist places, customized holiday packages, and company-owned cab rentals (Innova Crysta, XUV 3XO, Force Urbania) with Sri Komban Travels & Tourism, Madurai.',
  keywords: 'Sri Komban Travels, Madurai Travel Agency, Tour Packages Madurai, Thailand Tour, Bali Packages, Kerala Munnar, Innova Crysta Rental, Urbania Van Madurai',
  icons: {
    icon: "/images/sri-komban-logo.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
