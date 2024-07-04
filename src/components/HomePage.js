import { useEffect, useState } from "react";
import angryImage from "../assets/angry.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "../App.css";

const HomePage = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  return (
    <div>
      <div className="container">
        <div className="text-section">
          <h1>Autism Facial & Neuro Image Prediction</h1>
          <p>
            ASD (autism spectrum disorder) is a developmental impairment caused
            by brain differences. Social communication and interaction are
            common challenges for people with ASD, as are confined or repetitive
            actions or interests. People with ASD may also learn, move, and pay
            attention in various ways. Any patient with ASD who receives early
            discovery and diagnosis has a better chance of overcoming their
            illness. Many studies have discovered that children with autism have
            a broad upper face and wide-set eyes. They also have a shorter
            middle face, which includes the cheeks and nose. We provide a
            webtool that aids in the identification of autism using face images.
          </p>
          <p>
            To know more about our method{" "}
            <button
              onClick={() => alert("More information coming soon!")}
              className="link-button"
            >
              Click here
            </button>
          </p>
          <Link to={isLogin ? "/asd" : "/login"}>
            <button>Begin Test</button>
          </Link>
        </div>
        <div className="image-section">
          <img src={angryImage} alt="Child expressing emotion" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
