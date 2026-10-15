"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 860;

type DropdownName = "offerings" | "about" | null;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownName>(null);

  // Close mobile navigation and any open dropdown
  const close = useCallback(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, []);

  // Toggle a dropdown
  const toggleDropdown = useCallback((name: Exclude<DropdownName, null>) => {
    setOpenDropdown((current) => (current === name ? null : name));
  }, []);

  // Lock page scrolling while the mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  // Close navigation on Escape and when resizing to desktop
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    const onResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setOpen(false);
        setOpenDropdown(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [close]);

  return (
    <header className={open ? "header-open" : undefined}>
      <div className="container nav">
        {/* LOGO */}

        <a
          className="brand"
          href="/"
          aria-label="LAVI'SH Performance home"
          onClick={close}
        >
          <Image
            src="/images/logo.png"
            alt="LAVI'SH Performance"
            width={120}
            height={39}
            className="brand-logo"
            priority
          />
        </a>

        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          className={`menu-toggle${open ? " is-open" : ""}`}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => {
            setOpen((current) => !current);
            setOpenDropdown(null);
          }}
        >
          <span className="menu-bar" />
          <span className="menu-bar" />
          <span className="menu-bar" />
        </button>

        {/* MAIN NAVIGATION */}

        <nav
          id="main-nav"
          className={`nav-links${open ? " open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="/" onClick={close}>
            Home
          </a>

          {/* OFFERINGS DROPDOWN */}

          <div
            className={`nav-dropdown ${
              openDropdown === "offerings" ? "dropdown-open" : ""
            }`}
          >
            <button
              type="button"
              className="nav-dropdown-toggle"
              aria-expanded={openDropdown === "offerings"}
              aria-controls="offerings-menu"
              onClick={() => toggleDropdown("offerings")}
            >
              <span>Offerings</span>
              <span className="dropdown-chevron" aria-hidden="true" />
            </button>

            <div
              className="dropdown-menu"
              id="offerings-menu"
            >
              <a href="/personal-training" onClick={close}>
                Personal Training
              </a>

              <a href="/group-classes" onClick={close}>
                Group Classes
              </a>

              <a href="/trainers" onClick={close}>
                Trainers / Coaches
              </a>
            </div>
          </div>

          <a href="/academy" onClick={close}>
            Academy
          </a>

          <a href="/contact" onClick={close}>
            Contact Us
          </a>

          {/* ABOUT US DROPDOWN */}

          <div
            className={`nav-dropdown ${
              openDropdown === "about" ? "dropdown-open" : ""
            }`}
          >
            <button
              type="button"
              className="nav-dropdown-toggle"
              aria-expanded={openDropdown === "about"}
              aria-controls="about-menu"
              onClick={() => toggleDropdown("about")}
            >
              <span>About Us</span>
              <span className="dropdown-chevron" aria-hidden="true" />
            </button>

            <div className="dropdown-menu" id="about-menu">
              <a href="/about" onClick={close}>
                About Us
              </a>

              <a href="/blog" onClick={close}>
                Blog / Fitness Tips
              </a>

              <a href="/faqs" onClick={close}>
                FAQs
              </a>
            </div>
          </div>

          {/* GET STARTED */}

          <a className="pill" href="/contact" onClick={close}>
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}