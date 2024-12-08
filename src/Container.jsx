/* eslint-disable react/prop-types */

const Container = ({ children }) => {
  return (
    <div className="container lg:w-[90%] ml-auto mr-auto px-10 py-1 bg-[#18181b] h-screen">
      {children}
    </div>
  );
};

export default Container;
