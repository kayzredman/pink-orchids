"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";


function OrderSection() {
  const searchParams = useSearchParams();
  const image = searchParams.get("image") || "";
  const price = searchParams.get("price") || "$259";

  const [customerName, setCustomerName] = useState("");
  const [customerContact, setCustomerContact] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientContact, setRecipientContact] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [note, setNote] = useState("");

  return (
    <section className="order-section">
      <div className="order-columns">
        {/* Left column: Flower image and price */}
        <div className="order-col-left">
          <div className="order-flower">
            <img src={image} alt="Bouquet" className="order-flower-img" />
            <div className="order-flower-price" style={{ textAlign: 'center', width: '100%' }}>{price}</div>
          </div>
        </div>
        {/* Right column: Form fields */}
        <div className="order-col-right">
          <div className="order-form-section">
            <form
              className="order-form order-form-grid"
              onSubmit={e => {
                e.preventDefault();
                const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
                const imageUrl = image.startsWith("http") ? image : siteUrl + image;
                // Extract code and price from image filename
                let code = "";
                let priceValue = price;
                const match = image.match(/\/bouquet_images\/(PV\d+)[^\d]*(\d+)/i);
                if (match) {
                  code = match[1];
                  priceValue = match[2];
                }
                // Format message for WhatsApp, exclude special characters
                function clean(str) {
                  return String(str).replace(/[^\w\s\d\-\.:]/g, "").trim();
                }
                const msg =
                  `Order Details\n` +
                  `Code: ${clean(code)}\n` +
                  `Price: ${clean(priceValue)}\n` +
                  `Your Name: ${clean(customerName)}\n` +
                  `Your Contact: ${clean(customerContact)}\n` +
                  `Recipient Name: ${clean(recipientName)}\n` +
                  `Recipient Contact: ${clean(recipientContact)}\n` +
                  `Delivery Address: ${clean(deliveryAddress)}\n` +
                  `Card Note: ${clean(note)}`;
                const whatsappNumber = "233203364755";
                window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
              }}
            >
              <div className="order-form-grid-row">
                <div className="order-form-grid-col">
                  <label className="order-label order-label-tight" htmlFor="customerName">Your Name</label>
                  <input
                    id="customerName"
                    type="text"
                    placeholder="Enter your name"
                    value={customerName}
                    onChange={e => setCustomerName(e.target.value)}
                    className="order-input order-input-tight"
                    required
                  />
                </div>
                <div className="order-form-grid-col">
                  <label className="order-label order-label-tight" htmlFor="customerContact">Your Contact</label>
                  <input
                    id="customerContact"
                    type="text"
                    placeholder="Enter your contact (phone/email)"
                    value={customerContact}
                    onChange={e => setCustomerContact(e.target.value)}
                    className="order-input order-input-tight"
                    required
                  />
                </div>
              </div>
              <div className="order-form-grid-row">
                <div className="order-form-grid-col">
                  <label className="order-label order-label-tight" htmlFor="recipientName">Recipient&apos;s Name</label>
                  <input
                    id="recipientName"
                    type="text"
                    placeholder="Enter recipient&apos;s name"
                    value={recipientName}
                    onChange={e => setRecipientName(e.target.value)}
                    className="order-input order-input-tight"
                    required
                  />
                </div>
                <div className="order-form-grid-col">
                  <label className="order-label order-label-tight" htmlFor="recipientContact">Recipient&apos;s Contact</label>
                  <input
                    id="recipientContact"
                    type="text"
                    placeholder="Enter recipient&apos;s contact (phone/email)"
                    value={recipientContact}
                    onChange={e => setRecipientContact(e.target.value)}
                    className="order-input order-input-tight"
                    required
                  />
                </div>
              </div>
              <div className="order-form-grid-row">
                <div className="order-form-grid-col">
                  <label className="order-label order-label-tight" htmlFor="deliveryAddress">Delivery Address</label>
                  <input
                    id="deliveryAddress"
                    type="text"
                    placeholder="Enter delivery address"
                    value={deliveryAddress}
                    onChange={e => setDeliveryAddress(e.target.value)}
                    className="order-input order-input-tight"
                    required
                  />
                </div>
                <div className="order-form-grid-col">
                  <label className="order-label order-label-tight" htmlFor="note">Card Note</label>
                  <textarea
                    id="note"
                    placeholder="Write your preferred note for the card"
                    value={note}
                    onChange={e => setNote(e.target.value)}
                    className="order-textarea order-input-tight"
                  />
                </div>
              </div>
              <button type="submit" className="order-btn">Place Order</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function OrderPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="order-page">
      {/* Menu Bar */}
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
      <Suspense fallback={null}>
        <OrderSection />
      </Suspense>
    </main>
  );
}
