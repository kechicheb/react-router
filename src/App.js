import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Footer from "./components/Footer";
import { Routes, Route} from "react-router-dom";
import {WavyContainer} from "react-wavy-transitions";

function App() {
  return (
    <div className="App">
      <Header />
      <WavyContainer/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
