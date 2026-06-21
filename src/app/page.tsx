'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, MapPin, Users, Globe, Camera, ArrowRight, Star, Heart, MessageSquare } from 'lucide-react';
import './landing.css';

// Social Icons
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const NAV_LINKS = ['Home', 'Explore', 'About Us', 'Contact'];

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setScrolled(scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Fallback for body scrolling
    document.body.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="landing-root">
      {/* ── Navbar ── */}
      <nav className={`landing-nav ${scrolled ? 'scrolled' : ''}`}>
        <Link href="/" className="landing-logo" style={{ textDecoration: 'none' }}>
          <h1 style={{
            fontFamily: '"Gilroy", sans-serif',
            fontSize: '1.75rem',
            fontWeight: 500,
            color: 'white',
            margin: 0,
            transition: 'color 0.3s'
          }}>
            Tripnest
          </h1>
        </Link>

        <ul className="landing-navlinks">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <Link href={l === 'Home' ? '/' : l === 'Explore' ? '/dashboard' : '#'} className="landing-navlink">
                {l}
              </Link>
            </li>
          ))}
        </ul>

        <div className="landing-nav-right">
          <button className="landing-search-btn" aria-label="Search"><Search size={18} /></button>
          <a href="#" className="landing-icon-btn" aria-label="Instagram"><InstagramIcon /></a>
          <a href="#" className="landing-icon-btn" aria-label="Twitter"><TwitterIcon /></a>
          <a href="#" className="landing-icon-btn" aria-label="Facebook"><FacebookIcon /></a>
        </div>
      </nav>

      {/* ── Hero Section (100vh) ── */}
      <section className="hero-section">
        <div className="hero-bg">
          {/* User's new custom background video */}
          <video autoPlay loop muted playsInline src="/hero-bg-2.mp4" />
        </div>
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="hero-label">Discover The World</span>
          <h1 className="hero-h1">Travel Better,<br />Together.</h1>
          <p className="hero-desc">
            Plan trips with friends, organize memories, and discover amazing destinations around the globe.
          </p>
          <div className="hero-buttons">
            <Link href="/dashboard" className="btn-primary">Start Your Journey</Link>
            <Link href="#explore" className="btn-secondary">Explore Destinations</Link>
          </div>
        </div>
      </section>

      {/* ── 1. Popular Destinations ── */}
      <section id="explore" className="section">
        <div className="section-header">
          <h2 className="section-title">Popular Destinations</h2>
          <p className="section-subtitle">Explore the world's most sought-after locations for your next unforgettable adventure.</p>
        </div>
        <div className="destinations-grid">
          {[
            { name: 'Bali', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80' },
            { name: 'Santorini', img: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800&q=80' },
            { name: 'Maldives', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80' },
            { name: 'Switzerland', img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80' },
            { name: 'Tokyo', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80' },
            { name: 'Dubai', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80' },
          ].map((dest) => (
            <div key={dest.name} className="destination-card">
              <img src={dest.img} alt={dest.name} loading="lazy" />
              <div className="destination-overlay">
                <h3 className="destination-name">{dest.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. Why TripNest ── */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Why TripNest</h2>
          <p className="section-subtitle">Everything you need to plan the perfect group trip, all in one place.</p>
        </div>
        <div className="why-grid">
          <div className="why-item">
            <div className="why-icon"><Users size={28} /></div>
            <h3 className="why-title">Plan Together</h3>
            <p className="why-desc">Invite your friends, vote on itineraries, and split expenses seamlessly.</p>
          </div>
          <div className="why-item">
            <div className="why-icon"><Camera size={28} /></div>
            <h3 className="why-title">Share Memories</h3>
            <p className="why-desc">Create shared photo albums so everyone has access to the trip's best moments.</p>
          </div>
          <div className="why-item">
            <div className="why-icon"><Globe size={28} /></div>
            <h3 className="why-title">Discover Places</h3>
            <p className="why-desc">Find hidden gems and highly-rated local experiences curated by the community.</p>
          </div>
        </div>
      </section>

      {/* ── 3. Travel Memories Gallery ── */}
      <section className="gallery-section">
        <div className="section-header">
          <h2 className="section-title">Travel Memories</h2>
          <p className="section-subtitle">A glimpse into the amazing journeys of our global community.</p>
        </div>
        <div className="gallery-grid">
          {[
            'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=600&q=80',
          ].map((src, i) => (
            <div key={i} className="gallery-item">
              <img src={src} alt="Travel memory" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Community Section ── */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Community Driven</h2>
          <p className="section-subtitle">Connect with fellow travelers and unlock a world of local insights.</p>
        </div>
        <div className="why-grid">
          <div className="why-item">
            <div className="why-icon" style={{ background: '#38bdf8' }}><MessageSquare size={28} /></div>
            <h3 className="why-title">Travel Stories</h3>
            <p className="why-desc">Read inspiring tales from real trips around the globe.</p>
          </div>
          <div className="why-item">
            <div className="why-icon" style={{ background: '#10b981' }}><Users size={28} /></div>
            <h3 className="why-title">Discussions</h3>
            <p className="why-desc">Join active forums to ask questions and share advice.</p>
          </div>
          <div className="why-item">
            <div className="why-icon" style={{ background: '#f59e0b' }}><MapPin size={28} /></div>
            <h3 className="why-title">Local Guides</h3>
            <p className="why-desc">Discover exclusive itineraries crafted by passionate locals.</p>
          </div>
        </div>
      </section>

      {/* ── 5. Statistics ── */}
      <section className="stats-section">
        <div>
          <div className="stat-number">10k+</div>
          <div className="stat-label">Trips Created</div>
        </div>
        <div>
          <div className="stat-number">50k+</div>
          <div className="stat-label">Travelers</div>
        </div>
        <div>
          <div className="stat-number">120+</div>
          <div className="stat-label">Countries Explored</div>
        </div>
        <div>
          <div className="stat-number">1M+</div>
          <div className="stat-label">Photos Shared</div>
        </div>
      </section>

      {/* ── 6. Testimonials ── */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Loved by Travelers</h2>
          <p className="section-subtitle">See what our community has to say about their TripNest experience.</p>
        </div>
        <div className="why-grid">
          <div className="why-item" style={{ background: '#fff', border: '1px solid #e5e7eb', textAlign: 'left' }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', color: '#f59e0b' }}>
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>
            <p className="why-desc" style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>"TripNest made organizing our Europe trip so effortless. No more chaotic group chats!"</p>
            <div style={{ fontWeight: 600 }}>— Sarah J.</div>
          </div>
          <div className="why-item" style={{ background: '#fff', border: '1px solid #e5e7eb', textAlign: 'left' }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', color: '#f59e0b' }}>
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>
            <p className="why-desc" style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>"The ability to share expenses and vote on itineraries saved our friendship."</p>
            <div style={{ fontWeight: 600 }}>— Michael T.</div>
          </div>
          <div className="why-item" style={{ background: '#fff', border: '1px solid #e5e7eb', textAlign: 'left' }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', color: '#f59e0b' }}>
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>
            <p className="why-desc" style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>"I discovered so many hidden gems in Kyoto thanks to the local guides on TripNest."</p>
            <div style={{ fontWeight: 600 }}>— Emma L.</div>
          </div>
        </div>
      </section>

      {/* ── 7. Final CTA ── */}
      <section className="section" style={{ background: '#111827', color: '#fff', textAlign: 'center', borderRadius: '32px', margin: '0 2rem 4rem 2rem', padding: '6rem 2rem' }}>
        <h2 className="hero-h1" style={{ fontSize: '3.5rem' }}>Ready to explore?</h2>
        <p className="hero-desc" style={{ margin: '0 auto 3rem auto' }}>Join thousands of travelers planning their dream trips today.</p>
        <Link href="/dashboard" className="btn-primary" style={{ display: 'inline-block' }}>Get Started for Free</Link>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>TripNest</h3>
            <p>Your ultimate companion for planning, experiencing, and remembering group travel.</p>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Travel Guides</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: 'center', color: '#9ca3af', paddingTop: '2rem', borderTop: '1px solid #e5e7eb' }}>
          &copy; {new Date().getFullYear()} TripNest. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
