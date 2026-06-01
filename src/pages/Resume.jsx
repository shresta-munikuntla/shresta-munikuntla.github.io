import React, { useState } from 'react';

export default function Resume() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ minHeight: '100vh', paddingTop: '64px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '4rem 2rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-1px',
            }}>
              My{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--accent-lavender), var(--accent-sky))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Resume</span>
            </div>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontWeight: 400 }}>
              CS Student · University of Texas at Dallas
            </p>
          </div>
          {/* Download button */}
          <a
            href="/resume.pdf"
            download="Shresta_Munikuntla_Resume.pdf"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: 'linear-gradient(135deg, var(--accent-lavender), var(--accent-sky))',
              color: '#0d0d14',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.9rem',
              borderRadius: '100px',
              transition: 'opacity 0.2s, transform 0.2s',
              textDecoration: 'none',
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '0.88';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            ↓ Download PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          overflow: 'hidden',
          minHeight: '800px',
          position: 'relative',
        }}>
          {/* Loading state */}
          {!loaded && (
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '1.5rem',
              color: 'var(--text-muted)',
            }}>
              <div style={{
                width: '48px', height: '48px',
                border: '2px solid var(--border)',
                borderTopColor: 'var(--accent-lavender)',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite',
              }} />
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Loading resume…</p>
              <p style={{ fontSize: '0.85rem', maxWidth: '320px', textAlign: 'center', lineHeight: 1.6 }}>
                Place your resume file at <code style={{ background: 'var(--bg3)', padding: '2px 6px', borderRadius: '4px', color: 'var(--accent-peach)' }}>public/resume.pdf</code>
              </p>
            </div>
          )}

          <iframe
            src="/resume.pdf"
            title="Shresta Munikuntla Resume"
            width="100%"
            height="900px"
            style={{ border: 'none', display: 'block' }}
            onLoad={(e) => {
              // Check if actually loaded
              setLoaded(true);
            }}
          />
        </div>

        {/* Fallback note */}
        {/* <div style={{
          marginTop: '1.5rem',
          padding: '1rem 1.5rem',
          background: 'rgba(168,255,206,0.05)',
          border: '1px solid rgba(168,255,206,0.12)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          <span style={{ fontSize: '1.1rem' }}>💡</span>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            <strong style={{ color: 'var(--accent-mint)' }}>Setup:</strong> Add your resume file as <code style={{ background: 'var(--bg3)', padding: '1px 6px', borderRadius: '4px', color: 'var(--accent-peach)' }}>public/resume.pdf</code> to show the PDF preview. Use the download button above to access the file directly.
          </p>
        </div> */}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
