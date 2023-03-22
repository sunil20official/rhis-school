import React from 'react';
import '../../../shared/management/Management.css';
import director from '../../../media/director-img.jpg';

const DirectorDesk = () => {
	return (
    <>
      <h1
        style={{
          textAlign: "center",
          padding: "2rem",
          width: "80%",
          borderBottom: "#ff7000 3px solid",
          margin: "6rem auto 0.5rem",
          letterSpacing: "1px",
        }}
      >
        Director's Desk
      </h1>
      <div className="management-container">
        <div className="man-image-container">
          <img
            className="management-image"
            src={director}
            alt="director of school"
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
            Ashutosh Vibhu{" "}
          </h4>
          <h6 style={{ marginBottom: "0px", fontWeight: "700" }}>Director,</h6>
          <p style={{ color: "rgb(92, 147, 210)" }}>
            {" "}
            RHIS , Lerro Learning Foundation
          </p>
          <p className="management-message">
            <strong>
              "Somewhere, something incredible is waiting to be known." -Carl
              Sagan
            </strong>{" "}
            <br />
            <br />
            This quote is relevant for all of us: children, parents and
            teachers. RHIS focuses on all-round development of its students.
            Education is the most powerful tool to enrich one's personality and
            also to inculcate positive changes in society. It is the only medium
            that enables us to move from darkness to light. I strongly believe
            that the education system is the most influential factor to drive
            and improve our nation's prosperity and social- economic well-being.
            <br />
            <br />
            The school is founded on the belief that children should be
            encouraged to dream, and passionately pursue their dreams. We work
            towards opening their minds, help them identify their interests and
            aspirations, and nourish their individual talents. We believe that
            every one of our students has the potential to become a leader of
            tomorrow.
            <br />
            <br />
            We should all remember that "Honesty is the first chapter in the
            book of wisdom" and we should inculcate honesty and integrity in all
            that we do. I earnestly hope and trust that the academicians and
            budding children will continue to work with sincerity, honesty and
            dedication and thereby contribute to make this world a better place
            to live.
          </p>
        </div>
      </div>
    </>
  );
};

export default DirectorDesk;
