import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/public/NavBar";
import Home from "./pages/public/Home";
import Footer from "./components/public/Footer";
import About from "./pages/public/About";
import Tour from "./pages/public/Tour";
import Contact from "./pages/public/Contact";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/tour" element={<Tour />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
