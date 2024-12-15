import { lazy, useState } from "react";
import Card from "./Card";
import Button from "./Button";

const MainSection = () => {
  const button = ["My Project", "JavaScript", "Css", "HTML", "React"];
  const cards = [
    {
      img: "/img/image-1.webp",
      title: "Crafting a design system for a multiplanetary future",
      description: `Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.`,
      time: "September 5, 2022",
      category: "JavaScript",
    },
    {
      img: "/img/image-2.webp",
      title: "Introducing Animaginary: High performance web animations",
      description: `When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.`,
      time: "September 2, 2022",
      category: "CSS",
    },
    {
      img: "/img/image-3.webp",
      title: "Rewriting the cosmOS kernel in Rust",
      description: `When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language with a lot of benefits, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.`,
      time: "July 14, 2022",
      category: "HTML",
    },
    {
      img: "/img/image-4.webp",
      title: "Rewriting the cosmOS kernel in Rust",
      description: `When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language with a lot of benefits, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.`,
      time: "July 14, 2022",
      category: "React",
    },
  ];
  const [activeButton, setActiveButton] = useState(0);
  const [filteredCards, setFilteredCards] = useState(cards);

  const handelButton = (index) => {
    setActiveButton(index);
    if (index === 0) {
      setFilteredCards(cards);
    } else {
      setFilteredCards(
        cards.filter(
          (card) => card.category.toLowerCase() === button[index].toLowerCase()
        )
      );
    }
  };

  return (
    <section className="flex gap-10 md:gap-16 text-[var(--text-color)] mt-8">
      <div className="btn flex flex-col gap-5">
        <Button
          label={button}
          activeButton={activeButton}
          onClick={handelButton}
        />
      </div>
      <div className="projects flex-1">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {cards.map((card, idx) => (
            <Card key={idx} {...card} className="h-full"/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
