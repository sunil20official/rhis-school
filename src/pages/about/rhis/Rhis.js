import React from "react";
import "./Rhis.css";
import rhisImg from "../../../media/rhis-image.png";

const Rhis = () => {
  return (
    <div className="main-container-rhis">
      <div className="rhis-container">
        <div className="heading-cont">
          <h1 style={{ textAlign: "center"}}>
            Royal Hills
          </h1>
          <p
            style={{ textAlign: "center",fontSize: "20px"}}
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
            Royal Hills International School Junior was established to provide a
            platform of great opportunities to every child. We endeavor to
            provide exceptional care to our children in a safe and secure
            environment where children feel loved and develop to their fullest
            potential. Here children are not just given wings, but the school
            also ensures that they develop strong Royal Hills International
            School Junior. Most importantly, children are loved and made to feel
            cherished so that they approach life with a positive attitude.
          </p>
          <p className="rhis-text">
            The curriculum at Royal Hills International School Junior is
            conceived in such a way that everything the child learns at the
            preschool prepares him for an easy transition into Grade 1 in any
            formal schools. This smooth step towards a bigger future is
            accomplished via series of activities that are woven into academic
            programs.
          </p>
          <p className="rhis-text">
            We are here for upgrading all round development of the children and
            facilitating the youthful minds to cope with ever – growing
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
          <h4>Our Vision</h4>
          <p className="rhis-text">
            To establish an ideal preschool chain that leads in offering a
            powerful foundation to young children who will joyfully take-off on
            the journey to discover the world of happy thinking, learning and to
            create global citizens.
          </p>
          <h4>Our Mission</h4>
          <p className="rhis-text">
            <ul>
              <li>
                <strong>Transformation of the Education System</strong>: To
                revolutionize the education system so that children are imparted
                'Education for Life' which encompasses not only knowledge but
                also enhances the talents and life skills necessary for the
                holistic development of the child.
              </li>
              <li>
                <strong>Transformation of Parenting</strong>: To guide and
                enlighten parents about positive parenting so as to enable them
                to make their parenting experience richer, more joyful and more
                rewarding.
              </li>
              <li>
                <strong>
                  Transformation in the role and status of teachers
                </strong>
                : To elevate the status and widen the horizons of teachers by
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

export default Rhis;
