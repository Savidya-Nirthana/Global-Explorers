import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/public/NavBar";
import Home from "./pages/public/Home";
import Footer from "./components/public/Footer";
import About from "./pages/public/About";
import Tour from "./pages/public/Tour";
import Contact from "./pages/public/Contact";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import AdNavBar from "./components/admin/AdNavBar";
import { useEffect } from "react";
import Logout from "./components/admin/Logout";
function App() {
  return (
    <div className="">
      {console.log(window.location.pathname)}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Home />
                <Footer />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/about"
            element={
              <>
                <NavBar />
                <About />
                <Footer />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/tour"
            element={
              <>
                <NavBar />
                <Tour />
                <Footer />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/contact"
            element={
              <>
                <NavBar />
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
        {/* <Routes>
          <Route path="/admin" element={<Login />} />
        </Routes> */}
        <Routes>
          <Route
            path="/admin"
            element={
              <>
                <AdNavBar />
                <Dashboard />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/admin/login"
            element={
              <>
                <AdNavBar />
                <Login />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/admin/tours"
            element={
              <>
                <AdNavBar />
                <Dashboard />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/admin/logout"
            element={
              <>
                <Logout />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
