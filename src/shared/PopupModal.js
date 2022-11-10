import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import emailjs from "@emailjs/browser";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BsTelephone } from "react-icons/bs";

const style = {
  outline: "none",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 350,
  bgcolor: "background.paper",
  border: "1px solid white",
  borderRadius: "10px",
  boxShadow: 24,
  p: 0,
  mt: 1.5,
};

export default function BasicModal({ open, handleClose, setOpen }) {
  // eslint-disable-next-line
  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const form = useRef();
  const [pname, setPname] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("");
  const [addYear, setAddYear] = useState("");

  const onChangePname = (e) => {
    setPname(e.target.value);
  };
  const onChangeFname = (e) => {
    setFname(e.target.value);
  };
  const onChangeLname = (e) => {
    setLname(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeGrade = (e) => {
    setGrade(e.target.value);
  };
  const onChangeAddYear = (e) => {
    setAddYear(e.target.value);
  };

  const submitEnquiry = (e) => {
    e.preventDefault();

    if (
      pname === "" ||
      fname === "" ||
      lname === "" ||
      phone === "" ||
      grade === "" ||
      addYear === ""
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
          setPname("");
          setFname("");
          setLname("");
          setPhone("");
          setAddYear("");
          setGrade("");
        });
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <button
              onClick={() => handleClose()}
              style={{
                position: "absolute",
                right: "10px",
                top: "15px",
                backgroundColor: "white",
              }}
              type="button"
              class="btn-close fs-6"
            ></button>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h2
              style={{
                textAlign: "center",
                margin: "2rem auto",
                color: "#ea7d2a",
                fontWeight: "bold",
              }}
            >
              Admission Enquiry
            </h2>
            <div class="modal-dialog p-2" style={{ marginTop: "35px" }}>
              <div class="modal-content" style={{ border: "none" }}>
                <div class="modal-body">
                  <form ref={form}>
                    <div class="row">
                      <div className="col-md-12 mb-3">
                        {/* this input is basically to provide the subject value in the emaijs mails and it will be always hidden */}
                        <input
                          style={{ display: "none" }}
                          type="text"
                          name="subject"
                          value="ADMISSION ENQUIRY"
                          className="form-control"
                        />
                        {/* ------------------ */}
                        <select
                          class="form-control"
                          id="EClass"
                          name="addYear"
                          value={addYear}
                          onChange={onChangeAddYear}
                        >
                          <option> - Select Academic Session - </option>
                          <option
                            value={JSON.stringify(
                              new Date().getFullYear() +
                                "-" +
                                parseInt(new Date().getFullYear() + 1)
                            )}
                          >
                            {" "}
                            {new Date().getFullYear() +
                              "-" +
                              parseInt(new Date().getFullYear() + 1)}
                          </option>
                          <option
                            value={JSON.stringify(
                              parseInt(new Date().getFullYear() + 1) +
                                "-" +
                                parseInt(new Date().getFullYear() + 2)
                            )}
                          >
                            {" "}
                            {parseInt(new Date().getFullYear() + 1) +
                              "-" +
                              parseInt(new Date().getFullYear() + 2)}
                          </option>
                        </select>
                      </div>
                      <div className="col-md-12 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Parent name"
                          aria-label="Parent name"
                          name="pname"
                          value={pname}
                          onChange={onChangePname}
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="First name"
                          aria-label="First name"
                          name="fname"
                          value={fname}
                          onChange={onChangeFname}
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Last name"
                          aria-label="Last name"
                          name="lname"
                          value={lname}
                          onChange={onChangeLname}
                        />
                      </div>
                      <div class="col-md-12 mt-3">
                        <input
                          type=""
                          class="form-control"
                          placeholder="Phone Number"
                          aria-label="Phone Number"
                          name="phone"
                          value={phone}
                          onChange={onChangePhone}
                        />
                      </div>
                      <div className="col-md-12 mt-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Grade or Class"
                          aria-label="Grade"
                          name="grade"
                          value={grade}
                          onChange={onChangeGrade}
                        ></input>
                      </div>
                      <div class="text-center mt-3">
                        <button
                          style={{ backgroundColor: "#337c87" }}
                          type="submit"
                          id="btnSuscribe"
                          class="btn btn-primary submit-pop"
                          onClick={submitEnquiry}
                        >
                          ENQUIRE NOW
                        </button>
                        <h3
                          style={{ fontWeight: "bolder", margin: "10px auto" }}
                        >
                          Call For Admissions
                        </h3>
                        <h3
                          style={{ fontWeight: "bolder", margin: "10px auto" }}
                        >
                          <BsTelephone
                            style={{
                              marginRight: "10px",
                              strokeWidth: "1px",
                              fontSize: "22px",
                            }}
                          />
                          9031706635
                        </h3>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* </div> */}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
