import styles from "./Register.module.css"
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import { useState } from "react";

const Register = () => {
  const auth=useSelector(store=>store);
  const [data,setData]=useState({
    email: "",
    password: "",
  })
  
  // taking input and storing
  const handleInput=(e)=>{
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }


  // handling form submit
  const createAccount=()=>{

  }
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}> 
          <h1>CREATE AN ACCOUNT</h1>
          <form>
            <input
              onChange={handleInput}
              name="email"
              placeholder="email"
              type="email"
            />
            <input
              onChange={handleInput}
              name="password"
              placeholder="password"
              type="password"
            />
            <span className={styles.agreement}>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </span>
            <button disabled={auth.isLoading} onClick={createAccount}>
              CREATE
            </button>

            <div className={styles.createaccount}>
             <Link to="/login">ALREADY HAVE A ACCOUNT?</Link>
            </div>
            {auth.isFailure && <span>{auth.message}</span>}
          </form>
        </div>
    </div>
  )
}

export default Register