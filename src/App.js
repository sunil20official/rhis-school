import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

import Header from "./layout/Header";
import Home from "./pages/Home";

function App() {

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  return (
    <>
      <div className="scroll-top" onClick={scrollToTop}>
      <FontAwesomeIcon icon={faAngleUp} />
      </div>
      <div
        className="App"
        style={{
          backgroundImage: "linear-gradient(to top, #accbee 0%, #e7f0fd 100%)",
        }}
      >
        <Header />
        <div className="App container-lg">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
