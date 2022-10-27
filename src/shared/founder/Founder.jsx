import React from "react";
import "./Founder.css";
import founder from "../../media/director-img.png";
import { CgMoreO } from "react-icons/cg";

const Founder = () => {
  return (
    <div className="founder-container">
      <div className="img-founder">
        <img style={{ width: "300px" }} src={founder} alt="" />
      </div>
      <div className="about-founder">
        <h1 style={{ fontSize: "26px", color: "#054099", fontWeight: "600" }}>
          Ashutosh Vibhu
        </h1>
        <p style={{ fontSize: "16px", color: "#5c93d2" }}>Founder , RHIS</p>
        <p
          style={{ color: "#676666", fontWeight: "500", textAlign: "justify" }}
        >
          Ryan Group is the realization of a vision. A vision to transform the
          educational landscape in the country and to make quality education
          available for one and all.
          <br />
          It was in 1976 that Dr. Augustine F. Pinto, a graduate from the
          reputed Loyola College, Chennai, laid the foundation of this vision.
        </p>
        <button style={{}} className="view-more-founder">
          <CgMoreO style={{ marginRight: "10px" }} />
          View More
        </button>
      </div>
      <div className="highlights">
        <p
          style={{
            fontSize: "26px",
            color: "#054099",
            fontWeight: "400",
            borderTop: "4px solid #ddd203",
            borderRadius: "7px",
          }}
        >
          Highlights
        </p>
        <p
          style={{ color: "#676666", fontWeight: "400", textAlign: "justify" }}
        >
          National Education Society's International School Mumbai, has been
          awarded the British Council International Award 2019 and accreditation
          for the period 2019-2022. NESISM has also been ranked No. 1 in
          Maharashtra and No. 1 in Mumbai amongst Maharashtra's Top IB
          International School's Survey.
        </p>
      </div>
    </div>
  );
};

export default Founder;
