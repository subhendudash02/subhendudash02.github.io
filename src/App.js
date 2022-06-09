import Navbar from "./components/Navbar";
import About from "./components/About";
import {Route, HashRouter, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App"> 
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
