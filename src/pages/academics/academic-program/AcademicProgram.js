import React from "react";
import "./AcademicProgram.css";
import rhis_acad_prog from "../../../media/latest/classroom-3.jpg";
import junior_acad_prog from "../../../media/latest/teacher.jpg";

const AcademicProgram = () => {
  return (
    <div className="academic-prog">
      <h1
        style={{
          textAlign: "center",
          margin: "6rem auto 1rem",
          padding: "1rem",
          width: "80%",
          borderBottom: "#ff7000 3px solid",
        }}
      >
        Academic Program
      </h1>
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        GIVE YOUR CHILD A HEAD START IN LIFE WITH SOME ADAVANTAGES
      </p>
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Our Programs for Early Child & Primary Education
      </p>

      <div className="flex-academics">
        <div className="txt-cont">
          <p
            style={{
              borderBottom: "2px solid #337c87",
              width: "80%",
            }}
          >
            <strong>Early Child Education (RHIS Junior)</strong>
          </p>
          <p>
            The Pre-Primary teaching broadly uses the Play Way Method to teach
            the curriculum. Through this method, teachers facilitate students to
            understand basic concepts of language and numbers thus giving them
            the first lessons in Life Skills. The Play Way Method is further
            reinforced by hands-on activities conducted in and out of the
            classroom. Field Trips, Nature Walks, Celebrations of Festivals,
            Topic-based Projects, form a regular and integral part of learning-
            through-doing.
          </p>
          <p>
            <strong>Play Group (Age Group: 1.5 – 2.5 Years)</strong>
            <br />
            Our play group provides children with a range of individual, small
            and large group activities.
            <br />
            <br />
            <strong>Nursery (Age Group: 2.5 – 3.5 Years)</strong>
            <br />
            In Nursery, children are engaged in school readiness activities such
            as reading, writing, counting numbers. Children are encouraged with
            group activities.
            <br />
            <br />
            <strong>Kindergarten</strong>
            <br />
            Junior KG (Age Group: 3.5 – 4.5 Years)
            <br />
            Senior KG (Age Group: 4.5 – 5.5 Years)
          </p>
        </div>
        <div className="img-cont">
          <img className="img-kid" src={junior_acad_prog} alt="kid playing" />
        </div>
      </div>

      <div className="flex-academics flex-r">
        <div className="txt-cont">
          <p
            style={{
              borderBottom: "2px solid #337c87",
              width: "80%",
            }}
          >
            <strong>
              Primary Education (Royal Hills International School)
            </strong>
          </p>
          <p>
            RHIS Sitamarhi follows a curriculum mapped as per the Central Board
            of Secondary Education. The curriculum followed is based on NCERT
            guidelines.
          </p>
          <p>
            {" "}
            For classes I — III the curriculum is theme-based. The idea behind
            this is to seamlessly integrate various subjects with a common
            thread which links them to practical aspect of life. This gives our
            students a holistic view and allows them to apply knowledge and
            correlate various subjects to real-life situations.
          </p>
          <p>
            The aims of teaching and learning mathematics are to encourage and
            enable students to recognize that mathematics permeates the world
            around us and appreciate the usefulness, power and beauty of
            mathematics. The purpose is achieved through teaching mathematics to
            the students of Classes I- V ina very innovative manner and develop
            their abstract, logical and critical thinking.
          </p>
          <p>
            {" "}
            From Class VI formal subjects like Physics, Chemistry, Biology and
            Political Science are introduced. NCERT books are followed in school
            but the methodology of delivery is unique. Lessons are planned so
            that students get to learn their subjects in a practical manner with
            a plethora of projects and activities.
          </p>
        </div>
        <div className="img-cont">
          <img className="img-kid" src={rhis_acad_prog} alt="kid playing" />
        </div>
      </div>
    </div>
  );
};

export default AcademicProgram;
