"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 860;

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  // Close on Escape, and when resizing up to desktop
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className={open ? "header-open" : undefined}>
      <div className="container nav">
        <a
          className="brand"
          href="/"
          aria-label="Lavish Performance home"
          onClick={close}
        >
          <Image
            src="/images/logo.png"
            alt="Lavish Performance Logo"
            width={120}
            height={39}
            className="brand-logo"
            priority
          />
        </a>

        <button
          type="button"
          className={`menu-toggle${open ? " is-open" : ""}`}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-bar" />
          <span className="menu-bar" />
          <span className="menu-bar" />
        </button>

        <nav
          id="main-nav"
          className={`nav-links${open ? " open" : ""}`}
          aria-label="Main navigation"
        >

          <a href="/" onClick={close}> Home </a>
          <a href="/about" onClick={close}>About</a>
          <a href="#" onClick={close}> Offerings </a>
          <a href="#" onClick={close}>Academy</a>
                <a href="#" onClick={close}>Academy</a>
          <a className="pill" href="/contact" onClick={close}>Get Started</a>
        </nav>
      </div>
    </header>
  );
}
