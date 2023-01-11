import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Navbar.module.css";
import { logout } from "../../redux/auth/action";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const auth = useSelector((store) => store);
  const navigate=useNavigate()
  const dispatch = useDispatch();


  // loggout
  const handleLogout = () => {
    dispatch(logout("Logged Out successfully"));
    navigate("/login")
  };



  return (
    <div className={styles.nav}>
      <div>
        <Link to="/" className="links">
          <h2>Doggo</h2>
        </Link>
        {auth.user ? (
          <div>
            <span>{auth.user.email}</span>
            <button onClick={handleLogout} className={styles.btn}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link to="/register">
              <button className={styles.btn}>Register</button>
            </Link>
            <Link to="login">
              <button className={styles.btn}>Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
