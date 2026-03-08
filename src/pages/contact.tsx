import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import ExtLink from '../components/ext-link'
import Link from 'next/link'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'

export default function Contact() {
  const contacts = [
    {
      title: 'X / Twitter',
      label: '@sewprotocol',
      link: 'https://x.com/sewprotocol',
      Icon: Twitter,
    },
    {
      title: 'GitHub',
      label: 'Sew-Protocol',
      link: 'https://github.com/Sew-Protocol',
      Icon: GitHub,
    },
    {
      title: 'Email',
      label: 'info@sewprotocol.com',
      link: 'mailto:info@sewprotocol.com',
      Icon: Envelope,
    },
  ]

  return (
    <>
      <Header titlePre="Contact" />
      <div className={sharedStyles.layout}>
        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          className="hero"
          style={{
            backgroundImage: "url('/images/needle-threads.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
          }}
        >
          <div className="hero-inner">
            <div className="hero-text">
              <span className="hero-eyebrow">Connect with us</span>
              <h1>Contact</h1>
              <h2 className="tagline">
                Get in touch with the Sew Protocol team
              </h2>
              <p className="description">
                Have questions about integration, governance, or the protocol
                roadmap? Reach out through any of the channels below.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. CONTACT GRID ─────────────────────────────────────────────── */}
        <section className="content-section">
          <div className="guarantees-grid">
            {contacts.map(({ title, label, link, Icon }) => (
              <ExtLink key={title} href={link} className="contact-card-link">
                <div className="guarantee-card fabric-panel stitched">
                  <div className="contact-header">
                    <Icon height={24} width={24} />
                    <h4>{title}</h4>
                  </div>
                  <p className="contact-label">{label}</p>
                </div>
              </ExtLink>
            ))}
          </div>
        </section>

        {/* ── 3. RESOURCES ────────────────────────────────────────────────── */}
        <section className="abstract-band">
          <div className="abstract-band-inner">
            <h3>Resources</h3>
            <p>
              Before reaching out, you might find what you're looking for in our
              documentation:
            </p>
            <div className="principles-grid">
              <div className="principle seam-accent">
                <h4>Documentation</h4>
                <p>
                  Full technical reference and integration guides.{' '}
                  <Link href="/docs">View Docs →</Link>
                </p>
              </div>
              <div className="principle seam-accent">
                <h4>FAQ</h4>
                <p>
                  Answers to common questions about the protocol.{' '}
                  <Link href="/faq">Read FAQ →</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. FINAL CTA ────────────────────────────────────────────────── */}
        <section
          className="section-breakout cta-breakout"
          style={{
            backgroundImage: "url('/images/ancient-sewing-machine.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="breakout-inner cta-inner">
            <h3>Ready to build?</h3>
            <p>
              Explore our technical roadmap, token economics, and governance
              trajectory.
            </p>
            <div className="cta-btns">
              <Link href="/developer" className="cta-btn primary">
                Developer Guide
              </Link>
              <Link href="/governance" className="cta-btn">
                Governance
              </Link>
            </div>
          </div>
        </section>

        <section className="page-meta">
          <p>Last updated: February 2026</p>
        </section>
      </div>

      <style jsx>{`
        .tagline {
          font-size: 1.15rem;
          font-weight: 400;
          color: var(--accents-2);
          margin: 0 0 1.25rem;
          line-height: 1.5;
        }
        .description {
          font-size: 0.92rem;
          color: var(--accents-3);
          margin: 0 0 1.5rem;
          line-height: 1.75;
          max-width: 480px;
        }
        .content-section {
          margin: 0 auto;
          max-width: 800px;
          padding: 4rem 2rem;
        }
        .contact-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
          color: var(--primary);
        }
        .contact-header h4 {
          margin: 0;
        }
        .contact-label {
          font-size: 0.9rem;
          color: var(--accents-2);
          margin: 0;
        }
        :global(.contact-card-link) {
          text-decoration: none;
          transition: transform 0.2s;
        }
        :global(.contact-card-link:hover) {
          transform: translateY(-2px);
        }

        .page-meta {
          text-align: center;
          padding: 3rem 2rem;
          color: var(--accents-3);
          font-size: 0.85rem;
        }

        /* ── Shared Grids ── */
        .guarantees-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-top: 1.75rem;
        }
        .guarantee-card {
          padding: 1.25rem 1.5rem;
        }
        .guarantee-card h4 {
          font-size: 0.95rem;
          font-weight: 700;
        }
        .principles-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 2rem;
        }
        .principle {
          padding: 1rem;
        }
        .cta-inner {
          text-align: center;
        }
        .cta-inner h3 {
          font-size: 2.2rem;
          font-weight: 900;
          margin: 0 0 0.75rem 0;
          letter-spacing: -0.04em;
          color: #fff;
        }
        .cta-inner p {
          font-size: 1rem;
          color: var(--accents-2);
          max-width: 500px;
          margin: 0 auto 2.5rem;
          line-height: 1.65;
        }

        @media (max-width: 700px) {
          .guarantees-grid,
          .principles-grid {
            grid-template-columns: 1fr;
          }
          .cta-inner h3 {
            font-size: 1.65rem;
          }
        }
      `}</style>
    </>
  )
}
