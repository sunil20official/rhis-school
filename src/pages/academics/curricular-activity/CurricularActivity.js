import React from "react";
import "./CurricularActivity.css";
import { GiStairsGoal } from 'react-icons/gi';
import { MdOutlineEmojiEvents } from "react-icons/md";
import { FaPrayingHands } from "react-icons/fa";
import { MdOutlineFestival } from "react-icons/md";
import { GiPuzzle } from "react-icons/gi";
import { BiBus } from "react-icons/bi";
import { MdOutlineSportsHandball } from "react-icons/md";
import { TbYoga } from "react-icons/tb";
import { GiHealthNormal } from "react-icons/gi";
import { GiEarthAfricaEurope } from "react-icons/gi";

const CurricularActivity = () => {
  return (
    <div className="co-curr-act-cont">
      <h1
        style={{
          textAlign: "center",
          margin: "7rem auto 2rem",
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
          {/* 1 */}
          <div>
            <div className="curr-icon-cont">
              <GiStairsGoal className="curr-icon"></GiStairsGoal>
            </div>
            <p>
              <span>Counselling and guidance</span>
            </p>
          </div>
          {/* 2 */}
          <div>
            <div className="curr-icon-cont">
              {/* <img className="curr-icon" src={competition} alt='competition'></img> */}
              <MdOutlineEmojiEvents className="curr-icon"></MdOutlineEmojiEvents>
            </div>
            <p>
              <span>Competitions</span>
            </p>
          </div>
          {/* 3 */}
          <div>
            <div className="curr-icon-cont">
              <FaPrayingHands className="curr-icon"></FaPrayingHands>
            </div>
            <p>
              <span>Daily Assembly</span>
            </p>
          </div>
          {/* 4 */}
          <div>
            <div className="curr-icon-cont">
              <MdOutlineFestival className="curr-icon"></MdOutlineFestival>
            </div>
            <p>
              <span>Celebration of Special Assemblies and Festivals</span>
            </p>
          </div>
          {/* 5 */}
          <div>
            <div className="curr-icon-cont">
              <GiPuzzle className="curr-icon"></GiPuzzle>
            </div>
            <p>
              <span>Recreational Activities</span>
            </p>
          </div>
          {/* 6 */}
          <div>
            <div className="curr-icon-cont">
              <BiBus className="curr-icon"></BiBus>
            </div>
            <p>
              <span>Educational Tours and Excursions</span>
            </p>
          </div>
          {/* 7 */}
          <div>
            <div className="curr-icon-cont">
              <MdOutlineSportsHandball className="curr-icon"></MdOutlineSportsHandball>
            </div>
            <p>
              <span>Indoor and Outdoor Sports</span>
            </p>
          </div>
          {/* 8 */}
          <div>
            <div className="curr-icon-cont">
              <TbYoga className="curr-icon"></TbYoga>
            </div>
            <p>
              <span>Physical exercise and Yoga</span>
            </p>
          </div>
          {/* 9 */}
          <div>
            <div className="curr-icon-cont">
              <GiHealthNormal className="curr-icon"></GiHealthNormal>
            </div>
            <p>
              <span>Free Health Check-up Camps</span>
            </p>
          </div>
          {/* 10 */}
          <div>
            <div className="curr-icon-cont">
              <GiEarthAfricaEurope className="curr-icon"></GiEarthAfricaEurope>
            </div>
            <p>
              <span>Social initiatives</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurricularActivity;
