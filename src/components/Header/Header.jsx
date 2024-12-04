import "./Header.css";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Header() {
  return (
    <header className="portfolio-header w-screen h-32 p-2 flex flex-row">
      <div className="flex w-1/5 h-full justify-center items-center bg-white">
        <NavLink to="/">
          <img src="./cpu.png" className="w-16 h-16" />
        </NavLink>
      </div>
      <nav className="w-full flex flex-row h-full [&>a]:mr-10 justify-end items-center bg-white">
        <NavLink to="/services" className="tomorrow-regular">
          <span className="flex flex-row align-middle justify-center items-center">
            Services
          </span>
        </NavLink>
        <NavLink to="/projects" className="tomorrow-regular">
          <span className="flex flex-row align-middle justify-center items-center">
            Projects
          </span>
        </NavLink>
        <NavLink to="/skills" className="tomorrow-regular">
          <span className="flex flex-row align-middle justify-center items-center">
            Skills
          </span>
        </NavLink>
        <NavLink to="/about" className="tomorrow-regular">
          <span className="flex flex-row align-middle justify-center items-center">
            About
          </span>
        </NavLink>
        <NavLink to="/contacts" className="tomorrow-regular">
          <span className="flex flex-row align-middle justify-center items-center">
            Contacts
          </span>
        </NavLink>
      </nav>
    </header>
  );
}
