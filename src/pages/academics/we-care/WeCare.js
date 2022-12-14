import React from "react";
import "./WeCare.css";
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import { GiCctvCamera } from "react-icons/gi";
import { GiSecurityGate } from "react-icons/gi";
import { FaChild } from "react-icons/fa";
import { MdOutlineCoronavirus } from "react-icons/md";

const WeCare = () => {
  return (
    <div className="wecare-page-cont">
      <h1
        style={{
          textAlign: "center",
          margin: "7rem auto 1rem",
          padding: "1rem",
          borderBottom: "#ff7000 3px solid",
        }}
      >
        We Care
      </h1>
      <p
        style={{
          textAlign: "center",
        }}
      >
        YOUR CHILD’S SAFETY IS OUR PRIORITY
      </p>

      <div className="we-care-list-container">
        <p style={{ fontWeight: "bold" }}>
          A Safe and sound environment for your Child.
        </p>

        {/* one */}
        <div className="care-cards-cont">
          <div className="care-cont">
            <p className="care-text">
              Our Teachers are certified which means that they are well trained
              to prevent any form of child abuse.
            </p>
            <div className="care-img-cont">
              <AiOutlineSafetyCertificate className="care-img" />
            </div>
          </div>
          {/* two */}
          <div className="care-cont">
            <p className="care-text">
              CCTV Surveillance – All rooms and areas are under constant CCTV
              surveillance.
            </p>
            <div className="care-img-cont">
              <GiCctvCamera className="care-img" />
            </div>
          </div>
          {/* three */}
          <div className="care-cont">
            <p className="care-text">
              No Un-Authorized Access – Besides a caring and secure environment,
              we make sure that no child is ever left alone. This is done by
              keeping all unused rooms locked during school hours and by
              ensuring zero access to unauthorized persons.
            </p>
            <div className="care-img-cont">
              <GiSecurityGate className="care-img" />
            </div>
          </div>
          {/* four */}
          <div className="care-cont">
            <p className="care-text">
              Child’s Wellbeing – These measures ensure that your child’s
              emotional, physical and social well-being will be taken care of,
              at every point of time.
            </p>
            <div className="care-img-cont">
              <FaChild className="care-img" />
            </div>
          </div>
          {/* fifth */}
          <div className="care-cont">
            <p className="care-text">
              COVID-19 Response – Proper sanitization process is being followed
              in school premises after school hours daily.
            </p>
            <div className="care-img-cont">
              <MdOutlineCoronavirus className="care-img" />
            </div>
          </div>
        </div>

        {/*  */}
        {/* <ul>
          <li>
            <p>
              Our Teachers are certified which means that they are well trained
              to prevent any form of child abuse.
            </p>
          </li>
          <li>
            <p>
              CCTV Surveillance – All rooms and areas are under constant CCTV
              surveillance.
            </p>
          </li>
          <li>
            <p>
              No Un-Authorized Access – Besides a caring and secure environment,
              we make sure that no child is ever left alone. This is done by
              keeping all unused rooms locked during school hours and by
              ensuring zero access to unauthorized persons.
            </p>
          </li>
          <li>
            <p>
              Child’s Wellbeing – These measures ensure that your child’s
              emotional, physical and social well-being will be taken care of,
              at every point of time.
            </p>
          </li>
          <li>
            <p>
              COVID-19 Response – Proper sanitization process is being followed
              in school premises after school hours daily.
            </p>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default WeCare;
