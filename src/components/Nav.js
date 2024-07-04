import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../styles/test.css";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const handleLogOut = () => {
    localStorage.setItem("token", "");
    setIsLogin(false);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AboutASD">About ASD</Link>
        </li>
        <li>
          <Link to="/ASD">Test</Link>
        </li>
        <li>
          <Link to="/AboutUS">About US</Link>
        </li>
        <li>
          <Link to="/FAQ">FAQ</Link>
        </li>
        <li>
          <Link to="/Result">Results</Link>
        </li>
        <li>
          {isLogin ? (
            <Button onClick={handleLogOut} variant="contained" type="button">
              Log-out
            </Button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
        <li>{!isLogin ? <Link to="/sign-up">SignUp</Link> : null}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
