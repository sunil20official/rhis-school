import React from "react";
import "../rhis/Rhis.css";
import rootImg from "../../../media/rhis-image.png";

const Root = () => {
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
            RHIS JUNIOR
          </h1>
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            {" "}
            A Playway School
          </p>
        </div>
        <div className="rhis-img-cont">
          <img
            className="rhis-img"
            src={rootImg}
            alt="royal hills internation school"
          />
        </div>
        <div>
          <p style={{ marginTop: "2rem" }} className="rhis-text">
            Royal Hills International School Junior was established to provide a
            platform of great opportunities to every child. We endeavor to
            provide exceptional care to our children in a safe and secure
            environment where children feel loved and develop to their fullest
            potential. Here children are not just given wings, but the school
            also ensures that they develop strong roots. Most importantly,
            children are loved and made to feel cherished so that they approach
            life with a positive attitude.
          </p>
          <p className="rhis-text">
            The curriculum at RHIS Junior is conceived in such a way that
            everything the child learns at the pre school prepares him for an
            easy transition into Grade 1 in any formal schools. This smooth step
            towards a bigger future is accomplished via series of activities
            that are woven into academic programs.
          </p>
          <p className="rhis-text">
            We are here for upgrading all round development of the children and
            facilitating the youthful minds to cope with ever — growing
            challenges of life.
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
              <li>
                <strong>EXPERIENCE</strong>: With immense experience, our early
                childhood educators educate and care for children with .
              </li>
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
            To establish an ideal preschool chain that leads in offering a
            powerful foundation to young children who will joyfully take-off on
            the journey to discover the world of happy thinking, learning and to
            create global citizens.
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
                <strong>
                  Transformation in the role and status of teachers
                </strong>
                : To elevate the status and widen the horizons of teachers by
                equipping them with knowledge, expertise and skills required to
                transform them into leaders in education
              </li>
              <li>
                <strong>Transformation of Parenting :</strong> To guide and
                enlighten parents about positive parenting so as to enable them
                to make their parenting experience richer, more joyful and more
                rewarding.
              </li>
              <li>
                <strong>
                  Transformation in the role and status of teachers :
                </strong>{" "}
                To elevate the status and widen the horizons of teachers by
                equipping them with knowledge, expertise and skills required to
                transform them into leaders in education
              </li>
              <li>
                To initiate a vibrant journey that taps, unlocks and enhances
                the potentials of the pre-scholars who transform into courageous
                and motivated individuals.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Root;
