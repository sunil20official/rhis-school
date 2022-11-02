import "./Career.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Career = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [dob, setDob] = useState("");
  const [workExp, setWorkExp] = useState("");
  const [hqual, setHqual] = useState("");
  const [expertise, setExpertise] = useState("");
  const [type, setType] = useState("");
  const [msg, setMsg] = useState("");
  const [cv, setCv] = useState("");

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

  const OnSetDob = (e) => {
    setDob(e.target.value);
  };

  const OnSetWorkexp = (e) => {
    setWorkExp(e.target.value);
  };

  const OnSetHqual = (e) => {
    setHqual(e.target.value);
  };

  const OnSetExpertise = (e) => {
    setExpertise(e.target.value);
  };

  const OnSetType = (e) => {
    setType(e.target.value);
    console.log(type);
    console.log(e.target.value);
  };

  const OnSetMsg = (e) => {
    setMsg(e.target.value);
  };

  const OnSetCv = (e) => {
    setCv(e.target.value);
    console.log(e.target.value);
  };

  const OnSendInquiry = (e) => {
    e.preventDefault();

    if (
      fname == "" ||
      lname == "" ||
      phone == "" ||
      email == "" ||
      dob == "" ||
      workExp == "" ||
      hqual == "" ||
      expertise == "" ||
      type == "" ||
      msg == "" ||
      cv == null
    ) {
      alert("Plese Enter all the Details");
    } else {
      emailjs
        .sendForm(
          "service_wvgq9fa",
          "template_jejihkm",
          form.current,
          "wZ5tg1ipI-zrH-NCJ"
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
          alert("Your Application has been submitted successfully");
          setFname("");
          setLname("");
          setEmail("");
          setPhone("");
          setDob("");
          setWorkExp("");
          setHqual("");
          setExpertise("");
          setType("");

          setMsg("");
          setCv(null);
        });
    }
  };

  return (
    <div className="career-pg-cont">
      <h1
        style={{
          textAlign: "center",
          margin: "7rem auto 2rem",
          padding: "1rem",
          width: "80%",
          borderBottom: "#ff7000 3px solid",
        }}
      >
        Careers
      </h1>

      <p style={{ fontFamily: "ui-monospace", color: "mediumvioletred" }}>
        RHIS Sitamarhi employs best practices insofar providing career
        opportunities to aspiring educationists are concerned. We do believe
        that teaching is the noblest of professions. As such we believe in
        providing a work environment that is not only conducive to the growth of
        an individual but also in compensating our teachers with the best
        remuneration paid in the industry. Other links in this section detail
        careers at RHIS Sitamarhi.
      </p>

      <p style={{ fontFamily: "ui-monospace" }}>
        Please read carefully the guidelines given below and only after you have
        understood everything should you proceed to fill and submit the
        Application Form.
      </p>

      <h5
        style={{
          fontWeight: "bold",
          textAlign: "center",
          margin: "5rem auto 1rem",
          padding: "1rem",
          width: "80%",
          borderBottom: "#ff7000 2px solid",
        }}
      >
        GUIDELINES FOR APPLICATION
      </h5>

      <p>
        <ol>
          <li>
            <p>
              The Teacher Application Form is only made available from school.
              You can fill this query form if you are interested.
            </p>
          </li>
          <li>
            <p>
              Provide only as much information as is asked for; not more, not
              less.
            </p>
          </li>
          <li>
            <p>
              Ensure that the email ID and mobile phone number that you enter
              are correct as these will be important modes of communication
              during the recruitment process.
            </p>
          </li>
          <li>
            <p>
              Incomplete, incorrect or wrong information will render your
              candidature liable to be rejected at any stage of the recruitment
              process, hence please ensure correctness and accuracy.
            </p>
          </li>
          <li>
            <p>Once submitted, no changes can be made in the Form.</p>
          </li>
          <li>
            <p>
              Filling up multiple Application Forms is not acceptable. Only the
              Form filled up first will be considered.
            </p>
          </li>
          <li>
            <p>
              Following documents should be kept ready before starting the
              process of filling up the Application Form.
              <ul>
                <li>PAN Card</li>
                <li>Aadhaar Card</li>
                <li>Your Certificates / Degrees / Marks Sheets / Resume</li>
                <li>
                  Copy of your colored passport-size photograph focusing on the
                  face, above the neck.
                </li>
              </ul>
            </p>
          </li>
          <li>
            <p>
              Retain the Application Form Number that is communicated to you
              after submission of the Form.
            </p>
          </li>
          <li>
            <p>
              If shortlisted, we will contact you through email, telephonic
              conversation once all Application Forms have been scrutinized. The
              email will contain the process snapshot explaining complete
              procedure.
            </p>
          </li>
        </ol>
      </p>
      <p>
        <strong>
          Best Wishes,
          <br />
          Team RHIS
        </strong>
      </p>

      {/* -----------------------   Application Form -------------------- */}

      <h5
        style={{
          fontWeight: "bold",
          textAlign: "center",
          margin: "5rem auto 1rem",
          padding: "1rem",
          width: "80%",
          borderBottom: "#ff7000 2px solid",
        }}
      >
        Application Form
      </h5>

      <form className="row g-3" ref={form}>
        <h6 style={{ fontWeight: "bold", marginTop: "2rem" }}>
          Personal Details
        </h6>

        <div className="col-md-6">
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
            required
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
            required
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

        <div className="col-md-6">
          <label htmlFor="dob" className="form-label">
            Date of Birth (dd/MM/YYYY)
          </label>
          <input
            type="text"
            name="dob"
            value={dob}
            onChange={OnSetDob}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="workexp" className="form-label">
            Work Experience (in Years)
          </label>
          <input
            type="number"
            name="workexp"
            value={workExp}
            onChange={OnSetWorkexp}
            className="form-control"
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="hqual" className="form-label">
            Highest Qualification
          </label>
          <input
            type="text"
            name="hqal"
            value={hqual}
            onChange={OnSetHqual}
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="expertise" className="form-label">
            Expertise
          </label>
          <input
            type="text"
            name="expertise"
            value={expertise}
            onChange={OnSetExpertise}
            className="form-control"
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="expertise" className="form-label">
            Applying For
          </label>
          <select
            class="form-select"
            name="type"
            aria-label="Default select example"
            value={type}
            onChange={OnSetType}
          >
            <option selected>Choose</option>
            <option value="teaching">Teaching</option>
            <option value="non-teaching">Non Teaching</option>
          </select>
        </div>

        <h6 style={{ fontWeight: "bold", marginTop: "2rem" }}>Other Details</h6>

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

        <div className="col-12">
          <label htmlFor="cv" className="form-label">
            CV link
          </label>
          <input
            type="text"
            className="form-control"
            name="cv"
            value={cv}
            onChange={OnSetCv}
            placeholder="Enter your resume link . . ."
          />
          <p style={{ color: "red", fontSize: "12px" }}>
            <strong>Note</strong>: Upload your resume to Google Drive and grant
            view access. Please paste the link in the above field.
          </p>
        </div>

        <div style={{ margin: "4rem auto", textAlign: "center" }}>
          <button
            style={{ background: "#337c87", color: "white" }}
            type="button"
            class="btn"
            onClick={OnSendInquiry}
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default Career;
