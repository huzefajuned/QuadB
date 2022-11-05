import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import styles from "../Bookshow/Bookshow.module.css";

const Bookshow = () => {
  const location = useLocation();
  console.log(location);

  const [loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(true);
  }, 1900);

  return (
    <>
      {loading ? (
        <>
          <div className={styles.container}>
            <div className={styles.book_Card}>
              <h1> Book Your Show Now!! </h1>
              <h2>
                Movie Name :
                <span>
                  <strong>{location.state}</strong>
                </span>
              </h2>
              <div className={styles.card_Inner}>
                <input type="text" placeholder=" Your Name:" name="" id="" />
                <input type="text" placeholder="Your Email:" name="" id="" />
                <input type="text" placeholder=" Your Age:" name="" id="" />
                <input
                  type="text"
                  placeholder="  Contact Number:"
                  name=""
                  id=""
                />
                <input type="date" name="" id="" />
              </div>
              <button>Submit Form</button>
            </div>
          </div>{" "}
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </>
  );
};

export default Bookshow;
