'use client';

import { useState } from 'react';
import { Link } from '@/lib/router-compat';
import { useScrollReveal } from '../components/useScrollReveal';

export const PROJECTS = [
  {
    id: 'atlas',
    title: 'Atlas Identity',
    category: 'Brand Direction',
    year: '2024',
    client: 'Atlas Group',
    role: 'Creative Direction, Identity Design',
    desc: 'A complete brand overhaul for a global investment firm — stripping back decades of corporate convention to reveal something precise and authoritative.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1400&q=85&auto=format&fit=crop',
    ],
    featured: true,
  },
  {
    id: 'meridian',
    title: 'Meridian Editorial',
    category: 'Art Direction',
    year: '2024',
    client: 'Meridian Press',
    role: 'Art Direction, Layout Design',
    desc: 'A quarterly publication for architecture and culture. Each issue is designed as a singular object — considered, tactile, and worth keeping.',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1400&q=85&auto=format&fit=crop',
    ],
    featured: false,
  },
  {
    id: 'veil',
    title: 'Veil Campaign',
    category: 'Photography',
    year: '2023',
    client: 'Veil Collective',
    role: 'Creative Direction, Photography',
    desc: 'A fashion campaign built around absence — what is not shown is as important as what is. Shot over three days in the Atacama Desert.',
    img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1400&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1400&q=85&auto=format&fit=crop',
    ],
    featured: false,
  },
  {
    id: 'forma',
    title: 'Forma Architecture',
    category: 'Visual Identity',
    year: '2023',
    client: 'Forma Studio',
    role: 'Identity Design, Digital',
    desc: 'Identity and digital presence for a Tokyo-based architecture practice. The system borrows from technical drawing — precise, structural, unadorned.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1400&q=85&auto=format&fit=crop',
    ],
    featured: true,
  },
  {
    id: 'noir',
    title: 'Noir Collection',
    category: 'Fashion Editorial',
    year: '2023',
    client: 'Maison Noir',
    role: 'Art Direction, Styling',
    desc: 'A ten-look editorial for a Paris-based fashion house. Shot in a decommissioned power station — industrial scale against intimate detail.',
    img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1400&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1400&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&q=85&auto=format&fit=crop',
    ],
    featured: false,
  },
  {
    id: 'onyx',
    title: 'Onyx Capital',
    category: 'Brand Direction',
    year: '2022',
    client: 'Onyx Capital',
    role: 'Creative Direction, Identity',
    desc: 'Repositioning a private equity firm for a new generation of investors. Confidence without arrogance. Authority without distance.',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1400&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85&auto=format&fit=crop',
    ],
    featured: true,
  },
];

const CATEGORIES = ['All', 'Brand Direction', 'Art Direction', 'Photography', 'Visual Identity', 'Fashion Editorial'];

export default function WorkPage() {
  useScrollReveal();
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <main style={{ background: '#F7F5F2', color: '#1a1a1a', paddingTop: '72px' }}>

      {/* ── PAGE HEADER ── */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 7rem) 2.5rem clamp(3rem, 5vw, 5rem)',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        gap: '2rem',
      }}>
        <div>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '0.6875rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#8a8a8a',
            marginBottom: '1rem',
          }}>
            Portfolio
          </p>
          <h1 className="reveal" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}>
            Selected Work
          </h1>
        </div>
        <p className="reveal delay-200" style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '0.9375rem',
          color: '#4a4a4a',
          maxWidth: '320px',
          lineHeight: 1.7,
        }}>
          A curated selection of projects across brand, image, and experience.
        </p>
      </section>

      {/* ── FILTER BAR ── */}
      <div style={{
        padding: '1.5rem 2.5rem',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        display: 'flex',
        gap: '0',
        overflowX: 'auto',
        scrollbarWidth: 'none',
      }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: activeFilter === cat ? '#1a1a1a' : '#8a8a8a',
              background: 'none',
              border: 'none',
              borderBottom: activeFilter === cat ? '1px solid #d4a574' : '1px solid transparent',
              padding: '0.5rem 1.25rem',
              cursor: 'pointer',
              transition: 'color 250ms ease, border-color 250ms ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              if (activeFilter !== cat)
                (e.target as HTMLElement).style.color = '#4a4a4a';
            }}
            onMouseLeave={(e) => {
              if (activeFilter !== cat)
                (e.target as HTMLElement).style.color = '#8a8a8a';
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── EDITORIAL GRID ── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 2.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '1.5rem',
        }}>
          {filtered.map((project, i) => {
            // Asymmetric layout pattern
            const patterns = [
              { col: '1 / 8', row: 'auto', tall: true },
              { col: '8 / 13', row: 'auto', tall: false },
              { col: '1 / 5', row: 'auto', tall: false },
              { col: '5 / 10', row: 'auto', tall: false },
              { col: '10 / 13', row: 'auto', tall: false },
              { col: '1 / 7', row: 'auto', tall: false },
            ];
            const p = patterns[i % patterns.length];

            return (
              <ProjectTile
                key={project.id}
                project={project}
                style={{ gridColumn: p.col }}
                tall={p.tall}
                index={i}
              />
            );
          })}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .work-editorial-grid > a { grid-column: 1 / -1 !important; }
        }
      `}</style>
    </main>
  );
}

function ProjectTile({
  project,
  style,
  tall,
  index,
}: {
  project: typeof PROJECTS[0];
  style?: React.CSSProperties;
  tall?: boolean;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/work/${project.id}`}
      className="reveal"
      style={{
        display: 'block',
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: tall ? '3/4' : '4/3',
        background: '#F7F5F2',
        textDecoration: 'none',
        transitionDelay: `${(index % 3) * 80}ms`,
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={project.img}
        alt={project.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 700ms cubic-bezier(0.25,0.1,0.25,1)',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
        }}
      />

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.03) 50%, transparent 100%)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 400ms ease',
      }} />

      {/* Featured badge */}
      {project.featured && (
        <div style={{
          position: 'absolute',
          top: '1.25rem',
          right: '1.25rem',
          padding: '0.25rem 0.625rem',
          background: '#d4a574',
          fontFamily: "'Jost', sans-serif",
          fontSize: '0.625rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#F7F5F2',
        }}>
          Featured
        </div>
      )}

      {/* Text */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '1.75rem',
        transform: hovered ? 'translateY(0)' : 'translateY(10px)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 400ms ease, transform 400ms ease',
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '12px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'hsl(24 18% 52%)',
          marginBottom: '0.375rem',
        }}>
          {project.category} — {project.year}
        </p>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
          fontWeight: 400,
          letterSpacing: '-0.02em',
          color: '#1a1a1a',
          marginBottom: '0.5rem',
        }}>
          {project.title}
        </h3>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '0.8125rem',
          color: '#4a4a4a',
          lineHeight: 1.5,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {project.desc}
        </p>
      </div>
    </Link>
  );
}