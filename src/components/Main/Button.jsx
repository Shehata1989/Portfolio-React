/* eslint-disable react/prop-types */
const Button = ({ label, activeButton, handelButton }) => {
  return (
    <div className="flex justify-center flex-wrap gap-5 mb-8 md:mb-0 md:flex-col md:mt-1">
      {label.map((label, idx) => (
        <button
          className={`w-36 md:w-auto bg-[var(--menu-bg)] rounded-md px-4 py-2 border border-transparent hover:border-[var(--hover-icon)] hover:font-bold transition-all duration-300 opacity-50 hover:opacity-100 ${
            activeButton === idx && "active"
          }`}
          key={idx}
          onClick={() => handelButton(idx)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Button;
