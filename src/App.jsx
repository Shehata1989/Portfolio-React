// @ts-nocheck
import Container from "./Container";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import MainSection from "./components/Main/MainSection";

const App = () => {
  return (
    <Container>
      <Header />
      <HeroSection />
      <MainSection />
    </Container>
  );
};

export default App;
