import React from "react";

export const Navbar = () => {
  return (
    <nav className="w-full px-5 md:px-10 flex items-center justify-between pt-5 mb-36">
      <a href="#" className="text-2xl font-bold tracking-tight">
        <span className="text-teal-400">Axel</span>erate
      </a>
      <ul className="flex items-center gap-10">
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
    </nav>
  );
};
