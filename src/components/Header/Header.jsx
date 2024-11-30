import "./Header.css";
import { NavLink } from "react-router-dom";
import { FaCode } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="portfolio-header w-screen h-16 border-b-2 border-slate-300 flex flex-row">
      <div className="flex w-1/5 h-full justify-center items-center bg-white">
        <NavLink to="/">
          <span className="flex justify-center items-center">
            <FaCode className="mr-2"/>
            Paulo Pimenta
          </span>
        </NavLink>
      </div>
      <nav className="w-4/5 flex flex-row h-full [&>a]:mr-10 justify-end items-center bg-white">
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/about">About me</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
    </header>
  );
}
