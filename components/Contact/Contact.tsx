"use client";

import { useState, type FormEvent } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setNotice(
      "Your form is ready. Connect your email service or contact API to receive messages."
    );
  }

  return (
    <section className={styles.contactPage} id="contact">
      <div className={styles.container}>
        {/* PAGE HEADING */}

        <header className={styles.hero}>
          <h1 className={styles.title}>
            <span>Get in</span>
            <span>touch</span>
          </h1>

          <p className={styles.heroDescription}>
            Have a question about your performance journey?
            We would love to hear from you.
          </p>
        </header>

        {/* CONTACT FORM */}

        <section
          className={styles.contactSection}
          aria-labelledby="contact-form-title"
        >
          <div className={styles.formHeading}>
            <span className={styles.eyebrow}>
              LET'S CONNECT
            </span>

            <h2 id="contact-form-title">
              Start a conversation.
            </h2>

            <p>
              Tell us a little about yourself and how we can help
              you move forward.
            </p>
          </div>

          <form
            className={styles.contactForm}
            onSubmit={handleSubmit}
          >
            <div className={styles.formGrid}>
              <div className={styles.field}>
                <label htmlFor="contact-name">
                  Full name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-email">
                  Email address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-phone">
                  Phone number <span>(optional)</span>
                </label>

                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  autoComplete="tel"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-interest">
                  I'm interested in
                </label>

                <select
                  id="contact-interest"
                  name="interest"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="personal-training">
                    Personal training
                  </option>
                  <option value="athletic-performance">
                    Athletic performance
                  </option>
                  <option value="body-transformation">
                    Body transformation
                  </option>
                  <option value="nutrition-recovery">
                    Nutrition and recovery
                  </option>
                  <option value="general-enquiry">
                    General enquiry
                  </option>
                </select>
              </div>

              <div className={`${styles.field} ${styles.fullWidth}`}>
                <label htmlFor="contact-message">
                  Your message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your goals..."
                  required
                />
              </div>
            </div>

            <div className={styles.formActions}>
              <button type="submit" className={styles.submitButton}>
                <span>Send Message</span>
                <span className={styles.buttonArrow} aria-hidden="true">
                  ↗
                </span>
              </button>

              <p className={styles.formNote}>
                Your journey starts with a conversation.
              </p>
            </div>

            {notice && (
              <p className={styles.formNotice} role="status">
                {notice}
              </p>
            )}
          </form>
        </section>

        {/* COMMUNITY CARD */}

        <aside className={styles.community}>
          <div>
            <span className={styles.communityEyebrow}>
              BE PART OF THE MOVEMENT
            </span>

            <h2>Join Our Community</h2>

            <p>
              Connect with 100+ fitness enthusiasts, share your
              progress, and get motivated by success stories from
              fellow members.
            </p>
          </div>

          <a href="/academy" className={styles.communityLink}>
            Explore Academy <span aria-hidden="true">↗</span>
          </a>
        </aside>
      </div>
    </section>
  );
}