import { useEffect, useState } from 'react';

const galleryImages = [
  { src: '/assets/images/OIP (1).jpeg', alt: 'Aari work blouse design 1', title: 'Bridal Peacock Aari', text: 'Luxury zari and stone craftsmanship for unforgettable occasions.' },
  { src: '/assets/images/OIP (2).jpeg', alt: 'Aari work blouse design 2', title: 'Everyday Elegance', text: 'Minimal yet graceful detailing designed for refined daily wear.' },
  { src: '/assets/images/OIP (3).jpeg', alt: 'Machine embroidery blouse design 3', title: 'Floral Precision', text: 'Intricate computerized embroidery with a polished couture finish.' },
  { src: '/assets/images/OIP (4).jpeg', alt: 'Designer sudithar design', title: 'Custom Sudithar', text: 'Tailored silhouettes with a premium, flattering drape.' },
  { src: '/assets/images/OIP (5).jpeg', alt: 'Aari work blouse design 5', title: 'Royal Border Work', text: 'Traditional artistry blended with a modern high-fashion edge.' },
  { src: '/assets/images/OIP.jpeg', alt: 'Embroidery detail', title: 'Luxury Fabric Finish', text: 'Meticulous detailing that transforms every stitch into a statement.' },
];

const services = [
  {
    title: 'Design Consultation',
    text: 'A personalized design conversation to understand your fabric, occasion, and vision.',
  },
  {
    title: 'Measurement & Pattern',
    text: 'Precision-driven measurements and custom patterning for a couture-like fit.',
  },
  {
    title: 'Handcrafted Aari Work',
    text: 'Traditional hand embroidery elevated with zari, stones, and rich textures.',
  },
  {
    title: 'Machine Embroidery',
    text: 'Sharp, detailed, and efficient embroidery for complex motifs and timely delivery.',
  },
  {
    title: 'Final Stitching & Fitting',
    text: 'Beautiful finishing touches and a final fitting to ensure every detail feels impeccable.',
  },
];

const seoSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Priya Fashion',
  image: 'https://example.com/assets/images/slide1.jpg',
  description:
    'Priya Fashion offers custom tailoring, bridal Aari work, machine embroidery, and premium boutique design services in Tirunelveli.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'KTC Nagar',
    addressLocality: 'Tirunelveli',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  telephone: '+91-6383848127',
  email: 'saravanan.dev@gmail.com',
  areaServed: 'Tirunelveli',
  url: 'https://priyafashion.example.com',
};

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [waOffset, setWaOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || 0;
      setShowBackToTop(scrollY > 260);
      setWaOffset(Math.min(scrollY * 0.18, 64));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = (
    <>
      <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
      <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
      <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
      <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
    </>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }} />
      <header className="topbar">
        <div className="container nav-wrap">
          <div>
            <p className="brand-name">Priya Fashion</p>
            <span className="brand-tag">KTC Nagar, Tirunelveli</span>
          </div>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className="main-nav" aria-label="Main navigation">
            {navLinks}
          </nav>
        </div>
      </header>

      <div
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      <aside className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-label="Mobile menu">
        <div className="mobile-drawer-header">
          <p>Priya Fashion</p>
          <button type="button" className="mobile-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
            ×
          </button>
        </div>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks}
        </nav>
      </aside>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="eyebrow">Luxury tailoring • bespoke embroidery</span>
              <h1>Elegance in Every Stitch.</h1>
              <p>
                Crafted for moments that deserve beauty, confidence, and impeccable finishing — from
                bridal aari work to custom modern silhouettes and personalized occasionwear.
              </p>
              <div className="hero-actions">
                <a href="#gallery" className="primary-btn">Explore Collection</a>
                <a href="#contact" className="secondary-btn">Book a Fitting</a>
              </div>
              <div className="hero-stats">
                <div>
                  <strong>10+</strong>
                  <span>Years of artistry</span>
                </div>
                <div>
                  <strong>500+</strong>
                  <span>Custom pieces</span>
                </div>
                <div>
                  <strong>24h</strong>
                  <span>Quick response</span>
                </div>
              </div>
            </div>
            <div className="hero-panel">
              <div className="mini-card premium-card">
                <span className="mini-label">Signature</span>
                <h3>Handcrafted Aari Luxury</h3>
                <p>Bridal-ready detailing with depth, texture, and couture finesse.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow accent">Signature collection</span>
              <h2>Modern Couture, Timeless Detail</h2>
            </div>
            <div className="gallery-grid">
              {galleryImages.map((image) => (
                <article
                  key={image.title}
                  className="gallery-card"
                  onClick={() => setSelectedImage(image)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setSelectedImage(image);
                    }
                  }}
                  aria-label={`Open ${image.title}`}
                >
                  <img src={image.src} alt={image.alt} />
                  <div className="card-content">
                    <h3>{image.title}</h3>
                    <p>{image.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="section-action">
              <a href="/gallery.html" className="primary-btn">View Full Portfolio</a>
            </div>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow accent">Crafted process</span>
              <h2>Tailoring & Embroidery Services</h2>
            </div>
            <p className="services-intro">
              We balance traditional artistry with modern precision to create garments that feel deeply
              personal, beautifully finished, and effortlessly elevated.
            </p>
            <div className="service-grid">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <div className="service-icon">✦</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="eyebrow accent">Private consultation</span>
              <h2>Design a look that feels uniquely yours.</h2>
              <p>
                From bridal statement pieces to bespoke evening silhouettes, our studio helps you create
                clothing that reflects your personality, elegance, and occasion.
              </p>

              <div className="contact-list">
                <div className="contact-item">
                  <span>📍</span>
                  <p>Priya Fashion, KTC Nagar, Tirunelveli</p>
                </div>
                <div className="contact-item">
                  <span>📞</span>
                  <p>
                    <a href="tel:+916383848127">+91-6383848127</a>
                  </p>
                </div>
                <div className="contact-item">
                  <span>📧</span>
                  <p>
                    <a href="mailto:saravanan.dev@gmail.com">saravanan.dev@gmail.com</a>
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/916383848127?text=Hello%20Priya%20Fashion,%20I%20am%20interested%20in%20a%20custom%20Aari%20blouse%20or%20Sudithar%20design."
                className="whatsapp-btn"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
              </a>
            </div>

            <a
              href="https://wa.me/916383848127?text=Hello%20Priya%20Fashion,%20I%20am%20interested%20in%20a%20custom%20Aari%20blouse%20or%20Sudithar%20design."
              className="floating-whatsapp"
              style={{ transform: `translateY(-${waOffset}px)` }}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M16.02 2.7C8.4 2.7 2.2 8.7 2.2 16.14c0 2.69.78 5.22 2.13 7.45L2 29.7l6.35-2.1A13.37 13.37 0 0 0 16.02 29.6c7.62 0 13.82-6 13.82-13.46S23.64 2.7 16.02 2.7Zm0 24.08c-2.1 0-4.16-.57-5.95-1.66l-.43-.25-3.76 1.25 1.27-3.67-.28-.45a11 11 0 0 1-1.73-5.95c0-6.1 4.96-11.06 11.08-11.06 6.12 0 11.08 4.96 11.08 11.06 0 6.1-4.96 11.06-11.08 11.06Zm6.07-8.17c-.33-.17-1.96-.96-2.27-1.07-.3-.11-.52-.17-.74.17-.21.33-.82 1.07-1 1.29-.18.21-.37.23-.7.08-.33-.17-1.4-.52-2.66-1.66-1-.9-1.69-2.02-1.89-2.36-.2-.33-.02-.52.15-.68.15-.16.33-.38.5-.57.17-.18.22-.32.33-.53.11-.21.06-.39-.02-.57-.08-.17-.74-1.77-1.01-2.43-.27-.66-.54-.57-.74-.58l-.63-.01c-.21 0-.56.08-.85.39-.29.3-1.11 1.08-1.11 2.64s1.14 3.05 1.3 3.27c.16.22 2.23 3.39 5.41 4.75.76.33 1.35.52 1.81.67.75.24 1.44.21 1.98.13.61-.09 1.96-.8 2.24-1.58.28-.77.28-1.44.2-1.58-.08-.14-.3-.22-.63-.39Z"/>
              </svg>
            </a>

            <div className="map-card">
              <h3>Visit Our Studio</h3>
              <iframe
                title="Priya Fashion location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223.05637772530912!2d77.78235655514577!3d8.713839030651709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b040dce335826d9%3A0xf1ce70bf080b1b!2sPQ7M%2BF2J%2C%20138%2C%20National%20Highway%2C%20VOC%20Nagar%2C%20Tirunelveli%2C%20Tamil%20Nadu%20627011!5e1!3m2!1sen!2sin!4v1764591875512!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p>Schedule a private appointment and experience a personalized fitting session.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© 2025 Priya Fashion. All rights reserved.</p>
        </div>
      </footer>

      {showBackToTop && (
        <a href="#home" className="back-to-top" aria-label="Back to top">
          ↑
        </a>
      )}

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)} role="dialog" aria-modal="true">
          <div className="image-modal-content" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)} aria-label="Close preview">
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="modal-copy">
              <span className="modal-tag">Featured Design</span>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.text}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
