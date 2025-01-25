import React from "react";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const Card = ({ id, image, title, description, price }) => {
  const navigate = useNavigate(); 
  const handleViewDetails =()=>{
      navigate(`/productDetail/${id}`)
  }

  return (
    <div className={styles.card} key={id}>
      <img src={image} alt="product" className={styles.cardImage} />

      <h3 className={styles.cardTitle}>{title.slice(0,25)}</h3>
      <p className={styles.cardDisc}>{description.slice(0,90)}</p>
      <p className={styles.cardPrice}> {price}</p>

      <Button name="View Details" onClick={handleViewDetails}/>
    </div>
  );
};

export default Card;
