import { v4 as uuid } from "uuid";
import { Link,useNavigate } from "react-router-dom";
import styles from "./BreadLists.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const BreadLists = () => {
  const auth=useSelector(store=>store)
  const navigate=useNavigate()
  const [breadList, setBreadList] = useState(null);

  // fetch all dog breads
  const getBreadsList = async () => {
    try {
      let breads = await axios.get("https://dog.ceo/api/breeds/list/all");
      let breadArray = [];
      for (let key in breads.data.message) {
        breadArray.push(key);
      }
      setBreadList(breadArray);
    } catch (error) {}
  };

  useEffect(() => {
    if(auth.user){
      getBreadsList();
    }else{
      navigate("/login")
    }
    
  }, []);

  return (
    <>
      {" "}
      {breadList ? (
        <div className={styles.container}>
          {breadList.map((bread) => {
            return (
              <Link
                key={uuid()}
                to={`/bread-detail/${bread}`}
                className="links"
              >
                <div className={styles.card}>
                  <h1>{bread}</h1>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h1 className={styles.loading}>Loading....</h1>
      )}
    </>
  );
};

export default BreadLists;
