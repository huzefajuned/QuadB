import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../ListItem/ListItem.module.css";

const ListItem = ({ image, name, rating, id }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.container}
      onClick={() => navigate(`/singleshow/${id}`)}
    >
      <div className={styles.inner}>
        <img src={image} alt={name} />
        <h4 className={styles.name}>{name}</h4>
        <h4 className={styles.rating}>{rating}</h4>
      </div>
    </div>
  );
};

export default ListItem;
