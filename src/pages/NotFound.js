import React from 'react';

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1
          style={{
            margin: "3rem auto",
            textAlign: "center",
            color: "#082a59",
            fontWeight: "900",
            letterSpacing:"2px"
          }}
        >
          Not Found
        </h1>
        <h5> The Page you are looking for , Does not exist </h5>
      </div>
    </div>
  );
}

export default NotFound;