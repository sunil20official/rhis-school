import React from "react";
import "./Founder.css";
import founder from "../../media/director-img.png";
import { CgMoreO } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const Founder = () => {
  const navigate = useNavigate();
  return (
    <div className="main-founder-container">
      <h1 className="director-desk-heading">From director's desk</h1>
      <div className="founder-container">
        <div className="img-founder">
          <img style={{ width: "300px" }} src={founder} alt="" />
        </div>
        <div className="about-founder">
          <h1 style={{ fontSize: "26px", color: "#054099", fontWeight: "600" ,textAlign:"center"}}>
            Ashutosh Vibhu
          </h1>
          <p style={{ fontSize: "16px", color: "#5c93d2",textAlign:"center" }}>Director , RHIS</p>
          <p
            style={{
              color: "#676666",
              fontWeight: "500",
              textAlign: "justify",
            }}
          >
            Lerro Learning Foundation, registered on 17th May 2021, in Patna
            laid a foundation by establishing Royal Hills International School
            and Royal Hills International School Junior in Sitamarhi, with
            objective of establishing educational institutions with holistic
            educations.
            <br />
            The prime objective of the of Lerro Learning Foundation is to
            provide facilities for quality education to boys and girls of all
            ages by establishing schools that offer pre-primary to middle stage
            education.
          </p>
          <button
            onClick={() => navigate("/about/directordesk")}
            style={{}}
            className="view-more-founder"
          >
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
              textAlign:"center"
            }}
          >
            Highlights
          </p>
          <p
            style={{
              color: "#676666",
              fontWeight: "400",
              textAlign: "justify",
            }}
          >
            The curriculum at Royal Hills International School Junior is
            conceived in such a way that everything the child learns at the
            preschool prepares him for an easy transition into Grade 1 in any
            formal schools. This smooth step towards a bigger future is
            accomplished via series of activities that are woven into academic
            programs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
