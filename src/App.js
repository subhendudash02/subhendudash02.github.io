import Navbar from "./components/Navbar";
import About from "./components/About";
import {Route, BrowserRouter, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
