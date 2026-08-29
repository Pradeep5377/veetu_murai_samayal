import React from "react";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// =============================
// UPDATE THESE DETAILS
// =============================
const BUSINESS_NAME = "வீட்டு முறை சமையல்";
const LOCATION = "குள்ளம்பாளையம், கோபி";

const PHONE_1 = "9629184880";
const PHONE_2 = "9894812750";

// Replace these with your final WhatsApp links.
// Format: https://wa.me/919629184880
const WHATSAPP_1 = "https://wa.me/919629184880";
const WHATSAPP_2 = "https://wa.me/919894812750";

// Optional: replace with your Google Maps location link.
const MAPS_LINK = "https://maps.google.com/?q=Kullampalayam%2C%20Gobi";

function App() {
  return (
    <main>
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand-mark" aria-hidden="true">♥</div>
          <div>
            <p className="eyebrow">ஆர்டரின் பேரில்</p>
            <h1>{BUSINESS_NAME}</h1>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-content">
          <div className="location-pill">📍 {LOCATION}</div>

          <p className="kicker">வீட்டு சுவை • அன்பின் சுவை</p>

          <h2>
            வீட்டு முறையில்
            <br />
            <span>சைவ மற்றும் அசைவ</span>
            <br />
            உணவுகள்
          </h2>

          <p className="hero-copy">
            சிறந்த முறையில், சுத்தமாகவும் சுவையாகவும்
            <br className="desktop-only" />
            ஆர்டரின் பேரில் செய்து தரப்படும்.
          </p>

          <div className="actions">
            <a className="button primary" href={WHATSAPP_1} target="_blank" rel="noreferrer">
              <span>💬</span> WhatsApp மூலம் ஆர்டர்
            </a>
            <a className="button secondary" href={`tel:${PHONE_1}`}>
              <span>📞</span> அழைத்து ஆர்டர் செய்ய
            </a>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <p className="section-label">எங்களின் சிறப்புகள்</p>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="icon">🌿</div>
              <h3>சுத்தமானது</h3>
              <p>தரமான பொருட்களைப் பயன்படுத்தி சுத்தமாகத் தயாரிக்கப்படும்.</p>
            </article>

            <article className="feature-card">
              <div className="icon">🏠</div>
              <h3>வீட்டு முறையில்</h3>
              <p>வீட்டு சமையலின் அன்பும் சுவையும் மாறாமல் தயாரிக்கப்படும்.</p>
            </article>

            <article className="feature-card">
              <div className="icon">🍲</div>
              <h3>சுவையான உணவு</h3>
              <p>உங்கள் விருப்பத்திற்கேற்ப சுவையாக செய்து தரப்படும்.</p>
            </article>

            <article className="feature-card">
              <div className="icon">❤️</div>
              <h3>அன்புடன்</h3>
              <p>ஒவ்வொரு ஆர்டரும் அக்கறையுடன் தயாரிக்கப்படும்.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="order-section">
        <div className="container order-card">
          <div>
            <p className="section-label">ஆர்டர் செய்ய</p>
            <h2>இன்றே தொடர்பு கொள்ளுங்கள்</h2>
            <p>உங்கள் தேவையை WhatsApp அல்லது தொலைபேசி மூலம் தெரிவிக்கலாம்.</p>
          </div>

          <div className="contact-list">
            <a href={WHATSAPP_1} target="_blank" rel="noreferrer">
              <span>WhatsApp</span>
              <strong>{PHONE_1}</strong>
            </a>
            <a href={WHATSAPP_2} target="_blank" rel="noreferrer">
              <span>WhatsApp</span>
              <strong>{PHONE_2}</strong>
            </a>
            <a href={MAPS_LINK} target="_blank" rel="noreferrer">
              <span>📍 இடம்</span>
              <strong>{LOCATION}</strong>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <div>
            <strong>{BUSINESS_NAME}</strong>
            <p>{LOCATION}</p>
          </div>
          <p>வீட்டு சுவை... அன்பின் சுவை...</p>
        </div>
      </footer>
      <Analytics />
      <SpeedInsights />
    </main>
  );
}

export default App;