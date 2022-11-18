import React from "react";
import "../rhis/Rhis.css";
import rhisjunior from "../../../media/latest/classroom-5.jpg";
import vision from "../../../media/images/vision-image.jpg";
import mission from "../../../media/images/rhis-mission.jpg";
import { AiFillCheckCircle } from "react-icons/ai";

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
            RHIS - Junior
          </h1>
        </div>
        <div className="upper-half">
          <div className="rhis-img-cont">
            <img
              className="rhis-img"
              src={rhisjunior}
              alt="royal hills internation school"
            />
          </div>
          <div className="rhis-right-cont">
            <p style={{ marginTop: "2rem" }} className="rhis-text">
              Royal Hills International School Junior was established to provide
              a platform of great opportunities to every child. We endeavor to
              provide exceptional care to our children in a safe and secure
              environment where children feel loved and develop to their fullest
              potential. Here children are not just given wings, but the school
              also ensures that they develop strong Royal Hills International
              School Junior. Most importantly, children are loved and made to
              feel cherished so that they approach life with a positive
              attitude.
            </p>
            <p className="rhis-text">
              The curriculum at Royal Hills International School Junior is
              conceived in such a way that everything the child learns at the
              preschool prepares him for an easy transition into Grade 1 in any
              formal schools. This smooth step towards a bigger future is
              accomplished via a series of activities that are woven into
              academic programs.
            </p>
            <p className="rhis-text">
              We are here for upgrading all round development of the children
              and facilitating the youthful minds to cope with ever – growing
              challenges of life.
            </p>
          </div>
        </div>

        {/* properties section */}
        <div className="rhis-property">
          <ul className="prop-cont">
            <li>
              <AiFillCheckCircle className="checked-icon" />
              <span className="prop-title">FRIENDLY:</span>
              <span className="prop-text">
                All our teachers are fully trained and treat children in a
                friendly manner.{" "}
              </span>
            </li>
            <li>
              <AiFillCheckCircle className="checked-icon" />
              <span className="prop-title">QUALIFIED:</span>
              <span className="prop-text">
                Backed by a well-qualified team of teachers, we ensure to
                provide quality education.{" "}
              </span>
            </li>
            <li>
              <AiFillCheckCircle className="checked-icon" />
              <span className="prop-title">EXPERIENCE:</span>
              <span className="prop-text">
                With immense experience, our early childhood educators educate
                and care for children with perfection.{" "}
              </span>
            </li>
            <li>
              <AiFillCheckCircle className="checked-icon" />
              <span className="prop-title">PLAY AREAS:</span>
              <span className="prop-text">
                We have play spaces that your children will surely love! Our
                play areas keep children expressive & active.{" "}
              </span>
            </li>
            <li>
              <AiFillCheckCircle className="checked-icon" />
              <span className="prop-title">EDUCATION :</span>
              <span className="prop-text">
                Educational Trips conducted during a session to bring out the
                best in small children.{" "}
              </span>
            </li>
            <li>
              <AiFillCheckCircle className="checked-icon" />
              <span className="prop-title">LEARNING:</span>
              <span className="prop-text">
                Extra-curricular activities like art & Craft, dance class,
                conducted every week..{" "}
              </span>
            </li>
          </ul>
        </div>

        {/* mission and vision section */}
        <div className="vision-mission-cont">
          <div className="vision-box">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span className="horizontal-line-rhis"></span>
              <h2 className="vision-heading">Our Vision</h2>
            </div>
            <div
              style={{ padding: "20px 0px" }}
              className="vision-mission-content"
            >
              <p>
                To establish an ideal preschool chain that leads in offering a
                powerful foundation to young children who will joyfully take-off
                on the journey to discover the world of happy thinking, learning
                and to create global citizens.
              </p>
            </div>
          </div>
          <div className="mission-box">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span className="horizontal-line-rhis"></span>
              <h2 className="vision-heading">Our Mission</h2>
            </div>
            <div
              style={{ padding: "20px 0px" }}
              className="vision-mission-content"
            >
              <p>
                <ul>
                  <li>
                    <strong>Transformation of the Education System - </strong>To
                    revolutionize the education system so that children are
                    imparted 'Education for Life' which encompasses not only
                    knowledge but also enhances the talents and life skills
                    necessary for the holistic development of the child.
                  </li>
                  <li>
                    <strong>Transformation of Parenting - </strong>To guide and
                    enlighten parents about positive parenting so as to enable
                    them to make their parenting experience richer, more joyful
                    and more rewarding.
                  </li>
                  <li>
                    <strong>
                      Transformation in the role and status of teachers -
                    </strong>{" "}
                    To elevate the status and widen the horizons of teachers by
                    equipping them with knowledge, expertise and skills required
                    to transform them into leaders in education
                  </li>
                  <li>
                    To initiate a vibrant journey that taps, unlocks and
                    enhances the potentials of the pre-scholars who transform
                    into courageous and motivated individuals..
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
