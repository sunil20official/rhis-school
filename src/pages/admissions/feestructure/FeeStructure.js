import React from 'react';
import './FeeStructure.css';

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
        Fee Details
      </h1>
      <div className="table-container">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ITEMS</th>
              <th scope="col">
                AMOUNT ( IN <strong>INR</strong> )
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>ADMISSION FEE</td>
              <td>7000.00</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>REGISTRATION FEE</td>
              <td>600.00</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>MISC FEE</td>
              <td>2000.00</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>EXAMINATION FEE(YEARLY)</td>
              <td>500.00</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>BOOK</td>
              <td>ACCORDING TO CLASS</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>COPY 12</td>
              <td>ACCORDING TO CLASS</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>DRESS</td>
              <td>ACCORDING TO SIZE</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>SCHOOL FEE(AUGUST)</td>
              <td>ACCORDING TO CLASS</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>TRANSPORT FEE</td>
              <td>ACCORDING TO DIST.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeeStructure;
