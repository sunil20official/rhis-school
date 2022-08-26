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
    <div style={{ margin: "5rem 0rem" }}>
      <h1 style={{marginBottom:"2rem", textAlign:"center"}}>Get In Touch</h1>
      <form class="row g-3">
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
            First name
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            name="first_name"
            value={data.first_name}
            onChange={onChange}
            required
          />
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">
            Last name
          </label>
          <input
            type="text"
            class="form-control"
            name="last_name"
            id="validationDefault02"
            value={data.last_name}
            onChange={onChange}
            required
          />
        </div>
        <div class="col-md-4">
          <label for="validationDefaultUsername" class="form-label">
            Email
          </label>
          <div class="input-group">
            <span class="input-group-text" id="inputGroupPrepend2">
              @
            </span>
            <input
              type="text"
              class="form-control"
              name="email"
              id="validationDefaultUsername"
              aria-describedby="inputGroupPrepend2"
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div class="input-group">
          <span class="input-group-text"> Message </span>
          <textarea
            class="form-control"
            name="message"
            aria-label="With textarea"
            onChange={onChange}
            style={{ height: "10rem" }}
          ></textarea>
        </div>
        <div class="col-12" style={{textAlign:"center"}}>
          <button class="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
