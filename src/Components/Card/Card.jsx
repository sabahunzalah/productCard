import React from "react";
import styles from "./Card.module.css";

const Card = ({ id, image, title, description, price }) => {
  return (
    <div className={styles.card} key={id}>
      <img src={image} alt="product" className={styles.cardImage} />

      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDisc}>{description}</p>
      <p className={styles.cardPrice}> {price}</p>
    </div>
  );
};

export default Card;
