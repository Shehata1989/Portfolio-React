import { useEffect, useRef, useState } from "react";

const Header = () => {
  const navBar = ["About", "Articles", "Projects", "Speaking", "Uses"];
  const ul = useRef(null);
  const menu = useRef(null);
  const [darkModem, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkModem);
    document.body.setAttribute("data-theme", darkModem ? "light" : "dark");
    localStorage.setItem("theme", darkModem ? "light" : "dark");
  };

  const handleClickOutside = (event) => {
    if (
      !ul.current.contains(event.target) &&
      !menu.current.contains(event.target)
    ) {
      ul.current.classList.add("hidden");
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.body.setAttribute("data-theme", theme);
      setDarkMode(theme === "dark");
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <header className="text-[var(--bg-color)] mt-8">
      <nav className="flex justify-end gap-5 md:justify-center md:items-center md:gap-24 md:p-0">
        <button
          onClick={() => {
            ul.current.classList.toggle("hidden");
          }}
          ref={menu}
          className="icon-menu md:hidden bg-[var(--menu-bg)] text-[var(--text-color)] text-2xl px-2 py-1 rounded-xl"
        ></button>
        <ul
          ref={ul}
          className="hidden bg-[var(--menu-bg)] absolute w-[90%] left-0 right-0 top-20 animate-scale px-10 py-5 md:flex md:justify-center md:items-center md:gap-5 md:static md:px-7 md:py-3 rounded-2xl  m-auto md:m-0 md:w-auto"
        >
          {navBar.map((link, idx) => {
            return (
              <li className="mb-3 last:mb-0 md:m-auto" key={idx}>
                <a
                  className="hover:text-[var(--hover-icon)] text-[var(--text-color)] hover:font-bold hover:tracking-wide duration-200"
                  href=""
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          onClick={toggleDarkMode}
          className="flex text-[var(--text-color)]"
        >
          {darkModem ? (
            <span className="icon-sun hover:text-[var(--hover-icon)] duration-200 text-2xl bg-[var(--menu-bg)]  px-2 py-1 rounded-xl"></span>
          ) : (
            <span className="icon-moon-o hover:text-[var(--hover-icon)] duration-200 text-2xl bg-[var(--menu-bg)]  px-2 py-1 rounded-xl"></span>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
