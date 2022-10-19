import React from "react";
import "./CurricularActivity.css";

const CurricularActivity = () => {
  return (
    <div className="co-curr-act-cont">
      <h1
        style={{
          textAlign: "center",
          margin: "5rem auto 1rem",
          padding: "1rem",
          width: "80%",
          borderBottom: "#ff7000 3px solid",
        }}
      >
        Co-Curricular Activities
      </h1>
      <div className="co-curr-content">
        <p
          style={{
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          BECAUSE LEARNING IS NOT LIMITED TO TEXT BOOKS AND EXAMS
        </p>
        <p>
          Co-curricular activities are integral part of life of a student in our
          school. At our school, our kids are not limited to just classroom
          learning. We regularly arrange activity-based learning opportunities
          for our children, which are fun-filled and educative at the same time.
        </p>
        <p>
          We also celebrate all the major festivals and significant days like
          Teacher’s Day, Children’s Day, World Environment Day. These activities
          sharpen softer skills, the aesthetic senses, sensitivity of feelings,
          dignity of labor and team work.
        </p>

        <div className="grid-cont">
          <div>
            <p>
              <span>
              Counselling and guidance
              </span>
            </p>
          </div>

          <div>
            <p>
              <span>
              Competitions
              </span>
            </p>
          </div>

          <div>
            <p>
              <span>
              Daily Assembly
              </span>
            </p>
          </div>

          <div>
            <p>
              <span>
              Celebration of Special Assemblies and Festivals
              </span>
            </p>
          </div>

          <div>
            <p>
              <span>
              Recreational Activities
              </span>
            </p>
          </div>

          <div>
            <p>
              <span>
              Educational Tours and Excursions
              </span>
            </p>
          </div>

          <div>
            <p>
              <span>
              Indoor and Outdoor Sports
              </span>
            </p>
          </div>

          <div>
            <p>
              <span>
              Physical exercise and Yoga
              </span>
            </p>
          </div>

          <div>
            <p>
              <span>
              Free Health Check-up Camps
              </span>
            </p>
          </div>

          <div>
            <p>
              <span>
              Social initiatives
              </span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CurricularActivity;
