import React from "react";
import "./SocialInitiatives.css";

const SocialInitiatives = () => {
  return (
    <div className="social-init-cont">
      <h1
        style={{
          textAlign: "center",
          margin: "5rem auto 0rem",
          padding: "1rem",
          width: "80%",
          borderBottom: "#ff7000 3px solid",
        }}
      >
        Social Initiatives
      </h1>
      <p className="social-init-p" style={{ padding: "10px" }}>
        Lerro Learning Foundation seeks to give its students the oppurtunities
        to learn and grow in a changing environment , with the needed expertise
        , resources and information and asks them to heartily use these{" "}
        <b>powers</b> to be benifit to self and the society.
      </p>
      <p className="social-init-p" style={{ padding: "10px" }}>
        We strive to bring out these sense of balance in students , to help them
        aplly what they have learnt through <b>humility</b> and <b>wisdom</b>
      </p>

      <h4 style={{ textAlign: "center" }}>
        <strong>
          Some major Initiatives by Lerro Learning Foundation to Save Our Mother
          Earth{" "}
        </strong>
      </h4>

      {/*  ------------ box 1------------------ */}

      <div className="flex">
        <div className="img-cont">
          <img className="campaign-img" src="" alt="avoid plastic"></img>
        </div>
        <div className="text-cont">
          <p>
            <strong>Say No to Plastics -</strong>
          </p>
          <p className="social-init-p">
            Though it may be difficult to avoid the plastic bags at first, it
            needs to be done for the greater good. Plastic is slowly and
            steadily eating away our planet and damaging it. The government has
            banned the use of plastic bags but still, people continue to use it
            despite the ban. we must carry our own cloth or paper bags for
            shopping. Try to pack your food in steel or aluminum containers
            instead of plastic ones. We must encourage children to avoid the use
            of plastic bags. If we see someone using it, we must call them out
            immediately. Never throw away the plastic on roads, as animals die
            after consuming it. We must come together to initiate a ban on
            plastic and make the world safer and healthier.
          </p>
        </div>
      </div>

      {/*  ------------ box 2 ------------------ */}

      <div className="flex flex-rev">
        <div className="img-cont">
          <img className="campaign-img" src="" alt="avoid plastic"></img>
        </div>
        <div className="text-cont">
          <p>
            <strong>How to Save Water?</strong>
          </p>
          <p className="social-init-p">
            The best way to save water is to use it judiciously. Water pollution
            is another reason that has resulted in loss of fresh water on our
            mother earth. By not throwing industrial wastes in water bodies or
            by not discharging sewage supplies in water bodies, we can save
            water. Water Conservation or Rain water harvesting is the best
            method to save water for various purposes such as irrigation, car
            wash etc.
          </p>
          <p className="social-init-p">
            This initiative can help and promote the conservation of water.
            Also, it can be spread awareness among the people about the
            importance of water.
          </p>
        </div>
      </div>

      {/*  ------------ box 3 ------------------ */}

      <div className="flex">
        <div className="img-cont">
          <img className="campaign-img" src="" alt="avoid plastic"></img>
        </div>
        <div className="text-cont">
          <p>
            <strong>One Person One Sapling — World Environment Day</strong>
          </p>
          <p className="social-init-p">
            <strong>World Environment Day</strong> is celebrated on{" "}
            <strong>5th June</strong>, every year. People from more than 100
            countries celebrate this day. Furthermore, the world environment day
            is run by the United Nations Environment Program (UNEP) since the
            year 1973. The main purpose of celebrating this day was to spread
            awareness the conservation of our environment. With this initiative
            every individual promises mother earth to plant one sampling for
            conserving the environment
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialInitiatives;
