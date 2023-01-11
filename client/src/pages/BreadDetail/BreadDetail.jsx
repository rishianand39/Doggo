import axios from 'axios';
import styles from "./BreadDetail.module.css"
import React, { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from "react-router-dom"

const BreadDetail = () => {
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
    getBreadDetails()
  },[])

  return (
    <>
    {bread? 
   ( <div className={styles.container}>
       <img src={bread[1]} alt="bread picture" /> 
    </div>): <h1 className={styles.loading}>Loading....</h1>}
     </>
  )
}

export default BreadDetail