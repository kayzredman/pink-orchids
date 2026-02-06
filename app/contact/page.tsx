"use client";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // WhatsApp link generator
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "233207388532";
    const text = encodeURIComponent(
      `Name: ${name}\nContact: ${contact}\nMessage: ${message}`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <main className="homepage-hero contact-page">
      {/* Header/Navbar */}
      <header className="homepage-header">
        <div className="logo">
          <span className="logo-accent">PINK</span>ORCHIDS
        </div>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen((v) => !v)}>
          <span className="menu-icon">☰</span>
        </button>
        <nav className={`nav-links${menuOpen ? " open" : ""}`}>
          <Link href="/" className="active">HOME</Link>
          <a href="#">OUR STORY</a>
          <a href="#">BOUQUETS</a>
          <a href="#">BLOG</a>
          <Link href="/contact">CONTACT US</Link>
        </nav>
        <div className="header-actions"></div>
      </header>

      {/* Contact Section */}
      <section className="contact-content">
        <div className="contact-left">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-desc">We&apos;d love to hear from you! Send us a message below and we&apos;ll get back to you soon.</p>
          <form className="contact-form" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="contact-input"
              required
            />
            <input
              type="text"
              placeholder="Your Contact (Whatsapp Phone Number)"
              value={contact}
              onChange={e => setContact(e.target.value)}
              className="contact-input"
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="contact-textarea"
              required
            />
            <button type="submit" className="contact-send-btn">Send via WhatsApp</button>
          </form>
        </div>
      </section>
    </main>
  );
}
