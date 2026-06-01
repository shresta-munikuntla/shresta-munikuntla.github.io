import React, { useState, useEffect } from 'react';

const PROJECTS = [
  {
    name: 'Inventory Management System',
    subtitle: 'The Warren Center – UTD EPICS',
    url: 'https://github.com/UTDallasEPICS/TWCGateway',
    description: 'Full-stack inventory gateway system built for The Warren Center, enabling staff to track resources and manage operations efficiently.',
    skills: ['React', 'Node.js', 'PostgreSQL'],
    color: 'var(--accent-mint)',
    image: '/projects/twcgateway.png',
  },
  {
    name: 'GuidePoint',
    subtitle: 'BVRIT – UTD EPICS',
    url: 'https://github.com/nandanpabolu/GuidePoint_NAN',
    description: 'Computer vision–powered navigation assistant designed to help visually impaired users traverse environments safely using real-time object detection.',
    skills: ['Python', 'OpenCV', 'TensorFlow'],
    color: 'var(--accent-lavender)',
    image: '/projects/guidepoint.png',
  },
  {
    name: 'TerraTrace',
    subtitle: 'AIS UTD',
    url: 'https://github.com/AI-Mentorship-S26/terratrace',
    description: 'Machine learning model for land-use forecasting that analyzes satellite and environmental data to predict future terrain changes.',
    skills: ['Python', 'TensorFlow', 'Scikit-learn'],
    color: 'var(--accent-peach)',
    image: '/projects/terratrace.png',
  },
  {
    name: 'QuantAnalyzer.AI',
    subtitle: 'HackAI @ UTD 2026',
    url: 'https://github.com/shresta-munikuntla/HackAI-S26',
    description: 'AI-powered quantitative analysis tool built at HackAI UTD that leverages LLMs to interpret financial data and surface actionable insights.',
    skills: ['Python', 'LangChain', 'React'],
    color: 'var(--accent-sky)',
    image: '/projects/quantanalyzerai.png',
  },
  {
    name: 'EndoTrack',
    subtitle: 'WeHack @ UTD 2026',
    url: 'https://github.com/sathwika21n/WeHack-2026',
    description: 'Health tracking application built at WeHack UTD to help users with endometriosis log symptoms, identify patterns, and share reports with healthcare providers.',
    skills: ['React', 'Node.js', 'MongoDB'],
    color: 'var(--accent-lemon)',
    image: '/projects/endotrack.png',
  },
  {
    name: 'LLM Hallucination Classifier',
    subtitle: 'Intro to ML – UTD',
    url: 'https://github.com/Dshah1003/CS4375-MLProject',
    description: 'ML classifier trained to detect and categorize hallucinations in large language model outputs, using NLP features and multiple classification algorithms.',
    skills: ['Python', 'Scikit-learn', 'NLP'],
    color: 'var(--accent-mint)',
    image: '/projects/llmclassifier.png',
  },
];

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        background: 'var(--card)',
        border: `1px solid ${hovered ? project.color + '40' : 'var(--border)'}`,
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? `0 20px 60px ${project.color}15` : 'none',
        cursor: 'pointer',
        animation: `fadeUp 0.5s ease both`,
        animationDelay: `${index * 0.08}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.open(project.url, '_blank')}
    >
{/* Cover image */}
      <div style={{
        height: '180px',
        overflow: 'hidden',
        position: 'relative',
        background: 'var(--bg3)',
      }}>
        <img
          src={project.image}
          alt={project.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
          }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(22,22,42,0.9) 0%, transparent 60%)',
        }} />
        {/* GitHub icon overlay on hover */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s',
          background: 'rgba(13,13,20,0.5)',
          backdropFilter: 'blur(4px)',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '0.6rem 1.2rem',
            borderRadius: '100px',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '0.85rem',
          }}>
            View on GitHub →
          </div>
        </div>
      </div>

      {/* Card content */}
      <div style={{ padding: '1.5rem' }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '1.15rem',
          letterSpacing: '-0.3px',
          marginBottom: '0.25rem',
          color: hovered ? project.color : 'var(--text)',
          transition: 'color 0.3s',
        }}>
          {project.name}
        </div>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '0.9rem',
        }}>
          {project.subtitle}
        </div>
        <p style={{
          fontSize: '0.88rem',
          color: 'rgba(240,240,245,0.7)',
          lineHeight: 1.65,
          marginBottom: '1.25rem',
        }}>
          {project.description}
        </p>
        {/* Skills */}
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {project.skills.map((skill, i) => (
            <span key={skill} style={{
              padding: '0.25rem 0.75rem',
              borderRadius: '100px',
              background: `${project.color}15`,
              border: `1px solid ${project.color}30`,
              color: project.color,
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.72rem',
              letterSpacing: '0.05em',
            }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '64px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
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
            My{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--accent-peach), var(--accent-lemon))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Projects</span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 400, maxWidth: '480px', lineHeight: 1.7 }}>
            A collection of things I've built — from hackathon sprints to semester-long research projects.
          </p>
          <a
            href="https://github.com/shresta-munikuntla"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '1.25rem',
              padding: '0.6rem 1.25rem',
              border: '1px solid var(--border)',
              borderRadius: '100px',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,181,167,0.4)';
              e.currentTarget.style.color = 'var(--accent-peach)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--text-muted)';
            }}
          >
            🐙 View all on GitHub
          </a>
        </div>

        {/* Projects grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 600px) {
          div[style*="padding: '4rem 2rem'"] { padding: 2.5rem 1.2rem !important; }
        }
      `}</style>
    </div>
  );
}
