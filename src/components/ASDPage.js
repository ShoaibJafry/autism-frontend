import React, { useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../styles/asd.css";
import {
  handleFacialAuthismRequest,
  handleNeruoAuthismRequest,
} from "../request/request";

const ASDPage = ({ handlebothAuthism }) => {
  const [authism, setAuthism] = useState({
    neuroImage: {},
    facialImage: {},
    isFacial: false,
    isNeuro: false,
  });

  const handleUploadImage = async () => {
    if (!authism.isFacial && !authism.isNeuro) {
      alert("Please select at least one image.");
      return;
    }

    let result = { facial: {}, neuro: {} };

    if (authism.isNeuro) {
      result.neuro = await handleNeruoAuthismRequest(authism.neuroImage);
      result.neuro = { ...result, image: authism.neuroImage };
    }
    if (authism.isFacial) {
      result.facial = await handleFacialAuthismRequest(authism.facialImage);
      result.facial = { ...result, image: authism.facialImage };
    }

    console.log(result);
    handlebothAuthism(result.facial, result.neuro);
  };

  const handleFileChange = (evt, type) => {
    const imgFile = evt.target.files[0];
    if (imgFile && (imgFile.type === "image/jpeg" || imgFile.type === "image/jpg")) {
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
