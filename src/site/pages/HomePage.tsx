'use client';

import { useEffect, useRef, useCallback } from 'react';
import { Link } from '@/lib/router-compat';
import { useScrollReveal } from '../components/useScrollReveal';

// ── Curated Unsplash images — soft, lifestyle, editorial ──
const HERO_PORTRAIT = 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&q=90&auto=format&fit=crop&crop=faces,top';
const HERO_ACCENT   = 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=85&auto=format&fit=crop';

const WORK_ITEMS = [
  {
    id: 'lumiere',
    title: 'Lumière Campaign',
    category: 'Art Direction',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=85&auto=format&fit=crop',
  },
  {
    id: 'maison',
    title: 'Maison Édition',
    category: 'Brand Direction',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85&auto=format&fit=crop',
  },
  {
    id: 'reverie',
    title: 'Rêverie Editorial',
    category: 'Photography',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=85&auto=format&fit=crop',
  },
  {
    id: 'soleil',
    title: 'Soleil Identity',
    category: 'Visual Identity',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85&auto=format&fit=crop',
  },
];

const JOURNAL_ITEMS = [
  {
    title: 'On the quiet power of negative space',
    tag: 'Thoughts',
    date: 'Nov 2024',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=85&auto=format&fit=crop',
  },
  {
    title: 'What I learned from a year of slow mornings',
    tag: 'Life',
    date: 'Oct 2024',
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=85&auto=format&fit=crop',
  },
  {
    title: 'Colour and how it changes everything',
    tag: 'Design',
    date: 'Sep 2024',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85&auto=format&fit=crop',
  },
  {
    title: 'A playlist for creative stillness',
    tag: 'Music',
    date: 'Aug 2024',
    img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=85&auto=format&fit=crop',
  },
];

