import "./Franchise.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Franchise = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [parea, setParea] = useState("");
  const [carea, setCarea] = useState("");
  const [add1, setAdd1] = useState("");
  const [add2, setAdd2] = useState("");
  const [add3, setAdd3] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [msg, setMsg] = useState("");

  const form = useRef();

  const OnSetFname = (e) => {
    setFname(e.target.value);
    console.log("fname", fname);
  };

  const OnSetLname = (e) => {
    setLname(e.target.value);
    console.log("lname", lname);
  };

  const OnSetEmail = (e) => {
    setEmail(e.target.value);
    console.log("email", email);
  };

  const OnSetPhone = (e) => {
    setPhone(e.target.value);
    console.log("phone", phone);
  };

  const OnSetParea = (e) => {
    setParea(e.target.value);
  };

  const OnSetCarea = (e) => {
    setCarea(e.target.value);
  };

  const OnSetAdd1 = (e) => {
    setAdd1(e.target.value);
  };

  const OnSetAdd2 = (e) => {
    setAdd2(e.target.value);
  };

  const OnSetAdd3 = (e) => {
    setAdd3(e.target.value);
  };

  const OnSetCity = (e) => {
    setCity(e.target.value);
  };

  const OnSetState = (e) => {
    setState(e.target.value);
  };

  const OnSetZip = (e) => {
    setZip(e.target.value);
  };

  const OnSetMsg = (e) => {
    setMsg(e.target.value);
  };

  const OnSendInquiry = (e) => {
    e.preventDefault();

    if (
      fname === "" ||
      lname === "" ||
      email === "" ||
      phone === "" ||
      parea === "" ||
      carea === "" ||
      add1 === "" ||
      city === "" ||
      state === "" ||
      zip === "" ||
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
          setPhone("");
          setParea("");
          setCarea("");
          setAdd1("");
          setAdd2("");
          setAdd3("");
          setCity("");
          setState("");
          setZip("");
          setMsg("");
        });
    }
  };

  return (
    <div className="franchise-pg-cont">
      <h1
        style={{
          textAlign: "center",
          margin: "7rem auto 2rem",
          padding: "1rem",
          width: "80%",
          borderBottom: "#ff7000 3px solid",
        }}
      >
        Franchise
      </h1>

      {/* <h5
        style={{
          fontWeight: "bold",
          textAlign: "center",
          margin: "5rem auto 1rem",
          padding: "1rem",
          width: "80%",
          borderBottom: "#ff7000 2px solid",
        }}
      >
        Franchise Inquiry Form
      </h5> */}

      <p style={{ color: "red" }}>
        WE ARE LOOKING FOR PARTNERS WHO LOVE KIDS & HAVE A PASSION TO DO THIS
        BUSINESS WITH A LONG-TERM VISION. FILL OUT YOUR DETAILS BELOW AND WE
        WILL GET BACK TO YOU AS SOON AS POSSIBLE.
      </p>

      <form className="row g-3" ref={form}>
        <h6 style={{ fontWeight: "bold", marginTop: "2rem" }}>
          Personal Details
        </h6>

        <div className="col-md-6">
          {/* this input is basically to provide the subject value in the emaijs mails and it will be always hidden */}
          <input
            style={{ display: "none" }}
            type="text"
            name="subject"
            value="FRANCHISE INQUIRY"
            className="form-control"
          />
          {/* ------------------ */}
          <label htmlFor="fname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            name="fname"
            value={fname}
            onChange={OnSetFname}
            className="form-control"
            id="fname"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="lname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            name="lname"
            value={lname}
            onChange={OnSetLname}
            className="form-control"
            id="lname"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={OnSetEmail}
            className="form-control"
            id="email"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">
            Mobile No.
          </label>
          <input
            type="phone"
            name="phone"
            value={phone}
            onChange={OnSetPhone}
            className="form-control"
            id="phone"
          />
        </div>

        <h6 style={{ fontWeight: "bold", marginTop: "4rem" }}>
          Proposed Location Details
        </h6>
        <div className="col-md-6">
          <label htmlFor="plotarea1" className="form-label">
            Plot Area in Sq Yards
          </label>
          <input
            type="number"
            name="plotarea"
            value={parea}
            onChange={OnSetParea}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="coveredarea" className="form-label">
            Covered Area in Sq yards
          </label>
          <input
            type="number"
            name="coveredarea"
            value={carea}
            onChange={OnSetCarea}
            className="form-control"
            id="lname"
          />
        </div>

        <div className="col-12">
          <label htmlFor="address1" className="form-label">
            Address Line 1
          </label>
          <input
            type="text"
            className="form-control"
            name="address1"
            value={add1}
            onChange={OnSetAdd1}
          />
        </div>

        <div className="col-12">
          <label htmlFor="address2" className="form-label">
            Address Line 2
          </label>
          <input
            type="text"
            className="form-control"
            name="address2"
            value={add2}
            onChange={OnSetAdd2}
          />
        </div>

        <div className="col-12">
          <label htmlFor="address3" className="form-label">
            Address Line 3
          </label>
          <input
            type="text"
            className="form-control"
            name="address3"
            value={add3}
            onChange={OnSetAdd3}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={OnSetCity}
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <input
            type="text"
            name="state"
            value={state}
            onChange={OnSetState}
            className="form-control"
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="zip" className="form-label">
            Zip
          </label>
          <input
            type="number"
            name="zip"
            value={zip}
            onChange={OnSetZip}
            className="form-control"
          />
        </div>

        <h6 style={{ fontWeight: "bold" }}>Other Deails</h6>
        <div className="col-12">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            style={{ minHeight: "100px" }}
            type="text"
            className="form-control"
            name="message"
            value={msg}
            onChange={OnSetMsg}
          />
        </div>
        <div style={{ margin: "2rem auto 4rem", textAlign: "center" }}>
          <button
            style={{ background: "#337c87", color: "white" }}
            type="button"
            class="btn"
            onClick={OnSendInquiry}
          >
            Submit Inquiry
          </button>
        </div>
      </form>
    </div>
  );
};

export default Franchise;
