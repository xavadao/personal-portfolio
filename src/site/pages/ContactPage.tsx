'use client';

import { useState } from 'react';
import { useScrollReveal } from '../components/useScrollReveal';

export default function ContactPage() {
  useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send
    setSent(true);
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    background: 'none',
    border: 'none',
    borderBottom: `1px solid ${focused === field ? '#d4a574' : 'rgba(0,0,0,0.08)'}`,
    padding: '1rem 0',
    fontFamily: "'Inter', sans-serif",
    fontSize: '1rem',
    color: '#1a1a1a',
    outline: 'none',
    transition: 'border-color 300ms ease',
    resize: 'none',
  });

  return (
    <main style={{ background: '#F7F5F2', color: '#1a1a1a', paddingTop: '72px' }}>

      {/* ── OPENING STATEMENT ── */}
      <section style={{
        padding: 'clamp(5rem, 12vw, 10rem) 2.5rem clamp(4rem, 8vw, 7rem)',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        maxWidth: '1000px',
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '12px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'hsl(24 18% 52%)',
          marginBottom: '2rem',
        }}>
          Contact
        </p>
        <h1 className="reveal" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(3rem, 9vw, 8rem)',
          fontWeight: 300,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          color: '#1a1a1a',
        }}>
          Let's connect
        </h1>
      </section>

      {/* ── CONTACT LAYOUT ── */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 7rem) 2.5rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1.5fr',
        gap: 'clamp(4rem, 8vw, 8rem)',
        alignItems: 'start',
      }}>

        {/* Left: info */}
        <div>
          <p className="reveal" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9375rem',
            color: '#4a4a4a',
            lineHeight: 1.75,
            marginBottom: '3rem',
          }}>
            I take on a limited number of projects each year. If you have something worth making, I'd love to hear from you.
          </p>

          <div style={{ marginBottom: '3rem' }}>
            {[
              { label: 'Email', value: 'hello@alexmorgan.co' },
              { label: 'New Projects', value: 'work@alexmorgan.co' },
              { label: 'Location', value: 'New York, NY' },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`reveal delay-${(i + 1) * 100}`}
                style={{
                  padding: '1.5rem 0',
                  borderBottom: '1px solid rgba(0,0,0,0.08)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'hsl(24 18% 52%)',
                }}>
                  {item.label}
                </span>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  color: '#1a1a1a',
                }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="reveal delay-400">
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '12px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'hsl(24 18% 52%)',
              marginBottom: '1rem',
            }}>
              Follow
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              {['Instagram', 'Behance', 'LinkedIn'].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '0.8125rem',
                    color: '#4a4a4a',
                    textDecoration: 'none',
                    transition: 'color 250ms ease',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#d4a574')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#4a4a4a')}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="reveal delay-200">
          {sent ? (
            <div style={{
              padding: 'clamp(3rem, 6vw, 5rem) 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}>
              <div style={{
                width: '40px',
                height: '1px',
                background: '#d4a574',
              }} />
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                color: '#1a1a1a',
              }}>
                Message received.
              </h2>
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '0.9375rem',
                color: '#4a4a4a',
                lineHeight: 1.7,
              }}>
                I'll be in touch within 48 hours. In the meantime, take a look at my work.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {/* Name */}
              <div style={{ marginBottom: '0.5rem' }}>
                <label style={{
                  display: 'block',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'hsl(24 18% 52%)',
                  marginBottom: '0.25rem',
                }}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: (e.target as HTMLInputElement).value })}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  style={inputStyle('name')}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: '0.5rem' }}>
                <label style={{
                  display: 'block',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'hsl(24 18% 52%)',
                  marginBottom: '0.25rem',
                }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: (e.target as HTMLInputElement).value })}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  style={inputStyle('email')}
                />
              </div>

              {/* Project type */}
              <div style={{ marginBottom: '0.5rem' }}>
                <label style={{
                  display: 'block',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'hsl(24 18% 52%)',
                  marginBottom: '0.25rem',
                }}>
                  Project Type
                </label>
                <input
                  type="text"
                  placeholder="Brand identity, campaign, digital..."
                  value={form.project}
                  onChange={(e) => setForm({ ...form, project: (e.target as HTMLInputElement).value })}
                  onFocus={() => setFocused('project')}
                  onBlur={() => setFocused(null)}
                  style={inputStyle('project')}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: '3rem' }}>
                <label style={{
                  display: 'block',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'hsl(24 18% 52%)',
                  marginBottom: '0.25rem',
                }}>
                  Tell me about your project
                </label>
                <textarea
                  rows={5}
                  placeholder="What are you working on? What do you need?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: (e.target as HTMLTextAreaElement).value })}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  style={inputStyle('message')}
                />
              </div>

              <button
                type="submit"
                style={{
                  alignSelf: 'flex-start',
                  padding: '1rem 2.5rem',
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '0.8125rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#1a1a1a',
                  background: 'transparent',
                  border: '1px solid #1a1a1a',
                  cursor: 'pointer',
                  transition: 'color 300ms ease, border-color 300ms ease, transform 150ms ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = '#d4a574';
                  el.style.borderColor = '#d4a574';
                  el.style.transform = 'scale(0.98)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = '#1a1a1a';
                  el.style.borderColor = '#1a1a1a';
                  el.style.transform = 'scale(1)';
                }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── CLOSING LINE ── */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 7rem) 2.5rem',
        borderTop: '1px solid rgba(0,0,0,0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2rem',
      }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          fontWeight: 300,
          letterSpacing: '-0.01em',
          color: '#4a4a4a',
        }}>
          New York
        </p>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#8a8a8a',
        }}>
          © {new Date().getFullYear()} All rights reserved
        </p>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section:nth-child(2) { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder {
          color: rgba(0,0,0,0.3);
          font-family: 'Jost', sans-serif;
        }
      `}</style>
    </main>
  );
}