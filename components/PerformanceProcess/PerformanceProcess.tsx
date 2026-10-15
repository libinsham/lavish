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

import "./PerformanceProcess.module.css";


const steps = [
  {
    title: "CLIENT",
    description: <>Your goals.<br />Our expertise.</>,
    icon: UserRound,
    position: "bottom",
  },
  {
    title: "DISCOVER",
    description: <>Personal<br />consultation</>,
    icon: Search,
    position: "top",
  },
  {
    title: "ASSESS",
    description: <>Physical & lifestyle<br />assessment</>,
    icon: ClipboardCheck,
    position: "bottom",
  },
  {
    title: "PROFILE",
    description: <>Individual<br />performance profile</>,
    icon: ChartNoAxesColumnIncreasing,
    position: "top",
  },
  {
    title: "DESIGN",
    description: <>Training, nutrition &<br />recovery strategy</>,
    icon: Target,
    position: "bottom",
  },
  {
    title: "EXECUTE",
    description: <>Coaching &<br />implementation</>,
    icon: Dumbbell,
    position: "top",
  },
  {
    title: "MONITOR",
    description: <>KPI dashboard</>,
    icon: ChartNoAxesCombined,
    position: "bottom",
  },
  {
    title: "REVIEW",
    description: <>Progress<br />conference</>,
    icon: UsersRound,
    position: "top",
  },
  {
    title: "ADAPT",
    description: <>Program<br />modification</>,
    icon: RefreshCw,
    position: "bottom",
  },
  {
    title: "PROGRESS",
    description: <>Continuous performance<br />development</>,
    icon: TrendingUp,
    position: "top",
  },
];

export default function PerformanceProcess() {
  return (
    <section className="performance-process">
      <div className="process-track">
        <svg
          className="process-arrows"
          viewBox="0 0 2000 460"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <marker
              id="lime-arrow"
              markerWidth="8"
              markerHeight="8"
              refX="5"
              refY="3"
              orient="auto"
              markerUnits="userSpaceOnUse"
            >
              <path d="M0,0 L6,3 L0,6 Z" fill="#caff00" />
            </marker>
          </defs>

          {[
            "M125 275 Q125 225 175 190",
            "M415 190 Q465 225 465 275",
            "M525 275 Q525 225 575 190",
            "M815 190 Q865 225 865 275",
            "M925 275 Q925 225 975 190",
            "M1215 190 Q1265 225 1265 275",
            "M1325 275 Q1325 225 1375 190",
            "M1615 190 Q1665 225 1665 275",
            "M1725 275 Q1725 225 1775 190",
          ].map((path, index) => (
            <path
              key={index}
              d={path}
              className="process-arrow"
              markerEnd="url(#lime-arrow)"
            />
          ))}
        </svg>

        <div className="process-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                className={`process-step ${step.position}`}
                key={step.title}
                style={{ "--step-index": index } as React.CSSProperties}
              >
                <div className="process-circle">
                  <Icon
                    className="process-icon"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <h3>{step.title}</h3>

                  <span className="process-divider" />

                  <p>{step.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
