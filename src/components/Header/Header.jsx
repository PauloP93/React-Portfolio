import "./Header.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import cpu from "../../../public/assets/cpu.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import CyberpunkSidebar from "../CyberpunkSidebar/CyberpunkSidebar";

export default function Header() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1026px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const [hamburguerMenuOpen, setHamburguerMenuOpen] = useState(false);

  function handleHamburguerMenuClick() {
    if (isTabletOrMobile) {
      setHamburguerMenuOpen(!hamburguerMenuOpen);
    }
  }

  return (
    <header className="portfolio-header w-screen h-32 p-2 flex flex-row">
      <div className="flex ml-5 w-1/5 h-full justify-center items-center bg-white">
        <NavLink to="/">
          <img
            src={cpu}
            className="lg:w-20 lg:h-20 md:w-18 md:h-18 sm:w-16 sm:h-16"
          />
        </NavLink>
      </div>

      {isDesktop && (
        <>
          <nav className="lg:w-full md:w-fit flex flex-row h-full [&>a]:mr-10 justify-end items-center bg-white">
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
        </>
      )}

      {isTabletOrMobile && (
        <nav className="mr-5 w-full flex flex-row justify-end items-center bg-white">
          <GiHamburgerMenu
            className="text-[#ff0000] w-14 h-14"
            onClick={handleHamburguerMenuClick}
          />
        </nav>
      )}

      {isTabletOrMobile && hamburguerMenuOpen && (
        <CyberpunkSidebar>
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
          <IoCloseCircleSharp
            className=" text-[#ff0000] w-10 h-10"
            onClick={handleHamburguerMenuClick}
          />
        </CyberpunkSidebar>
      )}
    </header>
  );
}
