"use client";
import { useState } from "react";
import Link from "next/link";

export default function Bouquets() {
  const [menuOpen, setMenuOpen] = useState(false);

  

  return (
    <main className="homepage-hero bouquet-page">
      {/* Header/Navbar */}
      <header className="homepage-header">
        <div className="logo">
          <span className="logo-accent">PINK</span>ORCHIDS
        </div>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen((v) => !v)}>
          <span className="menu-icon">☰</span>
        </button>
        <nav className={`nav-links${menuOpen ? " open" : ""}`}>
          <Link href="/">HOME</Link>
          <Link href="/our-story">OUR STORY</Link>
          <Link href="/bouquets" className="active">BOUQUETS</Link>
          <Link href="/blog">BLOG</Link>
          <Link href="/contact">CONTACT US</Link>
        </nav>
        <div className="header-actions"></div>
      </header>

      {/* Hero Section */}
      <section className="bouquet-hero-section">
        <div className="bouquet-hero-inner">
          <img src="/bouquet_images/bouquet_hero.png" alt="Bouquet Hero" className="bouquet-hero-img" />
          <h1 className="bouquet-hero-title">Our Beautiful Bouquets</h1>
          <p className="bouquet-hero-desc">Discover a curated selection of stunning bouquets, perfect for every occasion.</p>
        </div>
      </section>

      {/* Bouquets Gallery */}
      <section className="bouquet-gallery">
        <div className="bouquet-grid">
          {Array.from({ length: 36 }, (_, i) => {
            const num = i + 1;
            const src = `/bouquet_images/Designer (${num}).png`;
            return (
              <div className="bouquet-card" key={src}>
                <img src={src} alt={`Bouquet ${num}`} className="bouquet-img" />
                <button className="buy-btn" style={{marginTop: '1rem', width: '100%'}}>
                  Buy Now - $259
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
