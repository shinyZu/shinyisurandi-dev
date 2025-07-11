import React, { useState } from "react";
import { navLinks } from "../constants";

const NavItems = ({ onItemClick }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, name, href }) => (
        <li key={id} className="nav-li">
          {/* {name.includes("Resume") ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="nav-li_a"
            >
              {name}
            </a>
          ) : (
            <a href={href} className="nav-li_a">
              {name}
            </a>
          )} */}
          {/* <a href={href} className="nav-li_a">{name}</a> */}
          <a
            href={href}
            target={name.includes("Resume") ? "_blank" : "_self"}
            rel="noreferrer"
            // className="nav-li_a"
            className={`nav-li_a ${
              name.includes("Resume")
                // ? "bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                ? "hire-me-btn text-white-800"
                : ""
            }`}
            onClick={() => {
              if (onItemClick) onItemClick();
            }}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navabr = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);
  const handleItemClick = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            ShinyI.
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* navbar for mobile apps */}
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems onItemClick={handleItemClick} />
        </nav>
      </div>
    </header>
  );
};

export default Navabr;
