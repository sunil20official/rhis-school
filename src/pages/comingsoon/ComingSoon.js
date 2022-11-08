import { fontWeight } from "@mui/system";
import React from "react";
import logo from '../../media/logo-rhis-cropped.jpeg';

const ComingSoon = () => {
  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{textAlign:"center"}}>
        <img style={{width:"15rem",margin:"2rem"}} src={logo} alt="rhis" />
        <h1
          style={{
            fontSize: "3rem",
            textAlign: "center",
            fontWeight: "900",
            color: "#082a59",
            margin: "2rem",
            letterSpacing:"1px"
          }}
        >
          COMING SOON
        </h1>
      </div>
    </div>
  );
};

export default ComingSoon;
