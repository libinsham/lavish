import Image from "next/image";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Careers", href: "#programs" },
  { label: "Academy", href: "#programs" },
  { label: "Privacy Policy", href: "#community" },
  { label: "Terms and Conditions", href: "#community" },
  { label: "Terms of Use", href: "#community" },
  { label: "Payment & Cancellation Policy", href: "#community" },
  { label: "Cookie Policy", href: "#community" },
];

export default function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="footer-inner">
        <div className="footer-top-row">
          <a className="footer-logo-link" href="#home" aria-label="Lavish Performance home">
            <Image
              className="footer-logo-img"
              src="/images/logo.png"
              alt="Lavish Performance"
              width={150}
              height={49}
            />
          </a>

          <nav className="footer-nav" aria-label="Footer navigation">
            {links.map((l) => (
              <a key={l.label} href={l.href}>{l.label}</a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-downloads">
            <p className="footer-downloads-title">Download the app</p>

            <div className="footer-store-links">
              <a className="footer-store-badge" href="#" aria-label="Download on the App Store">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16.7 12.8c0-2 1.6-3 1.7-3.1-.9-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.4 0-2.7.8-3.4 2.1-1.5 2.6-.4 6.4 1.1 8.5.7 1 1.5 2.1 2.5 2.1 1 0 1.4-.7 2.7-.7s1.7.7 2.7.7 1.7-1 2.4-2.1c.8-1.1 1.1-2.2 1.1-2.2s-2.2-.9-2.3-3.7ZM14.8 6.8c.6-.8 1-1.8.9-2.8-.9 0-2 .6-2.7 1.4-.6.7-1 1.7-.9 2.7 1 .1 2-.5 2.7-1.3Z" />
                </svg>
                <span className="footer-store-copy">
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </span>
              </a>

              <a className="footer-store-badge" href="#" aria-label="Get it on Google Play">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3.6 2.7c-.4.3-.6.8-.6 1.5v15.6c0 .7.2 1.2.6 1.5L12 12 3.6 2.7Zm9.5 10.5-7.7 8.4c.4.1.9 0 1.4-.3l9.1-5.2-2.8-2.9Zm4-4.4-2.8-1.6-9.2-5.1c-.5-.3-1-.4-1.4-.3l8.3 8.9 5.1-1.9Zm3.1 2.3-2.7-1.6-3.2 2.1 3 2.8 2.9-1.7c1-.6 1-1.2 0-1.6Z" />
                </svg>
                <span className="footer-store-copy">
                  <small>GET IT ON</small>
                  <strong>Google Play</strong>
                </span>
              </a>
            </div>

            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Lavish Performance
            </p>
          </div>

          <div className="footer-social-area">
            <div className="footer-socials" aria-label="Social media">
              <a className="footer-social-link" href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.7" cy="6.7" r="1.2" fill="currentColor" />
                </svg>
              </a>

              <a
                className="footer-social-link"
                href="https://www.linkedin.com/company/lavish-performance/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M5.1 8.7H2.2V21h2.9V8.7ZM3.7 3a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM21.8 13.9c0-3.7-2-5.5-4.7-5.5-2.2 0-3.2 1.2-3.8 2.1V8.7h-2.9V21h2.9v-6.1c0-1.6.3-3.2 2.3-3.2s2 1.9 2 3.3V21h2.9l1.3-7.1Z" />
                </svg>
              </a>
            </div>
            <p className="footer-tagline">Train smarter. Live stronger.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
