import React from "react";
import ProductData from "./ProductData";
import Card from "../../Components/Card/Card";
import styles from "./ProductSec.module.css";

const ProductPage = () => {
  const mensWare = ProductData.filter((category) => {
    return category.category === "men's clothing";
  });
  const jewellery = ProductData.filter((category) => {
    return category.category === "jewelery";
  });
  const womenWare = ProductData.filter((category)=>{
    return category.category === "women's clothing"
  })
  const electronic =ProductData.filter((category)=>{
    return category.category === "electronics"
  })
console.log(womenWare)
  return (
    <>
      <div>
        <h2>Men's Ware</h2>
        <div className={styles.productSec}>
          {mensWare.map((data, id) => {
            return (
              <Card
                key={id}
                image={data.image}
                title={data.title}
                description={data.description}
                price={data.price}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h2>Women's Ware</h2>
        <div className={styles.productSec}>
          {womenWare.map((data, id) => {
            return (
              <Card
                key={id}
                image={data.image}
                title={data.title}
                description={data.description}
                price={data.price}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h2>Jewelery</h2>
        <div className={styles.productSec}>
          {jewellery.map((data, id) => {
            return (
              <Card
                key={id}
                image={data.image}
                title={data.title}
                description={data.description}
                price={data.price}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h2>Electronics</h2>
        <div className={styles.productSec}>
          {electronic.map((data, id) => {
            return (
              <Card
                key={id}
                image={data.image}
                title={data.title}
                description={data.description}
                price={data.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
