import { ServiceItem } from "./ServiceItem";
import { useEffect, useState } from "react";
import { IServiceItem } from "../types/serviceItem";

export function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="services">
      <div className="container">
        <h2>
          The service we offer is specifically designed to meet your needs.
        </h2>
        <div className="services-list">
          {services.map((service: IServiceItem) => (
            <ServiceItem key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
