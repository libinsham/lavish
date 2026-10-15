"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./Aboutus.module.css";

/* =========================================
   PHILOSOPHY
========================================= */

const philosophy = [
  "Assess",
  "Strategize",
  "Perform",
  "Recover",
  "Monitor",
  "Progress",
];

/* =========================================
   PERFORMANCE SYSTEM DATA
========================================= */

const performanceStages = [
  {
    number: "01",
    title: "ASSESS",
    description: "Understand the client's current status.",
    items: [
      "Health & readiness screening",
      "Anthropometrics",
      "Movement assessment",
      "Mobility",
      "Strength",
      "Power",
      "Conditioning",
      "Lifestyle assessment",
    ],
    image: "/images/performance-system/assess.jpg",
    variant: "light",
  },
  {
    number: "02",
    title: "STRATEGIZE",
    description: "Build an individualized roadmap.",
    items: [
      "Training program",
      "Nutrition strategy",
      "Recovery strategy",
      "Performance objectives",
      "KPIs",
    ],
    image: "/images/performance-system/strategize.jpg",
    variant: "lime",
  },
  {
    number: "03",
    title: "PERFORM",
    description: "Execute the program.",
    items: [
      "Personal training",
      "Strength & conditioning",
      "Sport-specific training",
      "Transformation training",
    ],
    image: "/images/performance-system/perform.jpg",
    variant: "light",
  },
  {
    number: "04",
    title: "RECOVER",
    description: "Optimize recovery.",
    items: [
      "Mobility",
      "Recovery protocols",
      "Massage/physio coordination",
      "Recovery modalities",
      "Sleep and lifestyle strategies",
    ],
    image: "/images/performance-system/recover.jpg",
    variant: "lime",
  },
  {
    number: "05",
    title: "MONITOR",
    description: "Track meaningful outcomes.",
    items: [
      "Body composition",
      "Strength",
      "Performance",
      "Conditioning",
      "Mobility",
      "Training adherence",
    ],
    image: "/images/performance-system/monitor.jpg",
    variant: "light",
  },
  {
    number: "06",
    title: "PROGRESS",
    description: "Review results and define the next phase.",
    items: [
      "Evaluate progress",
      "Review performance outcomes",
      "Refine performance goals",
      "Plan the next phase",
    ],
    image: "/images/performance-system/progress.jpg",
    variant: "lime",
  },
] as const;

type PerformanceStage = (typeof performanceStages)[number];

/* =========================================
   PERFORMANCE CARD
========================================= */

function PerformanceCard({
  stage,
}: {
  stage: PerformanceStage;
}) {
  const cardStyle = {
    "--card-image": `url("${stage.image}")`,
  } as CSSProperties;

  const variantClass =
    stage.variant === "lime" ? styles.limeCard : styles.lightCard;

  return (
    <article
      className={`${styles.systemCard} ${variantClass}`}
      style={cardStyle}
      tabIndex={0}
      aria-label={`${stage.number} ${stage.title}`}
    >
      {/* DEFAULT CARD CONTENT */}

      <div className={styles.cardBody}>
        <h3>
          {stage.number} — {stage.title}
        </h3>

        <p className={styles.cardDescription}>
          {stage.description}
        </p>

        <ul className={styles.cardList}>
          {stage.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <span className={styles.cardHint}>
          EXPLORE STAGE <span aria-hidden="true">↗</span>
        </span>
      </div>

      {/* HOVER IMAGE AND LARGE HEADING */}

      <div className={styles.hoverContent} aria-hidden="true">
        <span className={styles.hoverEyebrow}>
          LAVI’SH PERFORMANCE SYSTEM
        </span>

        <h3>{stage.title}</h3>

        <span className={styles.hoverAccent} />

        <p>{stage.description}</p>
      </div>
    </article>
  );
}

/* =========================================
   ABOUT PAGE
========================================= */

export default function About() {
  const [activePhilosophy, setActivePhilosophy] = useState(0);

  /* Automatically highlight philosophy steps */

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const intervalId = window.setInterval(() => {
      setActivePhilosophy((current) => {
        return (current + 1) % philosophy.length;
      });
    }, 1600);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        {/* =================================
            ABOUT INTRODUCTION
        ================================= */}

        <div className={styles.aboutTop}>
          <div className={styles.aboutGrid}>
            {/* LEFT COLUMN — ATHLETE IMAGE */}

            <div className={styles.aboutRight}>
              <div className={styles.imageFrame}>
                <Image
                  src="/images/about-us.png"
                  alt="Athlete demonstrating performance training"
                  fill
                  priority
                  sizes="(max-width: 650px) 100vw, (max-width: 1000px) 45vw, 600px"
                  className={styles.aboutImage}
                />

                <span className={styles.imageTag}>
                  PERFORMANCE / WELLBEING
                </span>
              </div>

           
            </div>

            {/* RIGHT COLUMN — ABOUT TEXT */}

            <div className={styles.aboutLeft}>
              <div className={styles.eyebrow}>
                <span
                  className={styles.eyebrowDot}
                  aria-hidden="true"
                />

                <span>ABOUT LAVI’SH</span>

                <span
                  className={styles.eyebrowLine}
                  aria-hidden="true"
                />
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

        {/* =================================
            OUR PHILOSOPHY
        ================================= */}

        <section
          className={styles.philosophy}
          id="philosophy"
          aria-labelledby="philosophy-title"
        >
          <div className={styles.philosophyHeader}>
            <span className={styles.philosophyEyebrow}>
              THE LAVI’SH METHOD
            </span>

            <h2
              className={styles.philosophyHeading}
              id="philosophy-title"
            >
              Our <span>Philosophy</span>
            </h2>

            <p className={styles.philosophyIntro}>
              A continuous process designed around your goals,
              your performance and your progress.
            </p>
          </div>

          <div
            className={styles.philosophySteps}
            aria-label="Assess, Strategize, Perform, Recover, Monitor and Progress"
          >
            {philosophy.map((step, index) => (
              <span className={styles.philosophyPart} key={step}>
                <span
                  className={`${styles.philosophyWord} ${
                    activePhilosophy === index
                      ? styles.philosophyActive
                      : ""
                  }`}
                  aria-current={
                    activePhilosophy === index ? "step" : undefined
                  }
                >
                  {step}
                </span>

                {index < philosophy.length - 1 && (
                  <span
                    className={styles.philosophyArrow}
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </section>

        {/* =================================
            OUR PERFORMANCE SYSTEM
        ================================= */}

        <section
          className={styles.performanceSystem}
          aria-labelledby="performance-title"
        >
          <h2
            id="performance-title"
            className={styles.sectionTitle}
          >
            OUR PERFORMANCE SYSTEM
          </h2>

          <p className={styles.sectionIntro}>
            Six connected stages. One personalized approach to
            continuous performance development.
          </p>

          <div className={styles.systemGrid}>
            {performanceStages.map((stage) => (
              <PerformanceCard
                key={stage.number}
                stage={stage}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}