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
    <section className="section programs" id="programs">
      <div className="container">
        <h2 className="section-title reveal">The Best Programs We Offer For You</h2>

        <div className="program-cards">
          {programs.map((p) => (
            <article className={`program-card reveal${p.featured ? " featured" : ""}`} key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <a href="#community" className="pill">Get Started</a>
            </article>
          ))}
        </div>

        <div className="feature-grid">
          <div className="food-photo reveal">
            <Image
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1100&q=85"
              alt="Fresh, balanced food ingredients"
              width={1100}
              height={733}
              sizes="(max-width: 760px) 100vw, 55vw"
            />
          </div>

          <div className="feature-right">
            <article className="focus-card reveal">
              <h3>
                Check in. Stay focused.
                <br />
                Keep progressing.
              </h3>
              <p>
                Your personal trainer checks in, adapts your plan, and keeps you motivated — so you
                stay on track, even when life gets busy.
              </p>
              <a href="#community" className="pill">Start with your free session</a>
            </article>

            <article className="style-card reveal">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85"
                alt="Modern gym"
                width={1000}
                height={667}
                sizes="(max-width: 760px) 100vw, 40vw"
              />
              <h3>Choose your personal training style</h3>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
