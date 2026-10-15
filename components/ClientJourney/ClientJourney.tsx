import type { CSSProperties } from "react";

import {
  UserRound,
  Search,
  ClipboardCheck,
  ChartNoAxesColumnIncreasing,
  Target,
  Dumbbell,
  ChartNoAxesCombined,
  UsersRound,
  RefreshCw,
  TrendingUp,
} from "lucide-react";

import styles from "./ClientJourney.module.css";

const stages = [
  {
    id: "client",
    title: "CLIENT",
    description: "Your goals. Our expertise.",
    Icon: UserRound,
    image: "/images/journey/client.jpg",
  },
  {
    id: "discover",
    title: "DISCOVER",
    description: "Personal consultation",
    Icon: Search,
    image: "/images/journey/discover.jpg",
  },
  {
    id: "assess",
    title: "ASSESS",
    description: "Physical & lifestyle assessment",
    Icon: ClipboardCheck,
    image: "/images/journey/assess.jpg",
  },
  {
    id: "profile",
    title: "PROFILE",
    description: "Individual performance profile",
    Icon: ChartNoAxesColumnIncreasing,
    image: "/images/journey/profile.jpg",
  },
  {
    id: "design",
    title: "DESIGN",
    description: "Training, nutrition & recovery strategy",
    Icon: Target,
    image: "/images/journey/design.jpg",
  },
  {
    id: "execute",
    title: "EXECUTE",
    description: "Coaching & implementation",
    Icon: Dumbbell,
    image: "/images/journey/execute.jpg",
  },
  {
    id: "monitor",
    title: "MONITOR",
    description: "KPI dashboard",
    Icon: ChartNoAxesCombined,
    image: "/images/journey/monitor.jpg",
  },
  {
    id: "review",
    title: "REVIEW",
    description: "Progress conference",
    Icon: UsersRound,
    image: "/images/journey/review.jpg",
  },
  {
    id: "adapt",
    title: "ADAPT",
    description: "Program modification",
    Icon: RefreshCw,
    image: "/images/journey/adapt.jpg",
  },
  {
    id: "progress",
    title: "PROGRESS",
    description: "Continuous performance development",
    Icon: TrendingUp,
    image: "/images/journey/progress.jpg",
  },
];

export default function ClientJourney() {
  return (
    <section
      className={styles.section}
      id="client-journey"
      aria-labelledby="client-journey-title"
    >
      <div className={styles.container}>
        {/* Section eyebrow */}
        <div className={styles.eyebrow}>
          
    
         
        </div>

        {/* Section heading */}
        <header className={styles.header}>
          <h2 id="client-journey-title">
            THE CLIENT <span>JOURNEY</span>
          </h2>

          <p>
            A structured, personalized and data-driven approach
            to help you achieve sustainable results — step by step.
          </p>
        </header>

        {/* Five columns and two rows */}
        <div className={styles.grid}>
          {stages.map((stage, index) => {
            const Icon = stage.Icon;

            return (
              <article
                key={stage.id}
                className={styles.card}
                style={
                  {
                    "--card-image": `url("${stage.image}")`,
                    "--card-index": index,
                  } as CSSProperties
                }
              >
                <div className={styles.cardContent}>
                  <div className={styles.iconWrap}>
                    <Icon
                      className={styles.icon}
                      size={36}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <h3>{stage.title}</h3>

                  <span
                    className={styles.cardAccent}
                    aria-hidden="true"
                  />

                  <p>{stage.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer */}
     
      </div>
    </section>
  );
}