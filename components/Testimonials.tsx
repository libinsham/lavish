const reviews = [
  {
    name: "Osama Al-Othman",
    text: "My goal-oriented experience with the trainers has been amazing. They are great at their jobs and are always helpful, kind and dedicated.",
  },
  {
    name: "Olivia Martin",
    text: "The plan fits my schedule and my coach keeps me accountable. I feel stronger and more confident every week.",
  },
  {
    name: "James Wilson",
    text: "Clear goals, thoughtful guidance and a supportive community. This made fitness feel sustainable for me.",
  },
  {
    name: "Amira Khan",
    text: "Personalized training and nutrition advice that works with real life. I love how easy it is to stay consistent.",
  },
];

export default function Testimonials() {
  // Reviews are rendered twice so the CSS marquee loops seamlessly.
  const loop = [...reviews, ...reviews];

  return (
    <section className="testimonials" aria-label="Member reviews">
      <div className="review-track" id="reviewTrack">
        {loop.map((r, i) => (
          <article className="review" key={i} aria-hidden={i >= reviews.length ? true : undefined}>
            <div className="review-head">
              <span>{r.name}</span>
              <span className="stars">★★★★★</span>
            </div>
            <p>{r.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
