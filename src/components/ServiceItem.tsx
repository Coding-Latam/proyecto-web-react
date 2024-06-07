import { IServiceItem } from "../types/serviceItem";

export function ServiceItem({ image, title, description }: IServiceItem) {
  return (
    <div className="service-item">
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="/">Learn More</a>
    </div>
  );
}
