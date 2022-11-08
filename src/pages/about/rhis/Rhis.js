import React from "react";
import "./Rhis.css";
import rhisImg from "../../../media/royalhillsimage.jpg";

const Rhis = () => {
  return (
    <div className="main-container-rhis">
      <div className="rhis-container">
        <div
          className="heading-cont"
          style={{ borderBottom: "3px solid rgb(255, 112, 0)" }}
        >
          <h1
            style={{
              textAlign: "center",
              margin: "2rem auto 0.5rem",
              letterSpacing: "3px",
            }}
          >
            Royal Hills
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              letterSpacing: "2px",
            }}
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
          <p style={{marginTop:"2rem"}} className="rhis-text">
            There is a future we believe in, fostered by strong souls and
            inventive minds. We believe the way to usher in change, is to
            empower young minds with stellar education, thus creating the
            enablers of tomorrow.
          </p>
          <p className="rhis-text">
            Laying its foundation stone in 2021, Royal Hills International
            School was set up with a vision: To create leaders of tomorrow by
            imparting education. free from all prejudices with a focus on the
            holistic development of students.
          </p>
          <p className="rhis-text">
            RHIS offers a curriculum from Grades I onwards, mapped as per the
            Central Board of Secondary Education, New Delhi. At RHIS, we
            encourage our students to learn, play and create new opportunities
            for themselves. Education is not the process of teaching by the
            teacher, it is the process to encourage the learning process of the
            student. Our main emphasis is on providing quality education and
            excellence in all the fields to inspire the students to be morally
            upright and possess qualities of integrity, truthfulness and
            honesty. Not only this, but we also develop patriotic, social and
            ethical values among students for developing responsive citizenship
            to revive the past glory of Indian culture.
          </p>
          <p className="rhis-text">
            <ul>
              <li>
                <strong>FRIENDLY</strong>: All our teachers are fully trained
                and treat children in a friendly manner.
              </li>
              <li>
                <strong>QUALIFIED</strong>: Backed by a well-qualified team of
                preschool teachers, we ensure to provide quality education.
              </li>
              {/* <li>
                <strong>EXPERIENCE</strong>: With immense experience, our early
                childhood educators educate and care for children with .
              </li> */}
              <li>
                <strong>PLAY AREAS</strong>: We have play spaces that your
                children will surely love! Our play areas keep children
                expressive & active.
              </li>
              <li>
                <strong>EDUCATION </strong>: Educational Trips conducted during
                a session to bring out the best in small children.
              </li>
              <li>
                <strong>LEARNING</strong>: Extra-curricular activities like art
                & Craft, dance class, conducted every week.
              </li>
            </ul>
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "bolder",
              marginTop: "0rem",
            }}
            className="rhis-text"
          >
            Our Vision
          </p>
          <p className="rhis-text">
            Some people follow a path they choose on their own. They discover
            their true calling. They chase their dreams with passion, and excel
            in their chosen discipline. But, best of all, they become what they
            want to be. Royal Hills International School is the school for such
            people. TO facilitate a learning environment that encourages
            children to bring out the best in themselves and enables their
            all-round development through the joy of learning.
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "bolder",
              marginTop: "0rem",
            }}
            className="rhis-text"
          >
            Our Mission
          </p>
          <p className="rhis-text">
            <ul>
              <li>
                To provide an environment that helps young minds freely learn
                and develop and help children evolve as complete individuals,
                ready to transform as leaders of the 21st Century with values
                and life skills inculcated in them.
              </li>
              <li>
                To help children in encouraging values such as creative ability
                - discover new ideas and skills.
              </li>
              <li>
                To inculcate positive values i.e. moral development through
                prayers, stories and poems.
              </li>
              <li>To foster independence and self-reliance.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rhis;
