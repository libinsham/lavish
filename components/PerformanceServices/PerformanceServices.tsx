import Image from "next/image";

const programs = [
  {
    title: "Personal Training",
    text: "One-on-one sessions with certified trainers tailored to your goals and fitness level.",
    featured: false,
  },
  {
    title: "Nutrition Planning",
    text: "Custom meal plans and dietary guidance to complement your training.",
    featured: true,
  },
  {
    title: "Progress Analytics",
    text: "Track every milestone with detailed insights and performance metrics.",
    featured: false,
  },
];

export default function Programs() {
  return (
    <>
      {/* =====================================
          SECTION 1 — BEST PROGRAMS
      ====================================== */}

      <section className="section programs" id="programs">
        <div className="container">
          <h2 className="section-title reveal">
            The Best Programs We Offer For You
          </h2>

          <div className="program-cards">
            {programs.map((program) => (
              <article
                className={`program-card reveal${
                  program.featured ? " featured" : ""
                }`}
                key={program.title}
              >
                <h3>{program.title}</h3>

                <p>{program.text}</p>

                <a href="#community" className="pill">
                  Get Started
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          SECTION 2 — FEATURED TRAINING
      ====================================== */}

     
    </>
  );
}