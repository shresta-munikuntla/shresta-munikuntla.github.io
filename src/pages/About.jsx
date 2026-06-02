import React from 'react';

const contacts = [
  {
    icon: '📞',
    label: 'Phone',
    value: '+1 945 237 2095',
    href: 'tel:+19452372095',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'shresta.munikuntla@gmail.com',
    href: 'mailto:shresta.munikuntla@gmail.com',
  },
  {
    icon: '📍',
    label: 'City',
    value: 'Frisco, Texas',
    href: null,
  },
  {
    icon: '🔗',
    label: 'LinkedIn',
    value: 'shresta-munikuntla',
    href: 'https://www.linkedin.com/in/shresta-munikuntla',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'shresta-munikuntla',
    href: 'https://github.com/shresta-munikuntla',
  },
];

const skills = ['Python', 'Java', 'C++', 'JavaScript', 'React', 'Node.js', 'TensorFlow', 'PostgreSQL', 'Docker'];

export default function About() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '64px' }}>
      {/* Hero Section */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 64px)',
        padding: '4rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background blobs */}
        <div style={{
          position: 'absolute', top: '15%', left: '10%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(168,255,206,0.07) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '20%', right: '8%',
          width: '350px', height: '350px',
          background: 'radial-gradient(circle, rgba(196,181,253,0.07) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: '960px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3rem',
          position: 'relative',
          zIndex: 1,
        }}>
          {/* Photo */}
          <div style={{ position: 'relative' }}>
            <div style={{
              width: '160px', height: '160px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent-mint), var(--accent-lavender))',
              padding: '3px',
              boxShadow: '0 0 60px rgba(168,255,206,0.15)',
            }}>
              <div style={{
                width: '100%', height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                background: 'var(--bg3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {/* Replace src with your actual photo path: src="/shresta.jpg" */}
                <img
                  src="/profile.png"
                  alt="Shresta Munikuntla"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div style={{
                  display: 'none',
                  width: '100%', height: '100%',
                  borderRadius: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '3rem',
                  color: 'var(--accent-mint)',
                }}>SM</div>
              </div>
            </div>
          </div>

          {/* Name + title */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              lineHeight: 1.05,
              letterSpacing: '-1.5px',
              marginBottom: '1rem',
            }}>
              Shresta{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--accent-mint), var(--accent-lavender))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Munikuntla
              </span>
            </div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}>
              CS Student · Aspiring Software Engineer · AI/ML Enthusiast
            </div>
          </div>

          {/* Bio card */}
          <div style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '20px',
            padding: '2.5rem',
            maxWidth: '700px',
            width: '100%',
            lineHeight: 1.8,
            fontSize: '1.05rem',
            color: 'rgba(240,240,245,0.85)',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: '-1px', left: '40px',
              width: '80px', height: '3px',
              background: 'linear-gradient(90deg, var(--accent-mint), var(--accent-lavender))',
              borderRadius: '0 0 4px 4px',
            }} />
            <p>
              Hi, I'm Shresta Munikuntla, a Computer Science student at The University of Texas at Dallas with a passion for software engineering, artificial intelligence, and machine learning. I enjoy building impactful technology solutions and have experience developing web applications, REST APIs, AI models, and data-driven systems.
            </p>
            <br />
            <p>
              Through academic projects and professional experience, I've worked with technologies including Python, Java, C++, JavaScript, React, Node.js, TensorFlow, PostgreSQL, and Docker. My recent work includes developing machine learning models for land-use forecasting, contributing to computer vision navigation systems, and building full-stack applications.
            </p>
          </div>

          {/* Skills pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center', maxWidth: '600px' }}>
            {skills.map((skill, i) => {
              const colors = ['var(--accent-mint)', 'var(--accent-lavender)', 'var(--accent-peach)', 'var(--accent-sky)', 'var(--accent-lemon)'];
              const color = colors[i % colors.length];
              return (
                <span key={skill} style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '100px',
                  border: `1px solid ${color}30`,
                  background: `${color}10`,
                  color: color,
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  letterSpacing: '0.05em',
                }}>
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section style={{
        padding: '5rem 2rem',
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '2rem',
            marginBottom: '2.5rem',
            letterSpacing: '-0.5px',
          }}>
            Get In <span style={{ color: 'var(--accent-mint)' }}>Touch</span>
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1rem',
          }}>
            {contacts.map(({ icon, label, value, href }) => (
              <div key={label} style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'border-color 0.2s, transform 0.2s',
                cursor: href ? 'pointer' : 'default',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(168,255,206,0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                onClick={() => href && window.open(href, '_blank')}
              >
                <span style={{ fontSize: '1.4rem' }}>{icon}</span>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '0.2rem',
                  }}>
                    {label}
                  </div>
                  <div style={{
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    color: href ? 'var(--accent-mint)' : 'var(--text)',
                    wordBreak: 'break-all',
                  }}>
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 600px) {
          section { padding: 3rem 1.2rem !important; }
        }
      `}</style>
    </div>
  );
}
