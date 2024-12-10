import { useState } from "react";

const MainSection = () => {
  const button = ["My Project", "JavaScript", "Css", "HTML", "React"];
  const [activeButton, setActiveButton] = useState(0);

  const handelButton = (index) => {
    setActiveButton(index)
  };

  return (
    <section className="flex gap-5 text-[var(--text-color)] mt-8">
      <div className="btn flex flex-col gap-5">
        {button.map((link, idx) => (
          <button className={`bg-[var(--menu-bg)] px-4 py-2 border border-transparent hover:border-[var(--hover-icon)] transition-all duration-300 opacity-50 hover:opacity-100 ${activeButton === idx ? "active" : ""}`} key={idx} onClick={() => handelButton(idx)}>
            {link}
          </button>
        ))}
      </div>
    </section>
  );
};

export default MainSection;
