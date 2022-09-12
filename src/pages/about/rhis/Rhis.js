import React from "react";
import "./Rhis.css";
import rhisImg from "../../../media/rhis-image.png";

const Rhis = () => {
  return (
    <div className="main-container">
      <div className="rhis-container">
        <div className="heading-cont">
          <h1 style={{ textAlign: "center", minWidth: "400px" }}>
            Royal Hills
          </h1>
          <p
            style={{ textAlign: "center", minWidth: "400px", fontSize: "20px" }}
          >
            Internatinal School
          </p>
        </div>
        <div className="rhis-img-cont">
          <img
            className="rhis-img"
            src={rhisImg}
            alt="royal hills internation school"
          />
        </div>
        <div>
          <p className="rhis-text">
            There is a future we believe in, fostered by strong souls and
            inventive minds. We believe the way to usher in change, is to
            empower young minds with irs stellar education, thus creating the
            enablers of tomorrow.
          </p>
          <p className="rhis-text">
            Laying its foundation stone in 2021, Royal Hills International
            School was set 1 iS up with a vision: To create leaders of tomorrow
            by imparting education. free from all prejudices with a focus on the
            holistic development of students.
          </p>
          <p className="rhis-text">
            RHIS offers a curriculum from Grades I onward, mapped as per the
            Central Board of Secondary Education, New Delhi. At RHIS, we
            encourage our student to learn, play and create new opportunities
            for themselves. Education is not the process of teaching by the
            teacher, it is the process to encourage the learning process of the
            student.
          </p>
          <p className="rhis-text">
            Our main emphasis is on providing quality education and excellence
            in all the fields to inspire the students to be morally upright and
            possess qualities of integrity, truthfulness and honesty. Not only
            this, we develop patriotic, social and ethical values among students
            for developing responsive citizenship to revive the past glory of
            Indian culture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rhis;
