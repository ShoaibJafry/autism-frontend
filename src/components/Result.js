import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const Result = ({ autismResult }) => {
  const [isLogIn, setIslogIn] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIslogIn(false);
    }
  }, []);

  console.log(autismResult);

  const resultContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "2rem auto",
    padding: "2%",
    background: "grey",
    borderRadius: "10px",
    width: "80%",
    maxWidth: "500px",
    color: "black", // Set text color to black
  };

  const imageStyle = {
    display: "block",
    margin: "0 auto 0.5rem auto",
    borderRadius: "8px",
  };

  const textStyle = {
    margin: "1rem 0",
    padding: "0.5rem",
    color: "black",
  };

  return (
    <div>
      {!isLogIn && <Navigate to="/" replace />}
      <div style={{ padding: "1rem" }}>
        {autismResult?.facialResult ? (
          <div style={resultContainerStyle}>
            <h1>Facial Result:</h1>
            <img
              width={200}
              height={200}
              src={autismResult.facialResult.image}
              alt="facial-img"
              style={imageStyle}
            />
            <h2 style={textStyle}>{autismResult.facialResult.message}</h2>
          </div>
        ) : (
          <h1 style={textStyle}>No Facial image detected</h1>
        )}
        {autismResult?.neuroResult ? (
          <div style={resultContainerStyle}>
            <h1>Neuro Result:</h1>
            <img
              width={200}
              height={200}
              src={autismResult.neuroResult.image}
              alt="neuro-img"
              style={imageStyle}
            />
            <h2 style={textStyle}>{autismResult.neuroResult.message}</h2>
          </div>
        ) : (
          <h1 style={textStyle}>No Neuro image detected</h1>
        )}
      </div>
    </div>
  );
};

export default Result;
