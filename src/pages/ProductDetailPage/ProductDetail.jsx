import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styles from "./ProductDetails.module.css";
import Button from '../../Components/Button/Button';

const ProductDetail = () => {
    const location = useLocation();
    const { data } = location.state;
    const navigate = useNavigate()
    const backHome =()=>{
        navigate('/')
        
    }
  
    return (
      <div className={styles.detailsContainer}>
        <img src={data.image} alt={data.title} className={styles.productImage} />
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <p>Price: ${data.price}</p>
        <Button onClick={backHome} name="Back Home Page" />
      </div>
    );
  };


export default ProductDetail
