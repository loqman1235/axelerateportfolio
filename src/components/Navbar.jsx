import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    };

    if (menuVisible) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuVisible]);
  return (
    <>
      <nav className="w-full px-5 md:px-10 flex items-center justify-between pt-5 mb-28 md:mb-36">
        <a href="#" className="text-2xl font-bold tracking-tight">
          <span className="text-teal-400">Axel</span>erate
        </a>
        <ul className="hidden md:flex items-center gap-10">
          <li>
            <a
              href="#"
              className="text-lg font-medium text-white hover:text-teal-400 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg font-medium text-white hover:text-teal-400 transition"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg font-medium text-white hover:text-teal-400 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg font-medium text-white hover:text-teal-400 transition"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg font-medium text-white hover:text-teal-400 transition"
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          onClick={(e) => toggleMenu(e)}
          className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500"
        >
          <FaBars />
        </button>
      </nav>
      {/* Dropdown Menu */}
      <div
        ref={menuRef}
        className={`${
          menuVisible ? "-translate-x-0" : "-translate-x-full"
        } w-72 h-full fixed top-0  left-0 bg-white/5 backdrop-blur-xl z-50 p-5 transition-transform duration-700 md:-translate-x-full`}
      >
        <ul className="flex flex-col gap-10">
          <li>
            <a
              className="text-lg font-medium hover:text-teal-500 transition"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-lg font-medium hover:text-teal-500 transition"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-lg font-medium hover:text-teal-500 transition"
              href="#"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="text-lg font-medium hover:text-teal-500 transition"
              href="#"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="text-lg font-medium hover:text-teal-500 transition"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
