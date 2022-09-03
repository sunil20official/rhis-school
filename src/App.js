import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useRef, useEffect } from "react";

import Header from "./layout/Header";
import Home from "./pages/Home";
import GetInTouch from "./pages/GetInTouch/GetInTouch";
import Footer from "./layout/Footer/Footer";
import TopBar from "./layout/ReactNavbar/topbar/TopBar";
import Admission from "./pages/admissions/Admission";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      cursorRef.current.setAttribute(
        "style",
        "top: " + (e.pageY + 5) + "px; left: " + (e.pageX + 5) + "px;"
      );
    });
  }, []);

  return (
    <Router>
      <>
        <div ref={cursorRef} className="cursor"></div>
        <TopBar />
        <div className="scroll-top" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
        <div className="App">
          <div style={{ margin: "0rem" }}>
            <Header />
          </div>
          <div className="container-lg">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/getintouch" element={<GetInTouch />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;
