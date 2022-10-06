import * as React from "react";
import Box from "@mui/material/Box";

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

  const [addYear, setAddYear] = React.useState("");

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
                  <div class="row">
                    <div className="col-md-12 mb-3">
                      <select
                        class="form-control"
                        id="EClass"
                        value={addYear}
                        onChange={(e) => {
                          setAddYear(e.target.value);
                          console.log(
                            "new date ************---------",
                            addYear
                          );
                        }}
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
                      />
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First name"
                        aria-label="First name"
                      />
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last name"
                        aria-label="Last name"
                      />
                    </div>
                    <div class="col-md-12 mt-3">
                      <input
                        type=""
                        class="form-control"
                        placeholder="Phone Number"
                        aria-label="Phone Number"
                      />
                    </div>
                    <div className="col-md-12 mt-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Grade or Class"
                        aria-label="Grade"
                      >
                      </input>
                    </div>
                    <div class="text-center mt-3">
                      <button
                        style={{ backgroundColor: "#337c87" }}
                        type="submit"
                        id="btnSuscribe"
                        class="btn btn-primary submit-pop"
                      >
                        ENQUIRE NOW
                      </button>
                      <h3 style={{ fontWeight: "bolder", margin: "10px auto" }}>
                        Call For Admissions
                      </h3>
                      <h3 style={{ fontWeight: "bolder", margin: "10px auto" }}>
                        <BsTelephone
                          style={{
                            marginRight: "10px",
                            strokeWidth: "1px",
                            fontSize: "22px",
                          }}
                        />
                        088-9878965
                      </h3>
                    </div>
                  </div>
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
