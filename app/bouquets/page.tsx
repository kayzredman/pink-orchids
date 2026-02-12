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
          {[
            "PV01 - GHS6500.png",
            "PV02 - GHS1800.png",
            "PV03 - GHS2000.png",
            "PV04 - GHS600.png",
            "PV05 - GHS1000.png",
            "PV06 - GHS 800.png",
            "PV07 - GHS600.png",
            "PV08 - GHS2200.png",
            "PV09 - GHS2000.png",
            "PV10 - GHS7000.png",
            "PV11 - GHS600.png",
            "PV12 - GHS1400.png",
            "PV13 - GHS1000.png",
            "PV14 - GHS600.png",
            "PV15 - GHS2300.png",
            "PV16 - GHS23000.png",
            "PV17 - GHS1600.png",
            "PV18 - GHS1700.png",
            "PV19 - GHS2000.png",
            "PV20 - GHS1800.png",
            "PV21 - GHS1500.png",
            "PV22 - GHS1800.png",
            "PV23 - GHS1800.png",
            "PV24 - GHS2000.png",
            "PV25. - GHS2500.png",
            "PV26 - GHS3500.png",
            "PV27 - GHS2200.png",
            "PV28 - GHS2200.png",
            "PV29 - GHS2500.png",
            "PV30 - GHS3000.png",
            "PV31 - GHS1500.png",
            "PV32 - GHS500.png",
            "PV33 - GHS1500.png"
          ].map((file, i) => {
            const src = `/bouquet_images/${file}`;
            // Extract price from filename
            const priceMatch = file.match(/GHS\s?([\d]+)/i);
            const price = priceMatch ? `GHS${priceMatch[1]}` : "GHS";
            return (
              <div className="bouquet-card" key={src}>
                <img src={src} alt={`Bouquet ${i + 1}`} className="bouquet-img" />
                <a
                  href={`/order?image=${encodeURIComponent(src)}&price=${price}`}
                  className="buy-btn"
                  style={{marginTop: '1rem', width: '100%', textAlign: 'center', display: 'block'}}
                >
                  Buy Now - {price}
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
