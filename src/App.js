import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ASDPage from "./components/ASDPage";
import AboutASD from "./components/AboutASD";
import FAQ from "./components/FAQ";
import AboutUS from "./components/AboutUS";
import Result from "./components/Result";
import Login from "./components/login";
import SignUp from "./components/sign-up";
import Navbar from "./components/Nav";
import "./App.css";

const App = () => {
  const [result, setResult] = useState({
    facialResult: {},
    neuroResult: {},
  });

  const handlebothAuthism = (facialResult, neuroResult) => {
    setResult({ facialResult, neuroResult });
    <Navigate to="/Result" replace />
  };

  return (
    <Router>
      <div>
        <Header />
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/asd"
            element={<ASDPage handlebothAuthism={handlebothAuthism} />}
          />
          <Route path="/Result" element={<Result autismResult={result} />} />
          <Route path="/AboutASD" element={<AboutASD />} />
          <Route path="/AboutUS" element={<AboutUS />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
