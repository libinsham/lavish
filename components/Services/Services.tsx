
import styles from "./Services.module.css";

const services = [
  {
    title: "Personal Performance Training",
    description:
      "Individualized one-to-one coaching designed around your goals, physical profile and performance requirements.",
    link: "#consultation",
  },
  {
    title: "Body Transformation",
    description:
      "A structured transformation system combining training, nutrition, recovery and progress monitoring.",
    link: "#consultation",
  },
  {
    title: "Strength & Conditioning",
    description:
      "A structured approach to developing strength, power, speed, agility, acceleration, deceleration and energy-system capacity.",
    link: "#consultation",
  },
  {
    title: "Elite Athlete Performance",
    description:
      "Sport-specific performance programs developed around the physical demands of the athlete's sport.",
    link: "#consultation",
  },
  {
    title: "Rehabilitation & Return to Performance",
    description:
      "A progressive pathway designed to support clients returning from injury or managing movement limitations.",
    link: "#consultation",
  },
  {
    title: "Performance Nutrition",
    description:
      "Nutrition strategies designed to support body composition, strength development, muscle growth, fat loss, training performance, recovery and energy availability.",
    link: "#consultation",
  },
  {
    title: "Recovery & Regeneration",
    description:
      "Recovery strategies integrated into the overall performance plan to support recovery, readiness and sustainable training.",
    link: "#consultation",
  },
  {
    title: "Online Performance Coaching",
    description:
      "Remote coaching incorporating individualized training plans, nutrition guidance, weekly progress tracking, performance KPIs and ongoing program modifications.",
    link: "#consultation",
  },
  {
    title: "Performance Assessment",
    description:
      "Every high-level program begins with understanding the starting point through health and readiness, anthropometry, movement quality and performance assessment.",
    link: "#consultation",
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        {/* Section heading */}
        <header className={styles.header}>
          

          <h2 className={styles.title}>
            LAVI’SH PERFORMANCE <span>SERVICES</span>
          </h2>

          <p className={styles.intro}>
            Individualized training, performance coaching, nutrition,
            recovery and assessment — integrated into a personalized
            approach designed around your goals and performance needs.
          </p>
        </header>

        {/* Services grid */}
        <div className={styles.grid}>
          {services.map((service) => (
            <article
              className={styles.card}
              key={service.title}
            >
              <h3 className={styles.cardTitle}>
                {service.title}
              </h3>

              <p className={styles.cardDescription}>
                {service.description}
              </p>

              {/* Reference-style More Info button */}
              
<a className={styles.moreButton} href={service.link}>
  <span>More info</span>
  <span className={styles.moreButtonCircle} aria-hidden="true">
    <span className={styles.moreButtonArrow}>›</span>
  </span>
</a>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
