// @ts-nocheck
import Header from "./components/Header/Header";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="container lg:w-[90%] ml-auto mr-auto px-10 py-1 text-[var(--text-color)] bg-[var(--bg-color-container)] min-h-screen text-center md:text-left">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
