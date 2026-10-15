
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>
          <span>Elevate your</span>
          <span>performance.</span>
          <span>Transform</span>
          <span>your potential.</span>
        </h1>

        <div className={styles.heroCopy}>
          <p className={styles.heroDescription}>
            Lavish Performance delivers individualized training,
            performance coaching, nutrition, recovery and
            rehabilitation strategies through an integrated,
            evidence-informed approach.
          </p>

          <div className={styles.heroButtons}>
            <a
              href="#consultation"
              className={`${styles.heroBtn} ${styles.heroBtnGreen}`}
            >
              <span>Book Your Performance Consultation</span>

              <span
                className={styles.heroBtnArrow}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M7 7H17V17"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>

            <a
              href="#programs"
              className={`${styles.heroBtn} ${styles.heroBtnDark}`}
            >
              <span>Explore Our Programs</span>

              <span
                className={styles.heroBtnArrow}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M7 7H17V17"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.heroArt} aria-hidden="true">
       
        <div className={styles.heroRibbon} />

        <Image
          className={styles.heroAthlete}
          src="/images/lavish.png"
          alt=""
          width={1042}
          height={1080}
          priority
        />
      </div>
    </section>
  );
}
