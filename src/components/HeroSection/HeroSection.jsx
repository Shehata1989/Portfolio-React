const HeroSection = () => {
  const contantHero = {
    head: "Software designer, founder, and amateur astronaut.",
    paragraph:
      "I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.",
  };

  return (
    <section className="text-white"> 
      <div className="contact max-w-[42rem]">
        <img className="rounded-full mb-8" src="/avatar.webp" alt="Avatar!" />
        <h1 className="text-[var(--text-color)] text-4xl font-bold mb-8">
          {contantHero.head}
        </h1>
        <p className="mb-8 text-[var(--text-color-secondary)] text-lg leading-7">
          {contantHero.paragraph}
        </p>
      </div>
      <div className="social">
        <div className="inline-flex items-center gap-5 text-[var(--text-color-secondary)]">
          <span className="icon-x text-2xl hover:animate-scale hover:text-[var(--hover-icon)] "></span>
          <span className="icon-instagram text-2xl hover:animate-scale hover:text-[var(--hover-icon)] "></span>
          <span className="icon-github text-2xl  hover:animate-scale hover:text-[var(--hover-icon)]"></span>
          <span className="icon-linkedin text-2xl  hover:animate-scale hover:text-[var(--hover-icon)] "></span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
