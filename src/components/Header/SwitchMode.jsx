/* eslint-disable react/prop-types */
const SwitchMode = ({ HandelButton: { toggleDarkMode, darkMode } }) => {
  console.log(darkMode)
  return (
    <button onClick={toggleDarkMode} className="flex text-[var(--text-color)] ">
      {darkMode ? (
        <span className="icon-sun hover:text-[var(--hover-icon)] duration-200 text-2xl bg-[var(--menu-bg)] px-2 py-1 rounded-xl"></span>
      ) : (
        <span className="icon-moon-o hover:text-[var(--hover-icon)] duration-200 text-2xl bg-[var(--menu-bg)] px-2 py-1 rounded-xl"></span>
      )}
    </button>
  );
};

export default SwitchMode;
