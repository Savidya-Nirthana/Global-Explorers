import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/public/NavBar";
import Home from "./pages/public/Home";
function App() {
  return (
    <div className=" ">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
