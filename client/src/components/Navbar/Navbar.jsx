import React from 'react';
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import styles from "./Navbar.module.css";

const Navbar = () => {
  const auth=useSelector(store=>store)
  
  const handleLogout=()=>{

  }
  return (
    <div className={styles.nav}>
    <div>
      <Link to="/" className='links'>
      <h2>Doggo</h2>
      </Link>
      {auth.user? <button onClick={handleLogout} className={styles.btn}>Logout</button> :
      <div>
        <Link to="/register">
        <button className={styles.btn}>Register</button>
        </Link>
        <Link to="login">
        <button className={styles.btn}>Login</button>
        </Link>
      </div>
      }
     
    </div>
  </div>
  )
}

export default Navbar