import React from "react";
import "./Admission.css";

const Admission = () => {
  return (
    <div style={{ margin: "5rem 0rem" }}>
      <h3
        style={{
          textAlign: "center",
          borderBottom: "3px solid #f89503",
          width: "60%",
          margin: "auto",
          padding: "15px 0px",
        }}
      >
        Enquiry Form
      </h3>
      <form className="row g-2 admn-form">
        <div className="col-md-6">
          <label htmlFor="validationDefault01" className="form-label">
            Parent's name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            name="first_name"
            // value={data.first_name}
            // onChange={onChange}
            required
          />
        </div>
        <div className="col-md-6">
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
              // onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault01" className="form-label">
            Mobile Number
          </label>
          <input
            type="phone"
            placeholder="mobile number"
            className="form-control"
            id="validationDefault01"
            name="mobile"
            // value={data.first_name}
            // onChange={onChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="select-aca-year" className="form-label">
            Year Of Admission
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected> Select Academic Year</option>
            <option value="1">2022-23</option>
            <option value="2">2023-24</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="select-city" className="form-label">
            Current City
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected> Select City</option>
            <option value="1">Ajmer</option>
            <option value="2">Aurangabad</option>
            <option value="2">banglore</option>
            <option value="2">Aurangabad</option>
            <option value="2">Aurangabad</option>
            <option value="2">Aurangabad</option>
            <option value="2">Aurangabad</option>
            <option value="2">Aurangabad</option>
            <option value="2">Aurangabad</option>
            <option value="2">Aurangabad</option>
            <option value="2">Aurangabad</option>
            <option value="2">Aurangabad</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="select-aca-year" className="form-label">
            Education Board
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected> Select Board</option>
            <option value="1">CBSE</option>
            <option value="2">ICSE</option>
            <option value="2">BIHAR BOARD</option>
          </select>
        </div>
        <div className="col-12" style={{ textAlign: "center" }}>
          <button className="btn btn-primary" type="submit">
            Enquire Now
          </button>
        </div>
      </form>

      {/* faq section below the admission enquiry */}

      <h1 style={{
        borderBottom:"3px solid #f89503",
        textAlign:"center",
        padding:"15px 0px",
        margin:"3rem auto 1rem",
        width:"80%"
      }}>
        Freqently Asked Questions
      </h1>

      <div style={{
        marginTop:"2rem"
      }}
       class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Process of Admission
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              List Of Documents
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
