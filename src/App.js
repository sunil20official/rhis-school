import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import Home from "./pages/Home";
import GetInTouch from "./pages/GetInTouch/GetInTouch";
import Carousel from "./shared/carousel/Carousel";
import img1 from "./media/artem-kniaz-DqgMHzeio7g-unsplash.jpg";
import img2 from "./media/robert-collins-tvc5imO5pXk-unsplash.jpg";
import img3 from "./media/sigmund-OV44gxH71DU-unsplash.jpg";
import Footer from "./layout/Footer/Footer";
import TopBar from "./layout/ReactNavbar/topbar/TopBar";
import Management from "./shared/management/Management";
import Admission from "./pages/admissions/Admission";
import About from "./pages/GetInTouch/About";

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <>
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
            </Routes>
          </div>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;
