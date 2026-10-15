import Image from "next/image";

const trainers = [
  {
    name: "Marcus Reed",
    role: "Strength coach",
    img: "/images/gym-4.jpg",
    alt: "Personal trainer demonstrating strength training",
  },
  {
    name: "Amara James",
    role: "Mobility coach",
    img: "/images/gym-1.jpg",
    alt: "Fitness coach in a gym",
  },
  {
    name: "Daniel Cole",
    role: "Performance coach",
    img: "/images/gym-2.jpg",
    alt: "Coach assisting an athlete with performance training",
  },
  {
    name: "Sophie Lane",
    role: "Wellness coach",
    img: "/images/gym-3.jpg",
    alt: "Fitness trainer standing in a gym",
  },
];

export default function Trainers() {
  return (
    <section className="section trainer-section" id="about">
      <div className="container">
        <h2 className="section-title trainer-title reveal">
          Find the Trainer Who Gets You
        </h2>

        <p className="section-intro trainer-intro reveal">
          The right trainer makes all the difference. Our expert personal
          trainers listen to your goals, adapt to your needs, and keep you
          motivated and consistent. We’ll match you with the perfect trainer
          to help you become your best self.
        </p>

        <div className="trainer-track reveal">
          {trainers.map((trainer) => (
            <article className="trainer" key={trainer.name}>
              <Image
                src={trainer.img}
                alt={trainer.alt}
                width={560}
                height={662}
                sizes="(max-width: 600px) 82vw, (max-width: 1000px) 45vw, 25vw"
              />

              <div className="trainer-info">
                <strong>{trainer.name}</strong>
                <span>{trainer.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}