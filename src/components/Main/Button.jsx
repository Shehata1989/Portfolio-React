/* eslint-disable react/prop-types */
const Button = ({ label, activeButton, onClick }) => {
  return (
    <>
      {label.map((label, idx) => (
        <button
          className={`bg-[var(--menu-bg)] rounded-md px-4 py-2 border border-transparent hover:border-[var(--hover-icon)] hover:font-bold transition-all duration-300 opacity-50 hover:opacity-100 ${
            activeButton === idx && "active"
          }`}
          key={idx}
          onClick={() => onClick(idx)}
        >
          {label}
        </button>
      ))}
    </>
  );
};

export default Button;
