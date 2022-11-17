import React from "react";
import "./FeeStructure.css";

const FeeStructure = () => {
  return (
    <div style={{ margin: "4rem auto 4rem" }}>
      <h1
        style={{
          textAlign: "center",
          margin: "7rem auto 2rem",
          padding: "1rem",
          width: "80%",
          borderBottom: "#ff7000 3px solid",
        }}
      >
        Fee Structure
      </h1>
      <div className="table-container">
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          ROYAL HILLS INTERNATIONAL SCHOOL <br />
          SITAMARHI
        </p>
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          SESSION: 2022-23
          <hr />
        </p>
        <div className="table-responsive">
          <table style={{ textAlign: "center",fontSize:"13px" }} class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Fee Break-up</th>
                <th scope="col">Payment Frequency</th>
                <th scope="col">Payable</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Registration and Processing Fee</td>
                <td>One Time</td>
                <td>Through Online Payment</td>
                <td>INR 600</td>
              </tr>
              <tr>
                <td>Institutional/Admission Fee</td>
                <td>One Time</td>
                <td>At the time of admission</td>
                <td>INR 7,000</td>
              </tr>
              <tr>
                <td>Education Fee</td>
                <td>Monthly</td>
                <td>Through Online Payment/CASH</td>
                <td>
                  INR 1,250
                  <br /> (Class I-V) <br />
                  INR 1,300 <br />
                  (Class VI onwards)
                </td>
              </tr>
              <tr>
                <td>
                  Transport User Fee <br />
                  (School Transport)
                </td>
                <td>Monthly</td>
                <td>Through Online Payment/CASH</td>
                <td>
                  INR 625 <br />
                  (Up to 3 Km Radius) <br />
                  (Extra depending upon the distance.)
                </td>
              </tr>
              <tr>
                <td>
                  Miscellaneous Charges <br />
                  (Includes Exam Fee & <br />
                  Development Charges)
                </td>
                <td>One Time</td>
                <td>At the time of admission</td>
                <td>
                  INR 2,500 <br />
                  (2000 + 500)
                </td>
              </tr>
              <tr>
                <td>
                  Books, Notebooks, Uniform
                  <br /> (Summer & Winter)
                </td>
                <td>One Time</td>
                <td>
                  To be paid at the time of <br />
                  distribution.
                </td>
                <td>MRP</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/* second table for rhis junior  */}
        <p
          style={{ fontWeight: "bold", textAlign: "center", marginTop: "4rem" }}
        >
          ROYAL HILLS INTERNATIONAL SCHOOL JUNIOR
          <br />
          SITAMARHI
        </p>
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          SESSION: 2022-23
          <hr />
        </p>
        <div className="table-responsive">
          <table
            style={{ textAlign: "center", fontSize: "13px" }}
            class="table table-striped"
          >
            <thead>
              <tr>
                <th scope="col">Fee Break-up</th>
                <th scope="col">Payment Frequency</th>
                <th scope="col">Payable</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Registration and Processing Fee</td>
                <td>One Time</td>
                <td>Through Online Payment</td>
                <td>INR 600</td>
              </tr>
              <tr>
                <td>Institutional/Admission Fee</td>
                <td>One Time</td>
                <td>At the time of admission</td>
                <td>INR 7,000</td>
              </tr>
              <tr>
                <td>Education Fee</td>
                <td>Monthly</td>
                <td>Through Online Payment/CASH</td>
                <td>
                  INR 1,050 (Play Group) <br />
                  INR 1,100 (Nursery)
                  <br /> INR 1,150 (Junior KG) <br />
                  INR 1,200 (Senior KG)
                </td>
              </tr>
              <tr>
                <td>
                  Transport User Fee <br />
                  (School Transport)
                </td>
                <td>Monthly</td>
                <td>Through Online Payment/CASH</td>
                <td>
                  INR 625 <br />
                  (Up to 3 Km Radius) <br />
                  (Extra depending upon the distance.)
                </td>
              </tr>
              <tr>
                <td>
                  Miscellaneous Charges <br />
                  (Includes Exam Fee & <br />
                  Development Charges)
                </td>
                <td>One Time</td>
                <td>At the time of admission</td>
                <td>
                  INR 2,000 <br />
                  (1500 + 500)
                </td>
              </tr>
              <tr>
                <td>
                  Books, Notebooks, Uniform
                  <br /> (Summer & Winter)
                </td>
                <td>One Time</td>
                <td>
                  To be paid at the time of <br />
                  distribution.
                </td>
                <td>MRP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;
