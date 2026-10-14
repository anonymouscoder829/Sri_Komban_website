import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export const metadata = {
  title: 'Travel Agency in Madurai | Tour Packages | Sri Komban Travels',
  description: 'Plan your next journey from Madurai with Sri Komban Travels & Tourism. Explore domestic and international tour packages, travel services and customized trips.',
  keywords: 'Travel Agency in Madurai, Tour Packages Madurai, Thailand Tour, Bali Packages, Andaman Holiday, Goa Trip, Sri Komban Travels',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23008080'><path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z'/></svg>"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
