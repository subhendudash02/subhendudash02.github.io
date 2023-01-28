import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";
import {Route, HashRouter, Routes, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
