"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="homepage-hero">
      {/* Header/Navbar */}
      <header className="homepage-header">
        <div className="logo">
          <span className="logo-accent">PINK</span>ORCHIDS
        </div>
        <div style={{ flex: 1 }} />
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen((v) => !v)}>
          <span className="menu-icon">☰</span>
        </button>
        <nav className={`nav-links${menuOpen ? " open" : ""}`}>
          <Link href="/" className="active">HOME</Link>
          <a href="#">OUR STORY</a>
          <Link href="/bouquets">BOUQUETS</Link>
           <Link href="/blog">BLOG</Link>
          <Link href="/contact">CONTACT US</Link>
        </nav>
        <div className="header-actions"></div>
      </header>

      {/* Hero Section */}
      <section className="hero-content">
        <div className="hero-left">
          <h1 className="hero-title">
            Send <span className="highlight">flowers</span> like you mean it.
          </h1>
          <p className="hero-desc">
            Where flowers are our inspiration to create lasting memories. Whatever the occasion, our flowers will make it special.
          </p>
          <div className="signature">Cathrine</div>
        </div>
        <div className="hero-right">
          {/* Placeholder for cactus image */}
          <Image
            src="/cactus-hero.png"
            alt="Cactus with flower"
            className="hero-image"
            width={340}
            height={340}
            style={{ objectFit: "cover", borderRadius: "1.5rem" }}
          />
        </div>
        {/* Arrows */}
        <button className="arrow left" aria-label="Previous">
          <span>&larr;</span>
        </button>
        <button className="arrow right" aria-label="Next">
          <span>&rarr;</span>
        </button>
        {/* Side Buttons */}
        <div className="side-buttons">
          <Link href="/contact" className="related-btn">CONTACT US</Link>
          <button className="buy-btn">BUY NOW</button>
        </div>
      </section>
    </main>
  );
}
