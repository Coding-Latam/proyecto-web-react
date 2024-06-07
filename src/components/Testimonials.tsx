import { useEffect, useState } from "react";
import { Testimonial } from "./Testimonial";
import { ITestimonial } from "../types/testimonial";

export function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <section className="testimonials">
      <div className="container">
        <h2>
          Don't take our word for it. See what customers are saying about us.
        </h2>
        <div className="testimonials-list">
          {testimonials.map((item: ITestimonial) => (
            <Testimonial key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
