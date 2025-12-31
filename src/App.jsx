import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Show from "./Components/Show";
import Contact from "./Components/Contact";

import Menu from "./pages/Menu";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen w-full bg-white">
        {/* Navigation */}
        <Navbar />

        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Show />
                <Contact />
              </>
            }
          />

          {/* MENU PAGE */}
          <Route path="/menu" element={<Menu />} />

          {/* HELP PAGE (placeholder for later) */}
          {/* <Route path="/help" element={<Help />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
