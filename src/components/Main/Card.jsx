/* eslint-disable react/prop-types */
const Card = ({ cards }) => {
  return (
    <>
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="card rounded-2xl flex flex-col justify-between"
        >
          <div className="title">
            <div className="img h-[250px]">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={card.img}
                alt=""
              />
            </div>
            <div className="p-4">
              <time className="relative z-10 my-3 flex items-center text-sm text-[var(--text-color-secondary)]">
                <span className="h-4 w-0.5 text-[var(--text-color-secondary)] bg-[var(--text-color-secondary)] mr-4"></span>
                {card.time}
              </time>
              <h1 className="font-bold text-xl capitalize text-[var(--text-color)]">
                {card.title}
              </h1>
              <p className="relative z-10 mt-2 text-sm text-[var(--text-color-secondary)]">
                {card.description}
              </p>
            </div>
          </div>

          <div className="link p-4 text-sm font-medium text-[var(--hover-icon)]">
            <div className="flex cursor-pointer w-fit">
              <span>Read article</span>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="ml-1 h-4 w-4 stroke-current self-end"
              >
                <path
                  d="M6.75 5.75 9.25 8l-2.5 2.25"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
