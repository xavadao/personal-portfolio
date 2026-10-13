'use client';

import { useState, useEffect } from 'react';
import { Link, useLocation } from '@/lib/router-compat';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!menuOpen) return;
    const menu = document.getElementById('mobile-navigation');
    const links = Array.from(menu?.querySelectorAll<HTMLAnchorElement>('a[href]') ?? []);
    const previous = document.activeElement as HTMLElement | null;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    links[0]?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); setMenuOpen(false); }
      if (event.key === 'Tab' && links.length) {
        if (event.shiftKey && document.activeElement === links[0]) { event.preventDefault(); links.at(-1)?.focus(); }
        else if (!event.shiftKey && document.activeElement === links.at(-1)) { event.preventDefault(); links[0].focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = oldOverflow; previous?.focus(); };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const leftLinks = [
    { to: '/', label: 'Home' },
    { to: '/work', label: 'Work' },
  ];

  const rightLinks = [
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  const NavLink = ({ to, label }: { to: string; label: string }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.75rem',
          fontWeight: 300,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: isActive ? 'hsl(24 15% 16%)' : 'hsl(24 10% 48%)',
          textDecoration: 'none',
          transition: 'color 400ms cubic-bezier(0.25,0.46,0.45,0.94)',
          paddingBottom: '2px',
          borderBottom: isActive
            ? '1px solid hsl(15 25% 68%)'
            : '1px solid transparent',
        }}
        onMouseEnter={(e) => {
          if (!isActive)
            (e.currentTarget as HTMLElement).style.color = 'hsl(24 15% 16%)';
        }}
        onMouseLeave={(e) => {
          if (!isActive)
            (e.currentTarget as HTMLElement).style.color = 'hsl(24 10% 48%)';
        }}
      >
        {label}
      </Link>
    );
  };

  return (
    <>
      {/* ── Main nav bar ── */}
      <nav className="personal-navigation"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 clamp(1.5rem, 4vw, 3.5rem)',
          height: '68px',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          transition: 'background 600ms cubic-bezier(0.25,0.46,0.45,0.94), border-color 600ms',
          background: scrolled
            ? 'hsl(36 25% 97% / 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled
            ? '1px solid hsl(30 15% 84%)'
            : '1px solid transparent',
        }}
      >
        {/* Left links */}
        <div
          className="nav-desktop"
          style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', justifyContent: 'flex-start' }}
        >
          {leftLinks.map((l) => <NavLink key={l.to} to={l.to} label={l.label} />)}
        </div>

        {/* Wordmark — centered */}
        <Link className="nav-primary-wordmark"
          to="/"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '1.1875rem',
            fontWeight: 400,
            letterSpacing: '0.06em',
            color: 'hsl(24 15% 16%)',
            textDecoration: 'none',
            fontStyle: 'italic',
            whiteSpace: 'nowrap',
          }}
        >
          Elara Voss
        </Link>

        {/* Right links */}
        <div
          className="nav-desktop"
          style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', justifyContent: 'flex-end' }}
        >
          {rightLinks.map((l) => <NavLink key={l.to} to={l.to} label={l.label} />)}
        </div>

        {/* Mobile: wordmark left + hamburger right */}
        <Link
          to="/"
          className="nav-mobile-wordmark"
          style={{
            display: 'none',
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '1.1875rem',
            fontWeight: 400,
            letterSpacing: '0.06em',
            color: 'hsl(24 15% 16%)',
            textDecoration: 'none',
            fontStyle: 'italic',
            gridColumn: '1 / 2',
          }}
        >
          Elara Voss
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="nav-mobile-btn"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '6px',
            padding: '8px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span style={{
            display: 'block', width: '22px', height: '1px',
            background: 'hsl(24 15% 16%)',
            transition: 'transform 400ms cubic-bezier(0.25,0.46,0.45,0.94), opacity 400ms',
            transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '22px', height: '1px',
            background: 'hsl(24 15% 16%)',
            transition: 'opacity 400ms',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: '22px', height: '1px',
            background: 'hsl(24 15% 16%)',
            transition: 'transform 400ms cubic-bezier(0.25,0.46,0.45,0.94), opacity 400ms',
            transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </nav>

      {/* ── Mobile overlay — soft cream ── */}
      <div id="mobile-navigation" role="navigation" aria-label="Mobile navigation" aria-hidden={!menuOpen} inert={!menuOpen}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: 'hsl(36 25% 97% / 0.98)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '0 clamp(1.5rem, 8vw, 4rem)',
          gap: '0.25rem',
          transition: 'opacity 500ms cubic-bezier(0.25,0.46,0.45,0.94), visibility 500ms',
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? 'visible' : 'hidden',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {/* Script accent */}
        <p style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: '1rem',
          color: 'hsl(15 25% 68%)',
          marginBottom: '2rem',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 500ms ease 100ms, transform 500ms ease 100ms',
        }}>
          navigate
        </p>

        {allLinks.map((l, i) => (
          <Link
            key={l.to}
            to={l.to}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2.5rem, 10vw, 4.5rem)',
              fontWeight: 300,
              letterSpacing: '0.01em',
              color: location.pathname === l.to
                ? 'hsl(15 25% 68%)'
                : 'hsl(24 15% 16%)',
              textDecoration: 'none',
              lineHeight: 1.2,
              transition: `opacity 500ms ease ${i * 80 + 150}ms, transform 500ms ease ${i * 80 + 150}ms, color 300ms ease`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateX(0)' : 'translateX(-16px)',
            }}
          >
            {l.label}
          </Link>
        ))}

        <div style={{
          marginTop: '3rem',
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.6875rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'hsl(24 10% 48%)',
          opacity: menuOpen ? 1 : 0,
          transition: 'opacity 500ms ease 500ms',
        }}>
          © {new Date().getFullYear()} Elara Voss
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop, .nav-primary-wordmark { display: none !important; }
          .personal-navigation { grid-template-columns: 1fr auto !important; }
          .nav-mobile-wordmark { grid-column: auto !important; }
          .nav-mobile-btn { display: flex !important; }
          .nav-mobile-wordmark { display: block !important; }
        }
      `}</style>
    </>
  );
}