export default function HomePage() {
  useScrollReveal();
  const heroRef = useRef<HTMLDivElement>(null);

  // Gentle parallax on hero portrait
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onScroll = () => {
      const y = window.scrollY;
      const img = hero.querySelector('.parallax-img') as HTMLElement;
      if (img) img.style.transform = `translateY(${y * 0.18}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main style={{ background: 'hsl(36 25% 97%)', color: 'hsl(24 15% 16%)' }}>

      {/* ══════════════════════════════════════════
          HERO — Editorial offset layout
          Left: large portrait image
          Right: asymmetric text block, overlapping
      ══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          minHeight: '100svh',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          overflow: 'hidden',
          paddingTop: '68px', // nav height
        }}
      >
        {/* ── Left column: large portrait ── */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100svh',
        }}>
          <img
            className="parallax-img"
            src={HERO_PORTRAIT}
            alt="Elara Voss"
            style={{
              width: '100%',
              height: '115%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
              willChange: 'transform',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
          {/* Soft cream vignette on right edge — blends with text column */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, transparent 55%, hsl(36 25% 97% / 0.6) 100%)',
            pointerEvents: 'none',
          }} />
        </div>

        {/* ── Right column: editorial text block ── */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(3rem, 8vw, 6rem) clamp(2rem, 5vw, 4.5rem) clamp(3rem, 8vw, 6rem) clamp(1rem, 3vw, 2rem)',
          position: 'relative',
          zIndex: 2,
        }}>

          {/* Script accent — floated above */}
          <p
            className="hero-visible"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '12px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'hsl(24 18% 52%)',
              marginBottom: '1.5rem',
              opacity: 1,
            }}
          >
            creative direction &amp; imagery
          </p>

          {/* Main headline — Playfair Display, oversized, tight line-height */}
          <h1
            className="hero-visible"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
              fontWeight: 400,
              letterSpacing: '-0.01em',
              lineHeight: 1.05,
              color: 'hsl(24 15% 16%)',
              marginBottom: '2rem',
            }}
          >
            Hi, I'm<br />
            <em style={{ fontStyle: 'italic', color: 'hsl(15 25% 68%)' }}>Elara.</em>
          </h1>

          {/* Supporting sentence — Inter light, breathable */}
          <p
            className="hero-visible"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
              color: 'hsl(24 10% 48%)',
              lineHeight: 1.8,
              letterSpacing: '0.01em',
              maxWidth: '360px',
              marginBottom: '3rem',
            }}
          >
            I make images, stories, and moments that feel like they were always meant to exist — soft, considered, and deeply personal.
          </p>

          {/* CTA row — small caps, generous letter spacing */}
          <div className="hero-visible" style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/work"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '0.6875rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'hsl(24 15% 16%)',
                textDecoration: 'none',
                borderBottom: '1px solid hsl(15 25% 68%)',
                paddingBottom: '3px',
                transition: 'color 400ms ease, border-color 400ms ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'hsl(15 25% 68%)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'hsl(24 15% 16%)';
              }}
            >
              View my work
            </Link>
            <Link
              to="/about"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '0.6875rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'hsl(24 10% 48%)',
                textDecoration: 'none',
                transition: 'color 400ms ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'hsl(24 15% 16%)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'hsl(24 10% 48%)';
              }}
            >
              About me →
            </Link>
          </div>

          {/* Small accent image — overlapping, collage feel */}
          <div
            className="hero-visible"
            style={{
              marginTop: '4rem',
              width: 'clamp(100px, 18vw, 160px)',
              aspectRatio: '3/4',
              overflow: 'hidden',
              boxShadow: '0 8px 32px hsl(24 15% 16% / 0.08)',
              alignSelf: 'flex-end',
              marginRight: '-1rem',
            }}
          >
            <img
              src={HERO_ACCENT}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 3,
        }}>
          <div style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, transparent, hsl(30 12% 78%))',
          }} />
        </div>

        <style>{`
          @media (max-width: 768px) {
            section.hero-section {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════
          SELECTED WORK — Collage editorial grid
      ══════════════════════════════════════════ */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 3.5rem)',
        background: 'hsl(36 25% 97%)',
      }}>

        {/* Header row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          paddingBottom: '1.25rem',
          borderBottom: '1px solid hsl(30 15% 84%)',
        }}>
          <div>
            <p className="reveal" style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '12px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase' as const,
              color: 'hsl(24 18% 52%)',
              marginBottom: '0.25rem',
            }}>
              selected work
            </p>
            <h2 className="reveal delay-100" style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 400,
              letterSpacing: '0.01em',
              color: 'hsl(24 15% 16%)',
            }}>
              Recent Projects
            </h2>
          </div>
          <Link
            to="/work"
            className="reveal delay-200"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 300,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'hsl(24 10% 48%)',
              textDecoration: 'none',
              transition: 'color 400ms ease',
              whiteSpace: 'nowrap',
              paddingBottom: '2px',
              borderBottom: '1px solid hsl(30 15% 84%)',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'hsl(24 15% 16%)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'hsl(24 10% 48%)')}
          >
            All work →
          </Link>
        </div>

        {/* Collage editorial grid — asymmetric placement */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 'clamp(0.75rem, 2vw, 1.5rem)',
          alignItems: 'start',
        }}>
          {/* Feature: tall left tile, spans 7 cols */}
          <WorkTile item={WORK_ITEMS[0]} colSpan="1 / 8" tall delay={0} />

          {/* Two right tiles — slightly offset top to create layered feel */}
          <div style={{ gridColumn: '8 / 13', display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '2rem' }}>
            <WorkTile item={WORK_ITEMS[1]} colSpan="auto" delay={100} />
            <WorkTile item={WORK_ITEMS[2]} colSpan="auto" delay={200} />
          </div>

          {/* Bottom wide tile — offset right */}
          <WorkTile item={WORK_ITEMS[3]} colSpan="3 / 11" delay={150} />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT PREVIEW — Spec-exact editorial collage
          2-col grid (1fr 1.2fr), gap 80px
          Left: label + paragraph + link
          Right: 3 absolutely-positioned images with parallax
      ══════════════════════════════════════════ */}
      <AboutCollage />

      {/* ══════════════════════════════════════════
          FAVORITE POSTS — Clean editorial image grid
          4-col grid, 32px gap, no cards, no borders
      ══════════════════════════════════════════ */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 3.5rem)',
        background: 'hsl(36 25% 97%)',
      }}>

        {/* Section header — left-aligned, minimal */}
        <h2
          className="reveal"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            fontWeight: 400,
            letterSpacing: '0.01em',
            color: 'hsl(24 15% 16%)',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          Favorite Posts
        </h2>

        {/* Posts grid — 4 columns, 32px gap, no card containers */}
        <div
          className="posts-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px',
          }}
        >
          {JOURNAL_ITEMS.map((entry, i) => (
            <div
              key={entry.title}
              className={`reveal delay-${(i + 1) * 100}`}
              style={{ cursor: 'pointer' }}
            >
              {/* Image — full width, fixed height, no card bg */}
              <div style={{
                width: '100%',
                height: '220px',
                overflow: 'hidden',
                marginBottom: '12px',
                borderRadius: '2px',
              }}>
                <img
                  src={entry.img}
                  alt={entry.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s ease-in-out',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
                />
              </div>

              {/* Tag — small, uppercase, muted */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '12px',
                fontWeight: 400,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'hsl(24 18% 52%)',
                marginBottom: '6px',
              }}>
                {entry.tag}
              </p>

              {/* Title — serif, no card bg */}
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(0.9375rem, 1.4vw, 1.125rem)',
                fontWeight: 400,
                letterSpacing: '0.01em',
                lineHeight: 1.4,
                color: 'hsl(24 15% 16%)',
                margin: 0,
              }}>
                {entry.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Footer link — VIEW ALL BLOGPOST */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <Link
            to="/about"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'hsl(24 15% 16%)',
              textDecoration: 'none',
              opacity: 1,
              transition: 'opacity 0.3s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.6'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
          >
            View All Blogpost
          </Link>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .posts-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 500px) {
            .posts-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════
          GENTLE CTA — Warm invitation to connect
      ══════════════════════════════════════════ */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 4vw, 3.5rem)',
        background: '#fafaf9',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        <p className="reveal" style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '12px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase' as const,
          color: 'hsl(24 18% 52%)',
          marginBottom: '1.25rem',
        }}>
          let's create something together
        </p>
        <h2 className="reveal delay-100" style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)',
          fontWeight: 400,
          letterSpacing: '0.01em',
          lineHeight: 1.1,
          color: 'hsl(24 15% 16%)',
          maxWidth: '720px',
          marginBottom: '2.5rem',
        }}>
          I'd love to hear what you're working on.
        </h2>
        <Link
          to="/contact"
          className="reveal delay-200"
          style={{
            display: 'inline-block',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '0.75rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'hsl(24 15% 16%)',
            textDecoration: 'none',
            padding: '0.9rem 2.75rem',
            border: '1px solid hsl(30 12% 72%)',
            transition: 'border-color 400ms ease, color 400ms ease, background 400ms ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'hsl(15 25% 68%)';
            (e.currentTarget as HTMLElement).style.color = 'hsl(15 25% 68%)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'hsl(30 12% 72%)';
            (e.currentTarget as HTMLElement).style.color = 'hsl(24 15% 16%)';
          }}
        >
          Say hello
        </Link>
      </section>

    </main>
  );
}

