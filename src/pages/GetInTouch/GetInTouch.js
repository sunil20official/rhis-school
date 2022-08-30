import React, { useState } from "react";
import "./GetInTouch.css";
import { GoLocation } from "react-icons/go";
import {MdEmail} from 'react-icons/md';
import {BsFillTelephoneFill} from 'react-icons/bs';

const GetInTouch = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <div style={{ margin: "5rem 0rem" }}>
          <h1
            style={{
              margin: "2rem auto",
              paddingBottom: "1rem",
              textAlign: "center",
              borderBottom: "3px solid #f89503",
              width: "60%",
            }}
          >
            Get In Touch
          </h1>
          <form className="row g-2">
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
            <div className="col-12" style={{ textAlign: "center" }}>
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="address-container">
        <h1
          style={{
            margin: "2rem auto",
            borderBottom: "3px solid #f89503",
            width: "60%",
            paddingBottom: "1rem",
            textAlign: "center",
          }}
        >
          Reach Us
        </h1>
        <div>
          <div className="address" style={{ marginBottom:"2rem"}}>
            <GoLocation style={{ fontSize: "35px" }} />
            <p style={{width:"80%"}}>address jdskl a jfioeuroi ewuuori ewuori uewoi ruoie tuoiewr uoie uroiew uroiew uroi ewuroi ewuroi</p>
          </div>
          <div className="address">
            <MdEmail style={{ fontSize: "35px" }} />
            <p style={{width:"80%", marginBottom:"0px"}}>royalhillsinternationalschool@gmail.com</p>
          </div>
          <div className="address" style={{marginTop:"2rem"}}>
            <BsFillTelephoneFill style={{ fontSize: "30px"}} />
            <p style={{width:"80%", marginBottom:"0px"}}>12345678945678</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
