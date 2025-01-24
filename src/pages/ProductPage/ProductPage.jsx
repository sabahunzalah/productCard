import React from "react";
import ProductData from "./ProductData";
import Card from "../../Components/Card/Card";
import styles from "./ProductSec.module.css";
import { Grid, Typography } from "@mui/material";

const ProductPage = () => {
  const mensWare = ProductData.filter((category) => {
    return category.category === "men's clothing";
  });
  const jewellery = ProductData.filter((category) => {
    return category.category === "jewelery";
  });
  const womenWare = ProductData.filter((category) => {
    return category.category === "women's clothing";
  });
  const electronic = ProductData.filter((category) => {
    return category.category === "electronics";
  });
  console.log(womenWare);
  return (
    <>
      <div>
        <h2>Men's Ware</h2>

        <Grid container spacing={3} className={styles.productSec}>
          {mensWare.map((data, id) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                <Card
                  key={id}
                  image={data.image}
                  title={data.title}
                  description={data.description}
                  price={data.price}
                  data={data}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>

      <div>
        <h2>Women's Ware</h2>
        <Grid container spacing={3} className={styles.productSec}>
          {womenWare.map((data, id) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                <Card
                  key={id}
                  image={data.image}
                  title={data.title}
                  description={data.description}
                  price={data.price}
                  data={data}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>

      <div>
        <h2>Jewelery</h2>
        <Grid container spacing={3} className={styles.productSec}>
          {jewellery.map((data, id) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                <Card
                  key={id}
                  image={data.image}
                  title={data.title}
                  description={data.description}
                  price={data.price}
                  data={data}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>

      <div>
        <h2>Electronics</h2>
        <Grid container spacing={3} className={styles.productSec}>
          {electronic.map((data, id) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                <Card
                  key={id}
                  image={data.image}
                  title={data.title}
                  description={data.description}
                  price={data.price}
                  data={data}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default ProductPage;
