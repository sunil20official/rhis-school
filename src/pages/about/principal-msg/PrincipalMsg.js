import React from 'react';
import '../../../shared/management/Management.css';
// import principal from '../../../media/principal_image.jpg';

const PrincipalMsg = () => {
	return (
    <>
      <h1
        style={{
          textAlign: "center",
          margin: "6rem auto 0rem",
          padding: "2rem",
          width: "80%",
          borderBottom: "#ff7000 3px solid",
        }}
      >
        Principal's Message
      </h1>
      <div className="management-container">
        <div className="man-image-container">
          <img
            className="management-image"
            // src={principal}
            alt="principal of school"
          />
        </div>
        <div className="man-message-container">
          <h4
            style={{
              fontWeight: "700",
              marginLeft: "0px",
              color: "rgb(5, 64, 153)",
            }}
          >
            {" "}
            Name of Principal{" "}
          </h4>
          <h6
            style={{
              marginBottom: "0px",
              fontWeight: "700",
              marginLeft: "0px",
            }}
          >
            Principal,
          </h6>
          <p style={{ color: "rgb(92, 147, 210)" }}> RHIS Sitamarhi</p>
          <p className="management-message">
            It gives me immense pleasure of accomplishment to be addressed as
            the Principal and successfully impart years of knowledge and wisdom
            to this prestigious institute. The High academic standards of this
            school have strived well to maintain the excellence and the
            ever-changing dynamics of the education sector.
            <br /><br />
            In order to let them
            attain their highest potential, we shape our student’s minds with
            knowledge and provide a variety of opportunities that ensures their
            self-growth. The role of a school is to strengthen the character and
            make students ready to withstand the upcoming challenges of life. We
            want our students to develop a sense of pride in everything they do
            without merely focusing on being competitive. We aim to build giant
            strides with our curriculum and utmost dedication with constant hard
            work. We thoroughly seek to build personalities from their initial
            days of education so that they can excel in all their future
            prospects.
            <br/><br/>
            We are a dedicated team of faculty sheerly enthusiastic
            about shaping the future of the students and making them compatible
            enough for this fiercely competitive world. Also, we take pride in
            providing a congenial atmosphere for learning and developing
            exemplary stamina with a lot of courage and compassion to deal with
            things. With all things being said, we ensure you that the students
            enrolled here will get the right knowledge along with the collective
            guidance in shaping them into better individuals with all the values
            and high Morales.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrincipalMsg;
