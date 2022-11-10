import React, { useState,useRef } from 'react';
import './GetInTouch.css';

import emailjs from "@emailjs/browser";
import { GoLocation } from 'react-icons/go';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';

const GetInTouch = () => {
  const form = useRef();
	const [fname, setFname] = useState('');
	const [lname, setLname] = useState('');
	const [email, setEmail] = useState('');
	const [msg, setMsg] = useState('');

	const onChangeFname = (e) => {
		setFname(e.target.value)
  };
  const onChangeLname = (e) => {
    setLname(e.target.value);
  };
  const onChangeEmail = (e) => {
		setEmail(e.target.value)
  };
  const onChangeMsg = (e) => {
    setMsg(e.target.value);
  };
  
  const submitForm = (e) => {
    e.preventDefault();

    if (
      fname === "" ||
      lname === "" ||
      email === "" ||
      msg === ""
    ) {
      alert("Plese Enter all the Details");
    } else {
      emailjs
        .sendForm(
          "service_pgh2s4a",
          "template_f50dqay",
          form.current,
          "5mzFEWSgXxF6meZf1"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        )
        .then(() => {
          alert(
            "Form submitted successfully , We will get back to you very soon"
          );
          setFname("");
          setLname("");
          setEmail("");
          setMsg("");
        });
    }
  }

	return (
    <>
      <div className="get-in-touch-container">
        <div className="get-in-touch-form-container">
          <div style={{ margin: "6rem 0rem" }}>
            <h1
              style={{
                margin: "2rem auto",
                paddingBottom: "1rem",
                textAlign: "center",
                borderBottom: "3px solid #f89503",
                // width: '35%',
              }}
            >
              Get In Touch
            </h1>
            <form className="row g-2" ref={form}>
              {/* this input is basically to provide the subject value in the emaijs mails and it will be always hidden */}
              <input
                style={{ display: "none" }}
                type="text"
                name="subject"
                value="GET IN TOUCH"
                className="form-control"
              />
              {/* ------------------ */}
              <div className="col-md-6">
                <label htmlFor="validationDefault01" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  name="fname"
                  value={fname}
                  onChange={onChangeFname}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="validationDefault02" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lname"
                  id="validationDefault02"
                  value={lname}
                  onChange={onChangeLname}
                  required
                />
              </div>
              <div className="col-md-12">
                <label
                  htmlFor="validationDefaultUsername"
                  className="form-label"
                >
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
                    value={email}
                    onChange={onChangeEmail}
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
                  value={msg}
                  onChange={onChangeMsg}
                  style={{ height: "10rem" }}
                ></textarea>
              </div>
              <div className="col-12" style={{ textAlign: "center" }}>
                <button className="btn btn-primary" onClick={submitForm}>
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
              paddingBottom: "2rem",
              textAlign: "center",
            }}
          >
            Head Office
          </h1>
          <div>
            <div className="address" style={{ marginBottom: "2rem" }}>
              <GoLocation style={{ fontSize: "35px" }} />
              <p style={{ width: "70%" }}>
                Admin Office , RHIS Building , Nahar Road,
                <br /> Near Nahar Chowk , Shanti Nagar ,Sitamarhi ,<br />
                BIHAR - 843302
              </p>
            </div>
            <div className="address">
              <MdEmail style={{ fontSize: "35px" }} />
              <p style={{ width: "70%", marginBottom: "0px" }}>
                royalhillsinternationalschool@gmail.com
              </p>
            </div>
            <div className="address" style={{ marginTop: "2rem" }}>
              <BsFillTelephoneFill style={{ fontSize: "30px" }} />
              <p style={{ width: "70%", marginBottom: "0px" }}>9031706635</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", margin: "2rem 0rem" }}>
        <iframe
          title="location of royal hills internation school"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.084294872143!2d85.51515241487566!3d26.581670183271243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecf1b60f77444b%3A0x945ee11e49dab320!2sRoyal%20Hills%20International%20School%20Junior!5e0!3m2!1sen!2sin!4v1662620024754!5m2!1sen!2sin"
          className="map"
          height="400"
          style={{ border: "2px soild black" }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="branch-main-container">
        <h1
          style={{
            margin: "2rem auto",
            borderBottom: "3px solid #f89503",
            width: "60%",
            paddingBottom: "2rem",
            textAlign: "center",
          }}
        >
          Our Branches
        </h1>
        <div className="branch-container">
          <div className="address-container1">
            <h1
              style={{
                margin: "2rem auto",
                borderBottom: "3px solid #f89503",
                // width: '30%',
                paddingBottom: "2rem",
                textAlign: "center",
              }}
            >
              RHIS, Sitamarhi
            </h1>
            <div>
              <div className="address" style={{ marginBottom: "2rem" }}>
                <GoLocation style={{ fontSize: "35px" }} />
                <p style={{ width: "70%" }}>
                  Royal Hills INternational School , RHIS Building , Nahar Road,
                  <br /> Near Nahar Chowk , Shanti Nagar ,Sitamarhi ,<br />
                  BIHAR - 843302
                </p>
              </div>
              <div className="address">
                <MdEmail style={{ fontSize: "35px" }} />
                <p style={{ width: "70%", marginBottom: "0px" }}>
                  royalhillsinternationalschool@gmail.com
                </p>
              </div>
              <div className="address" style={{ marginTop: "2rem" }}>
                <BsFillTelephoneFill style={{ fontSize: "30px" }} />
                <p style={{ width: "70%", marginBottom: "0px" }}>9031706635</p>
              </div>
            </div>

            <div style={{ textAlign: "center", margin: "2rem 0rem" }}>
              <iframe
                title="location of royal hills internation school"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.084294872143!2d85.51515241487566!3d26.581670183271243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecf1b60f77444b%3A0x945ee11e49dab320!2sRoyal%20Hills%20International%20School%20Junior!5e0!3m2!1sen!2sin!4v1662620024754!5m2!1sen!2sin"
                className="map"
                height="400"
                style={{ border: "0px" }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="address-container2">
            <h1
              style={{
                margin: "2rem auto",
                borderBottom: "3px solid #f89503",
                // width: '30%',
                paddingBottom: "2rem",
                textAlign: "center",
              }}
            >
              Roots, Sitamarhi
            </h1>
            <div>
              <div className="address" style={{ marginBottom: "2rem" }}>
                <GoLocation style={{ fontSize: "35px" }} />
                <p style={{ width: "70%" }}>
                  ROOTS , RHIS Building , Nahar Road,
                  <br /> Near Nahar Chowk , Shanti Nagar ,Sitamarhi ,<br />
                  BIHAR - 843302
                </p>
              </div>
              <div className="address">
                <MdEmail style={{ fontSize: "35px" }} />
                <p style={{ width: "70%", marginBottom: "0px" }}>
                  royalhillsinternationalschool@gmail.com
                </p>
              </div>
              <div className="address" style={{ marginTop: "2rem" }}>
                <BsFillTelephoneFill style={{ fontSize: "30px" }} />
                <p style={{ width: "70%", marginBottom: "0px" }}>9031706635</p>
              </div>
            </div>

            <div style={{ textAlign: "center", margin: "2rem 0rem" }}>
              <iframe
                title="location of royal hills internation school"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.084294872143!2d85.51515241487566!3d26.581670183271243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecf1b60f77444b%3A0x945ee11e49dab320!2sRoyal%20Hills%20International%20School%20Junior!5e0!3m2!1sen!2sin!4v1662620024754!5m2!1sen!2sin"
                className="map"
                height="400"
                style={{ border: "0px" }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
