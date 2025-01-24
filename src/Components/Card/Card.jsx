import React from "react";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const Card = ({ id, image, title, description, price,data }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate("/productDetail", {
      state: { data },
    });
  };

  return (
    <div className={styles.card} key={id}>
      <img src={image} alt="product" className={styles.cardImage} />

      <h3 className={styles.cardTitle}>{title}</h3>
      {/* <p className={styles.cardDisc}>{description}</p> */}
      <p className={styles.cardPrice}> {price}</p>
      {/* <button onClick={handleViewDetails} className={styles.viewDetailsBtn}>
        View Details
      </button> */}
      <Button name="View Details" onClick={handleViewDetails}/>
    </div>
  );
};

export default Card;
