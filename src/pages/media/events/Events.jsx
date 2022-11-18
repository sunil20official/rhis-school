import React from 'react';
import './Events.css';
import event1 from '../../../media/images/events_sanskriti.jpg';
import event2 from '../../../media/images/events_budda_drawing.jpg';
import event3 from '../../../media/celebration.jpg';
import event4 from '../../../media/images/events_unknown1.jpg';
import event5 from '../../../media/images/flag-post.jpg';

const Events = () => {
  return (
    <div className="events-page-container">
      <h1
        style={{
          textAlign: "center",
          margin: "2rem auto 2rem",
          padding: "1rem",
          width: "80%",
          borderBottom: "#ff7000 3px solid",
        }}
      >
        Events
      </h1>
      <div className="events-container">
        <div className="event-grid">
          {/* first event card */}
          <div className="event-card">
            <div className="event-image-wrapper">
              <img className="event-image" src={event1} alt="" />
            </div>
            <div className="event-details">
              <h1 className="event-heading">Sanskriti Karyakram</h1>
              <p className="event-date">20 November, 2021</p>
            </div>
          </div>
          {/* second event card */}
          <div className="event-card">
            <div className="event-image-wrapper">
              <img className="event-image" src={event2} alt="" />
            </div>
            <div className="event-details">
              <h1 className="event-heading">Sanskriti Karyakram</h1>
              <p className="event-date">20 November, 2021</p>
            </div>
          </div>
          {/* third event card */}
          <div className="event-card">
            <div className="event-image-wrapper">
              <img className="event-image" src={event3} alt="" />
            </div>
            <div className="event-details">
              <h1 className="event-heading">Christmas Day</h1>
              <p className="event-date">25 December, 2021</p>
            </div>
          </div>
          {/* fourth event card */}
          <div className="event-card">
            <div className="event-image-wrapper">
              <img className="event-image" src={event4} alt="" />
            </div>
            <div className="event-details">
              <h1 className="event-heading">World Environment Day</h1>
              <p className="event-date">5 June, 2022</p>
            </div>
          </div>
          {/* fifth event card */}
          <div className="event-card">
            <div className="event-image-wrapper">
              <img className="event-image" src={event5} alt="" />
            </div>
            <div className="event-details">
              <h1 className="event-heading">Independence Day</h1>
              <p className="event-date">15 August, 2021</p>
            </div>
          </div>
          {/* sixth event card */}
          <div className="event-card">
            <div className="event-image-wrapper">
              <img className="event-image" src={event1} alt="" />
            </div>
            <div className="event-details">
              <h1 className="event-heading">Sanskriti Karyakram</h1>
              <p className="event-date">20 November, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events