import React, { useState, useRef } from "react";
import "./GetInTouch.css";

import emailjs from "@emailjs/browser";
import { GoLocation } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const GetInTouch = () => {
  const form = useRef();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const onChangeFname = (e) => {
    setFname(e.target.value);
  };
  const onChangeLname = (e) => {
    setLname(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeMsg = (e) => {
    setMsg(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (fname === "" || lname === "" || email === "" || msg === "") {
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
  };

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
              width: "80%",
              paddingBottom: "1rem",
              textAlign: "center",
            }}
          >
            Head Office
          </h1>
          <div>
            <div className="address" style={{ marginBottom: "2rem" }}>
              <GoLocation style={{ fontSize: "35px" }} />
              <p style={{ width: "70%" }}>
                Lerro Learning Foundation, <br />
                201-Maa Enclave, Kesari Nagar, Veer Kunwar Singh Chowk, <br />
                Patna - 800024
              </p>
            </div>
            <div className="address">
              <MdEmail style={{ fontSize: "35px" }} />
              <p
                style={{
                  width: "70%",
                  marginBottom: "0px",
                  wordBreak: "break-all",
                }}
              >
                info@rhis.co.in
              </p>
            </div>
            <div className="address" style={{ marginTop: "2rem" }}>
              <BsFillTelephoneFill style={{ fontSize: "30px" }} />
              <p style={{ width: "70%", marginBottom: "0px" }}>
                +91 612 228 0026 / 9031662034
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="branch-main-container">
        <h1
          style={{
            margin: "2rem auto",
            borderBottom: "3px solid #f89503",
            width: "80%",
            paddingBottom: "1rem",
            textAlign: "center",
          }}
        >
          Our Branches
        </h1>
        <div className="branch-container">
          <div className="address-container1">
            <h3
              style={{
                margin: "2rem auto",
                paddingBottom: "1rem",
                textAlign: "center",
              }}
            >
              RHIS, Sitamarhi
              <hr />
            </h3>

            <div>
              <div className="address" style={{ marginBottom: "2rem" }}>
                <GoLocation style={{ fontSize: "35px" }} />
                <p style={{ width: "70%" }}>
                  Admin Office, RHIS Building, Nahar Road, Near Nahar Chowk,
                  <br />
                  Shanti Nagar, Sitamarhi BIHAR - 843302
                </p>
              </div>
              <div className="address">
                <MdEmail style={{ fontSize: "35px" }} />
                <p
                  style={{
                    width: "70%",
                    marginBottom: "0px",
                    wordBreak: "break-all",
                  }}
                >
                  info@rhis.co.in
                </p>
              </div>
              <div className="address" style={{ marginTop: "2rem" }}>
                <BsFillTelephoneFill style={{ fontSize: "30px" }} />
                <p style={{ width: "70%", marginBottom: "0px" }}>
                  9031662031 /9031662033
                </p>
              </div>
            </div>
          </div>

          <div className="address-container2">
            <h3
              style={{
                margin: "2rem auto",
                paddingBottom: "1rem",
                textAlign: "center",
              }}
            >
              RHIS JUNIOR, Sitamarhi
              <hr />
            </h3>

            <div>
              <div className="address" style={{ marginBottom: "2rem" }}>
                <GoLocation style={{ fontSize: "35px" }} />
                <p style={{ width: "70%" }}>
                  Admin Office, RHIS Building, Nahar Road, Near Nahar Chowk,
                  <br />
                  Shanti Nagar, Sitamarhi BIHAR - 843302
                </p>
              </div>
              <div className="address">
                <MdEmail style={{ fontSize: "35px" }} />
                <p
                  style={{
                    width: "70%",
                    marginBottom: "0px",
                    wordBreak: "break-all",
                  }}
                >
                  info@rhis.co.in
                </p>
              </div>
              <div className="address" style={{ marginTop: "2rem" }}>
                <BsFillTelephoneFill style={{ fontSize: "30px" }} />
                <p style={{ width: "70%", marginBottom: "0px" }}>
                  9031662031 /9031662033
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ivr-container">
          <p>
            <h5
              style={{
                color: "#082a59",
                textAlign: "center",
                fontWeight: "bolder",
                letterSpacing: "1px",
                textTransform: "capitalize",
              }}
            >
              important points
              <hr />
            </h5>
            <div
              style={{
                fontWeight: "bolder",
                fontSize: "14px",
                margin: "20px 0px",
                textAlign: "center",
              }}
            >
              In order to reach out to us in case of any queries, inquiries or
              complaints. please dial toll free number
              <span style={{ color: "#a6153e" }}>
                {" "}
                +91 612 228 0026 / 9031662034
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ul className="ivr-list">
                <li>
                  <span style={{ color: "#a6153e" }}>Dial 9031662031 –</span>{" "}
                  Connect with Front Desk Office (For Admission
                  Enquiry/Appointment)
                </li>
                <li>
                  <span style={{ color: "#a6153e" }}>Dial 9031662033 –</span>{" "}
                  Connect Accounts Department (For Fee Enquiry)
                </li>
                <li>
                  <span style={{ color: "#a6153e" }}>Dial 9031662032 –</span>{" "}
                  Connect Transport Department (For Transport Enquiry)
                </li>
                {/* <li>
                  <span style={{ color: "#a6153e" }}>Dial 4 –</span> Connect for
                  Feedbacks and Complaints
                </li> */}
              </ul>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
