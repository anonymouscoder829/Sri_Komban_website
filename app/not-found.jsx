import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '160px 24px', background: '#ffffff' }}>
      <h1 style={{ fontFamily: "var(--font-heading)", fontSize: '4rem', color: '#008080', fontWeight: 800 }}>404</h1>
      <h2 style={{ fontSize: '1.8rem', color: '#1e293b', marginBottom: '14px' }}>Page Not Found</h2>
      <p style={{ color: '#64748b', marginBottom: '28px' }}>The destination you are looking for does not exist or has been moved.</p>
      <Link href="/" className="btn btn-primary">
        Return Home →
      </Link>
    </div>
  );
}
