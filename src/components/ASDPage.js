import React, { useState, useEffect} from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../styles/asd.css";
import {
  handleFacialAuthismRequest,
  handleNeruoAuthismRequest,
} from "../request/request";
import { Navigate } from "react-router-dom";


function convertImageToDataURL(imageFile) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = function(event) {
      resolve(event.target.result); // DataURL string
    };
    reader.onerror = function(error) {
      reject(error); // Handle errors during reading
    };
  });
}


const ASDPage = ({ handlebothAuthism }) => {
  const [isLogIn, setIslogIn] = useState(true);
  const [authism, setAuthism] = useState({
    neuroImage: {},
    facialImage: {},
    isFacial: false,
    isNeuro: false,
  });
  
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(!token){
        setIslogIn(false);
    }
  },[])

  const handleUploadImage = async () => {
    if (!authism.isFacial && !authism.isNeuro) {
      alert("Please select at least one image.");
      return;
    }

    let result = { facial: {}, neuro: {} };

    if (authism.isNeuro) {
      result.neuro = await handleNeruoAuthismRequest(authism.neuroImage);
      const dataURL = await convertImageToDataURL(authism.neuroImage);
      result.neuro = {
        image: dataURL,
        message: result.neuro.message,
      };
    }
    if (authism.isFacial) {
      result.facial = await handleFacialAuthismRequest(authism.facialImage);
      const dataURL = await convertImageToDataURL(authism.facialImage);
      result.facial = { image: dataURL, message: result.facial.message };
    }
    //console.log(result);
    handlebothAuthism(result.facial, result.neuro);
  };

  const handleFileChange = (evt, type) => {
    const imgFile = evt.target.files[0];
    if (
      imgFile &&
      (imgFile.type === "image/jpeg" || imgFile.type === "image/jpg")
    ) {
      setAuthism((state) => ({
        ...state,
        [`${type}Image`]: imgFile,
        [`is${type.charAt(0).toUpperCase() + type.slice(1)}`]: true,
      }));
    } else {
      alert("Please upload a JPG or JPEG image.");
    }
  };

  const isAtLeastOneImageSelected = authism.isFacial || authism.isNeuro;

  return (
    <div>
          {!isLogIn && <Navigate to="/" replace />}
      <main>
        <section id="about">
          <div className="section-container">
            <h2>About Autism Spectrum Disorder (ASD)</h2>
            <p>
              ASD is a developmental disorder that affects communication and
              behavior. It is characterized by difficulties in social
              interaction, repetitive behaviors, and sometimes, intellectual
              disability.
            </p>
          </div>
        </section>
        <section id="upload">
          <div className="section-container">
            <h2>Upload Images</h2>
            <form encType="multipart/form-data">
              <input
                onChange={(evt) => handleFileChange(evt, "neuro")}
                type="file"
                name="neuroImage"
                accept=".jpg,.jpeg"
                required
              />
              <label htmlFor="neuroImage">Neuro-image</label>
              <br />
              <input
                onChange={(evt) => handleFileChange(evt, "facial")}
                type="file"
                name="facialImage"
                accept=".jpg,.jpeg"
                required
              />
              <label htmlFor="facialImage">Facial-image</label>
              <br />
              {isAtLeastOneImageSelected ? (
                <Link to="/result">
                  <button onClick={handleUploadImage} type="button">
                    Upload
                  </button>
                </Link>
              ) : (
                <button onClick={() => alert("Please select at least one image.")} type="button">
                  Upload
                </button>
              )}
            </form>
          </div>
        </section>
        <section id="report">
          <div className="section-container">
            <h2>View Report</h2>
            <p>
              Once the images are uploaded and analyzed, a report will be
              generated and displayed here.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ASDPage;
