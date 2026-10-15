import Image from "next/image";

export default function AppSection() {
  return (
    <section className="app-section" id="app">
      <div className="container app-grid">
        <div className="phone-wrap reveal">
          <Image
            src="/images/app.png"
            alt="Lavish Performance fitness app displayed on a smartphone"
            className="app-phone-image"
            width={929}
            height={1692}
          />
        </div>

        <div className="app-copy reveal">
          <h3>Meet the trainer who gets you.</h3>
          <p>
            Choose from 200+ certified experts across strength, Pilates, rehab, martial arts, and
            more. Find your perfect match and train with someone who truly understands your goals.
          </p>

          <h3>Your Journey, Your Way.</h3>
          <p>
            Create a fitness experience made entirely for you. Set your goals, choose your workout
            style, and train wherever you desire — at home, in the gym, or under the open sky.
            Complete freedom. Total control.
          </p>

          <h3>Progress That Feels Rewarding.</h3>
          <p>
            Turn every workout into a milestone worth celebrating. Track your progress, discover
            curated recipes, smarter recovery tips, and powerful tools designed to keep you
            motivated — so your results don’t just begin, they become a lifestyle.
          </p>

          <a className="pill" href="#programs">Start Personal Training</a>
        </div>
      </div>
    </section>
  );
}
