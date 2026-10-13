'use client';

import { Link } from '@/lib/router-compat';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid hsl(30 15% 84%)',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3.5rem)',
        background: 'hsl(35 20% 94%)',
      }}
    >
      {/* Top row — wordmark + nav */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'start',
        gap: '2rem',
        marginBottom: '3rem',
      }}>
        {/* Left: wordmark + tagline */}
        <div>
          <Link
            to="/"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.25rem',
              fontWeight: 400,
              letterSpacing: '0.04em',
              fontStyle: 'italic',
              color: 'hsl(24 15% 16%)',
              textDecoration: 'none',
              display: 'block',
              marginBottom: '0.5rem',
            }}
          >
            Elara Voss
          </Link>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 300,
            letterSpacing: '0.06em',
            color: 'hsl(24 10% 48%)',
            lineHeight: 1.6,
          }}>
            Creative direction &amp; lifestyle
          </p>
        </div>

        {/* Center: script accent */}
        <div style={{ textAlign: 'center', paddingTop: '0.25rem' }}>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '12px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase' as const,
            color: 'hsl(24 18% 52%)',
          }}>
            with love
          </span>
        </div>

        {/* Right: nav links */}
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          alignItems: 'flex-end',
        }}>
          {[
            { to: '/', label: 'Home' },
            { to: '/work', label: 'Work' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="underline-reveal"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.6875rem',
                fontWeight: 300,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'hsl(24 10% 48%)',
                textDecoration: 'none',
                transition: 'color 400ms ease',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'hsl(24 15% 16%)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'hsl(24 10% 48%)')}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid hsl(30 15% 84%)', marginBottom: '2rem' }} />

      {/* Bottom row — social + copyright */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Instagram', 'Pinterest', 'LinkedIn'].map((s) => (
            <a
              key={s}
              href="#"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.6875rem',
                fontWeight: 300,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'hsl(24 10% 48%)',
                textDecoration: 'none',
                transition: 'color 400ms ease',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'hsl(15 25% 68%)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'hsl(24 10% 48%)')}
            >
              {s}
            </a>
          ))}
        </div>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.6875rem',
          fontWeight: 300,
          letterSpacing: '0.04em',
          color: 'hsl(24 10% 58%)',
        }}>
          © {year} Elara Voss
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div:first-child {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          footer > div:first-child nav { align-items: center !important; }
          footer > div:last-child { flex-direction: column !important; align-items: center !important; }
        }
      `}</style>
    </footer>
  );
}
