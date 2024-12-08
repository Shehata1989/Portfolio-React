import { useEffect, useRef, useState } from "react";

const Header = () => {
  const navBar = ["About", "Articles", "Projects", "Speaking", "Uses"];
  const ul = useRef(null);
  const menu = useRef(null);
  const [darkModem, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkModem);
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
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <header className="text-white mt-8">
      <nav className="flex justify-end gap-5 md:justify-center md:items-center md:gap-24 px-5 md:p-0">
        <button
          onClick={() => {
            ul.current.classList.toggle("hidden");
          }}
          ref={menu}
          className="icon-menu md:hidden text-2xl bg-[#252529] px-2 py-1 rounded-xl"
        ></button>
        <ul
          ref={ul}
          className="hidden md:flex md:justify-center md:items-center md:gap-5 md:static bg-[#252529] px-7 py-2 rounded-2xl absolute w-[90%] md:w-auto left-0 right-0 top-20 m-auto md:m-0 animate-scale"
        >
          {navBar.map((link, idx) => {
            return (
              <li className="mb-3 last:mb-0 md:m-auto" key={idx}>
                <a
                  className="hover:text-[#44c6b2] hover:font-bold hover:tracking-wide duration-200"
                  href=""
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
        <button onClick={toggleDarkMode} className="flex">
          {darkModem ? (
            <span className="icon-moon-o hover:text-[#44c6b2] duration-200 text-2xl bg-[#252529] px-2 py-1 rounded-xl"></span>
          ) : (
            <span className="icon-sun hover:text-[#44c6b2] duration-200 text-2xl bg-[#252529] px-2 py-1 rounded-xl"></span>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
