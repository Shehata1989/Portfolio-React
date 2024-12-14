/* eslint-disable react/prop-types */

const Container = ({ children }) => {
  return (
    <div className="container lg:w-[90%] ml-auto mr-auto px-10 py-1 bg-[var(--bg-color-container)] min-h-screen text-center md:text-left">
      {children}
    </div>
  );
};

export default Container;
