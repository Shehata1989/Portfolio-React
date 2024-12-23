/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import SwitchMode from "./SwitchMode";

const Header = () => {
  const navBar = ["About", "Articles", "Projects", "Speaking", "Uses"];

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const ulRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ulRef.current &&
        !ulRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        ulRef.current.classList.add("hidden");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDarkMode = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleMenu = () => {
    ulRef.current.classList.toggle("hidden");
  };

  return (
    <header className="flex justify-end gap-5 md:justify-center md:items-center md:gap-24 md:p-0 text-[var(--bg-color)] mt-8">
      <nav className="">
        <ul
          ref={ulRef}
          className="hidden bg-[var(--menu-bg)] absolute w-[90%] left-0 right-0 top-20 animate-scale px-10 py-5 md:flex md:justify-center md:items-center md:gap-5 md:static md:px-7 md:py-3 rounded-2xl m-auto md:m-0 md:w-auto"
        >
          {navBar.map((link, idx) => (
            <li className={`mb-3 last:mb-0 md:m-auto`} key={idx}>
              <NavLink
                to={link.toLowerCase()}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[var(--hover-icon)]"
                      : "text-[var(--text-color)]"
                  }
                  hover:text-[var(--hover-icon)] hover:font-bold hover:tracking-wide duration-200 font-bold`
                }
                href={`${link.toLowerCase()}`}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <SwitchMode
        HandelButton={{
          toggleDarkMode: toggleDarkMode,
          darkMode: darkMode,
        }}
      />
      <div
        ref={menuButtonRef}
        onClick={toggleMenu}
        className="block md:hidden icon-menu text-[var(--text-color)] hover:text-[var(--hover-icon)] duration-200 text-2xl bg-[var(--menu-bg)] px-2 py-1 rounded-xl"
      ></div>
    </header>
  );
};

export default Header;
