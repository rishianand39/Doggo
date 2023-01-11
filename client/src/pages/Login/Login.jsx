import axios from "axios";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {Link,useNavigate} from "react-router-dom"
import { failure, loading, success } from "../../redux/auth/action";
import styles from "./Login.module.css"

const Login = () => {
  const auth=useSelector(store=>store);
  const dispatch=useDispatch()
  const navigate=useNavigate()
    const [data,setData]=useState({
    email:"",
    password:""
  })
    // HANDLE INPUTS
  const handleInputs=(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }


  // SUBMIT LOGIN FORM
const handleSubmit=async(e)=>{
  e.preventDefault()
  if(data.email.trim()!=="" && data.password.trim()!==""){
    
    const create=async()=>{
      dispatch(loading("Please wait we are logging"))
      try {
        let user=await axios.post("http://localhost:8080/signin",data)
        dispatch(success(user.data))
        navigate("/")
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
      <h1>LOGIN</h1>
      <form>
        <input onChange={handleInputs} type="text" placeholder="email" name="email"/>
        <input onChange={handleInputs} type="password" placeholder="password" name="password" />
        <button onClick={handleSubmit} disabled={auth.isLoading}>LOGIN</button>
        {auth.isFailure && <span className={styles.error}>{auth.message}</span>}
        <div>
        <Link to="/register" className="links">CREATE A NEW ACCOUNT</Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login