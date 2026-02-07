"use client";
import { useState } from "react";
import Link from "next/link";

export default function Blog() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <main className="homepage-hero blog-page">
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
      </main>
  );
}