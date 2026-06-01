import React, { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mwvzdooe'; // Replace with your Formspree form ID

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: '12px',
    padding: '0.9rem 1.1rem',
    color: 'var(--text)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: '0.78rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    marginBottom: '0.5rem',
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '64px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '4rem 2rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            lineHeight: 1.05,
            letterSpacing: '-1px',
            marginBottom: '0.75rem',
          }}>
            Say{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--accent-sky), var(--accent-mint))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Hello</span>
          </div>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '440px' }}>
            I'm always open to new opportunities, collaborations, or just a friendly chat. Fill out the form below or reach me directly.
          </p>
        </div>

        {/* Direct email */}
        <a
          href="mailto:shresta.munikuntla@gmail.com"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '2.5rem',
            padding: '0.75rem 1.4rem',
            background: 'linear-gradient(135deg, var(--accent-sky), var(--accent-mint))',
            color: '#0d0d14',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '0.9rem',
            borderRadius: '100px',
            transition: 'opacity 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          ✉️ shresta.munikuntla@gmail.com
        </a>

        {/* Contact form */}
        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: '24px',
          padding: '2.5rem',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: '-1px', left: '48px',
            width: '100px', height: '3px',
            background: 'linear-gradient(90deg, var(--accent-sky), var(--accent-mint))',
            borderRadius: '0 0 4px 4px',
          }} />

          {status === 'success' ? (
            <div style={{
              textAlign: 'center',
              padding: '3rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
            }}>
              <div style={{ fontSize: '3.5rem' }}>🎉</div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.6rem',
                color: 'var(--accent-mint)',
              }}>
                Message Sent!
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Thanks for reaching out! I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setStatus('idle')}
                style={{
                  marginTop: '0.5rem',
                  padding: '0.6rem 1.4rem',
                  border: '1px solid var(--border)',
                  borderRadius: '100px',
                  background: 'transparent',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(147,197,253,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(147,197,253,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Subject</label>
                <input
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(147,197,253,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me what's on your mind..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{
                    ...inputStyle,
                    resize: 'vertical',
                    minHeight: '140px',
                    lineHeight: 1.6,
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(147,197,253,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              {status === 'error' && (
                <div style={{
                  padding: '0.8rem 1rem',
                  background: 'rgba(255,100,100,0.08)',
                  border: '1px solid rgba(255,100,100,0.2)',
                  borderRadius: '10px',
                  color: '#ff8080',
                  fontSize: '0.88rem',
                }}>
                  Something went wrong. Please try emailing directly at shresta.munikuntla@gmail.com
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    padding: '0.85rem 2rem',
                    background: status === 'sending'
                      ? 'rgba(147,197,253,0.3)'
                      : 'linear-gradient(135deg, var(--accent-sky), var(--accent-mint))',
                    color: status === 'sending' ? 'var(--text-muted)' : '#0d0d14',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    border: 'none',
                    borderRadius: '100px',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                  onMouseEnter={e => { if (status !== 'sending') { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-2px)'; }}}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {status === 'sending' ? (
                    <>
                      <span style={{
                        width: '14px', height: '14px',
                        border: '2px solid var(--text-muted)',
                        borderTopColor: 'transparent',
                        borderRadius: '50%',
                        animation: 'spin 0.7s linear infinite',
                        display: 'inline-block',
                      }} />
                      Sending…
                    </>
                  ) : (
                    'Send Message →'
                  )}
                </button>
              </div>

              {/* <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.6 }}>
                💡 <strong>Setup note:</strong> Replace <code style={{ color: 'var(--accent-peach)' }}>YOUR_FORM_ID</code> in Contact.js with your{' '}
                <a href="https://formspree.io" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-sky)', textDecoration: 'underline' }}>
                  Formspree
                </a>{' '}
                form ID.
              </p> */}
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 500px) {
          form > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
