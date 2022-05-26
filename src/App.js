import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/menu" exact element={<Menu />}></Route>
          <Route path="/about" exact element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
