import heroImage from "../assets/images/hero.svg";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="left">
          <h1>
            A digital agency specializing on <span>mobile design</span>
          </h1>
          <p>
            We are an award winning design agency that strongly believes in the
            power of creative ideas.
          </p>
          <Button content="Get started" href="/get-started" />
        </div>
        <div className="right">
          <img src={heroImage} alt="Hero image" />
        </div>
      </div>
    </section>
  );
}
