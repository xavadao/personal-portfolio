'use client';

import { useEffect, useRef } from 'react';
import { Link } from '@/lib/router-compat';
import { useScrollReveal } from '../components/useScrollReveal';

const PORTRAIT = 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=85&auto=format&fit=crop&crop=faces';

const VALUES = [
  { label: 'Restraint', desc: 'I believe in the power of what is left out. Silence is a design choice — and often the most powerful one.' },
  { label: 'Precision', desc: 'Every detail is deliberate. I work until the work is right, not until the deadline.' },
  { label: 'Longevity', desc: 'I build for the long arc — identities and experiences that age with grace, not trends.' },
];

const CLIENTS = ['Maison Noir', 'Forma Studio', 'Atlas Group', 'Meridian Press', 'Veil Collective', 'Onyx Capital'];

export default function AboutPage() {
  useScrollReveal();
  const imgRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on portrait
  useEffect(() => {
    const container = imgRef.current;
    if (!container) return;
    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const img = container.querySelector('img') as HTMLElement;
      if (img) img.style.transform = `translateY(${(progress - 0.5) * 40}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main data-page="about" id="main-content" tabIndex={-1} style={{ background: '#F7F5F2', color: '#1a1a1a', paddingTop: '72px' }}>

      {/* ── PAGE HEADER ── */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 7rem) 2.5rem clamp(3rem, 5vw, 5rem)',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.6875rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#8a8a8a',
          marginBottom: '1.5rem',
        }}>
          About
        </p>
        <h1 className="reveal" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(3rem, 7vw, 6rem)',
          fontWeight: 300,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          color: '#1a1a1a',
        }}>
          A creative director and image-maker
        </h1>
      </section>

      {/* ── SPLIT LAYOUT: Portrait + Bio ── */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '80vh',
      }}>
        {/* Portrait */}
        <div
          ref={imgRef}
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: '#F7F5F2',
          }}
        >
          <img
            src={PORTRAIT}
            alt="Alex Morgan"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 700ms cubic-bezier(0.25,0.1,0.25,1)',
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
          }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
            }}>
              Alex Morgan — Creative Director
            </p>
          </div>
        </div>

        {/* Bio */}
        <div style={{
          padding: 'clamp(3rem, 6vw, 6rem) clamp(2rem, 5vw, 5rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderLeft: '1px solid rgba(0,0,0,0.08)',
        }}>
          <p className="reveal" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.6875rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#8a8a8a',
            marginBottom: '2rem',
          }}>
            About me
          </p>

          <div className="reveal delay-100" style={{ position: 'relative', marginBottom: '2.5rem' }}>
            <span style={{
              position: 'absolute',
              top: '-1.5rem',
              left: '-0.25rem',
              fontFamily: "'Playfair Display', serif",
              fontSize: '6rem',
              lineHeight: 1,
              color: '#d4a574',
              fontWeight: 400,
              pointerEvents: 'none',
              userSelect: 'none',
            }}>
              "
            </span>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
              fontWeight: 300,
              letterSpacing: '-0.04em',
              lineHeight: 1.15,
              fontStyle: 'italic',
              color: '#1a1a1a',
              paddingTop: '1.5rem',
            }}>
              I believe the world needs fewer things, made with more intention.
            </p>
          </div>

          <p className="reveal delay-200" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9375rem',
            color: '#4a4a4a',
            lineHeight: 1.75,
            marginBottom: '1.5rem',
          }}>
            I'm a creative director and image-maker based in New York. Since 2018, I've worked with a small number of clients each year — brands, cultural institutions, and founders who care deeply about how they are perceived and what they stand for.
          </p>

          <p className="reveal delay-300" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9375rem',
            color: '#4a4a4a',
            lineHeight: 1.75,
            marginBottom: '3rem',
          }}>
            My practice spans brand identity, art direction, editorial design, and digital experience. I work globally, but I keep my collaborations close — because the best work comes from genuine understanding, not just execution.
          </p>

          <Link
            to="/contact"
            className="reveal delay-400"
            style={{
              display: 'inline-block',
              alignSelf: 'flex-start',
              padding: '0.875rem 2rem',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.8125rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#1a1a1a',
              background: 'transparent',
              border: '1px solid #1a1a1a',
              textDecoration: 'none',
              transition: 'color 300ms ease, border-color 300ms ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = '#d4a574';
              el.style.borderColor = '#d4a574';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = '#1a1a1a';
              el.style.borderColor = '#1a1a1a';
            }}
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* ── VALUES SECTION ── */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 7rem) 2.5rem',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'clamp(3rem, 6vw, 5rem)',
        }}>
          {VALUES.map((value, i) => (
            <div key={value.label} className={`reveal delay-${(i + 1) * 100}`}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                color: '#1a1a1a',
                marginBottom: '1rem',
              }}>
                {value.label}
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9375rem',
                color: '#4a4a4a',
                lineHeight: 1.7,
              }}>
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLIENTS SECTION ── */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 7rem) 2.5rem',
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.6875rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#8a8a8a',
          marginBottom: '3rem',
        }}>
          Selected clients
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'clamp(2rem, 4vw, 3rem)',
        }}>
          {CLIENTS.map((client, i) => (
            <p
              key={client}
              className={`reveal delay-${(i + 1) * 100}`}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                fontWeight: 300,
                letterSpacing: '-0.01em',
                color: '#1a1a1a',
              }}
            >
              {client}
            </p>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section:nth-child(2) { grid-template-columns: 1fr !important; }
          section:nth-child(3) > div:last-child { grid-template-columns: 1fr !important; }
          section:nth-child(4) > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}