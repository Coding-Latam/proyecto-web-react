import { Button } from "./Button";

export function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <h2>
          Join our community by using our services and grow your business.
        </h2>
        <Button content="Try it for free" href="/try" />
      </div>
    </footer>
  );
}
