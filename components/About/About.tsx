"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./About.module.css";

const philosophy = [
  { title: "Assess", icon: "scan" },
  { title: "Strategize", icon: "target" },
  { title: "Assess", icon: "activity" },
  { title: "Strategize", icon: "route" },
  { title: "Assess", icon: "heart" },
  { title: "Strategize", icon: "trending" },
];

function PhilosophyIcon({ name }: { name: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "scan":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3" />
          <path d="M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 10v4m-2-2h4" />
        </svg>
      );

    case "target":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" />
        </svg>
      );

    case "activity":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M3 12h4l3-7 4 14 3-7h4" />
        </svg>
      );

    case "route":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="6" r="2" />
          <path d="M8 18h3a3 3 0 0 0 3-3v-3a3 3 0 0 1 3-3" />
        </svg>
      );

    case "heart":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M20.5 8.8c0 4.5-8.5 10-8.5 10s-8.5-5.5-8.5-10A4.8 4.8 0 0 1 12 6.3a4.8 4.8 0 0 1 8.5 2.5Z" />
          <path d="M3.5 12h4l2-3 3 6 2-3h5" />
        </svg>
      );

    case "trending":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M3 17 9 11l4 4 8-9" />
          <path d="M15 6h6v6" />
          <path d="M3 21h18" />
        </svg>
      );

    default:
      return null;
  }
}

export default function About() {
  const philosophyRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = philosophyRef.current;

    if (!element) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.about} id="about">
      <div className={`${styles.container} about-shared-container`}>
        {/* ABOUT INTRODUCTION */}

        <div className={styles.aboutTop}>
          <div className={styles.aboutGrid}>
            {/* LEFT SIDE — ATHLETE IMAGE */}

            <div className={`${styles.aboutRight} about-image-column`}>
              <div className={styles.imageFrame}>
                <Image
                  src="/images/about-us.png"
                  alt="Athlete demonstrating performance training"
                  fill
                  priority
                  sizes="(max-width: 700px) 100vw, 50vw"
                  className={styles.aboutImage}
                />

                <span className={styles.imageTag}>
                  PERFORMANCE / WELLBEING
                </span>
              </div>
            </div>

            {/* RIGHT SIDE — ABOUT TEXT */}

            <div className={`${styles.aboutLeft} about-text-column`}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                <span>ABOUT LAVI’SH</span>
                <span className={styles.eyebrowLine} />
              </div>

              <h1 className={styles.heading}>
                More Than
                <br />
                <span>Training.</span>
              </h1>

              <p className={styles.lead}>
                Performance is not a destination.
                <br />
                It is a process built around{" "}
                <strong>you.</strong>
              </p>

              <p className={styles.description}>
                Lavi’sh Performance is a premium performance and
                transformation platform designed to bridge the gap
                between fitness, athletic performance, body
                transformation, rehabilitation and long-term
                wellbeing. Our approach begins with understanding
                the individual — not simply prescribing an exercise
                program.
              </p>

              <a
                className={styles.moreButton}
                href="#philosophy"
              >
                <span>More info</span>

                <span
                  className={styles.buttonArrow}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* OUR PHILOSOPHY */}

        <div
          id="philosophy"
          ref={philosophyRef}
          className={`${styles.philosophy} ${
            visible ? styles.philosophyVisible : ""
          }`}
        >
          <div className={styles.philosophyHeader}>
            <span className={styles.philosophyEyebrow}>
              THE LAVI’SH METHOD
            </span>

            <h2 className={styles.philosophyHeading}>
              Our <span>Philosophy</span>
            </h2>

            <p className={styles.philosophyIntro}>
              A continuous process designed around your goals,
              your performance and your progress.
            </p>
          </div>

          <div className={styles.philosophyTrack}>
            {philosophy.map((stage, index) => (
              <article
                className={styles.stage}
                key={`${stage.title}-${index}`}
                style={
                  {
                    "--stage-delay": `${index * 100}ms`,
                  } as React.CSSProperties
                }
              >
                <div className={styles.circle}>
                  <span className={styles.circleArc} />

                  <span className={styles.stageIcon}>
                    <PhilosophyIcon name={stage.icon} />
                  </span>
                </div>

                <h3 className={styles.stageTitle}>
                  {stage.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}