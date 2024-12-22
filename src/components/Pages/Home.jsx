
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import MainSection from "../Main/MainSection";


const Home = () => {
    
  return (
    <>
      <div className="container lg:w-[90%] ml-auto mr-auto px-10 py-1 bg-[var(--bg-color-container)] min-h-screen text-center md:text-left">
        <Header />
        <HeroSection />
        <MainSection />
      </div>
    </>
  );
};

export default Home;
