import axios from 'axios';
import styles from "./BreadDetail.module.css"
import {useSelector} from "react-redux"
import React, { useEffect } from 'react';
import { useState } from 'react';
import {useParams,useNavigate} from "react-router-dom"

const BreadDetail = () => {
  const auth=useSelector(store=>store)
  const navigate=useNavigate()
  const [bread,setBread]=useState()
  const {id} =useParams()

  // get bread images
  const getBreadDetails=async()=>{
    try {
      let bread=await axios.get(`https://dog.ceo/api/breed/${id}/images`);
      setBread(bread.data.message)
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    if(auth.user){
      getBreadDetails()
    }else{
      navigate("/login")
    }
  },[])

  return (
    <>
    {bread? 
   ( <div className={styles.container}>
       <img src={bread[1]} alt="bread" /> 
    </div>): <h1 className={styles.loading}>Loading....</h1>}
     </>
  )
}

export default BreadDetail