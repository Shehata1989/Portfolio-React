import { useState } from "react";
import Card from "./Card";

const MainSection = () => {
  const button = ["My Project", "JavaScript", "Css", "HTML", "React"];
  const cards = [
    {
      img: "/img/image-1.webp",
      title: "Crafting a design system for a multiplanetary future",
      description: `Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.`,
      time: "September 5, 2022",
    },
    {
      img: "/img/image-2.webp",
      title: "Introducing Animaginary: High performance web animations",
      description: `When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.`,
      time: "September 2, 2022",
    },
    {
      img: "/img/image-3.webp",
      title: "Rewriting the cosmOS kernel in Rust",
      description: `When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language with a lot of benefits, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.`,
      time: "July 14, 2022",
    },
    {
      img: "/img/image-4.webp",
      title: "Rewriting the cosmOS kernel in Rust",
      description: `When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language with a lot of benefits, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.`,
      time: "July 14, 2022",
    },
  ];
  const [activeButton, setActiveButton] = useState(0);

  const handelButton = (index) => {
    setActiveButton(index);
  };

  return (
    <section className="flex gap-24 text-[var(--text-color)] mt-8">
      <div className="btn flex flex-col gap-5">
        {button.map((link, idx) => (
          <button
            className={`bg-[var(--menu-bg)] rounded-md px-4 py-2 border border-transparent hover:border-[var(--hover-icon)] hover:font-bold transition-all duration-300 opacity-50 hover:opacity-100 ${
              activeButton === idx ? "active" : ""
            }`}
            key={idx}
            onClick={() => handelButton(idx)}
          >
            {link}
          </button>
        ))}
      </div>
      <div className="projects flex-1">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {cards.map((card, idx) => (
            <Card key={idx} {...card} className="h-full" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
