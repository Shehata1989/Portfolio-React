import { useEffect, useState } from "react";

const Header = () => {
  const navBar = ["About", "Articles", "Projects", "Speaking", "Uses"];
  const [darkMode, setDarkMode] = useState(() => {
    // تحديد الوضع الافتراضي أثناء التهيئة
    return localStorage.getItem("theme") === "dark";
  });

  const toggleDarkMode = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="text-[var(--bg-color)] mt-8">
      <nav className="flex justify-end gap-5 md:justify-center md:items-center md:gap-24 md:p-0">
        <ul className="hidden bg-[var(--menu-bg)] absolute w-[90%] left-0 right-0 top-20 animate-scale px-10 py-5 md:flex md:justify-center md:items-center md:gap-5 md:static md:px-7 md:py-3 rounded-2xl m-auto md:m-0 md:w-auto">
          {navBar.map((link, idx) => (
            <li className="mb-3 last:mb-0 md:m-auto" key={idx}>
              <a
                className="hover:text-[var(--hover-icon)] text-[var(--text-color)] hover:font-bold hover:tracking-wide duration-200"
                href={`#${link.toLowerCase()}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleDarkMode}
          className="flex text-[var(--text-color)]"
        >
          {darkMode ? (
            <span className="icon-sun hover:text-[var(--hover-icon)] duration-200 text-2xl bg-[var(--menu-bg)] px-2 py-1 rounded-xl"></span>
          ) : (
            <span className="icon-moon-o hover:text-[var(--hover-icon)] duration-200 text-2xl bg-[var(--menu-bg)] px-2 py-1 rounded-xl"></span>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
