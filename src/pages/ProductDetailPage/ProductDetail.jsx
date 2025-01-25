import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import Button from "../../Components/Button/Button";
import ProductData from "../ProductPage/ProductData";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
  const FilteringData = ProductData.filter((e, i) => {
    return id == e.id;
  });
  console.log(FilteringData);

  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  };

  return (
    <>
      {FilteringData &&
        FilteringData.map((e, i) => {
          return (
            <div className={styles.detailsContainer}>
              <img
                src={e.image}
                alt={e.title}
                className={styles.productImage}
              />
              <h2>{e.title}</h2>
              <p>{e.description}</p>
              <p>Price: ${e.price}</p>
              <Button onClick={backHome} name="Back Home Page" />
            </div>
          );
        })}
    </>
  );
};

export default ProductDetail;
