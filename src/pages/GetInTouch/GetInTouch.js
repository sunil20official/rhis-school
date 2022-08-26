import React, { useState } from "react";

const GetInTouch = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setData({...data,[e.target.name]:e.target.value})
  }

  return (
    <div style={{ margin: "5rem 0rem" }} data-aos="fade-up">
      <h1 style={{marginBottom:"2rem", textAlign:"center"}}>Get In Touch</h1>
      <form className="row g-3">
        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            name="first_name"
            value={data.first_name}
            onChange={onChange}
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationDefault02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            name="last_name"
            id="validationDefault02"
            value={data.last_name}
            onChange={onChange}
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationDefaultUsername" className="form-label">
            Email
          </label>
          <div className="input-group">
            <span className="input-group-text" id="inputGroupPrepend2">
              @
            </span>
            <input
              type="text"
              className="form-control"
              name="email"
              id="validationDefaultUsername"
              aria-describedby="inputGroupPrepend2"
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="input-group">
          <span className="input-group-text"> Message </span>
          <textarea
            className="form-control"
            name="message"
            aria-label="With textarea"
            onChange={onChange}
            style={{ height: "10rem" }}
          ></textarea>
        </div>
        <div className="col-12" style={{textAlign:"center"}}>
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
