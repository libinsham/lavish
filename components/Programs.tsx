import Image from "next/image";



export default function Programs() {
  return (
    <>
      {/* =====================================
          SECTION 1 — BEST PROGRAMS
      ====================================== */}

     

      {/* =====================================
          SECTION 2 — FEATURED TRAINING
      ====================================== */}

      <section
        className="section program-features"
        id="program-features"
      >
        <div className="container">
          <div className="feature-grid">
            {/* LEFT — NUTRITION IMAGE */}

            <div className="food-photo reveal">
              <Image
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1100&q=85"
                alt="Fresh, balanced food ingredients"
                width={1100}
                height={733}
                sizes="(max-width: 760px) 100vw, 55vw"
              />
            </div>

            {/* RIGHT — COACHING AND TRAINING */}

            <div className="feature-right">
              <article className="focus-card reveal">
                <h3>
                  Check in. Stay focused.
                  <br />
                  Keep progressing.
                </h3>

                <p>
                  Your personal trainer checks in, adapts your plan,
                  and keeps you motivated — so you stay on track,
                  even when life gets busy.
                </p>

                <a href="#community" className="pill">
                  Start with your free session
                </a>
              </article>

              <article className="style-card reveal">
                <Image
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85"
                  alt="Modern gym and strength training equipment"
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
    </>
  );
}