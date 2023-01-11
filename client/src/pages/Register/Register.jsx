import styles from "./Register.module.css"
import axios from "axios"
import {useSelector,useDispatch} from "react-redux";
import {failure, loading, register} from "../../redux/auth/action"
import { Link,useNavigate } from 'react-router-dom';
import { useState } from "react";

const Register = () => {
  const auth=useSelector(store=>store);
  const dispatch =useDispatch()
  const navigate=useNavigate()
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
  const createAccount=(e)=>{
    e.preventDefault()
    if(data.email.trim()!=="" && data.password.trim()!==""){
      
      const create=async()=>{
        dispatch(loading("Please wait we are creating your account"))
        try {
          let user=await axios.post("http://localhost:8080/signup",data)
          dispatch(register())
          navigate("/login")
        } catch (error) {
          dispatch(failure(error.response.data))
        }
      }
      create()
    }else{
     dispatch(failure("Please fill all inputs"))
    }
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

            {auth.isFailure && <span className={styles.error}>{auth.message}</span>}
            <div className={styles.createaccount}>
             <Link to="/login">ALREADY HAVE A ACCOUNT?</Link>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Register