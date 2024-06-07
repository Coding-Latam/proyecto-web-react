import { ITestimonial } from "../types/testimonial";

export function Testimonial({
  author,
  image,
  area,
  testimonial,
}: ITestimonial) {
  return (
    <div className="testimonials-item">
      <p>{testimonial}</p>
      <div className="testimonials-author">
        <div className="image">
          <img src={image} />
        </div>
        <div className="bio">
          <h3>{author}</h3>
          <p>{area}</p>
        </div>
      </div>
    </div>
  );
}
