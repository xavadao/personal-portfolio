'use client';

import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from '@/lib/router-compat';
import { PROJECTS } from './WorkPage';

export default function WorkDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeImg, setActiveImg] = useState(0);

  const project = PROJECTS.find((p) => p.id === id);
  const currentIndex = PROJECTS.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  // Scroll to top on project change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveImg(0);
  }, [id]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && nextProject) navigate(`/work/${nextProject.id}`);
      if (e.key === 'ArrowLeft' && prevProject) navigate(`/work/${prevProject.id}`);
      if (e.key === 'Escape') navigate('/work');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [id, nextProject, prevProject, navigate]);

  if (!project) {
    return (
      <main style={{
        background: 'hsl(0 0% 4%)',
        color: 'hsl(30 10% 94%)',
        paddingTop: '72px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
      }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'hsl(30 5% 52%)' }}>
          Project not found.
        </p>
        <Link to="/work" style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.8125rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'hsl(30 10% 94%)',
          textDecoration: 'none',
          borderBottom: '1px solid hsl(0 0% 22%)',
          paddingBottom: '3px',
        }}>
          ← Back to Work
        </Link>
      </main>
    );
  }

  return (
    <main style={{ background: 'hsl(0 0% 4%)', color: 'hsl(30 10% 94%)', paddingTop: '72px' }}>

      {/* ── HERO IMAGE ── */}
      <div style={{
        position: 'relative',
        height: '85vh',
        minHeight: '500px',
        overflow: 'hidden',
        background: 'hsl(0 0% 7%)',
      }}>
        <img
          src={project.images[activeImg]}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'opacity 500ms ease',
          }}
        />
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, hsl(0 0% 4% / 0.3) 0%, transparent 40%, hsl(0 0% 4% / 0.6) 100%)',
        }} />

        {/* Back button */}
        <Link
          to="/work"
          style={{
            position: 'absolute',
            top: '2rem',
            left: '2.5rem',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'hsl(30 10% 94% / 0.7)',
            textDecoration: 'none',
            transition: 'color 250ms ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'hsl(30 10% 94%)')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'hsl(30 10% 94% / 0.7)')}
        >
          ← Work
        </Link>

        {/* Project counter */}
        <div style={{
          position: 'absolute',
          top: '2rem',
          right: '2.5rem',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          color: 'hsl(30 10% 94% / 0.5)',
        }}>
          {String(currentIndex + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
        </div>

        {/* Title overlay */}
        <div style={{
          position: 'absolute',
          bottom: '3rem',
          left: '2.5rem',
          right: '2.5rem',
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.6875rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'hsl(38 45% 60%)',
            marginBottom: '0.75rem',
          }}>
            {project.category}
          </p>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 500,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            color: 'hsl(30 10% 94%)',
          }}>
            {project.title}
          </h1>
        </div>
      </div>

      {/* ── PROJECT INFO ── */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 7rem) 2.5rem',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: 'clamp(3rem, 6vw, 6rem)',
        borderBottom: '1px solid hsl(0 0% 14%)',
      }}>
        {/* Metadata */}
        <div>
          {[
            { label: 'Client', value: project.client },
            { label: 'Role', value: project.role },
            { label: 'Year', value: project.year },
            { label: 'Category', value: project.category },
          ].map((m) => (
            <div key={m.label} style={{
              marginBottom: '2rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid hsl(0 0% 14%)',
            }}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.6875rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'hsl(30 5% 35%)',
                marginBottom: '0.375rem',
              }}>
                {m.label}
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.9375rem',
                color: 'hsl(30 10% 94%)',
              }}>
                {m.value}
              </p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 1.45,
            color: 'hsl(30 10% 94%)',
            marginBottom: '2rem',
          }}>
            {project.desc}
          </p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.9375rem',
            color: 'hsl(30 5% 52%)',
            lineHeight: 1.75,
          }}>
            The work was developed over several months of close collaboration, research, and iteration. Each decision was made in service of a singular, coherent vision — one that would hold up across every touchpoint and context.
          </p>
        </div>

        <style>{`
          @media (max-width: 768px) {
            section:nth-child(2) { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── IMAGE GALLERY ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 7rem) 2.5rem' }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.6875rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'hsl(30 5% 35%)',
          marginBottom: '2.5rem',
        }}>
          Project Images
        </p>

        {/* Main large image */}
        <div style={{
          marginBottom: '1.5rem',
          overflow: 'hidden',
          background: 'hsl(0 0% 7%)',
          aspectRatio: '16/9',
        }}>
          <img
            src={project.images[activeImg]}
            alt={`${project.title} — image ${activeImg + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'opacity 400ms ease',
            }}
          />
        </div>

        {/* Thumbnail strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${project.images.length}, 1fr)`,
          gap: '1rem',
        }}>
          {project.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              style={{
                padding: 0,
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                overflow: 'hidden',
                aspectRatio: '4/3',
                outline: activeImg === i ? '1px solid hsl(38 45% 60%)' : '1px solid transparent',
                outlineOffset: '2px',
                transition: 'outline-color 250ms ease',
              }}
            >
              <img
                src={img}
                alt={`Thumbnail ${i + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  opacity: activeImg === i ? 1 : 0.45,
                  transition: 'opacity 300ms ease, transform 400ms ease',
                  transform: activeImg === i ? 'scale(1)' : 'scale(1.02)',
                }}
              />
            </button>
          ))}
        </div>
      </section>

      {/* ── PROJECT NAVIGATION ── */}
      <section style={{
        borderTop: '1px solid hsl(0 0% 14%)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}>
        {prevProject ? (
          <Link
            to={`/work/${prevProject.id}`}
            style={{
              padding: 'clamp(2.5rem, 5vw, 4rem) 2.5rem',
              textDecoration: 'none',
              borderRight: '1px solid hsl(0 0% 14%)',
              transition: 'background 300ms ease',
              display: 'block',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'hsl(0 0% 7%)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
          >
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.6875rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'hsl(30 5% 35%)',
              marginBottom: '0.75rem',
            }}>
              ← Previous
            </p>
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: 'hsl(30 10% 94%)',
            }}>
              {prevProject.title}
            </h3>
          </Link>
        ) : <div />}

        {nextProject ? (
          <Link
            to={`/work/${nextProject.id}`}
            style={{
              padding: 'clamp(2.5rem, 5vw, 4rem) 2.5rem',
              textDecoration: 'none',
              textAlign: 'right',
              transition: 'background 300ms ease',
              display: 'block',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'hsl(0 0% 7%)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
          >
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.6875rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'hsl(30 5% 35%)',
              marginBottom: '0.75rem',
            }}>
              Next →
            </p>
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: 'hsl(30 10% 94%)',
            }}>
              {nextProject.title}
            </h3>
          </Link>
        ) : <div />}
      </section>

    </main>
  );
}
