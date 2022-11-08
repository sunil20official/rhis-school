import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// import { useRef, useEffect } from "react";

import Header from "./layout/Header";
import Home from "./pages/Home";
import GetInTouch from "./pages/GetInTouch/GetInTouch";
import Footer from "./layout/Footer/Footer";
import TopBar from "./layout/ReactNavbar/topbar/TopBar";
import NavbarTwo from "./layout/NavbarTwo/NavbarTwo";
// import Admission from "./pages/admissions/Admission";

//     about pages
import About from "./pages/About";
import Rhis from './pages/about/rhis/Rhis';
import Root from './pages/about/roots/Root';
import DirectorDesk from "./pages/about/director-desk/DirectorDesk";
import PrincipalMsg from "./pages/about/principal-msg/PrincipalMsg";
import SocialInitiatives from "./pages/about/social-initiatives/SocialInitiatives";

//     academics pages
import AcademicProgram from './pages/academics/academic-program/AcademicProgram';
import CurricularActivity from './pages/academics/curricular-activity/CurricularActivity';
import Transport from './pages/academics/transport/Transport';
import WeCare from './pages/academics/we-care/WeCare';

import ComingSoon from "./pages/comingsoon/ComingSoon";
import NotFound from "./pages/NotFound";
import Franchise from "./pages/franchise/Franchise";
import Career from "./pages/career/Career";
import AdmissionProcedure from "./pages/admissions/admissionprocedure/AdmissionProcedure";
import FeeStructure from "./pages/admissions/feestructure/FeeStructure";
import Gallery from "./pages/gallery/Gallery";


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
        {/* <div ref={cursorRef} className="cursor"></div> */}
        <TopBar />
        <div className="scroll-top" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
        <div className="App">
          <div style={{ margin: "0rem" }}>
            <Header />
            <NavbarTwo />
          </div>
          <div className="container-lg custom-container-lg">
            <Routes>
              <Route path="/" element={<Home />} />

              {/* ------------------- about ------page ----------- routes ------------ */}
              <Route path="/about" element={<About />} />
              <Route path="/about/rhis" element={<Rhis />} />
              <Route path="/about/roots" element={<Root />} />
              <Route path="/about/directordesk" element={<DirectorDesk />} />
              <Route path="/about/principalmsg" element={<PrincipalMsg />} />
              <Route
                path="/about/social-initiatives"
                element={<SocialInitiatives />}
              />

              {/* ------------------- academics ------page ----------- routes ------------ */}
              <Route
                path="/academics/academic-program"
                element={<AcademicProgram />}
              />
              <Route
                path="/academics/cocurricular-activities"
                element={<CurricularActivity />}
              />
              <Route path="/academics/transport" element={<Transport />} />
              <Route path="/academics/we-care" element={<WeCare />} />

              {/*-------------------------- admission page routes--------- */}
              <Route
                path="/admission/admission-procedure"
                element={<AdmissionProcedure />}
              />
              <Route path="/admission/fee-structure" element={<ComingSoon />} />
              
              {/* media pages with coming soon page */}
              <Route path="/media/news" element={<ComingSoon />} />
              <Route path="/media/events" element={<ComingSoon />} />

              <Route path="/franchise" element={<Franchise />} />
              <Route path="/careers" element={<Career />} />
              <Route path="/contact-us" element={<GetInTouch />} />
              <Route path="/gallery" element={<Gallery />} />

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