// ── About Collage — spec-exact editorial composition ──
// 2-col grid (1fr 1.2fr), gap 80px, left text, right 3 absolute images + parallax
function AboutCollage() {
  const sectionRef = useRef<HTMLElement>(null);
  const topImgRef  = useRef<HTMLDivElement>(null);
  const botImgRef  = useRef<HTMLDivElement>(null);

  // Parallax: top image 0.9x speed, bottom image 1.05x speed
  const onScroll = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const progress = -rect.top; // px scrolled past section top
    if (topImgRef.current) {
      topImgRef.current.style.transform = `translateY(${progress * 0.09}px)`;
    }
    if (botImgRef.current) {
      botImgRef.current.style.transform = `translateY(${progress * -0.05}px)`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <section
      ref={sectionRef}
      style={{
        width: '100%',
        background: '#F7F5F2',
        position: 'relative',
      }}
    >
      {/* ── Outer container: max-width 1200px, padding 120px 40px ── */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '120px 40px',
        position: 'relative',
      }}>

        {/* ── 2-column grid: 1fr 1.2fr, gap 80px, align center ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '80px',
          alignItems: 'center',
        }} className="about-collage-outer">

          {/* ════════════════════════════════
              LEFT COLUMN — Text block
              max-width 360px, z-index 2
          ════════════════════════════════ */}
          <div style={{
            maxWidth: '360px',
            position: 'relative',
            zIndex: 2,
          }}>

            {/* Label */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '12px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              opacity: 0.6,
              color: 'hsl(24 15% 16%)',
              marginBottom: '16px',
            }}>
              About
            </p>

            {/* Paragraph — serif, 18px, 1.6 line-height */}
            <p style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '26px',
              lineHeight: 1.5,
              color: 'hsl(24 12% 28%)',
              maxWidth: '320px',
              marginBottom: '20px',
            }}>
              I'm drawn to quiet moments, soft light, and thoughtful composition.
            </p>

            {/* Link — READ MORE → */}
            <Link
              to="/about"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '12px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'hsl(24 15% 16%)',
                textDecoration: 'none',
                opacity: 1,
                transition: 'opacity 0.3s ease',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.6'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
            >
              Read more →
            </Link>
          </div>

          {/* ════════════════════════════════
              RIGHT COLUMN — Collage system
              position: relative, height: 520px
              3 images at absolute positions
          ════════════════════════════════ */}
          <div style={{
            position: 'relative',
            height: '520px',
          }} className="about-collage-images">

            {/* IMAGE 1 — Portrait (top, left: 80px, z-index 3) */}
            <div
              ref={topImgRef}
              style={{
                position: 'absolute',
                top: 0,
                left: '80px',
                width: '220px',
                height: '280px',
                overflow: 'hidden',
                zIndex: 3,
                borderRadius: '2px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
                willChange: 'transform',
                transition: 'box-shadow 0.6s ease',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=90&auto=format&fit=crop&crop=faces,top"
                alt="Portrait"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                  filter: 'grayscale(100%)',
                  transition: 'transform 0.6s ease-in-out',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
              />
            </div>

            {/* IMAGE 2 — Landscape (top: 60px, right: 0, z-index 1) — full color, larger */}
            <div
              style={{
                position: 'absolute',
                top: '60px',
                right: 0,
                width: '360px',
                height: '300px',
                overflow: 'hidden',
                zIndex: 1,
                borderRadius: '2px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=85&auto=format&fit=crop"
                alt="Landscape"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  transition: 'transform 0.6s ease-in-out',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
              />
            </div>

            {/* IMAGE 3 — Detail shot (bottom: 0, left: 0, z-index 2) */}
            <div
              ref={botImgRef}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '260px',
                height: '200px',
                overflow: 'hidden',
                zIndex: 2,
                borderRadius: '2px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
                willChange: 'transform',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=85&auto=format&fit=crop"
                alt="Coffee and paper"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  filter: 'grayscale(100%)',
                  transition: 'transform 0.6s ease-in-out',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
              />
            </div>

          </div>
        </div>
      </div>

      {/* ── Mobile: single column, images stack naturally ── */}
      <style>{`
        @media (max-width: 768px) {
          .about-collage-outer {
            display: block !important;
          }
          .about-collage-outer > div:first-child {
            max-width: 100% !important;
            margin-bottom: 24px;
          }
          .about-collage-images {
            position: relative !important;
            height: auto !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 16px !important;
          }
          .about-collage-images > div {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            right: auto !important;
            bottom: auto !important;
            width: 100% !important;
            height: auto !important;
            aspect-ratio: 4/3 !important;
          }
          .about-collage-images > div:first-child {
            aspect-ratio: 3/4 !important;
          }
        }
      `}</style>
    </section>
  );
}

// ── Work Tile — soft editorial card with gentle hover ──
function WorkTile({
  item,
  colSpan,
  tall,
  delay,
}: {
  item: typeof WORK_ITEMS[0];
  colSpan?: string;
  tall?: boolean;
  delay?: number;
}) {
  return (
    <Link
      to={`/work/${item.id}`}
      className={`reveal img-zoom delay-${delay ?? 0}`}
      style={{
        display: 'block',
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: tall ? '3/4' : '4/3',
        background: 'hsl(35 20% 94%)',
        textDecoration: 'none',
        gridColumn: colSpan !== 'auto' ? colSpan : undefined,
        boxShadow: '0 4px 24px hsl(24 15% 16% / 0.06)',
      }}
    >
      <img
        src={item.img}
        alt={item.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
      {/* Light cream overlay on hover — editorial, not dark */}
      <div
        className="tile-hover-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'hsl(36 25% 97% / 0.12)',
          opacity: 0,
          transition: 'opacity 600ms ease',
        }}
      />
      {/* Label — appears on hover, soft on cream bg */}
      <div
        className="tile-label"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '1.25rem 1.5rem',
          background: 'linear-gradient(to top, hsl(36 25% 97% / 0.92) 0%, transparent 100%)',
          transform: 'translateY(4px)',
          opacity: 0,
          transition: 'opacity 500ms ease, transform 500ms ease',
        }}
      >
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '12px',
          fontWeight: 400,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'hsl(24 18% 52%)',
          marginBottom: '0.25rem',
        }}>
          {item.category} — {item.year}
        </p>
        <h3 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(1rem, 2vw, 1.375rem)',
          fontWeight: 400,
          letterSpacing: '0.01em',
          color: 'hsl(24 15% 16%)',
        }}>
          {item.title}
        </h3>
      </div>

      <style>{`
        .img-zoom:hover .tile-hover-overlay { opacity: 1 !important; }
        .img-zoom:hover .tile-label { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>
    </Link>
  );
}
