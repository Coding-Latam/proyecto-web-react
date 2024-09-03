import { useState } from "react";
import { useFetch } from "../../hooks";
import logo from "../../assets/images/logo/logo.png";
import { INavItem } from "../../types/navItem";

export function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const { data } = useFetch("nav-items");

  return (
    <nav className="py-5 px-0">
      <div className="container flex justify-between">
        <div className="logo">
          <img src={logo} alt="Logo image" />
        </div>
        <span className="md:hidden" id="btn-menu" onClick={toggleMenu}>
          Menu
        </span>
        <ul className={isOpen ? "active" : `hidden md:flex`}>
          {data.map((item: INavItem) => (
            <li key={item.id}>
              <a
                className="text-white md:text-paragraph-color"
                href={item.link}
              >
                {item.name}
              </a>
            </li>
          ))}

          <span
            className="font-semibold absolute right-[10px] top-[20px] md:hidden"
            id="btn-close"
            onClick={toggleMenu}
          >
            Close
          </span>
        </ul>
      </div>
    </nav>
  );
}
